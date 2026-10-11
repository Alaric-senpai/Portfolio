import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: "/private/", // Example: Disallow private routes if any
        },
        sitemap: "https://thecharles.tech/sitemap.xml",
    };
}
