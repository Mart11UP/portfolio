// PortfolioPage.tsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ThemeProvider } from "../components/ThemeProvider";
import { Header } from "../components/shared/Header";
import { ProjectsGrid } from "../components/ProjectsGrid";
import { SkillsList } from "../components/SkillsList";
import { ContactForm } from "../components/ContactForm";
import { Footer } from "../components/shared/Footer";
import { PORTFOLIO_INFO } from "../config/portfolioData";
import { About } from "../components/About";
import type { Project } from "../types/portfolio";
import { ProjectModal } from "../components/ProjectModal";
import { ScrollProgressBar } from "../components/shared/ScrollProgressBar";
import { ScrollToTop } from "../components/shared/ScrollToTop";
import CLIResume from "../components/CLIResume";

const PortfolioPage: React.FC = () => {
  const [selected, setSelected] = useState<Project | null>(null);
  const [showCLI, setShowCLI] = useState(false);
  const contact = PORTFOLIO_INFO.personal.contact;

  return (
    <ThemeProvider>
      <ScrollProgressBar />
      <Header
        links={[
          { href: "#about", label: "About" },
          { href: "#projects", label: "Projects" },
          { href: "#skills", label: "Skills" },
          { href: "#contact", label: "Contact" },
        ]}
        onTryCLI={() => setShowCLI(true)}
      />
      {/* CLI panel (docked / overlay) */}
      <CLIResume open={showCLI} onClose={() => setShowCLI(false)} />

      <motion.section
        id="about"
        className="hero-panel relative min-h-screen w-full overflow-x-hidden"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="relative z-10 flex min-h-screen w-full items-center justify-center py-24 sm:py-28 lg:py-32">
          <div className="mx-auto w-full max-w-6xl px-6 2xl:max-w-7xl">
            <About />
          </div>
        </div>
      </motion.section>

      <main className="relative z-20 mx-auto w-full max-w-6xl px-6 pt-8 pb-15 sm:pt-10 sm:pb-20 lg:pt-16 lg:pb-32 2xl:max-w-7xl">
        <section id="projects" className="py-8">
          <h2 className="text-2xl font-semibold text-[var(--brand)]">Projects</h2>
          <p className="mb-6 text-sm text-gray-500 dark:text-gray-400 mt-1">
            Selected work — click a card for details.
          </p>
          <ProjectsGrid
            projects={PORTFOLIO_INFO.projects}
            onOpen={setSelected}
          />
        </section>

        <section id="skills" className="py-8">
          <h2 className="text-2xl font-semibold text-[var(--brand)]">Skills</h2>
          <p className="mb-6 text-sm text-gray-500 dark:text-gray-400 mt-1">
            Tools and technologies I use regularly.
          </p>
          <SkillsList skills={PORTFOLIO_INFO.skills} isBar={true} />
        </section>

        <section id="contact" className="pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24">
          <h2 className="text-2xl font-semibold text-[var(--brand)]">Contact</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Tell me about your project, or just say hi.
          </p>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex min-h-56 p-6 rounded-2xl bg-[var(--surface)] border border-[var(--border)]">
              <ContactForm sendTo={contact?.email} />
            </div>

            <div className="min-h-56 p-6 rounded-2xl bg-[var(--surface)] border border-[var(--border)] flex flex-col justify-between gap-4">
              <div>
                <div className="font-semibold">Let's make games!</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  I'm available for freelance and contract work. My inbox is
                  open.
                </div>
              </div>
              <div className="mt-2">
                <div className="font-semibold">Quick contact</div>
                <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  Email: {contact?.email}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Location: {contact?.location}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <ScrollToTop />
      <Footer />

      <ProjectModal
        project={selected}
        open={!!selected}
        onClose={() => setSelected(null)}
      />
    </ThemeProvider>
  );
};

export default PortfolioPage;
