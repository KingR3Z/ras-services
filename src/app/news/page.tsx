"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import InnerPageLayout from "@/components/layout/InnerPageLayout";
import { client } from "@/config/client";
import { useReveal } from "@/hooks/useReveal";

const newsArticles = [
  {
    title: "Why GRP Flat Roofs Are the Smart Choice for Hull Homes",
    excerpt: "GRP fibreglass flat roofs offer a durable, watertight solution that lasts decades. We explain why more Hull homeowners are choosing GRP over traditional felt roofing.",
    date: "15 February 2026",
    author: client.name,
    readTime: "4 min read",
    category: "Property Tips",
    image: "/images/garden-fullwidth-v2.jpg",
    slug: "grp-flat-roofs-hull",
  },
  {
    title: "When to Repoint Your Brickwork — Signs to Look For",
    excerpt: "Crumbling mortar joints can lead to damp and structural issues. Here are the key signs that your brickwork needs professional repointing before small problems become big ones.",
    date: "28 January 2026",
    author: client.name,
    readTime: "5 min read",
    category: "Property Tips",
    image: "/images/philosophy-main-v2.jpg",
    slug: "when-to-repoint-brickwork",
  },
  {
    title: "Project Spotlight: Full Garden Landscaping in Kingswood",
    excerpt: "A behind-the-scenes look at a complete back garden transformation — from overgrown and unusable to a beautiful low-maintenance family space with patio, raised beds and new fencing.",
    date: "12 January 2026",
    author: client.name,
    readTime: "3 min read",
    category: "Project Spotlights",
    image: "/images/service-patios-v2.jpg",
    slug: "kingswood-garden-spotlight",
  },
  {
    title: "Autumn Garden Maintenance Tips",
    excerpt: "Essential autumn tasks to protect your garden through winter and set the stage for a beautiful spring. From clearing leaves to cutting back, here is our practical guide.",
    date: "18 October 2025",
    author: client.name,
    readTime: "4 min read",
    category: "Garden Tips",
    image: "/images/landscaping-main-v2.jpg",
    slug: "autumn-maintenance-tips",
  },
  {
    title: "Fascia, Soffit & Guttering: What You Need to Know",
    excerpt: "Rotten fascia and blocked guttering can cause serious damage to your home. We explain what to look for, when to replace, and why UPVC is the low-maintenance solution.",
    date: "18 December 2025",
    author: client.name,
    readTime: "4 min read",
    category: "Property Tips",
    image: "/images/service-lawns-v2.jpg",
    slug: "fascia-soffit-guttering-guide",
  },
  {
    title: "Spring Garden Preparation Guide",
    excerpt: "A practical guide to getting your garden ready for the growing season. From clearing winter debris to early planting, everything you need for a great-looking garden this spring.",
    date: "23 May 2025",
    author: client.name,
    readTime: "3 min read",
    category: "Garden Tips",
    image: "/images/service-fencing-v2.jpg",
    slug: "spring-garden-preparation",
  },
];

