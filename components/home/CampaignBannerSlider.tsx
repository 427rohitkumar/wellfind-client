"use client";

import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useTutorEnquiryModal } from "@/components/inquiry/modal/TutorEnquiryModalContext";
import { getWhatsAppUrl } from "@/config/site";

interface Slide {
  id: string;
  eyebrow: string;
  title: React.ReactNode;
  points: string[];
  ctaLabel: string;
  /** "modal" opens the tutor enquiry modal; "whatsapp" opens WhatsApp with a prefilled message. */
  cta: { type: "modal" } | { type: "whatsapp"; message: string };
  image: { src: string; alt: string; width: number; height: number };
  /** Slide background (solid, brand-tinted). */
  bg: string;
  /** Extra classes for the image wrapper (e.g. fade mask for opaque images). */
  fadeImage?: boolean;
  /** Phone-only position/size of the image (default crops the cutout off the right edge). */
  mobileImageClass?: string;
}

const SLIDES: Slide[] = [
  {
    id: "board-exam-2027",
    eyebrow: "Class 10 & 12 · Board 2027",
    title: (
      <>
        Board Exam Prep with the{" "}
        <span className="text-[#35D0BA]">Right Tutor</span>
      </>
    ),
    points: ["Subject-wise tutors", "Revision", "Doubt solving", "Exam practice"],
    ctaLabel: "Find a Tutor Now",
    cta: { type: "modal" },
    image: {
      src: "/Board-Exame-Prep.png",
      alt: "Class 10 student preparing for Board Exam 2027",
      width: 1536,
      height: 1024,
    },
    bg: "#101D36",
    fadeImage: true,
    // The whole student must stay visible on phones, so don't push this image off-screen.
    mobileImageClass: "right-0 h-[76%]",
  },
  {
    id: "coding-and-ai",
    eyebrow: "Online Live Classes",
    title: (
      <>
        Learn <span className="text-[#35D0BA]">Coding</span> &amp; AI
      </>
    ),
    points: ["Python", "Web Development", "AI Tools", "Projects & mentor support"],
    ctaLabel: "Join Live Class",
    cta: {
      type: "whatsapp",
      message:
        "Hi Wellfind Academic, I would like to join the Coding & AI live class.",
    },
    image: {
      src: "/coding-ai.png",
      alt: "Student learning coding and AI in an online live class",
      width: 1774,
      height: 887,
    },
    bg: "#101D36",
  },
  {
    id: "ai-video-editing",
    eyebrow: "Online Live Classes",
    title: (
      <>
        Learn AI <span className="text-[#35D0BA]">Video Editing</span>
      </>
    ),
    points: ["AI tools", "CapCut", "Premiere Pro", "Reels, Shorts & YouTube"],
    ctaLabel: "Join Live Class",
    cta: {
      type: "whatsapp",
      message:
        "Hi Wellfind Academic, I would like to join the AI Video Editing live class.",
    },
    image: {
      src: "/ai-video-editing-.png",
      alt: "Student editing videos with AI tools in an online live class",
      width: 1774,
      height: 887,
    },
    bg: "#101D36",
  },
];

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function subscribeReducedMotion(onChange: () => void) {
  const mq = window.matchMedia(REDUCED_MOTION_QUERY);
  mq.addEventListener("change", onChange);
  return () => mq.removeEventListener("change", onChange);
}

function getReducedMotion() {
  return window.matchMedia(REDUCED_MOTION_QUERY).matches;
}

const AUTOPLAY_MS = 5500;
/** Pointer must move this far before a press turns into a drag (so taps/clicks still work). */
const DRAG_START_PX = 6;
/** A drag past this share of the slide width (or a quick flick) changes slide. */
const DRAG_COMMIT_RATIO = 0.18;

const ctaClass =
  "inline-flex items-center justify-center gap-1.5 rounded-lg bg-[#35D0BA] px-4 py-2 text-xs font-bold text-[#101D36] shadow-sm transition-colors hover:bg-[#2fc4af] focus:outline-none focus-visible:ring-2 focus-visible:ring-white sm:px-5 sm:py-2.5 sm:text-sm";

