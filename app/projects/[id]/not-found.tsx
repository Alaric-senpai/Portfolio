import Link from 'next/link'
import { Button } from '@/components/retroui/Button' // Use RetroUI Button
import { ArrowLeft, Ghost } from 'lucide-react'

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-background border-t border-border">
             {/* Decorative Grid */}
             <div className="fixed inset-0 bg-[linear-gradient(to_right,#2C333A_1px,transparent_1px),linear-gradient(to_bottom,#2C333A_1px,transparent_1px)] opacity-20 bg-[size:40px_40px] -z-10 pointer-events-none"></div>

            <div className="container mx-auto px-4 text-center">
                <div className="max-w-lg mx-auto bg-card border border-border p-12">
                    <div className="mb-6 flex justify-center">
                        <div className="p-6 bg-secondary/10 border border-secondary text-secondary">
                            <Ghost className="w-16 h-16" />
                        </div>
                    </div>
                    <h1 className="text-6xl font-sans text-foreground mb-4">
                        404
                    </h1>
                    <h2 className="text-2xl font-sans text-foreground mb-6 border-b border-border pb-4 inline-block">
                        Project Not Found
                    </h2>
                    <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                        The project you are looking for has been moved, deleted, or never existed in this dimension.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/projects" className="w-full sm:w-auto">
                            <Button className="w-full bg-primary text-primary-foreground border border-primary font-sans h-12 hover:bg-transparent hover:text-primary transition-all">
                                <ArrowLeft className="w-4 h-4 mr-2" />
                                Back to Projects
                            </Button>
                        </Link>
                        <Link href="/" className="w-full sm:w-auto">
                            <Button variant="outline" className="w-full bg-background text-foreground border border-border font-sans h-12 hover:bg-muted transition-all">
                                Go Home
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}