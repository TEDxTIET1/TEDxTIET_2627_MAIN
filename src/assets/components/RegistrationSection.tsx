import { ArrowRight } from "lucide-react";
import { BASE } from "../lib/basePath";

// a plain link (it opens a new tab), so it carries the mount prefix itself
const REGISTRATION_URL = `${BASE}register`;

const RED = "#eb0028";
const RULE = "#232323";
const MUTED = "#8a8a8a";

/**
 * The first panel past the hero. It used to be its own small document — a
 * #0d0d0d slab with rounded corners, a serif quote mark, bold sans type and a
 * pill button — so it read as a different site from the sections under it.
 * It now sits on the same black ground and faint grid as About, Impact and
 * the footer, in Anton with an IBM Plex Mono eyebrow, square corners and the
 * same red CTA as the other pages. The upward shadow stays, so it still reads
 * as stacking onto the hero.
 */
export default function RegistrationSection() {
    return (
        <section
            aria-labelledby="registration-heading"
            className="relative w-full overflow-hidden bg-black text-white shadow-[0_-30px_60px_rgba(0,0,0,0.9)]"
        >
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

            <div className="relative mx-auto grid w-full max-w-[1440px] gap-8 px-5 py-16 md:grid-cols-12 md:items-end md:gap-8 md:px-10 md:py-24">
                <div className="md:col-span-8">
                    <h2 id="registration-heading" className="sr-only">
                        Register for TEDxTIET 2026
                    </h2>
                    <p
                        className="font-mono text-[10px] uppercase tracking-[0.3em]"
                        style={{ color: MUTED }}
                    >
                        TEDxTIET 2026 — registrations open
                    </p>
                    <blockquote
                        className="mt-5 font-['Anton'] uppercase leading-[0.95] tracking-[0.01em] text-white"
                        style={{ fontSize: "clamp(2rem, 5.5vw, 4.5rem)" }}
                    >
                        &ldquo;It is in your moments of decision that{" "}
                        <span style={{ color: RED }}>your destiny is shaped</span>.&rdquo;
                    </blockquote>
                </div>

                <div
                    className="flex flex-col items-start gap-4 border-t pt-6 md:col-span-4 md:items-end md:border-t-0 md:pt-0"
                    style={{ borderColor: RULE }}
                >
                    <p
                        className="font-mono text-[10px] uppercase tracking-[0.2em]"
                        style={{ color: MUTED }}
                    >
                        &mdash; Tony Robbins
                    </p>
                    <a
                        href={REGISTRATION_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 px-5 py-3 font-['Anton'] text-base uppercase tracking-[0.06em] text-white transition-opacity duration-300 hover:opacity-85"
                        style={{ backgroundColor: RED }}
                    >
                        Register now
                        <ArrowRight
                            aria-hidden="true"
                            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                        />
                    </a>
                </div>
            </div>
        </section>
    );
}
