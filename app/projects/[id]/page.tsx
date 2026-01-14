import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { projects } from '@/lib/hardcoded'
import ProjectDetailClient from './ProjectDetailClient'

type Props = {
    params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id } = await params;
    const project = projects.find(p => p.id === parseInt(id))

    if (!project) {
        return {
            title: 'Project Not Found',
            description: 'The requested project could not be found.',
        }
    }

    return {
        title: `${project.title} | DevCharles Portfolio`,
        description: project.description,
        keywords: [...project.tags, project.category, 'portfolio', 'web development', 'software engineering'].join(', '),
        authors: [{ name: 'Charles Kahuho', url: 'https://devcharles.me' }],
        creator: 'Charles Kahuho',
        openGraph: {
            title: project.title,
            description: project.description,
            type: 'website',
            url: `https://devcharles.me/projects/${project.id}`,
            images: [
                {
                    url: project.image,
                    width: 1200,
                    height: 630,
                    alt: project.title,
                },
            ],
            siteName: 'DevCharles Portfolio',
        },
        twitter: {
            card: 'summary_large_image',
            title: project.title,
            description: project.description,
            images: [project.image],
            site: '@devcharles',
            creator: '@devcharles',
        },
        alternates: {
            canonical: `https://devcharles.me/projects/${project.id}`,
        },
    }
}

export async function generateStaticParams() {
    return projects.map((project) => ({
        id: project.id.toString(),
    }))
}

export default async function ProjectDetailPage({ params }: Props) {
    const { id } = await params;
    const project = projects.find(p => p.id === parseInt(id))

    if (!project) {
        notFound()
    }

    // Generate JSON-LD structured data for SEO
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: project.title,
        description: project.description,
        url: project.demoUrl || project.githubUrl,
        applicationCategory: project.category,
        operatingSystem: 'Any',
        author: {
            '@type': 'Person',
            name: 'Charles Kahuho',
            url: 'https://devcharles.me',
        },
        dateCreated: '2024-01-01', // You can add actual dates to your project data
        keywords: project.tags.join(', '),
        ...(project.demoUrl && {
            offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'USD',
            },
        }),
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <ProjectDetailClient project={project} />
        </>
    )
}