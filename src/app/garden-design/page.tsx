"use client";

import Image from "next/image";
import Link from "next/link";
import InnerPageLayout from "@/components/layout/InnerPageLayout";
import { client, phoneLink } from "@/config/client";
import PageHero from "@/components/sections/PageHero";
import { useReveal } from "@/hooks/useReveal";

const designProcess = [
  { step: "01", title: "Free Site Visit & Quote", text: "We visit your property, take measurements, discuss your ideas and requirements, and provide an honest, no-obligation quote with no hidden extras." },
  { step: "02", title: "Material Selection", text: "We help you choose the right materials for your project — whether that's block paving colours, patio stone, fencing type, or artificial grass. We bring samples so you can see and feel the options." },
  { step: "03", title: "Preparation & Groundwork", text: "We excavate, level, and prepare the ground properly. Good foundations are everything — we never cut corners on sub-base, drainage, or compaction." },
  { step: "04", title: "Construction & Installation", text: "Our experienced team carries out all the work ourselves — no subcontractors. We keep you updated throughout and leave the site clean and tidy each day." },
  { step: "05", title: "Finishing Touches", text: "From pointing and sealing to edging and final clean-up, we take pride in the small details that make a big difference to the finished result." },
  { step: "06", title: "Final Walkthrough", text: "We walk you through the completed project, make sure you're completely happy, and provide aftercare advice to keep everything looking its best." },
];

