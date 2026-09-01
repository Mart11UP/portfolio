import {
  copyFileSync,
  cpSync,
  existsSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  statSync,
  writeFileSync,
} from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { brotliDecompressSync, gunzipSync } from "node:zlib";

const unityExportArgument = process.argv[2];

if (!unityExportArgument) {
  console.error(
    'Usage: npm run update:magic-demo -- "C:\\path\\to\\UnityWebGLExport"',
  );
  process.exit(1);
}

const unityExportPath = resolve(unityExportArgument);
const sourceBuildPath = join(unityExportPath, "Build");

if (!existsSync(sourceBuildPath)) {
  console.error(
    `The selected folder does not contain a Unity Build directory: ${unityExportPath}`,
  );
  process.exit(1);
}

const scriptDirectory = dirname(fileURLToPath(import.meta.url));
const demoRootPath = resolve(
  scriptDirectory,
  "../public/demos/procedural-environment",
);
const targetBuildPath = join(demoRootPath, "Build");
mkdirSync(targetBuildPath, { recursive: true });

const sourceBuildFiles = readdirSync(sourceBuildPath).map((name) =>
  join(sourceBuildPath, name),
);

function findNewestFile(predicate, description) {
  const matchingFiles = sourceBuildFiles
    .filter(predicate)
    .sort((first, second) => statSync(second).mtimeMs - statSync(first).mtimeMs);

  if (matchingFiles.length === 0) {
    throw new Error(`Could not find ${description} in ${sourceBuildPath}`);
  }

  return matchingFiles[0];
}

function findBuildArtifact(suffix) {
  const normalizedSuffix = suffix.toLowerCase();
  return findNewestFile((filePath) => {
    const normalizedPath = filePath.toLowerCase();
    return [normalizedSuffix, `${normalizedSuffix}.br`, `${normalizedSuffix}.gz`].some(
      (ending) => normalizedPath.endsWith(ending),
    );
  }, `a Unity file ending in ${suffix}, ${suffix}.br, or ${suffix}.gz`);
}

function writeDeployableArtifact(sourcePath, targetFileName) {
  const sourceData = readFileSync(sourcePath);
  const normalizedPath = sourcePath.toLowerCase();
  let deployableData = sourceData;

  if (normalizedPath.endsWith(".br")) {
    deployableData = brotliDecompressSync(sourceData);
  } else if (normalizedPath.endsWith(".gz")) {
    deployableData = gunzipSync(sourceData);
  }

  writeFileSync(join(targetBuildPath, targetFileName), deployableData);
}

const loaderPath = findNewestFile(
  (filePath) => filePath.toLowerCase().endsWith(".loader.js"),
  "a Unity .loader.js file",
);

copyFileSync(loaderPath, join(targetBuildPath, "demo.loader.js"));
writeDeployableArtifact(findBuildArtifact(".data"), "demo.data");
writeDeployableArtifact(
  findBuildArtifact(".framework.js"),
  "demo.framework.js",
);
writeDeployableArtifact(findBuildArtifact(".wasm"), "demo.wasm");

const sourceStreamingAssetsPath = join(unityExportPath, "StreamingAssets");
if (existsSync(sourceStreamingAssetsPath)) {
  cpSync(
    sourceStreamingAssetsPath,
    join(demoRootPath, "StreamingAssets"),
    { recursive: true, force: true },
  );
}

console.log("Updated the Magic Environment Creator Unity build.");
console.log("Preserved the styled demo page and TemplateData CSS.");
