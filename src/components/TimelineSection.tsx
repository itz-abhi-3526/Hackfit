import React from "react";
import { AnimatedSection } from "./AnimatedSection";
import "../SectionStyles.css";

interface TimelineItem {
  phase: string;
  title: string;
  body: string;
  accent?: "lime" | "cyan";
}

const items: TimelineItem[] = [
  {
    phase: "Phase 1",
    title: "Registration Opens",
    body: "Form your crew, pick a track, and get your repo ready.",
    accent: "lime",
  },
  {
    phase: "Phase 2",
    title: "Shortlisting",
    body: "Top teams advance with mentor feedback and checkpoints.",
    accent: "cyan",
  },
  {
    phase: "Phase 3",
    title: "Hackfit Weekend",
    body: "48 hours of building, shipping, and demoing to the jury.",
    accent: "lime",
  },
];

const TimelineSection: React.FC = () => {
  return (
    <section className="timeline-section section-dither py-16 sm:py-20 px-4 sm:px-6 md:px-10 relative">
      <div className="timeline-line" aria-hidden />
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 sm:mb-14 text-center">
          <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-sage/70 font-[progress] mb-3">
            Execution Plan
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-[progress]">
            How Hackfit unfolds
          </h2>
        </div>

        <div className="timeline-items">
          {items.map((item, idx) => (
            <div
              key={item.title}
              className={`timeline-item timeline-item-${idx % 2 === 0 ? "left" : "right"}`}
            >
              <span className="timeline-node" aria-hidden />
              <AnimatedSection
                animationType={idx % 2 === 0 ? "slideInLeft" : "slideInRight"}
                threshold={0.15}
              >
                <div className="timeline-card">
                  <div className="timeline-meta">{item.phase}</div>
                  <h3 className="timeline-title">
                    <span
                      className={
                        item.accent === "cyan"
                          ? "text-cyan-200"
                          : "text-lime-200"
                      }
                    >
                      {item.title}
                    </span>
                  </h3>
                  <p className="timeline-body">{item.body}</p>
                </div>
              </AnimatedSection>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
