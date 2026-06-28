import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { OFFERS } from "@/lib/offers";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = [
    "",
    "/vurdering",
    "/om-os",
    "/kontakt",
    "/vilkaar",
    "/privatliv",
    "/ansvarligt-spil",
  ];
  const main = routes.map((path) => ({
    url: `${SITE.url}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.7,
  }));
  const bridge = OFFERS.map((o) => ({
    url: `${SITE.url}/videre/${o.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));
  return [...main, ...bridge];
}
