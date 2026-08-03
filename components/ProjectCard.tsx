import Image from "next/image"
import { Card, CardContent, CardFooter } from "./ui/card"
import { Badge } from "./ui/badge"
import { ArrowRight, ExternalLink, Github, AlertCircle, Sparkles, Wrench } from "lucide-react"
import { Button } from "@/components/retroui/Button" // Use RetroUI Button
import Link from "next/link"
import { Project } from "@/lib/hardcoded"
import { cn } from "@/lib/utils"

export const ProjectCard = ({ project }: { project: Project }) => {
    const getStatusConfig = (status: Project['status']) => {
        switch (status) {
            case 'Active':
                return {
                    color: 'bg-green-100 text-green-800 border-green-800',
                    text: 'Active',
                    icon: Sparkles
                }
            case 'Paused':
                return {
                    color: 'bg-yellow-100 text-yellow-800 border-yellow-800',
                    text: 'Paused',
                    icon: AlertCircle
                }
            case 'Discontinued':
                return {
                    color: 'bg-red-100 text-red-800 border-red-800',
                    text: 'Discontinued',
                    icon: AlertCircle
                }
            default:
                return {
                    color: 'bg-gray-100 text-gray-800 border-gray-800',
                    text: status,
                    icon: AlertCircle
                }
        }
    }

    const statusConfig = getStatusConfig(project.status)
    const StatusIcon = statusConfig.icon

    return (
        <Card
            className={cn(
                "bg-card border border-border p-0 overflow-hidden group h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
            )}
        >
            {/* Image container */}
            <div className="relative aspect-video w-full overflow-hidden border-b border-border">
                <Image
                    src={project.image || '/assets/joyboy.jpg'}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Overlay pattern (optional retro feel) */}
                <div className="absolute inset-0 bg-background/10 group-hover:bg-transparent transition-colors"></div>

                {/* Top badges row */}
                <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
                    <Badge className="bg-primary text-primary-foreground border-transparent rounded-sm px-2 py-0.5 font-mono">
                        {project.category}
                    </Badge>

                    {/* Status Badge */}
                    <Badge className={cn(statusConfig.color, "border-transparent rounded-sm px-2 py-0.5 flex items-center gap-1 font-mono")}>
                        <StatusIcon className="w-3 h-3" />
                        {statusConfig.text}
                    </Badge>
                </div>

                {/* Right side badges */}
                <div className="absolute top-4 right-4 flex flex-col gap-2">
                    {project.featured && (
                        <Badge className="bg-secondary text-secondary-foreground border-transparent flex items-center gap-1 rounded-sm font-mono">
                            <Sparkles className="w-3 h-3" />
                            Featured
                        </Badge>
                    )}
                </div>
            </div>

            <CardContent className="p-6 flex-grow flex flex-col">
                <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-sans text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                    </h3>
                    {project.demoUrl && (
                        <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-primary transition-colors p-1"
                            title="View Live Demo"
                        >
                            <ExternalLink className="w-5 h-5" />
                        </a>
                    )}
                </div>

                <p className="text-muted-foreground mb-6 line-clamp-3 text-sm leading-relaxed">
                    {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.slice(0, 6).map((tag: string, i: number) => (
                        <span
                            key={i}
                            className="px-2 py-1 bg-background border border-border text-foreground text-xs font-mono"
                        >
                            {tag}
                        </span>
                    ))}
                    {project.tags.length > 6 && (
                        <span className="px-2 py-1 bg-muted border border-border text-muted-foreground text-xs font-mono">
                            +{project.tags.length - 6} more
                        </span>
                    )}
                </div>
            </CardContent>

            <CardFooter className="w-full bg-background border-t border-border p-4 flex justify-between gap-3">
                {project.githubUrl && (
                    <Button
                        variant="outline"
                        size="sm"
                        className="bg-transparent border-border text-foreground hover:bg-muted font-sans"
                        asChild
                    >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-2" />
                            Code
                        </a>
                    </Button>
                )}

                <Button
                    size="sm"
                    className="ml-auto font-sans"
                    asChild
                >
                    <Link href={`/projects/${project.id}`}>
                        Details
                        <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    )
}