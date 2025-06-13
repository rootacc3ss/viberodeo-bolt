import { PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function VideoSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
            See vibe.rodeo in Action
          </h2>
          <p className="text-lg text-neutral-400">
            Watch how our AI-powered tools can revolutionize your coding workflow
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-xl overflow-hidden aspect-video border border-neutral-800 bg-neutral-900 shadow-[0_0_50px_rgba(255,80,80,0.1)]">
            {/* Video thumbnail */}
            <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 to-black opacity-70" />
            
            <div className="absolute inset-0 flex items-center justify-center">
              <Button
                variant="ghost"
                size="icon"
                className="h-20 w-20 rounded-full bg-red-500/20 backdrop-blur-md hover:bg-red-500/30 hover:scale-105 transition-all duration-300"
              >
                <PlayCircle className="h-12 w-12 text-white" />
                <span className="sr-only">Play video</span>
              </Button>
            </div>
            
            {/* Play button label */}
            <div className="absolute bottom-8 left-0 right-0 text-center">
              <p className="text-white text-lg font-medium">Watch the Demo</p>
              <p className="text-neutral-400 text-sm">2:34 min</p>
            </div>
            
            {/* Background pattern */}
            <div className="absolute inset-0">
              <div className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage: "radial-gradient(circle at center, rgba(255, 80, 80, 0.2) 2px, transparent 2px)",
                  backgroundSize: "24px 24px"
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}