export function CampaignBannerSlider() {
  const { openModal } = useTutorEnquiryModal();
  // Seamless infinite loop: the track is [last, ...slides, first]. `pos` is the track
  // position (1..count = real slides); landing on a clone snaps back to the real slide.
  const [pos, setPos] = useState(1);
  const [animate, setAnimate] = useState(true);
  const [paused, setPaused] = useState(false);
  const reducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotion,
    () => false,
  );
  const [dragX, setDragX] = useState(0);
  const [dragging, setDragging] = useState(false);
  const viewportRef = useRef<HTMLDivElement>(null);
  const drag = useRef<{ id: number; startX: number; startT: number; active: boolean } | null>(null);
  const suppressClick = useRef(false);
  const count = SLIDES.length;

  const track = [SLIDES[count - 1], ...SLIDES, SLIDES[0]];
  const index = (pos - 1 + count) % count; // real slide index (for dots)

  const goTo = useCallback((i: number) => {
    setAnimate(true);
    setPos(i + 1);
  }, []);
  const next = useCallback(() => {
    setAnimate(true);
    setPos((p) => Math.min(p + 1, count + 1));
  }, [count]);
  const prev = useCallback(() => {
    setAnimate(true);
    setPos((p) => Math.max(p - 1, 0));
  }, []);

  // After sliding onto a clone, jump (without animation) to the matching real slide.
  useEffect(() => {
    if (pos !== 0 && pos !== count + 1) return;
    const timer = window.setTimeout(
      () => {
        setAnimate(false);
        setPos(pos === 0 ? count : 1);
      },
      reducedMotion ? 0 : 520,
    );
    return () => window.clearTimeout(timer);
  }, [pos, count, reducedMotion]);

  // Re-enable the transition once the snap has been painted.
  useEffect(() => {
    if (animate) return;
    let id2 = 0;
    const id1 = window.requestAnimationFrame(() => {
      id2 = window.requestAnimationFrame(() => setAnimate(true));
    });
    return () => {
      window.cancelAnimationFrame(id1);
      window.cancelAnimationFrame(id2);
    };
  }, [animate]);

  useEffect(() => {
    if (paused || dragging || reducedMotion) return;
    const timer = window.setInterval(next, AUTOPLAY_MS);
    return () => window.clearInterval(timer);
  }, [paused, dragging, reducedMotion, next, pos]);

  // Drag / swipe (mouse and touch). The track follows the pointer; on release it either
  // commits to the next/previous slide or springs back.
  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    if ((e.target as HTMLElement).closest("button")) return;
    // A press on the clone-snap frame would fight the jump; wait for it to finish.
    if (pos === 0 || pos === count + 1) return;
    drag.current = { id: e.pointerId, startX: e.clientX, startT: e.timeStamp, active: false };
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const d = drag.current;
    if (!d || d.id !== e.pointerId) return;
    const dx = e.clientX - d.startX;
    if (!d.active) {
      if (Math.abs(dx) < DRAG_START_PX) return;
      d.active = true;
      e.currentTarget.setPointerCapture(e.pointerId);
      setAnimate(false);
      setDragging(true);
    }
    setDragX(dx);
  };

  const endDrag = (e: React.PointerEvent<HTMLDivElement>, cancelled = false) => {
    const d = drag.current;
    if (!d || d.id !== e.pointerId) return;
    drag.current = null;
    if (!d.active) return;
    suppressClick.current = true;
    window.setTimeout(() => {
      suppressClick.current = false;
    }, 0);

    const dx = e.clientX - d.startX;
    const width = viewportRef.current?.offsetWidth ?? 1;
    const flick = Math.abs(dx) / Math.max(e.timeStamp - d.startT, 1) > 0.5 && Math.abs(dx) > 24;
    const commit = !cancelled && (Math.abs(dx) > width * DRAG_COMMIT_RATIO || flick);

    setDragging(false);
    setDragX(0);
    setAnimate(true);
    if (commit) {
      if (dx < 0) next();
      else prev();
    }
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
  };

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Wellfind Academic programs"
      className="w-full bg-white pb-10 pt-20 sm:pb-12 sm:pt-28 lg:pb-16 lg:pt-40"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          ref={viewportRef}
          className={`group relative touch-pan-y select-none overflow-hidden rounded-2xl border border-[#D7E2EE] shadow-sm ${
            dragging ? "cursor-grabbing" : "cursor-grab"
          }`}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={(e) => endDrag(e, true)}
          onClickCapture={(e) => {
            // A drag that started on a link must not also follow it.
            if (suppressClick.current) {
              e.preventDefault();
              e.stopPropagation();
            }
          }}
          onDragStart={(e) => e.preventDefault()}
          onKeyDown={onKeyDown}
        >
          <div
            className={`flex ${
              animate ? "transition-transform duration-500 ease-out" : ""
            } motion-reduce:transition-none`}
            style={{ transform: `translateX(calc(-${pos * 100}% + ${dragX}px))` }}
            aria-live={paused || reducedMotion ? "polite" : "off"}
          >
            {track.map((slide, i) => {
              const isClone = i === 0 || i === count + 1;
              const realIndex = (i - 1 + count) % count;
              const href =
                slide.cta.type === "whatsapp"
                  ? getWhatsAppUrl(slide.cta.message) ?? "/contact/#inquire"
                  : "/contact/#inquire";

              return (
                <div
                  key={isClone ? `${slide.id}-clone-${i}` : slide.id}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${realIndex + 1} of ${count}`}
                  aria-hidden={i !== pos}
                  // `inert` keeps hidden slides' links out of the tab order
                  inert={i !== pos}
                  className="relative h-[190px] w-full shrink-0 overflow-hidden sm:h-[220px] lg:h-[240px]"
                  style={{ backgroundColor: slide.bg }}
                >
                  {/* Image (right) */}
                  <div
                    className={`pointer-events-none absolute bottom-0 ${
                      slide.mobileImageClass ?? "-right-24 h-[76%]"
                    } sm:-right-4 sm:h-[80%] lg:right-6 lg:h-full ${
                      slide.fadeImage
                        ? "[-webkit-mask-image:linear-gradient(to_right,transparent_0%,#000_40%)] [mask-image:linear-gradient(to_right,transparent_0%,#000_40%)]"
                        : "[-webkit-mask-image:linear-gradient(to_right,transparent_0%,#000_30%)] [mask-image:linear-gradient(to_right,transparent_0%,#000_30%)] lg:[-webkit-mask-image:linear-gradient(to_right,transparent_0%,#000_12%)] lg:[mask-image:linear-gradient(to_right,transparent_0%,#000_12%)]"
                    }`}
                  >
                    <Image
                      src={slide.image.src}
                      alt={slide.image.alt}
                      width={slide.image.width}
                      height={slide.image.height}
                      priority={i === 1}
                      sizes="(max-width: 640px) 300px, 480px"
                      className="h-full w-auto max-w-none object-contain object-bottom"
                    />
                  </div>

                  {/* Text (left) */}
                  <div className="relative z-10 flex h-full max-w-[64%] flex-col justify-center pl-5 pr-2 sm:max-w-[58%] sm:pl-14 lg:max-w-[60%] lg:pl-16">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#35D0BA] sm:text-xs">
                      {slide.eyebrow}
                    </p>
                    <h2 className="mt-1.5 text-[19px] font-extrabold leading-tight tracking-tight text-white sm:mt-2 sm:text-[26px] lg:text-[32px]">
                      {slide.title}
                    </h2>
                    <ul className="mt-2 hidden flex-wrap gap-x-3 gap-y-1 text-xs text-slate-300 sm:flex sm:text-sm">
                      {slide.points.map((p, pi) => (
                        <li key={p} className="flex items-center gap-3">
                          {pi > 0 && (
                            <span
                              aria-hidden="true"
                              className="h-1 w-1 rounded-full bg-slate-500"
                            />
                          )}
                          {p}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-3 sm:mt-4">
                      {slide.cta.type === "modal" ? (
                        <a
                          href={href}
                          data-open-tutor-modal="true"
                          onClick={(e) => {
                            e.preventDefault();
                            openModal();
                          }}
                          className={ctaClass}
                        >
                          {slide.ctaLabel}
                          <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} />
                        </a>
                      ) : (
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={ctaClass}
                        >
                          {slide.ctaLabel}
                          <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Arrows (tablet/desktop) */}
          <button
            type="button"
            onClick={prev}
            aria-label="Previous slide"
            className="absolute left-3 top-1/2 z-20 hidden h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white sm:flex"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next slide"
            className="absolute right-3 top-1/2 z-20 hidden h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white sm:flex"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        {/* Dots */}
        <div className="mt-3 flex items-center justify-center gap-2">
          {SLIDES.map((slide, i) => (
            <button
              key={slide.id}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === index}
              className={`h-1.5 rounded-full transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#35D0BA] ${
                i === index ? "w-6 bg-[#101D36]" : "w-1.5 bg-[#C3D0E0] hover:bg-[#9FB1C8]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
