/**
 * Speakers — the TEDxTIET 2026 line-up.
 *
 * Names, photos and bios come from the organising team's speaker deck. The
 * photos keep the deck's red X behind each speaker, so the page and the
 * slides on the day read as one set. Built in the same language as the
 * alumni page: faint grid, Anton names, IBM Plex Mono micro-type, hairline
 * rules, square corners. The page title is in the navbar, so the h1 is
 * sr-only.
 */

import { ArrowRight, Mail } from 'lucide-react';
import { asset } from '../lib/basePath';

const RED = '#eb0028';
const RULE = '#232323';
const MUTED = '#8a8a8a';

const speakers = [
    {
        name: 'Suchika Tariyal Hooda',
        tag: 'Judoka · MMA fighter',
        img: 'Speakers2026/suchika-tariyal-hooda.webp',
        bio: 'She is discipline in motion, resilience in action, and determination made visible. An accomplished international judoka and professional Mixed Martial Arts fighter, she has made her mark in combat sports through skill, grit and relentless hard work. She is an eight-time National Judo Champion and the 2024 Ju-Jitsu World Champion, and she has shown excellence across several martial arts disciplines. Her journey reflects years of sacrifice, early mornings and an unshakeable love for her sport. Combining technical precision with a fierce competitive spirit, she continues to represent Indian talent on the world stage. She inspires a new generation of athletes to step onto the mat, push past their limits, and fight for excellence.',
    },
    {
        name: 'H.S. Pannu',
        tag: 'Professor · translator',
        img: 'Speakers2026/hs-pannu.webp',
        bio: 'He is a teacher by profession, a learner by nature, and a storyteller at heart. A distinguished professor at Thapar Institute of Engineering and Technology, his curiosity reaches well beyond the classroom into music and literature. His literary work includes translating 16 stories by the legendary Russian author Leo Tolstoy, as well as Bertrand Russell’s celebrated The Conquest of Happiness, into Punjabi, opening these great works to a whole new audience. To him, knowledge has no boundaries and creativity has no department. Through his many pursuits, he reminds us that learning is a lifelong journey, and that the most fulfilling lives belong to those who follow their passions in every form.',
    },
    {
        name: 'Rahuul Singh',
        tag: 'Math mentalist',
        img: 'Speakers2026/rahuul-singh.webp',
        bio: 'He is a man who makes numbers feel like magic and magic feel like mathematics. A renowned Math Mentalist, he blends logic, psychology and mind reading into performances that leave audiences wondering what just happened. Where most people see equations, he sees a doorway into the human mind. Through clever mathematical experiments, predictions that seem impossible, and interactive mind-reading moments, he blurs the line between calculation and intuition. He turns complex concepts into moments of pure wonder, so his acts are as thought-provoking as they are entertaining. Every number he touches has a story, and by the end of his performance you’ll never look at your own mind, or a simple digit, the same way again.',
    },
    {
        name: 'Dr. Kazuma Mizukoshi',
        tag: 'Speaker',
        img: 'Speakers2026/kazuma-mizukoshi.webp',
        bio: null,
    },
    {
        name: 'Dr. Sameeksha Sarkar',
        tag: 'Singer-songwriter · SARKAR',
        img: 'Speakers2026/sameeksha-sarkar.webp',
        bio: 'SARKAR is a singer-songwriter redefining the indie-pop landscape with her unique fusion of regional sounds, Afrobeat and contemporary music. She uses music as a medium to tell her stories, expressing emotions and experiences through her distinctive sound. Rising to popularity with her viral hit “Udi Udi,” she has secured a place on the Billboard India charts and Spotify India’s Top 50. A finalist on I-Popstar Volume 2, she continues to showcase her musical versatility through original tracks like Bhediya, Mixed Signals and Jugni. While pursuing a career in medicine, she continues to follow her passion for music, proving that extraordinary journeys are not defined by a single path but by the courage to explore multiple passions.',
    },
];

function SpeakerEntry({ name, tag, img, bio, index }) {
    return (
        <li
            className="grid gap-6 border-t pt-8 md:grid-cols-12 md:gap-8 md:pt-10"
            style={{ borderColor: RULE }}
        >
            <div
                className="relative overflow-hidden border md:col-span-4"
                style={{ aspectRatio: '4 / 5', borderColor: RULE, backgroundColor: '#0d0d0d' }}
            >
                <img
                    src={asset(img)}
                    alt={name}
                    loading={index < 2 ? 'eager' : 'lazy'}
                    decoding="async"
                    className="h-full w-full object-cover object-top"
                />
            </div>

            <div className="md:col-span-8 md:pt-2">
                <p
                    className="font-mono text-[10px] uppercase tracking-[0.2em] md:text-[11px]"
                    style={{ color: MUTED }}
                >
                    <span className="tabular-nums" style={{ color: RED }}>
                        {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="mx-2">/</span>
                    {tag}
                </p>
                <h2
                    className="mt-3 font-['Anton'] uppercase leading-[0.9] tracking-[0.01em] text-white"
                    style={{ fontSize: 'clamp(2rem, 6vw, 4.5rem)' }}
                >
                    {name}
                </h2>
                {bio ? (
                    <p
                        className="mt-6 max-w-prose text-pretty font-body text-sm leading-relaxed md:text-base"
                        style={{ color: '#c9c7c2' }}
                    >
                        {bio}
                    </p>
                ) : (
                    <p
                        className="mt-6 font-mono text-[10px] uppercase tracking-[0.2em]"
                        style={{ color: MUTED }}
                    >
                        Profile to follow
                    </p>
                )}
            </div>
        </li>
    );
}

export default function Speaker() {
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

            <main className="relative mx-auto w-full max-w-[1440px] px-5 pb-28 md:px-10">
                <h1 className="sr-only">Speakers</h1>

                <div className="grid gap-5 md:grid-cols-12 md:items-end md:gap-8">
                    <p
                        className="max-w-prose text-pretty font-body text-sm leading-relaxed md:col-span-7 md:text-base"
                        style={{ color: '#c9c7c2' }}
                    >
                        The voices on the TEDxTIET 2026 stage, and the stories they bring
                        with them.
                    </p>
                    <p
                        className="font-mono text-[10px] uppercase tracking-[0.2em] md:col-span-5 md:text-right md:text-[11px]"
                        style={{ color: MUTED }}
                    >
                        {speakers.length} speakers
                    </p>
                </div>

                <ul className="mt-10 flex list-none flex-col gap-12 md:mt-14 md:gap-16">
                    {speakers.map((s, i) => (
                        <SpeakerEntry key={s.name} {...s} index={i} />
                    ))}
                </ul>

                <div
                    className="mt-16 flex flex-col gap-3 border-t pt-6 font-mono text-[10px] uppercase tracking-[0.2em] sm:flex-row sm:items-center sm:justify-between md:mt-24"
                    style={{ borderColor: RULE, color: MUTED }}
                >
                    <p>Want to propose a speaker?</p>
                    <a
                        href="mailto:tedx@thapar.edu"
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
            </main>
        </div>
    );
}
