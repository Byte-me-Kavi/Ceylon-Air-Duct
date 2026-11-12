"use client";
import { useEffect, useId, useRef, useState } from "react";
import { Check, Copy, Mail } from "lucide-react";

type EmailActionProps = {
  email: string;
  subject?: string;
  className?: string;
  /** Classes for the wrapper; use "block" for stacked address lists. */
  wrapperClassName?: string;
  /** Open the menu above the link (e.g. in the footer, near the page bottom). */
  placement?: "bottom" | "top";
  children: React.ReactNode;
};

/**
 * mailto: only works when a desktop mail app is set up, which many desktop
 * visitors don't have. On phones and tablets (coarse pointer) the link opens
 * the mail app as usual. On desktop it opens a small menu with webmail
 * compose links, copy-to-clipboard and the default mail app as a fallback.
 */
export default function EmailAction({
  email,
  subject,
  className = "",
  wrapperClassName = "inline-block",
  placement = "bottom",
  children,
}: EmailActionProps) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const wrapRef = useRef<HTMLSpanElement>(null);
  const menuId = useId();

  const q = subject ? `?subject=${encodeURIComponent(subject)}` : "";
  const mailto = `mailto:${email}${q}`;
  const gmail = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}${
    subject ? `&su=${encodeURIComponent(subject)}` : ""
  }`;
  const outlook = `https://outlook.office.com/mail/deeplink/compose?to=${encodeURIComponent(email)}${
    subject ? `&subject=${encodeURIComponent(subject)}` : ""
  }`;

  useEffect(() => {
    if (!open) return;
    const onDown = (e: PointerEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const onClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Touch devices: let the mailto: link open the mail app
    if (window.matchMedia("(pointer: coarse)").matches) return;
    e.preventDefault();
    setCopied(false);
    setOpen((v) => !v);
  };

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard blocked: fall back to the mail app
      window.location.href = mailto;
    }
  };

  const item =
    "flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-[15px] font-medium text-ink transition-colors hover:bg-steel-100 focus-visible:bg-steel-100";

  return (
    <span ref={wrapRef} className={`relative ${wrapperClassName}`}>
      <a
        href={mailto}
        onClick={onClick}
        aria-haspopup="true"
        aria-expanded={open}
        aria-controls={open ? menuId : undefined}
        className={className}
      >
        {children}
      </a>

      {open && (
        <span
          id={menuId}
          className={`absolute left-0 z-30 block w-64 rounded-xl border border-steel-200 bg-white p-1.5 text-ink shadow-[0_18px_40px_-16px_rgb(15_29_43/0.35)] ${
            placement === "top" ? "bottom-full mb-2" : "top-full mt-2"
          }`}
        >
          <span className="block truncate px-3 pt-1.5 pb-2 text-sm text-steel-600">
            {email}
          </span>
          <a href={gmail} target="_blank" rel="noreferrer" className={item} onClick={() => setOpen(false)}>
            <Mail className="h-4 w-4 text-brand-strong" /> Open in Gmail
          </a>
          <a href={outlook} target="_blank" rel="noreferrer" className={item} onClick={() => setOpen(false)}>
            <Mail className="h-4 w-4 text-brand-strong" /> Open in Outlook
          </a>
          <button type="button" onClick={copy} className={item}>
            {copied ? (
              <>
                <Check className="h-4 w-4 text-brand-strong" /> Copied
              </>
            ) : (
              <>
                <Copy className="h-4 w-4 text-brand-strong" /> Copy address
              </>
            )}
          </button>
          <a href={mailto} className={item} onClick={() => setOpen(false)}>
            <Mail className="h-4 w-4 text-steel-400" /> Use default mail app
          </a>
        </span>
      )}
    </span>
  );
}
