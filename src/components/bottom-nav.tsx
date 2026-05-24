"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItem = {
  href: string;
  label: string;
  icon: React.ReactNode;
  match: string;
};

const navItems: NavItem[] = [
  {
    href: "/dashboard",
    label: "Dashboard",
    match: "/dashboard",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M3 10.5L12 3L21 10.5V20C21 20.5523 20.5523 21 20 21H15V14H9V21H4C3.44772 21 3 20.5523 3 20V10.5Z"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    href: "/pendencias",
    label: "Pendências",
    match: "/pendencias",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M12 8V12L15 15"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
        <circle
          cx="12"
          cy="12"
          r="9"
          stroke="currentColor"
          strokeWidth="1.75"
        />
      </svg>
    ),
  },
  {
    href: "/exportar",
    label: "Exportar",
    match: "/exportar",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M12 3V15M12 15L8 11M12 15L16 11"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4 17V19C4 20.1046 4.89543 21 6 21H18C19.1046 21 20 20.1046 20 19V17"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

export function BottomNav() {
  const pathname = usePathname();
  const isUpload = pathname === "/upload";

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-card/95 backdrop-blur-md"
      aria-label="Navegação principal"
    >
      <div className="mx-auto flex max-w-lg items-end justify-between px-2 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-2 sm:max-w-2xl">
        {navItems.slice(0, 2).map((item) => {
          const active = pathname === item.match;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex min-w-[72px] flex-1 flex-col items-center gap-1 py-1 text-[10px] font-medium transition-colors ${
                active ? "text-primary" : "text-muted hover:text-foreground"
              }`}
            >
              {item.icon}
              {item.label}
            </Link>
          );
        })}

        <div className="flex flex-1 flex-col items-center">
          <Link
            href="/upload"
            aria-label="Upload"
            aria-current={isUpload ? "page" : undefined}
            className="-mt-7 flex size-14 items-center justify-center rounded-full bg-primary text-white shadow-[0_4px_16px_rgba(0,200,150,0.4)] transition-transform hover:scale-[1.03] active:scale-[0.98]"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path
                d="M21 15V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V15"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M7 10L12 5L17 10"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 5V16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </Link>
          <span
            className={`mt-1.5 text-[10px] font-medium ${
              isUpload ? "text-primary" : "text-muted"
            }`}
          >
            Upload
          </span>
        </div>

        {navItems.slice(2).map((item) => {
          const active = pathname === item.match;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex min-w-[72px] flex-1 flex-col items-center gap-1 py-1 text-[10px] font-medium transition-colors ${
                active ? "text-primary" : "text-muted hover:text-foreground"
              }`}
            >
              {item.icon}
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
