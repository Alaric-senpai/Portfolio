import { projects } from "@/lib/hardcoded"
import { MetadataRoute } from "next"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

    const projs = projects.map((p) => {
        return {
            url: `https://devcharles.me/projects/${p.id}`,
            priority: 1

        }
    })

    return [
        {
            url: 'https://devcharles.me',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1
        },
        {
            url: 'https://devcharles.me/about',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8
        },
        {
            url: 'https://devcharles.me/projects',
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9
        },
        {
            url: 'https://devcharles.me/skills',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8
        },
        {
            url: 'https://devcharles.me/contact',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.7
        },
        ...projs
    ]
}