export default function GardenDesignPage() {
  const introRef = useReveal(".reveal-item");
  const consultRef = useReveal(".reveal-item");
  const premiumRef = useReveal(".reveal-item");
  const processRef = useReveal(".reveal-item");
  const formRef = useReveal(".reveal-item");

  return (
    <InnerPageLayout>
      <PageHero
        title="Our Services"
        subtitle={`Gardening, roofing & property maintenance across ${client.basedIn}`}
        image="/images/garden-premium-v2.jpg"
      />

      {/* Intro — text left + image right */}
      <section ref={introRef} className="bg-white section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2
                className="reveal-item font-display mb-8"
                style={{
                  fontSize: "clamp(28px, 3vw, 42px)",
                  fontWeight: 300,
                  fontStyle: "italic",
                  color: "var(--charcoal)",
                  lineHeight: 1.3,
                }}
              >
                Professional Property Services in Hull
              </h2>
              <p className="reveal-item mb-5 leading-relaxed" style={{ color: "var(--warm-grey)", fontSize: "15px" }}>
                We provide a complete range of property services across {client.basedIn} and East Yorkshire — from garden maintenance and landscaping to roofing repairs, brickwork repointing, painting, decorating, and general property maintenance. Every job is completed to the highest standard.
              </p>
              <p className="reveal-item mb-5 leading-relaxed" style={{ color: "var(--warm-grey)", fontSize: "15px" }}>
                Richard handles every job personally from start to finish — no subcontractors, no middlemen. We take pride in delivering quality work with attention to detail that keeps our customers coming back.
              </p>
              <p className="reveal-item leading-relaxed" style={{ color: "var(--warm-grey)", fontSize: "15px" }}>
                Whether you need a garden brought back to life, a leaking roof repaired, walls repointed, or your property freshened up with a coat of paint — we bring the same level of care and quality to every job.
              </p>
              <div className="reveal-item mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3"
                  style={{
                    padding: "12px 28px",
                    background: "var(--sage)",
                    color: "var(--charcoal)",
                    fontFamily: "var(--font-body)",
                    fontSize: "14px",
                    fontWeight: 400,
                    borderRadius: "50px",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                  }}
                >
                  Get a Free Quote <span>→</span>
                </Link>
              </div>
            </div>
            <div className="reveal-item relative aspect-[3/4] overflow-hidden">
              <Image
                src="/images/service-driveways-v2.jpg"
                alt="Professional property services"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Full-width image break */}
      <section className="relative" style={{ height: "50vh", minHeight: "350px" }}>
        <Image
          src="/images/garden-fullwidth-v2.jpg"
          alt="Property maintenance work"
          fill
          className="object-cover"
          sizes="100vw"
        />
      </section>

      {/* Initial Consultation — sage bg left + 2 stacked images right */}
      <section ref={consultRef}>
        <div className="grid grid-cols-1 lg:grid-cols-2" style={{ minHeight: "600px" }}>
          <div
            className="flex items-center"
            style={{ background: "#C2D6CF", padding: "clamp(40px, 5vw, 80px)" }}
          >
            <div>
              <h2
                className="reveal-item font-display mb-8"
                style={{
                  fontSize: "clamp(26px, 3vw, 38px)",
                  fontWeight: 300,
                  fontStyle: "italic",
                  color: "var(--charcoal)",
                  lineHeight: 1.3,
                }}
              >
                Gardening & Landscaping
              </h2>
              <p className="reveal-item mb-5 leading-relaxed" style={{ color: "var(--warm-grey)", fontSize: "15px" }}>
                From regular garden maintenance to full landscaping projects, we keep your outdoor spaces looking their best all year round. Lawn care, hedge trimming, planting, clearances and complete garden makeovers.
              </p>
              <p className="reveal-item mb-5 leading-relaxed" style={{ color: "var(--warm-grey)", fontSize: "15px" }}>
                We handle everything from simple garden tidy-ups and waste removal to creating new patios, raised beds, fencing and complete garden redesigns. No job is too big or small.
              </p>
              <p className="reveal-item leading-relaxed" style={{ color: "var(--warm-grey)", fontSize: "15px" }}>
                Whether you need a one-off clearance or regular maintenance, we provide a reliable, professional service at competitive prices.
              </p>
            </div>
          </div>
          <div className="reveal-item" style={{ padding: "clamp(20px, 3vw, 40px)" }}>
            <div className="space-y-5 h-full flex flex-col justify-center">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/garden-consultation-v2.jpg"
                  alt="Garden design consultation"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/service-patios-v2.jpg"
                  alt="Contemporary courtyard design"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Design — reversed: 2 stacked images left + sage bg right */}
      <section ref={premiumRef}>
        <div className="grid grid-cols-1 lg:grid-cols-2" style={{ minHeight: "600px" }}>
          <div className="reveal-item" style={{ padding: "clamp(20px, 3vw, 40px)" }}>
            <div className="space-y-5 h-full flex flex-col justify-center">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/garden-premium-v2.jpg"
                  alt="Premium garden design"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/service-lawns-v2.jpg"
                  alt="Garden design detail"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
          <div
            className="flex items-center"
            style={{ background: "#C2D6CF", padding: "clamp(40px, 5vw, 80px)" }}
          >
            <div>
              <h2
                className="reveal-item font-display mb-8"
                style={{
                  fontSize: "clamp(26px, 3vw, 38px)",
                  fontWeight: 300,
                  fontStyle: "italic",
                  color: "var(--charcoal)",
                  lineHeight: 1.3,
                }}
              >
                Roofing, Brickwork & Property Maintenance
              </h2>
              <p className="reveal-item mb-5 leading-relaxed" style={{ color: "var(--warm-grey)", fontSize: "15px" }}>
                We carry out all types of roofing repairs — from replacing broken tiles and fixing leaks to full GRP fibreglass flat roofs using Res Tec and Flexitec systems. Professional results with a watertight guarantee.
              </p>
              <p className="reveal-item mb-5 leading-relaxed" style={{ color: "var(--warm-grey)", fontSize: "15px" }}>
                Our brickwork and repointing service restores walls, chimneys and boundary walls to their best. We also handle painting and decorating — both interior and exterior — to keep your property looking fresh.
              </p>
              <p className="reveal-item mb-5 leading-relaxed" style={{ color: "var(--warm-grey)", fontSize: "15px" }}>
                Fascia, soffit and guttering replacement, general property maintenance and odd jobs — we offer a complete service to keep your home in top condition all year round.
              </p>
              <p className="reveal-item leading-relaxed" style={{ color: "var(--warm-grey)", fontSize: "15px" }}>
                One tradesman, one phone call — RAS Services covers it all so you don&apos;t have to juggle multiple contractors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Garden Design Process — 6 numbered steps */}
      <section ref={processRef} className="bg-white section-padding">
        <div className="container-custom">
          <h2
            className="reveal-item font-display mb-16 text-center"
            style={{
              fontSize: "clamp(28px, 3vw, 42px)",
              fontWeight: 300,
              fontStyle: "italic",
              color: "var(--charcoal)",
              lineHeight: 1.3,
            }}
          >
            How We Work
          </h2>
          <div className="max-w-3xl mx-auto">
            {designProcess.map((item, i) => (
              <div
                key={i}
                className="reveal-item grid grid-cols-[40px_1fr] sm:grid-cols-[60px_1fr] gap-4 sm:gap-6 items-start"
                style={{
                  paddingBottom: i < designProcess.length - 1 ? "clamp(32px, 4vw, 48px)" : "0",
                  marginBottom: i < designProcess.length - 1 ? "clamp(32px, 4vw, 48px)" : "0",
                  borderBottom: i < designProcess.length - 1 ? "1px solid #e8e6e1" : "none",
                }}
              >
                <p
                  className="font-display"
                  style={{
                    fontSize: "clamp(28px, 3vw, 40px)",
                    fontWeight: 300,
                    color: "var(--sage-dark)",
                    lineHeight: 1,
                  }}
                >
                  {item.step}
                </p>
                <div>
                  <h3
                    className="font-display mb-3"
                    style={{ fontSize: "clamp(18px, 1.5vw, 22px)", fontWeight: 400, color: "var(--charcoal)" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--warm-grey)" }}>
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Form Section */}
      <section ref={formRef} style={{ background: "#8A9A84" }} className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <h2
                className="reveal-item font-display mb-6"
                style={{
                  fontSize: "clamp(28px, 3.5vw, 42px)",
                  fontWeight: 300,
                  fontStyle: "italic",
                  color: "var(--white)",
                  lineHeight: 1.3,
                }}
              >
                Ready to Transform Your Outdoor Space?
              </h2>
              <p
                className="reveal-item mb-6 leading-relaxed"
                style={{ color: "rgba(255,255,255,0.8)", fontSize: "15px" }}
              >
                Get in touch for a free, no-obligation site visit and quote. We&apos;ll discuss your ideas, show you material options, and give you a clear price — no hidden extras, no pressure.
              </p>
              <p className="reveal-item mt-6">
                <a
                  href={phoneLink}
                  className="font-display"
                  style={{
                    color: "var(--white)",
                    fontSize: "clamp(18px, 2vw, 24px)",
                    textDecoration: "underline",
                    textUnderlineOffset: "4px",
                  }}
                >
                  {client.phone}
                </a>
              </p>
            </div>
            <div className="reveal-item">
              <p
                className="font-display mb-12"
                style={{
                  fontSize: "clamp(20px, 2vw, 26px)",
                  fontWeight: 300,
                  fontStyle: "italic",
                  color: "var(--white)",
                  lineHeight: 1.4,
                }}
              >
                Request your free quote today.
              </p>
              <form style={{ display: "flex", flexDirection: "column", gap: "28px" }} onSubmit={(e) => e.preventDefault()}>
                {/* Row 1: First name / Last name */}
                <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: "24px" }}>
                  <div>
                    <label className="block" style={{ color: "#FFFFFF", fontSize: "14px", marginBottom: "10px" }}>First name <span style={{ opacity: 0.6 }}>*</span></label>
                    <input type="text" className="w-full px-5 text-base focus:outline-none focus:ring-2 focus:ring-white/30" style={{ background: "rgba(255,255,255,0.95)", border: "none", color: "#2C2C2C", borderRadius: "6px", height: "56px" }} />
                  </div>
                  <div>
                    <label className="block" style={{ color: "#FFFFFF", fontSize: "14px", marginBottom: "10px" }}>Last name <span style={{ opacity: 0.6 }}>*</span></label>
                    <input type="text" className="w-full px-5 text-base focus:outline-none focus:ring-2 focus:ring-white/30" style={{ background: "rgba(255,255,255,0.95)", border: "none", color: "#2C2C2C", borderRadius: "6px", height: "56px" }} />
                  </div>
                </div>

                {/* Row 2: Phone / Postcode */}
                <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: "24px" }}>
                  <div>
                    <label className="block" style={{ color: "#FFFFFF", fontSize: "14px", marginBottom: "10px" }}>Phone <span style={{ opacity: 0.6 }}>*</span></label>
                    <div className="flex" style={{ height: "56px" }}>
                      <div className="flex items-center gap-1.5 px-4 shrink-0" style={{ background: "rgba(255,255,255,0.88)", borderRight: "1px solid #ddd", borderRadius: "6px 0 0 6px", color: "#2C2C2C", fontSize: "14px" }}>
                        <span>🇬🇧</span>
                        <span style={{ fontSize: "10px", color: "#888" }}>&#9662;</span>
                      </div>
                      <input type="tel" className="w-full px-5 text-base focus:outline-none focus:ring-2 focus:ring-white/30" style={{ background: "rgba(255,255,255,0.95)", border: "none", color: "#2C2C2C", borderRadius: "0 6px 6px 0" }} />
                    </div>
                  </div>
                  <div>
                    <label className="block" style={{ color: "#FFFFFF", fontSize: "14px", marginBottom: "10px" }}>Postcode <span style={{ opacity: 0.6 }}>*</span></label>
                    <input type="text" className="w-full px-5 text-base focus:outline-none focus:ring-2 focus:ring-white/30" style={{ background: "rgba(255,255,255,0.95)", border: "none", color: "#2C2C2C", borderRadius: "6px", height: "56px" }} />
                  </div>
                </div>

                {/* Row 3: Email / Service */}
                <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: "24px" }}>
                  <div>
                    <label className="block" style={{ color: "#FFFFFF", fontSize: "14px", marginBottom: "10px" }}>Email <span style={{ opacity: 0.6 }}>*</span></label>
                    <input type="email" className="w-full px-5 text-base focus:outline-none focus:ring-2 focus:ring-white/30" style={{ background: "rgba(255,255,255,0.95)", border: "none", color: "#2C2C2C", borderRadius: "6px", height: "56px" }} />
                  </div>
                  <div>
                    <label className="block" style={{ color: "#FFFFFF", fontSize: "14px", marginBottom: "10px" }}>What service are you looking for?</label>
                    <select className="w-full px-5 text-base focus:outline-none focus:ring-2 focus:ring-white/30 appearance-none" style={{ background: "rgba(255,255,255,0.95)", border: "none", color: "#2C2C2C", borderRadius: "6px", height: "56px", backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%23666' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`, backgroundRepeat: "no-repeat", backgroundPosition: "right 16px center", paddingRight: "44px" }}>
                      <option value="">Select...</option>
                      <option value="gardening">Gardening &amp; Landscaping</option>
                      <option value="roofing">Roofing &amp; GRP</option>
                      <option value="brickwork">Brickwork &amp; Repointing</option>
                      <option value="painting">Painting &amp; Decorating</option>
                      <option value="fascia">Fascia, Soffit &amp; Guttering</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Submit */}
                <div style={{ marginTop: "20px" }}>
                  <button
                    type="submit"
                    className="w-full text-sm tracking-wide transition-all duration-300 hover:opacity-90"
                    style={{ background: "#D9DDD6", color: "#000000", border: "none", cursor: "pointer", fontSize: "14px", borderRadius: "28px", fontFamily: "var(--font-body)", fontWeight: 400, height: "56px" }}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </InnerPageLayout>
  );
}
