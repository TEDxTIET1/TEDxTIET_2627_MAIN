/**
 * Sponsors — the partners behind TEDxTIET 2026.
 *
 * Logos and categories come from the organising team's sponsor deck. They
 * run across the page as a film reel that never ends: the track holds the
 * frames twice and slides left by exactly one copy, so the loop has no seam
 * (the keyframes are in index.css). Hovering the reel holds it still. Below
 * it the same partners sit as a plain list, so every name and category can
 * be read without waiting for a frame to come round.
 *
 * Same language as the Speakers and Alumni pages. The page title is in the
 * navbar, so the h1 is sr-only.
 */

import { ArrowRight, Mail } from 'lucide-react';
import { asset } from '../lib/basePath';

const RED = '#eb0028';
const RULE = '#232323';
const MUTED = '#8a8a8a';

const PARTNER_MAIL = 'mailto:tedx@thapar.edu?subject=Sponsoring%20TEDxTIET%202026';

const sponsors = [
    { name: 'Can Entry Immigration', role: 'Official Study Abroad Partner', logo: 'Sponsors/cei.webp' },
    { name: 'bonn', role: 'Official Bakery Partner', logo: 'Sponsors/bonn.webp' },
    { name: '2.Oh!', role: 'Official Haircare Partner', logo: 'Sponsors/2oh.webp' },
    { name: 'Plum', role: 'Official Bodycare Partner', logo: 'Sponsors/plum.webp' },
    { name: 'Plum BodyLovin', role: 'Official Bodycare Partner', logo: 'Sponsors/plum-bodylovin.webp' },
];

// one copy of the strip: the partners twice over, so a copy is wider than
// any screen and the second copy is always ready behind it
const STRIP = [...sponsors, ...sponsors];

// sprocket holes: 12px of hole in every 24px of film; the frame width is a
// multiple of 24 so the holes line up from one frame to the next
const SPROCKETS = {
    backgroundImage: 'linear-gradient(to right, #000 0 12px, transparent 12px)',
    backgroundSize: '24px 100%',
    backgroundPosition: '6px 0',
};

function ReelFrame({ name, role, logo }) {
    return (
        <li className="flex w-[264px] shrink-0 flex-col bg-[#161616] md:w-[336px]">
            <div aria-hidden="true" className="mx-0 my-2 h-2.5" style={SPROCKETS} />
            <div className="mx-2 flex aspect-[4/3] flex-col items-center justify-center gap-4 bg-black px-6">
                <img
                    src={asset(logo)}
                    alt={name}
                    decoding="async"
                    draggable="false"
                    className="max-h-[55%] max-w-full object-contain"
                />
                <p
                    className="text-center font-mono text-[10px] uppercase tracking-[0.2em]"
                    style={{ color: RED }}
                >
                    {role}
                </p>
            </div>
            <div aria-hidden="true" className="mx-0 my-2 h-2.5" style={SPROCKETS} />
        </li>
    );
}

export default function Sponsors() {
    return (
        <div className="relative min-h-screen bg-black text-white">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-[0.05]"
                style={{
                    backgroundImage:
                        'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
                    backgroundSize: 'clamp(70px, 8vw, 120px) clamp(70px, 8vw, 120px)',
                }}
            />

            <main className="relative pb-28">
                <h1 className="sr-only">Sponsors</h1>

                <div className="mx-auto grid w-full max-w-[1440px] gap-5 px-5 md:grid-cols-12 md:items-end md:gap-8 md:px-10">
                    <p
                        className="max-w-prose text-pretty font-body text-sm leading-relaxed md:col-span-7 md:text-base"
                        style={{ color: '#c9c7c2' }}
                    >
                        The organisations that make TEDxTIET 2026 possible.
                    </p>
                    <p
                        className="font-mono text-[10px] uppercase tracking-[0.2em] md:col-span-5 md:text-right md:text-[11px]"
                        style={{ color: MUTED }}
                    >
                        {sponsors.length} partners
                    </p>
                </div>

                {/* the reel runs edge to edge; it is a picture of the list
                    below, so assistive tech reads the list instead */}
                <div
                    aria-hidden="true"
                    className="film-reel mt-10 overflow-hidden border-y md:mt-14"
                    style={{ borderColor: RULE }}
                >
                    <ul className="film-reel-track flex w-max list-none gap-0">
                        {[0, 1].map((copy) =>
                            STRIP.map((s, i) => <ReelFrame key={`${copy}-${i}`} {...s} />)
                        )}
                    </ul>
                </div>

                <div className="mx-auto w-full max-w-[1440px] px-5 md:px-10">
                    <ul
                        className="mt-16 grid list-none grid-cols-1 border-t sm:grid-cols-2 lg:grid-cols-5 md:mt-24"
                        style={{ borderColor: RULE }}
                    >
                        {sponsors.map((s, i) => (
                            <li
                                key={s.name}
                                className="flex items-baseline justify-between gap-3 border-b py-5 lg:flex-col lg:items-start lg:border-b-0 lg:border-r lg:px-5 lg:first:pl-0 lg:last:border-r-0"
                                style={{ borderColor: RULE }}
                            >
                                {/* not uppercased: bonn, 2.Oh! and BodyLovin are spelled that way */}
                                <p className="font-['Anton'] text-lg leading-tight tracking-[0.02em] text-white md:text-xl">
                                    {s.name}
                                </p>
                                <p
                                    className="text-right font-mono text-[10px] uppercase tracking-[0.2em] lg:text-left"
                                    style={{ color: MUTED }}
                                >
                                    <span className="tabular-nums" style={{ color: RED }}>
                                        {String(i + 1).padStart(2, '0')}
                                    </span>
                                    <span className="mx-2">/</span>
                                    {s.role}
                                </p>
                            </li>
                        ))}
                    </ul>

                    <div
                        className="mt-16 flex flex-col gap-3 border-t pt-6 font-mono text-[10px] uppercase tracking-[0.2em] sm:flex-row sm:items-center sm:justify-between md:mt-24"
                        style={{ borderColor: RULE, color: MUTED }}
                    >
                        <p>Want to partner with TEDxTIET?</p>
                        <a
                            href={PARTNER_MAIL}
                            className="group inline-flex items-center gap-2 py-[5px] transition-colors duration-300 hover:text-white"
                        >
                            <Mail aria-hidden="true" className="h-3.5 w-3.5" />
                            tedx@thapar.edu
                            <ArrowRight
                                aria-hidden="true"
                                className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                            />
                        </a>
                    </div>
                </div>
            </main>
        </div>
    );
}
