import { useEffect, useRef, useState } from "react";
import type { FC, ReactNode } from "react";
import { createPortal } from "react-dom";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import type {
  ProjectDetailBlock,
  ProjectDetails,
} from "../types/portfolio";

const resolveMediaPath = (src: string) => {
  if (/^(https?:|data:|blob:)/i.test(src)) return src;
  return `${import.meta.env.BASE_URL}${src.replace(/^\/+/, "")}`;
};

const SectionHeading: FC<{ children: ReactNode }> = ({ children }) => (
  <h4 className="mb-2 text-base font-semibold text-[var(--text)]">
    {children}
  </h4>
);

const DetailList: FC<{
  heading: string;
  items?: string[];
}> = ({ heading, items }) => {
  if (!items?.length) return null;

  return (
    <section>
      <SectionHeading>{heading}</SectionHeading>
      <ul className="space-y-2 text-sm leading-relaxed text-[var(--text)]">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span
              aria-hidden="true"
              className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--brand)]"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

const DetailFacts: FC<{ details: ProjectDetails }> = ({ details }) => {
  const facts = [
    { label: "Role", value: details.role },
    { label: "Engine", value: details.engine },
    {
      label: "Platforms",
      value: details.platforms?.filter(Boolean).join(" · "),
    },
    { label: "Duration", value: details.duration },
    { label: "Team", value: details.team },
  ].filter((fact): fact is { label: string; value: string } =>
    Boolean(fact.value),
  );

  if (!facts.length) return null;

  return (
    <dl className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {facts.map((fact) => (
        <div
          key={fact.label}
          className="rounded-lg border border-[var(--border)] bg-[var(--bg)] p-3"
        >
          <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">
            {fact.label}
          </dt>
          <dd className="mt-1 text-sm font-medium text-[var(--text)]">
            {fact.value}
          </dd>
        </div>
      ))}
    </dl>
  );
};

const DetailMedia: FC<{
  block: Extract<ProjectDetailBlock, { type: "media" }>;
}> = ({ block }) => {
  const image = (
    <img
      src={resolveMediaPath(block.src)}
      alt={block.alt}
      loading="lazy"
      decoding="async"
      className={`max-h-[32rem] w-full rounded-lg border border-[var(--border)] bg-[var(--bg)] ${
        block.fit === "cover" ? "object-cover" : "object-contain"
      }`}
    />
  );

  return (
    <figure className="w-full">
      {block.href ? (
        <a
          href={resolveMediaPath(block.href)}
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand)]"
        >
          {image}
        </a>
      ) : (
        image
      )}
      {block.caption && (
        <figcaption className="mt-2 text-xs leading-relaxed text-[var(--muted)] opacity-75">
          {block.caption}
        </figcaption>
      )}
    </figure>
  );
};

const DetailTextMedia: FC<{
  block: Extract<ProjectDetailBlock, { type: "text-media" }>;
}> = ({ block }) => (
  <section className="grid gap-5 md:grid-cols-[minmax(0,3fr)_minmax(15rem,2fr)] md:items-start">
    <div>
      {block.heading && <SectionHeading>{block.heading}</SectionHeading>}
      <p className="whitespace-pre-line text-sm leading-relaxed text-[var(--text)]">
        {block.body}
      </p>
    </div>

    <figure className="mx-auto w-full max-w-sm">
      <img
        src={resolveMediaPath(block.media.src)}
        alt={block.media.alt}
        loading="lazy"
        decoding="async"
        className={`max-h-[18rem] w-full rounded-lg border border-[var(--border)] bg-[var(--bg)] ${
          block.media.fit === "cover" ? "object-cover" : "object-contain"
        }`}
      />
      {block.media.caption && (
        <figcaption className="mt-2 text-xs leading-relaxed text-[var(--muted)] opacity-75">
          {block.media.caption}
        </figcaption>
      )}
    </figure>
  </section>
);

