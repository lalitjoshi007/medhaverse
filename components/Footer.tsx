"use client";

import Link from "next/link";

const navLinks = [
  { href: "/#about", label: "About Us" },
  { href: "/#products", label: "Products" },
  { href: "/#services", label: "Services" },
  { href: "/#philosophy", label: "Philosophy" },
  { href: "/#founders", label: "Founders" },
];

const CONTACT_EMAIL = "medhaverse.4.u@gmail.com";

const socialIcons = [
  { href: "#", label: "Web", icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3.004.255 4.322.729M3 3v18h18" },
  { href: "#", label: "Share", icon: "M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" },
  { href: `mailto:${CONTACT_EMAIL}`, label: "Email", icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-slate-800/50 pt-24 pb-12 px-6 overflow-hidden">
      {/* Galaxy horizon + neural grid */}
      <div
        className="absolute inset-0 -z-10 opacity-40"
        style={{
          background: "radial-gradient(ellipse 80% 50% at 50% 100%, rgba(109,40,217,0.15) 0%, transparent 50%), linear-gradient(180deg, transparent 0%, rgba(2,6,23,0.95) 30%)",
        }}
      />
      <div
        className="absolute inset-0 -z-10 opacity-20"
        style={{
          backgroundImage: "linear-gradient(rgba(34,211,238,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.03) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute bottom-0 left-0 right-0 h-32 -z-10 bg-space-black" />
      <div className="max-w-[1440px] mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <span className="text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-10 h-10"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </span>
              <span className="text-2xl font-bold tracking-tight text-white uppercase">
                Medhaverse
              </span>
            </Link>
            <p className="text-slate-400 max-w-sm mb-8 leading-relaxed">
              <span className="block text-primary/90 font-medium mb-1">
                आ नो भद्राः क्रतवो यन्तु विश्वतः
              </span>
              Let noble ideas come to us from every direction.
            </p>
            <div className="flex gap-4">
              {socialIcons.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="w-10 h-10 rounded-full border border-slate-600 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all text-slate-400"
                  aria-label={s.label}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={s.icon}
                    />
                  </svg>
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-bold text-white mb-6 uppercase text-xs tracking-widest">
              Navigation
            </h3>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-white mb-6 uppercase text-xs tracking-widest">
              Connect
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <span className="text-primary">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </span>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-sm text-slate-400 hover:text-primary transition-colors"
                >
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-primary">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </span>
                <span className="text-sm text-slate-400">D-103, 2nd Floor, West Vinod Nagar, East Delhi, Delhi-110092, New Delhi</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-slate-500 uppercase tracking-widest font-medium">
            © {new Date().getFullYear()} Medhaverse Pvt Ltd. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link
              href="#"
              className="text-xs text-slate-500 uppercase tracking-widest hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-xs text-slate-500 uppercase tracking-widest hover:text-primary transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
