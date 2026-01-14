import Link from 'next/link'
import { Button } from '@/components/retroui/Button' // Use RetroUI Button
import { ArrowLeft, Ghost } from 'lucide-react'

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-background border-t-2 border-black">
             {/* Decorative Grid */}
             <div className="fixed inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:40px_40px] -z-10 pointer-events-none"></div>

            <div className="container mx-auto px-4 text-center">
                <div className="max-w-lg mx-auto bg-white border-2 border-black p-12 shadow-[12px_12px_0px_0px_black]">
                    <div className="mb-6 flex justify-center">
                        <div className="p-6 bg-secondary border-2 border-black shadow-[6px_6px_0px_0px_black] rotate-6">
                            <Ghost className="w-16 h-16 text-black" />
                        </div>
                    </div>
                    <h1 className="text-6xl font-black text-foreground mb-4 uppercase">
                        404
                    </h1>
                    <h2 className="text-2xl font-bold text-foreground mb-6 uppercase border-b-4 border-black pb-4 inline-block">
                        Project Not Found
                    </h2>
                    <p className="text-xl text-muted-foreground font-bold mb-10 leading-relaxed">
                        The project you are looking for has been moved, deleted, or never existed in this dimension.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/projects" className="w-full sm:w-auto">
                            <Button className="w-full bg-black text-white border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,0.5)] font-black uppercase h-12">
                                <ArrowLeft className="w-4 h-4 mr-2" />
                                Back to Projects
                            </Button>
                        </Link>
                        <Link href="/" className="w-full sm:w-auto">
                            <Button variant="outline" className="w-full bg-white text-black border-2 border-black shadow-[6px_6px_0px_0px_black] font-black uppercase h-12 hover:bg-secondary">
                                Go Home
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}