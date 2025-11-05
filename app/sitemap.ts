import { projects } from "@/lib/hardcoded"
import { MetadataRoute } from "next"

export default async function sitemap():Promise<MetadataRoute.Sitemap>{

    const projs = projects.map((p)=>{
        return {
            url: `https://devcharles.me/projects/${p.id}`,
            priority:1
            
        }
    })

    return [
        {
            url: 'https://devcharles.me',
            priority: 1

        },
        {
            url: 'https://devcharles.me/about',
            priority: 1

        },
        {
            url: 'https://devcharles.me/projects',
            priority: 1

        },
        {
            url: 'https://devcharles.me/skills',
            priority: 1

        },
        {
            url: 'https://devcharles.me/contact',
            priority: 1

        },
        ...projs
    ]
}