import { animate, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { PORTFOLIO_INFO } from "../config/portfolioData";
import type { AvatarItem } from "../types/portfolio";

// Senior-level hero with staggered entrances, skills, career impact, and CTAs.
export const About: React.FC = () => {
  const personal = PORTFOLIO_INFO.personal;
  const name = personal.name ?? "Your Name";
  const [firstName, ...remainingNameParts] = name.trim().split(/\s+/);
  const remainingName = remainingNameParts.join(" ");
  const avatar = personal.avatar;
  const resumeHref = `${import.meta.env.BASE_URL}resume.pdf`;

  const mainSkills = personal.hero?.mainSkills ?? [];
  const careerStats = useMemo(
    () => [
      {
        value: "4+",
        label: "Years in games",
      },
      {
        value: "14+",
        label: "Projects",
      },
      {
        value: "5",
        label: "Shipped games",
      },
    ],
    [],
  );
  const heroSummary =
    personal.hero?.summary ??
    personal.summary ??
    "I design and build production-grade frontends and APIs, focusing on performance, accessibility, and delightful UX.";

  const container = {
    hidden: { opacity: 0, y: 8 },
    show: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.08, delayChildren: 0.06 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 6 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  const [activeIndex, setActiveIndex] = useState(0);

  // Coverflow carousel items
  // Support avatar being:
  // - a single string URL
  // - a single object { url, label }
  // - an array of the above
  // Normalize AvatarItem (string | {url,label}) into a consistent object shape
  const normalizeAvatar = (a: AvatarItem) =>
    typeof a === "string" ? { url: a } : { url: a.url, label: a.label };

  let avatarItems: { url: string; label?: string }[] = [];
  if (Array.isArray(avatar)) {
    avatarItems = avatar.map((a) => normalizeAvatar(a));
  } else if (avatar) {
    avatarItems = [normalizeAvatar(avatar)];
  }

  const carouselItems = avatarItems.map((it, idx) => ({
    id: idx,
    image: it.url,
    label: it.label ?? `Image ${idx + 1}`,
  }));

  const springScrollTo = (y: number) => {
    const controls = animate(window.scrollY, y, {
      type: "spring",
      stiffness: 200,
      damping: 30,
      onUpdate: (latest) => window.scrollTo(0, latest),
    });
    return () => controls.stop();
  };

  const navigateTo = (href: string) => {
    if (!href.startsWith("#")) {
      // external or file link — use location assign
      globalThis.location.href = href;
      return;
    }

    const target = document.querySelector(href);
    if (!target) return;

    const headerEl = document.querySelector("header");
    const headerH = headerEl?.offsetHeight ?? 0;
    const y = target.getBoundingClientRect().top + window.scrollY - headerH;
    springScrollTo(y);
  };

  const onNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith("#")) return; // allow default for external links
    e.preventDefault();
    navigateTo(href);
  };

  const handleKeyActivation = (
    e: React.KeyboardEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    // support Enter and Space activating the anchor for keyboard users
    if (e.key === "Enter") {
      // for internal anchors, prevent default and animate scroll
      if (href.startsWith("#")) {
        e.preventDefault();
        navigateTo(href);
      }
      // else allow default (Enter will follow the link)
    } else if (e.key === " " || e.key === "Spacebar") {
      // Space should activate links like a button; prevent page scroll
      e.preventDefault();
      navigateTo(href);
    }
  };

  return (
    <section className="w-full">
      <div className="w-full">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center max-w-7xl mx-auto"
        >
          {/* Left: Headline + features + CTAs */}
          <motion.div
            variants={item}
            className={
              carouselItems.length > 0
                ? "md:col-span-7"
                : "md:col-span-8 md:col-start-2 w-full max-w-3xl"
            }
          >
            <div className="relative z-10">
              <h1
                className="text-[3.125rem] md:text-[4.125rem] font-semibold leading-[1] text-[var(--hero-name)]"
                style={{ fontFamily: '"Google Sans", sans-serif', wordSpacing: "-0.04em", }}
              >
                <span className="block">{firstName}</span>
                {remainingName && (
                  <span className="block">{remainingName}</span>
                )}
              </h1>

              {personal.title && (
                <div className="mt-1 text-sm font-semibold uppercase tracking-[0.08em] text-[var(--brand)]">
                  {personal.title}
                </div>
              )}

              <motion.p
                variants={item}
                className="mt-6 max-w-2xl text-lg text-[var(--hero-copy)]"
              >
                {heroSummary}
              </motion.p>

              {mainSkills.length > 0 && (
                <motion.section
                  variants={item}
                  className="mt-8 border-t border-[var(--section-rule)] pt-4"
                  aria-label="Main skills"
                >
                  <div className="flex flex-wrap gap-2">
                    {mainSkills.map((skill) => (
                      <div
                        key={skill}
                        className="inline-flex items-center rounded-md border border-[var(--brand-border)] bg-[var(--brand-soft)] px-3 py-2 text-sm font-medium leading-none text-[var(--text)]"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </motion.section>
              )}

              <motion.section
                variants={item}
                className="mt-6 border-t border-[var(--section-rule)] pt-4"
                aria-label="Career impact"
              >
                <div className="flex flex-wrap items-start gap-x-5 gap-y-3 sm:gap-x-7">
                  {careerStats.map((stat) => (
                    <div key={stat.label} className="min-w-[4.5rem]">
                      <p
                        className="text-3xl font-semibold leading-none text-[var(--text)] sm:text-4xl"
                        style={{ fontFamily: '"Google Sans", sans-serif' }}
                      >
                        {stat.value}
                      </p>
                      <p className="mt-1 max-w-[6.5rem] text-[0.66rem] uppercase leading-tight tracking-[0.08em] text-[var(--muted)] opacity-[0.55]">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.section>

              <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="group inline-flex items-center gap-2 rounded-lg border border-[var(--brand)] bg-[var(--brand)] px-5 py-3 text-sm font-semibold text-[var(--brand-contrast)] shadow-[0_10px_28px_-14px_var(--brand)] transition duration-200 hover:-translate-y-0.5 hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand)]"
                  onClick={(e) => onNavClick(e, "#projects")}
                  onKeyDown={(e) => handleKeyActivation(e, "#projects")}
                >
                  See my work
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-200 group-hover:translate-y-0.5"
                  >
                    ↓
                  </span>
                </a>

                <a
                  href={resumeHref}
                  className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-3 text-sm font-semibold text-foreground hover:bg-muted"
                  onKeyDown={(e) => handleKeyActivation(e, resumeHref)}
                >
                  Download resume
                </a>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Coverflow carousel, shown only when profile images exist. */}
          {carouselItems.length > 0 && (
            <motion.div
              variants={item}
              className="md:col-span-5 flex items-center justify-center overflow-visible"
            >
              <div
                className="relative w-full h-100 flex items-center justify-center"
                style={{ perspective: "1000px" }}
              >
                <div
                  className="relative h-full flex items-center justify-center"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {carouselItems.map((item, index) => {
                    const offset = index - activeIndex;
                    const isActive = index === activeIndex;
                    const absOffset = Math.abs(offset);

                    return (
                      <motion.div
                        key={item.id}
                        className="absolute cursor-pointer"
                        style={{
                          transformStyle: "preserve-3d",
                        }}
                        animate={{
                          x: offset * 140,
                          z: isActive ? 0 : -100,
                          scale: isActive ? 1 : 0.75,
                          rotateY: offset * -35,
                          opacity: absOffset > 1 ? 0 : 1,
                        }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                        onClick={() => setActiveIndex(index)}
                      >
                        <div className="w-72 h-96 rounded-xl overflow-hidden shadow-2xl bg-muted ring-2 ring-border/20">
                          {item.image &&
                          !item.image.includes("/placeholder") ? (
                            <img
                              src={item.image}
                              alt={item.label}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-sky-500 to-indigo-600 text-white">
                              <div className="text-6xl font-bold mb-4">
                                {name?.[0] ?? "S"}
                              </div>
                              <div className="text-sm font-medium opacity-80">
                                {item.label}
                              </div>
                            </div>
                          )}
                        </div>

                        {isActive && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm font-medium text-foreground whitespace-nowrap"
                          >
                            {item.label}
                          </motion.div>
                        )}
                      </motion.div>
                    );
                  })}
                </div>

                {/* Navigation arrows (only when multiple images) */}
                {carouselItems.length > 1 && (
                  <>
                    <button
                      className="absolute left-4 z-20 w-10 h-10 rounded-full bg-background/80 backdrop-blur shadow-lg flex items-center justify-center hover:bg-background transition-colors disabled:opacity-30"
                      onClick={() =>
                        setActiveIndex((prev) => Math.max(0, prev - 1))
                      }
                      disabled={activeIndex === 0}
                      aria-label="Previous slide"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                    </button>

                    <button
                      className="absolute right-4 z-20 w-10 h-10 rounded-full bg-background/80 backdrop-blur shadow-lg flex items-center justify-center hover:bg-background transition-colors disabled:opacity-30"
                      onClick={() =>
                        setActiveIndex((prev) =>
                          Math.min(carouselItems.length - 1, prev + 1),
                        )
                      }
                      disabled={activeIndex === carouselItems.length - 1}
                      aria-label="Next slide"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </>
                )}
              </div>

              {/* Navigation dots (only when multiple images) */}
              {carouselItems.length > 1 && (
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex justify-center gap-2">
                  {carouselItems.map((item, index) => (
                    <button
                      key={item.id}
                      className={`h-2 rounded-full transition-all ${
                        index === activeIndex
                          ? "bg-foreground w-8"
                          : "bg-foreground/30 hover:bg-foreground/50 w-2"
                      }`}
                      onClick={() => setActiveIndex(index)}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};
