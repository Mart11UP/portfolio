// Header.tsx
import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  animate,
  useMotionTemplate,
} from "framer-motion";
import { PiSunDuotone, PiMoonDuotone } from "react-icons/pi";
import { useTheme } from "../../context/ThemeContext";

type NavLink = { href: string; label: string };

export const Header: React.FC<{ links?: NavLink[]; onTryCLI?: () => void }> = ({
  links = [],
  onTryCLI,
}) => {
  const { dark, toggle } = useTheme();
  const headerRef = useRef<HTMLElement | null>(null);

  const [active, setActive] = useState<string>(links[0]?.href ?? "#about");
  useEffect(() => {
    const sections = links
      .map((l) =>
        l.href.startsWith("#") ? document.querySelector(l.href) : null,
      )
      .filter(Boolean) as HTMLElement[];

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, [links]);

  const springScrollTo = (y: number) => {
    const controls = animate(window.scrollY, y, {
      type: "spring",
      stiffness: 200,
      damping: 30,
      onUpdate: (latest) => window.scrollTo(0, latest),
    });
    return () => controls.stop();
  };

  const onNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // normal navigation for external links
    if (!href.startsWith("#")) return;

    e.preventDefault();
    const target = document.querySelector(href);
    if (!target) return;

    const headerEl = headerRef.current ?? document.querySelector("header");
    const headerH = headerEl?.offsetHeight ?? 0;
    const y = target.getBoundingClientRect().top + window.scrollY - headerH;
    springScrollTo(y);
  };

  const { scrollY } = useScroll();
  const blurPx = useTransform(scrollY, [0, 100], [0, 16]);
  const bgOpacity = useTransform(scrollY, [0, 100], [0, 0.8]);
  const borderOpacity = useTransform(scrollY, [0, 100], [0, 1]);
  const overlayOpacity = useTransform(scrollY, [0, 100], [0, 0.14]);
  const backdrop = useMotionTemplate`blur(${blurPx}px)`;

  // NOTE: previously read PORTFOLIO_INFO.personal and BASE_URL here; removed unused bindings to satisfy TS checks.

  return (
    <motion.header
      ref={headerRef}
      className="fixed top-0 left-0 z-50 w-full"
      style={{
        backdropFilter: backdrop,
        WebkitBackdropFilter: backdrop,
      }}
    >
      {/* Background layer */}
      <motion.div
        aria-hidden
        className="absolute inset-0 pointer-events-none bg-[var(--surface)]"
        style={{
          opacity: bgOpacity,
        }}
      />
      {/* Border layer */}
      <motion.div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-px pointer-events-none bg-[var(--border)]"
        style={{
          opacity: borderOpacity,
        }}
      />
      {/* Dark overlay for depth */}
      <motion.div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundColor: `rgba(0,0,0,1)`,
          opacity: overlayOpacity,
        }}
      />
      <div className="relative mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-6 py-4 2xl:max-w-7xl">
        <a
          href="#about"
          onClick={(e) => onNavClick(e, "#about")}
          className="inline-flex h-9 shrink-0 items-center text-base font-bold leading-none tracking-tight text-[var(--text)]"
          style={{ fontFamily: '"Google Sans", sans-serif' }}
          aria-label="Mart11UP — back to About"
        >
          Mart
          <span
            className="text-base"
            style={{
              color: "var(--brand)",
            }}
          >
            11
          </span>
          <span className="text-sm text-[var(--brand)]">UP</span>
        </a>

        {/* Right: nav + theme + Try CLI */}
        <nav
          aria-label="Primary"
          className="relative flex h-9 items-center gap-2 sm:gap-3"
          style={{ fontFamily: '"Google Sans", sans-serif' }}
        >
          <div className="relative hidden h-9 items-center gap-4 sm:flex">
            {links.map((l) => {
              const isActive = active === l.href;
              return (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={(e) => onNavClick(e, l.href)}
                  className={`relative inline-flex h-9 items-center px-1 text-sm leading-none transition-[color,font-weight] duration-300 ease-out ${
                    isActive
                      ? "font-semibold text-[var(--brand)]"
                      : "font-normal text-[var(--text)] hover:text-[var(--brand)]"
                  }`}
                  aria-current={isActive ? "location" : undefined}
                >
                  {l.label}
                </a>
              );
            })}
          </div>

          <button
            onClick={onTryCLI}
            className="inline-flex h-9 items-center rounded border border-[var(--border)] px-3 text-sm leading-none transition hover:bg-[var(--border)]/30 cursor-pointer"
            aria-label="Try CLI"
          >
            Try CLI
          </button>

          <button
            onClick={toggle}
            aria-label="Toggle color theme"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] transition hover:bg-[var(--border)]/30 cursor-pointer"
          >
            {dark ? <PiSunDuotone size={22} /> : <PiMoonDuotone size={22} />}
          </button>
        </nav>
      </div>
    </motion.header>
  );
};
