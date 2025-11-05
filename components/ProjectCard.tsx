import Image from "next/image"
import { Card, CardContent, CardFooter } from "./ui/card"
import { Badge } from "./ui/badge"
import { ArrowRight, ExternalLink, Github, AlertCircle, Sparkles, Wrench } from "lucide-react"
import { Button } from "./ui/button"
import Link from "next/link"
import { Project } from "@/lib/hardcoded"
import { cn } from "@/lib/utils"

export const ProjectCard = ({ project }: { project: Project }) => {
    const getStatusConfig = (status: Project['status']) => {
        switch (status) {
            case 'Active':
                return {
                    color: 'bg-green-500/90 hover:bg-green-500',
                    text: 'Active',
                    icon: Sparkles
                }
            case 'Paused':
                return {
                    color: 'bg-yellow-500/90 hover:bg-yellow-500',
                    text: 'Paused',
                    icon: AlertCircle
                }
            case 'Discontinued':
                return {
                    color: 'bg-red-500/90 hover:bg-red-500',
                    text: 'Discontinued',
                    icon: AlertCircle
                }
            default:
                return {
                    color: 'bg-slate-500/90 hover:bg-slate-500',
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
                "bg-gradient-to-br p-0 from-slate-800/50 to-slate-900/50 backdrop-blur-sm border-slate-700/50 overflow-hidden group transition-all duration-300 h-full flex flex-col",
                project.status === 'Active' && "hover:border-violet-500/50 hover:shadow-xl hover:shadow-violet-500/10",
                project.status === 'Paused' && "hover:border-yellow-500/50 hover:shadow-xl hover:shadow-yellow-500/10 opacity-90",
                project.status === 'Discontinued' && "hover:border-red-500/50 hover:shadow-xl hover:shadow-red-500/10 opacity-75"
            )}
        >
            {/* Image container with overlay */}
            <div className="relative aspect-video w-full overflow-hidden">
                <Image
                    src={project.image || '/assets/joyboy.jpg'}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent opacity-80"></div>

                {/* Top badges row */}
                <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
                    <Badge className="bg-violet-600/90 hover:bg-violet-600 text-white border-0">
                        {project.category}
                    </Badge>

                    {/* Status Badge */}
                    <Badge className={cn(statusConfig.color, "text-white border-0 flex items-center gap-1")}>
                        <StatusIcon className="w-3 h-3" />
                        {statusConfig.text}
                    </Badge>
                </div>

                {/* Right side badges */}
                <div className="absolute top-4 right-4 flex flex-col gap-2">
                    {project.featured && (
                        <Badge className="bg-amber-500/90 hover:bg-amber-500 text-white border-0 flex items-center gap-1">
                            <Sparkles className="w-3 h-3" />
                            Featured
                        </Badge>
                    )}

                    {project.inDevelopment && (
                        <Badge className="bg-blue-500/90 hover:bg-blue-500 text-white border-0 flex items-center gap-1">
                            <Wrench className="w-3 h-3" />
                            In Dev
                        </Badge>
                    )}

                    {project.rebranding && (
                        <Badge className="bg-purple-500/90 hover:bg-purple-500 text-white border-0">
                            Rebranding
                        </Badge>
                    )}
                </div>

                {/* Section badges at bottom */}
                <div className="absolute bottom-4 left-4 flex gap-2 flex-wrap">
                    {project.section.map((sec, i) => (
                        <Badge
                            key={i}
                            variant="outline"
                            className="bg-slate-900/80 border-slate-600/50 text-slate-300 text-xs"
                        >
                            {sec}
                        </Badge>
                    ))}
                </div>
            </div>

            <CardContent className="p-6 flex-grow">
                <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-violet-300 transition-colors">
                        {project.title}
                    </h3>
                    {project.demoUrl && (
                        <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-400 hover:text-violet-400 transition-colors"
                            title="View Live Demo"
                        >
                            <ExternalLink className="w-5 h-5" />
                        </a>
                    )}
                </div>

                <p className="text-slate-400 mb-4 line-clamp-3 text-sm leading-relaxed">
                    {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.slice(0, 6).map((tag: string, i: number) => (
                        <span
                            key={i}
                            className="px-2 py-1 bg-slate-800/80 border border-slate-700/50 rounded-full text-violet-300 text-xs hover:bg-slate-700/80 transition-colors"
                        >
                            {tag}
                        </span>
                    ))}
                    {project.tags.length > 6 && (
                        <span className="px-2 py-1 bg-slate-800/80 border border-slate-700/50 rounded-full text-slate-400 text-xs">
                            +{project.tags.length - 6} more
                        </span>
                    )}
                </div>
            </CardContent>

            <CardFooter className="w-full bg-slate-800/30 backdrop-blur-sm border-t border-slate-700/50 p-4 flex justify-between gap-2">
                {project.githubUrl && (
                    <Button
                        variant="outline"
                        size="sm"
                        className="border-slate-700/50 text-slate-300 hover:bg-slate-800/50 hover:border-violet-500/50 hover:text-violet-300 transition-all"
                        asChild
                    >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-2" />
                            Code
                        </a>
                    </Button>
                )}

                {project.demoUrl && (
                    <Button
                        variant="outline"
                        size="sm"
                        className="border-slate-700/50 text-slate-300 hover:bg-slate-800/50 hover:border-blue-500/50 hover:text-blue-300 transition-all"
                        asChild
                    >
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live
                        </a>
                    </Button>
                )}

                <Button
                    size="sm"
                    className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white border-0 shadow-md shadow-violet-500/20 ml-auto transition-all"
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