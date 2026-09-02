import React from "react";
import { SiArtstation, SiLinkedin } from "react-icons/si";
import { PORTFOLIO_INFO } from "../../config/portfolioData";

export const Footer: React.FC = () => {
  const artStation = PORTFOLIO_INFO.personal.contact?.socials?.find(
    (social) => social.label === "ArtStation",
  );
  const linkedIn = PORTFOLIO_INFO.personal.contact?.socials?.find(
    (social) => social.label === "LinkedIn",
  );

  return (
    <footer className="text-sm text-[var(--muted)] border-t border-[var(--border)] py-6">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-6 md:flex-row 2xl:max-w-7xl">
        <div>© {new Date().getFullYear()} {PORTFOLIO_INFO.personal.name}</div>

        <div className="flex items-center gap-4">
          {linkedIn && (
            <a
              href={linkedIn.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex items-center gap-2 hover:text-[var(--text)] transition-colors"
            >
              <SiLinkedin size={20} />
              <span>LinkedIn</span>
            </a>
          )}
          {artStation && (
            <a
              href={artStation.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="ArtStation"
              className="flex items-center gap-2 hover:text-[var(--text)] transition-colors"
            >
              <SiArtstation size={20} />
              <span>ArtStation</span>
            </a>
          )}
        </div>
      </div>
    </footer>
  );
};
