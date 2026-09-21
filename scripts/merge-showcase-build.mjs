import { cp, mkdir } from "node:fs/promises";
import { resolve } from "node:path";

const showcaseBuild = resolve("dist-showcase");
const showcaseDestination = resolve("dist", "showcase");

await mkdir(showcaseDestination, { recursive: true });
await cp(showcaseBuild, showcaseDestination, { recursive: true, force: true });

console.log("Showcase build merged into dist/showcase.");
