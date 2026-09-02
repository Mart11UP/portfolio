import React from "react";
import { IoIosMail } from "react-icons/io";

export const ContactForm: React.FC<{ sendTo?: string }> = ({ sendTo }) => {
  const email = sendTo ?? import.meta.env.VITE_CONTACT_EMAIL ?? "";
  const mailto = `mailto:${email}?subject=${encodeURIComponent("Portfolio contact")}`;

  return (
    <div className="flex h-full flex-col justify-between gap-6">
      <div>
        <h3 className="font-semibold text-[var(--text)]">Send me a message</h3>
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          Have a game or project in mind? Send me an email and let&apos;s talk.
        </p>
      </div>

      <div>
        <a
          href={mailto}
          className="inline-flex items-center gap-2 rounded-lg bg-[var(--brand)] px-4 py-2 font-medium text-white transition hover:opacity-90"
        >
          <IoIosMail size={20} />
          Email me
        </a>
        <p className="mt-3 text-xs text-gray-400">
          Opens your default email app.
        </p>
      </div>
    </div>
  );
};
