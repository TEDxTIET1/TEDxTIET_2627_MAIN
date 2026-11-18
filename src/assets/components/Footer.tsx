import { Link } from "react-router-dom";
import { glideTo } from "../hooks/useSmoothScroll";
import { ArrowUp, ArrowUpRight, Mail } from "lucide-react";

/**
 * Footer — kept simple on purpose.
 *
 * It used to be a full screen of its own (three oversized link cells, a
 * display statement, an edge-to-edge wordmark). It is now one short band on
 * the page's black ground: the name, the pages, the socials and the email,
 * then the credit line. The red hairline on top marks where the page ends.
 */

const RED = "#eb0028";
const RULE = "#232323";
const MUTED = "#8a8a8a";

const PAGES = [
    { label: "Speakers", href: "/speakers" },
    { label: "Sponsors", href: "/sponsors" },
    { label: "Team", href: "/team" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
];

const SOCIALS = [
    { label: "LinkedIn", href: "https://www.linkedin.com/company/tedxtiet/" },
    { label: "Instagram", href: "https://www.instagram.com/tedxtiet/" },
    { label: "Facebook", href: "https://www.facebook.com/tedxtiet/" },
    {
        label: "YouTube",
        href: "https://www.youtube.com/playlist?list=PLwvmGZzdo6jA8Fk6aVwQ5zAksnJfCf1o4",
    },
];

const linkClass =
    "font-mono text-[11px] uppercase tracking-[0.2em] text-[#c9c7c2] transition-colors duration-300 hover:text-white";

export default function Footer() {
    return (
        <footer className="relative z-10 w-full bg-black text-white">
            <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-px"
                style={{
                    background:
                        "linear-gradient(to right, transparent, rgba(235,0,40,0.65) 18%, rgba(235,0,40,0.65) 82%, transparent)",
                }}
            />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-[0.05]"
                style={{
                    backgroundImage:
                        "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
                    backgroundSize: "clamp(70px, 8vw, 120px) clamp(70px, 8vw, 120px)",
                }}
            />

            <div className="relative mx-auto grid w-full max-w-[1440px] gap-10 px-5 py-12 md:grid-cols-12 md:gap-8 md:px-10 md:py-16">
                <div className="md:col-span-5">
                    <p className="font-['Anton'] text-4xl leading-none tracking-[0.01em] md:text-5xl">
                        TED<span style={{ color: RED }}>x</span>TIET
                    </p>
                    <p
                        className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em]"
                        style={{ color: MUTED }}
                    >
                        Ideas worth spreading, on stage
                    </p>
                    <a
                        href="mailto:tedx@thapar.edu"
                        className="group mt-6 inline-flex items-center gap-2 py-[5px] font-mono text-[11px] uppercase tracking-[0.2em] transition-colors duration-300 hover:text-white"
                        style={{ color: MUTED }}
                    >
                        <Mail aria-hidden="true" className="h-3.5 w-3.5" />
                        tedx@thapar.edu
                    </a>
                </div>

                <nav aria-label="Footer" className="md:col-span-4">
                    <p
                        className="font-mono text-[10px] uppercase tracking-[0.2em]"
                        style={{ color: MUTED }}
                    >
                        Pages
                    </p>
                    <ul className="mt-4 grid list-none grid-cols-2 gap-y-2">
                        {PAGES.map((p) => (
                            <li key={p.href}>
                                <Link to={p.href} className={`${linkClass} inline-block py-[5px]`}>
                                    {p.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="md:col-span-3">
                    <p
                        className="font-mono text-[10px] uppercase tracking-[0.2em]"
                        style={{ color: MUTED }}
                    >
                        Follow
                    </p>
                    <ul className="mt-4 flex list-none flex-col gap-y-2">
                        {SOCIALS.map((s) => (
                            <li key={s.label}>
                                <a
                                    href={s.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className={`${linkClass} group inline-flex items-center gap-1.5 py-[5px]`}
                                >
                                    {s.label}
                                    <ArrowUpRight
                                        aria-hidden="true"
                                        className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                       
                                    />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div
                className="relative mx-auto flex w-full max-w-[1440px] flex-col gap-2 border-t px-5 py-4 font-mono text-[10px] uppercase tracking-[0.2em] sm:flex-row sm:items-center sm:justify-between md:px-10"
                style={{ borderColor: RULE, color: MUTED }}
            >
                <p>Independently organised · Thapar Institute, Patiala</p>
                <p className="flex items-center gap-4">
                    <span>© {new Date().getFullYear()} TEDxTIET</span>
                    {/* nothing on the page has id="top", so the old #top link
                        went nowhere; this scrolls through the smooth scroller */}
                    <button
                        type="button"
                        onClick={() => glideTo(0)}
                        className="inline-flex cursor-pointer items-center gap-1 py-[5px] uppercase transition-colors duration-300 hover:text-white"
                    >
                        Back to top
                        <ArrowUp aria-hidden="true" className="h-3.5 w-3.5" />
                    </button>
                </p>
            </div>
        </footer>
    );
}