const categories = ["All Posts", "Property Tips", "Garden Tips", "Project Spotlights"];

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState("All Posts");
  const gridRef = useReveal(".reveal-item");
  const ctaRef = useReveal(".reveal-item");

  const filteredArticles = activeCategory === "All Posts"
    ? newsArticles
    : newsArticles.filter((a) => a.category === activeCategory);

  return (
    <InnerPageLayout>
      {/* Filter Tabs — no hero, starts right at navigation level */}
      <div style={{ marginTop: "100px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${categories.length}, 1fr)`,
            borderBottom: "1px solid #e8e6e1",
          }}
        >
          {categories.map((cat, i) => (
            <button
              key={i}
              onClick={() => setActiveCategory(cat)}
              className="py-5 text-center transition-all duration-300"
              style={{
                fontSize: "clamp(11px, 1vw, 14px)",
                letterSpacing: "0.15em",
                fontWeight: 400,
                fontFamily: "var(--font-body)",
                color: cat === activeCategory ? "var(--charcoal)" : "var(--warm-grey)",
                background: cat === activeCategory ? "#C2D6CF" : "transparent",
                border: "none",
                borderRight: i < categories.length - 1 ? "1px solid #e8e6e1" : "none",
                cursor: "pointer",
                textTransform: "uppercase" as const,
                padding: "20px 8px",
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Article — first article large */}
      {filteredArticles.length > 0 && (
        <section className="bg-white section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-[4/3] overflow-hidden img-hover-zoom">
                <Image
                  src={filteredArticles[0].image}
                  alt={filteredArticles[0].title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div>
                <span
                  className="text-xs tracking-[0.15em] mb-3 block"
                  style={{ color: "var(--sage-dark)" }}
                >
                  {filteredArticles[0].category.toUpperCase()}
                </span>
                <h2
                  className="font-display mb-4"
                  style={{ fontSize: "clamp(26px, 3vw, 38px)", fontWeight: 400, color: "var(--charcoal)", lineHeight: 1.3 }}
                >
                  {filteredArticles[0].title}
                </h2>
                <p className="leading-relaxed mb-4" style={{ color: "var(--warm-grey)", fontSize: "15px" }}>
                  {filteredArticles[0].excerpt}
                </p>
                <div className="flex items-center gap-4 text-xs" style={{ color: "var(--warm-grey)" }}>
                  <span>{filteredArticles[0].author}</span>
                  <span>·</span>
                  <span>{filteredArticles[0].date}</span>
                  <span>·</span>
                  <span>{filteredArticles[0].readTime}</span>
                </div>
                <div className="mt-6">
                  <Link href={`/news/${filteredArticles[0].slug}`} className="btn-secondary">
                    Read Article <span>→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      {filteredArticles.length > 1 && (
        <section ref={gridRef} style={{ background: "var(--cream)" }} className="section-padding">
          <div className="container-custom">
            <h2
              className="reveal-item font-display mb-10"
              style={{ fontSize: "clamp(24px, 2.5vw, 34px)", fontWeight: 400, color: "var(--charcoal)" }}
            >
              Recent Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.slice(1).map((article, i) => (
                <Link
                  key={i}
                  href={`/news/${article.slug}`}
                  className="reveal-item group block"
                >
                  <div className="relative aspect-[3/2] overflow-hidden mb-4 img-hover-zoom">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <span
                    className="text-xs tracking-[0.15em] mb-2 block"
                    style={{ color: "var(--sage-dark)" }}
                  >
                    {article.category.toUpperCase()}
                  </span>
                  <h3
                    className="font-display text-lg mb-2 group-hover:opacity-70 transition-opacity duration-300"
                    style={{ color: "var(--charcoal)", lineHeight: 1.3 }}
                  >
                    {article.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-3" style={{ color: "var(--warm-grey)" }}>
                    {article.excerpt}
                  </p>
                  <div className="flex items-center gap-3 text-xs" style={{ color: "var(--warm-grey)" }}>
                    <span>{article.author}</span>
                    <span>·</span>
                    <span>{article.date}</span>
                    <span>·</span>
                    <span>{article.readTime}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Newsletter CTA */}
      <section ref={ctaRef} className="bg-white section-padding">
        <div className="container-custom text-center">
          <h2
            className="reveal-item font-display mb-4"
            style={{ fontSize: "clamp(26px, 3vw, 38px)", fontWeight: 400, color: "var(--charcoal)", lineHeight: 1.3 }}
          >
            Stay Inspired
          </h2>
          <p className="reveal-item mb-8 mx-auto max-w-md" style={{ color: "var(--warm-grey)", fontSize: "15px" }}>
            Subscribe to receive design insights, project stories, and seasonal garden advice.
          </p>
          <form
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-5 py-3 text-sm rounded-full border focus:outline-none"
              style={{ borderColor: "var(--sage)" }}
            />
            <button
              type="submit"
              className="btn-primary whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </InnerPageLayout>
  );
}
