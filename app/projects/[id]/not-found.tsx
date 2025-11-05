import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Search } from 'lucide-react'

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-20 left-10 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            <div className="container mx-auto px-4 text-center">
                <div className="max-w-md mx-auto">
                    <div className="text-8xl mb-4">🔍</div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Project Not Found
                    </h1>
                    <p className="text-xl text-slate-300 mb-8">
                        Sorry, the project you're looking for doesn't exist or has been removed.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/projects">
                            <Button className="bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600 text-white">
                                <ArrowLeft className="w-4 h-4 mr-2" />
                                Back to Projects
                            </Button>
                        </Link>
                        <Link href="/">
                            <Button variant="outline" className="border-violet-500/20 text-violet-400 hover:bg-violet-500/10">
                                Go Home
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}