const DetailMobileGallery: FC<{
  block: Extract<ProjectDetailBlock, { type: "mobile-gallery" }>;
}> = ({ block }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const lightboxRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const openerRef = useRef<HTMLButtonElement | null>(null);
  const isOpen = activeIndex !== null;
  const hasMultipleImages = block.images.length > 1;

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveIndex(null);
      } else if (event.key === "Tab") {
        const buttons =
          lightboxRef.current?.querySelectorAll<HTMLButtonElement>(
            "button:not([disabled])",
          );
        if (!buttons?.length) return;

        const firstButton = buttons[0];
        const lastButton = buttons[buttons.length - 1];
        if (event.shiftKey && document.activeElement === firstButton) {
          event.preventDefault();
          lastButton.focus();
        } else if (!event.shiftKey && document.activeElement === lastButton) {
          event.preventDefault();
          firstButton.focus();
        }
      } else if (event.key === "ArrowLeft" && hasMultipleImages) {
        setActiveIndex((currentIndex) => {
          if (currentIndex === null) return null;
          return (currentIndex - 1 + block.images.length) % block.images.length;
        });
      } else if (event.key === "ArrowRight" && hasMultipleImages) {
        setActiveIndex((currentIndex) => {
          if (currentIndex === null) return null;
          return (currentIndex + 1) % block.images.length;
        });
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      openerRef.current?.focus();
    };
  }, [block.images.length, hasMultipleImages, isOpen]);

  if (!block.images.length) return null;

  const displayIndex = activeIndex ?? 0;
  const activeImage = activeIndex === null ? null : block.images[displayIndex];

  const openImage = (index: number, opener: HTMLButtonElement) => {
    openerRef.current = opener;
    setActiveIndex(index);
  };

  const showPrevious = () => {
    setActiveIndex((currentIndex) => {
      if (currentIndex === null) return null;
      return (currentIndex - 1 + block.images.length) % block.images.length;
    });
  };

  const showNext = () => {
    setActiveIndex((currentIndex) => {
      if (currentIndex === null) return null;
      return (currentIndex + 1) % block.images.length;
    });
  };

  return (
    <section>
      {block.heading && <SectionHeading>{block.heading}</SectionHeading>}
      <div
        role="region"
        aria-label={block.heading ?? "Mobile screenshots"}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain pb-4 pr-8"
      >
        {block.images.map((image, index) => (
          <figure
            key={`${image.src}-${index}`}
            className="w-[min(72vw,14rem)] shrink-0 snap-start"
          >
            <button
              type="button"
              onClick={(event) => openImage(index, event.currentTarget)}
              className="group relative block w-full cursor-zoom-in overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg)] text-left shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand)]"
              aria-label={`Expand screenshot ${index + 1} of ${block.images.length}: ${image.alt}`}
            >
              <img
                src={resolveMediaPath(image.thumbnailSrc ?? image.src)}
                alt={image.alt}
                loading="lazy"
                decoding="async"
                className="aspect-[230/498] w-full object-contain"
              />
              <span className="absolute right-2 top-2 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-black/65 text-white shadow-sm transition group-hover:bg-black/80 group-focus-visible:bg-black/80">
                <Expand aria-hidden="true" className="h-4 w-4" />
              </span>
            </button>
            {image.caption && (
              <figcaption className="mt-2 text-xs leading-relaxed text-[var(--muted)] opacity-75">
                {image.caption}
              </figcaption>
            )}
          </figure>
        ))}
      </div>

      {activeImage &&
        createPortal(
          <div
            ref={lightboxRef}
            role="dialog"
            aria-modal="true"
            aria-label={`Screenshot ${displayIndex + 1} of ${block.images.length}`}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-3 backdrop-blur-sm sm:p-6"
          >
            <div
              className="relative flex h-full w-full flex-col items-center justify-center"
              onMouseDown={(event) => {
                if (event.target === event.currentTarget) setActiveIndex(null);
              }}
            >
              <button
                ref={closeButtonRef}
                type="button"
                onClick={() => setActiveIndex(null)}
                className="absolute right-0 top-0 z-10 inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                aria-label="Close screenshot viewer"
              >
                <X aria-hidden="true" className="h-6 w-6" />
              </button>

              {hasMultipleImages && (
                <button
                  type="button"
                  onClick={showPrevious}
                  className="absolute left-0 z-10 inline-flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  aria-label="Show previous screenshot"
                >
                  <ChevronLeft aria-hidden="true" className="h-7 w-7" />
                </button>
              )}

              <img
                src={resolveMediaPath(activeImage.src)}
                alt={activeImage.alt}
                className="max-h-[calc(100vh-7rem)] max-w-[calc(100vw-5rem)] object-contain sm:max-w-[calc(100vw-9rem)]"
              />

              {hasMultipleImages && (
                <button
                  type="button"
                  onClick={showNext}
                  className="absolute right-0 z-10 inline-flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  aria-label="Show next screenshot"
                >
                  <ChevronRight aria-hidden="true" className="h-7 w-7" />
                </button>
              )}

              <div className="mt-3 min-h-10 text-center text-sm text-white/80">
                {activeImage.caption && <p>{activeImage.caption}</p>}
                <p className="mt-1 text-xs text-white/55">
                  {displayIndex + 1} / {block.images.length}
                </p>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </section>
  );
};

export const ProjectDetailsContent: FC<{ details: ProjectDetails }> = ({
  details,
}) => {
  const defaultContent: ProjectDetailBlock[] = [];
  const hasFacts = Boolean(
    details.role ||
      details.engine ||
      details.platforms?.length ||
      details.duration ||
      details.team,
  );

  if (hasFacts) defaultContent.push({ type: "facts" });
  if (details.responsibilities?.length) {
    defaultContent.push({ type: "responsibilities" });
  }
  if (details.challenges?.length) {
    defaultContent.push({ type: "challenges" });
  }
  if (details.outcome) defaultContent.push({ type: "outcome" });

  const content = details.content ?? defaultContent;
  if (!content.length) return null;

  return (
    <section
      aria-label="Project case study"
      className="mt-6 space-y-6 border-t border-[var(--border)] pt-6"
    >
      {content.map((block, index) => {
        const key = `${block.type}-${index}`;

        switch (block.type) {
          case "facts":
            return <DetailFacts key={key} details={details} />;
          case "responsibilities":
            return (
              <DetailList
                key={key}
                heading={block.heading ?? "Responsibilities"}
                items={details.responsibilities}
              />
            );
          case "challenges":
            return (
              <DetailList
                key={key}
                heading={block.heading ?? "Challenges"}
                items={details.challenges}
              />
            );
          case "outcome":
            if (!details.outcome) return null;
            return (
              <section key={key}>
                <SectionHeading>{block.heading ?? "Outcome"}</SectionHeading>
                <p className="whitespace-pre-line text-sm leading-relaxed text-[var(--text)]">
                  {details.outcome}
                </p>
              </section>
            );
          case "text":
            return (
              <section key={key}>
                {block.heading && (
                  <SectionHeading>{block.heading}</SectionHeading>
                )}
                <p className="whitespace-pre-line text-sm leading-relaxed text-[var(--text)]">
                  {block.body}
                </p>
              </section>
            );
          case "text-media":
            return <DetailTextMedia key={key} block={block} />;
          case "list":
            return (
              <DetailList
                key={key}
                heading={block.heading ?? "Highlights"}
                items={block.items}
              />
            );
          case "media":
            return <DetailMedia key={key} block={block} />;
          case "mobile-gallery":
            return <DetailMobileGallery key={key} block={block} />;
        }
      })}
    </section>
  );
};
