import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { PiMoonDuotone, PiSunDuotone } from "react-icons/pi";
import ThemeProvider from "../components/ThemeProvider";
import { ProjectDetailsContent } from "../components/ProjectDetailsContent";
import { ProjectStatusBadge } from "../components/ProjectStatusBadge";
import { Footer } from "../components/shared/Footer";
import { ScrollProgressBar } from "../components/shared/ScrollProgressBar";
import { ScrollToTop } from "../components/shared/ScrollToTop";
import { PORTFOLIO_INFO, tagColors } from "../config/portfolioData";
import { useTheme } from "../context/ThemeContext";

const project = PORTFOLIO_INFO.projects?.find(
  (candidate) => candidate.id === "unleash",
);

if (!project) throw new Error("The Unleash Darkness project is required.");

const projectDetails = project.details;

if (!projectDetails)
  throw new Error("The Unleash Darkness project details are required.");

const resolveMediaPath = (src: string) => {
  if (/^(https?:|data:|blob:)/i.test(src)) return src;
  return `${import.meta.env.BASE_URL}${src.replace(/^\/+/, "")}`;
};

const UnleashDarknessContent = () => {
  const { dark, toggle } = useTheme();
  const portfolioHref = `${import.meta.env.BASE_URL}#/`;
  const headerImageFit = projectDetails.headerImageFit ?? "cover";
  const headerImagePosition = projectDetails.headerImagePosition ?? "center";
  const headerImageBlur = Math.max(0, projectDetails.headerImageBlur ?? 0);

  useEffect(() => {
    const previousTitle = document.title;
    const description = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]',
    );
    const previousDescription = description?.content;

    document.title = `${project.title} | Mart11UP`;
    if (description && project.description)
      description.content = project.description;

    return () => {
      document.title = previousTitle;
      if (description && previousDescription !== undefined)
        description.content = previousDescription;
    };
  }, []);

  return (
    <>
      <ScrollProgressBar />
      <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[color:var(--bg)]/85 backdrop-blur-xl">
        <div className="mx-auto flex min-h-17 w-full max-w-6xl items-center justify-between gap-5 px-6 sm:min-h-17 2xl:max-w-7xl">
          <a
            href={portfolioHref}
            className="inline-flex items-baseline text-base font-bold leading-none tracking-tight text-[var(--text)]"
            style={{ fontFamily: '"Google Sans", sans-serif' }}
            aria-label="Mart11UP portfolio"
          >
            Mart
            <span className="text-[var(--brand)]">
              11<span className="text-sm">UP</span>
            </span>
          </a>

          <div className="flex items-center gap-2">
            <a
              href={portfolioHref}
              className="inline-flex min-h-9.5 items-center gap-2 rounded-lg border border-[var(--brand-border)] bg-[var(--brand-soft)] px-3 text-sm font-medium text-[var(--text)] transition hover:-translate-y-px focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand)]"
            >
              <ArrowLeft aria-hidden="true" className="h-4 w-4" />
              <span className="hidden sm:inline">Back to portfolio</span>
              <span className="sm:hidden">Portfolio</span>
            </a>
            <button
              type="button"
              onClick={toggle}
              aria-label="Toggle color theme"
              className="inline-flex h-9.5 w-9.5 cursor-pointer items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--surface)] transition hover:bg-[var(--brand-soft)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand)]"
            >
              {dark ? <PiSunDuotone size={21} /> : <PiMoonDuotone size={21} />}
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-[1080px] px-4 pb-18 pt-9 sm:px-6 sm:pt-13">
        <motion.article
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <header className="mx-auto mb-7 max-w-[960px]">
            <p
              className="mb-2.5 text-xs font-bold uppercase tracking-[0.12em] text-[var(--brand)]"
              style={{ fontFamily: '"Google Sans", sans-serif' }}
            >
              Project Case Study
            </p>
            <div className="flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-end">
              <h1
                className="text-4xl font-bold leading-[1.08] tracking-[-0.035em] text-[var(--hero-name)] sm:text-5xl"
                style={{ fontFamily: '"Google Sans", sans-serif' }}
              >
                {project.title}
              </h1>
              {project.status && <ProjectStatusBadge status={project.status} />}
            </div>
          </header>

          {project.image && projectDetails.showHeaderImage !== false && (
            <figure className="mx-auto max-w-[960px] overflow-hidden rounded-[14px] border border-[var(--border)] bg-black shadow-sm">
              <div
                className={headerImageFit === "natural" ? "" : "aspect-video"}
              >
                <img
                  src={resolveMediaPath(project.image)}
                  alt={`${project.title} cover art`}
                  className={`block w-full ${headerImageFit === "natural" ? "h-auto" : `h-full ${headerImageFit === "contain" ? "object-contain" : "object-cover"}`}`}
                  style={{
                    objectPosition:
                      headerImageFit === "cover"
                        ? headerImagePosition
                        : undefined,
                    filter:
                      headerImageBlur > 0
                        ? `blur(${headerImageBlur}px)`
                        : undefined,
                    transform: headerImageBlur > 0 ? "scale(1.03)" : undefined,
                  }}
                />
              </div>
            </figure>
          )}

          <div className="mx-auto max-w-[960px]">
            {project.description && (
              <p className="mt-5 max-w-3xl text-base leading-relaxed text-[var(--muted)]">
                {project.description}
              </p>
            )}

            {project.tags && project.tags.length > 0 && (
              <div
                className="mt-4 flex flex-wrap gap-2"
                aria-label="Project technologies and topics"
              >
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`rounded-full px-2.5 py-1 text-xs font-semibold ${tagColors[tag] || "border border-gray-300 bg-gray-100 text-gray-800 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200"}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <ProjectDetailsContent details={projectDetails} />

            <div className="mt-10 border-t border-[var(--border)] pt-7">
              <a
                href={portfolioHref}
                className="inline-flex min-h-10 items-center gap-2 rounded-lg border border-[var(--brand-border)] bg-[var(--brand-soft)] px-4 text-sm font-semibold text-[var(--text)] transition hover:-translate-y-px focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand)]"
              >
                <ArrowLeft aria-hidden="true" className="h-4 w-4" />
                View the full portfolio
              </a>
            </div>
          </div>
        </motion.article>
      </main>

      <ScrollToTop />
      <Footer />
    </>
  );
};

const UnleashDarknessPage = () => (
  <ThemeProvider>
    <UnleashDarknessContent />
  </ThemeProvider>
);

export default UnleashDarknessPage;
