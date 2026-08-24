import type { ProjectStatus } from "../types/portfolio";

const STATUS_LABELS: Record<ProjectStatus, string> = {
  released: "Released",
  "in-development": "In Development",
  prototype: "Prototype",
  "technical-demo": "Technical Demo",
};

export const ProjectStatusBadge: React.FC<{ status: ProjectStatus }> = ({
  status,
}) => {
  const isReleased = status === "released";

  return (
    <span
      className={`inline-flex items-center rounded-md border px-2.5 py-1 text-xs font-semibold leading-none ${
        isReleased
          ? "border-[var(--brand-border)] bg-[var(--brand-soft)] text-[var(--brand)]"
          : "text-[var(--muted)]"
      }`}
      style={
        isReleased
          ? undefined
          : {
              backgroundColor:
                "color-mix(in srgb, var(--muted) 10%, transparent)",
              borderColor:
                "color-mix(in srgb, var(--muted) 32%, transparent)",
            }
      }
    >
      {STATUS_LABELS[status]}
    </span>
  );
};
