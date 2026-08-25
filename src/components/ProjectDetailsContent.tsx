import type { FC, ReactNode } from "react";
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
        }
      })}
    </section>
  );
};
