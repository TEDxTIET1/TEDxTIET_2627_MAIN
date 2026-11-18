import React, { useState, useEffect } from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { BOARD_LEFT, BOARD_RIGHT, COMMITTEE_LEFT, COMMITTEE_RIGHT } from '../data/team';

/**
 * Team.
 *
 * Everyone appears once. The scrolling 3D strip of board photos that used to
 * open the page showed the board a second time above the board itself, so it
 * is gone. The Executive Board is shown with its photos always visible; the
 * Executive Committee is a list of names on desktop whose photo appears on
 * hover, and a photo grid on phones, which have no hover.
 *
 * Cards are in the same language as the alumni page: square corners, a
 * hairline frame, Anton names, IBM Plex Mono roles.
 */

const RED = '#eb0028';
const RULE = '#232323';
const MUTED = '#8a8a8a';

// the data keeps two columns for the committee's desktop zig-zag; the board
// reads in one grid, so its columns are woven back together to keep the lead
// organiser and both co-leads at the front
const BOARD = BOARD_LEFT.flatMap((m, i) => (BOARD_RIGHT[i] ? [m, BOARD_RIGHT[i]] : [m]));
const COMMITTEE = [...COMMITTEE_LEFT, ...COMMITTEE_RIGHT];

const PhotoCard = ({ name, role, image, eager }) => (
  <li className="group">
    <div
      className="relative overflow-hidden border"
      style={{ aspectRatio: '3 / 4', borderColor: RULE, backgroundColor: '#0d0d0d' }}
    >
      <img
        src={image}
        alt={name}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
      />
      <span
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-[3px] w-full origin-left scale-x-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100"
        style={{ backgroundColor: RED }}
      />
    </div>
    <p className="mt-3 font-['Anton'] text-base uppercase leading-tight tracking-[0.02em] text-white md:text-lg">
      {name}
    </p>
    {role && (
      <p
        className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em]"
        style={{ color: MUTED }}
      >
        {role}
      </p>
    )}
  </li>
);

const SectionHeading = ({ first, second, count }) => (
  <div
    className="flex items-end justify-between gap-4 border-t pt-6"
    style={{ borderColor: RULE }}
  >
    <h2 className="font-['Anton'] text-5xl uppercase leading-[0.9] tracking-[0.015em] text-white md:text-7xl">
      {first} <span style={{ color: RED }}>{second}</span>
    </h2>
    <p
      className="shrink-0 font-mono text-[10px] uppercase tracking-[0.2em] md:text-[11px]"
      style={{ color: MUTED }}
    >
      {count} members
    </p>
  </div>
);

const ExecutiveBoard = () => (
  <section>
    <SectionHeading first="Executive" second="Board" count={BOARD.length} />
    <ul className="mt-10 grid list-none grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 md:mt-14 md:gap-x-6 lg:grid-cols-5">
      {BOARD.map((m, i) => (
        <PhotoCard key={m.name} {...m} eager={i < 5} />
      ))}
    </ul>
  </section>
);

const ExecutiveCommitteeItem = ({ name, image, side }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageTop, setImageTop] = useState(0);
  const nameRef = React.useRef(null);
  const timeoutRef = React.useRef(null);

  const onEnter = () => {
    if (nameRef.current) {
      const top = nameRef.current.offsetTop + nameRef.current.offsetHeight / 2;
      setImageTop(top);
    }
    timeoutRef.current = setTimeout(() => setIsHovered(true), 100);
  };

  const onLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsHovered(false);
  };

  return (
    <li
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      // reachable from the keyboard too: focus shows the photo as hover does
      tabIndex={0}
      onFocus={onEnter}
      onBlur={onLeave}
      className="group relative flex flex-col border-b px-4 py-8 transition-colors duration-300 hover:bg-[#0d0d0d] focus-visible:bg-[#0d0d0d]"
      style={{ borderColor: RULE }}
    >
      <div className="relative w-fit">
        <p
          ref={nameRef}
          className="z-10 font-['Anton'] text-4xl uppercase tracking-[0.02em] text-white transition-colors group-hover:text-[#eb0028] md:text-5xl"
        >
          {name}
        </p>

        {isHovered && (
          <div
            className={`team-pop pointer-events-none absolute z-[100] h-80 w-64 overflow-hidden border ${side === 'left' ? 'left-full ml-10' : 'right-full mr-10'}`}
            style={{ top: imageTop, transform: 'translateY(-50%)', borderColor: RULE, backgroundColor: RED }}
          >
            <img src={image} alt="" decoding="async" className="h-full w-full object-cover" />
          </div>
        )}
      </div>
    </li>
  );
};

const ExecutiveCommittee = () => (
  <section className="mt-16 md:mt-24">
    <SectionHeading first="Executive" second="Committee" count={COMMITTEE.length} />

    {/* phones: no hover, so the photos show */}
    <ul className="mt-10 grid list-none grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 md:hidden">
      {COMMITTEE.map((m) => (
        <PhotoCard key={m.name} {...m} />
      ))}
    </ul>

    {/* desktop: names, with the photo on hover */}
    <div className="relative mt-6 hidden grid-cols-2 gap-x-24 md:grid">
      <ul className="flex list-none flex-col">
        {COMMITTEE_LEFT.map((m) => (
          <ExecutiveCommitteeItem key={m.name} {...m} />
        ))}
      </ul>
      <ul className="flex list-none flex-col md:mt-[4.5rem]">
        {COMMITTEE_RIGHT.map((m) => (
          <ExecutiveCommitteeItem key={m.name} {...m} />
        ))}
      </ul>
    </div>
  </section>
);

const Team = () => {
  // brief fade-in only; the full-screen splash that used to gate the page
  // duplicated the navbar's TEAM title and blocked content for a second
  const [isIntroActive, setIsIntroActive] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => setIsIntroActive(false), 350);
    return () => clearTimeout(timer);
  }, []);

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

      <main
        className={`relative mx-auto w-full max-w-[1440px] px-5 pb-28 transition-opacity duration-1000 md:px-10 ${isIntroActive ? 'opacity-0' : 'opacity-100'}`}
      >
        {/* the visible page name is the one in the navbar */}
        <h1 className="sr-only">Our Team</h1>

        <ExecutiveBoard />
        <ExecutiveCommittee />

        <div
          className="mt-16 flex flex-col gap-3 border-t pt-6 font-mono text-[10px] uppercase tracking-[0.2em] sm:flex-row sm:items-center sm:justify-between md:mt-24"
          style={{ borderColor: RULE, color: MUTED }}
        >
          <p>Want to join the team?</p>
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
};

export default Team;
