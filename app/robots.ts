import type { MetadataRoute } from "next";
import { canonicalBase } from "./lib/site";

export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: "*", allow: "/" }, sitemap: `${canonicalBase}/sitemap.xml` };
}
