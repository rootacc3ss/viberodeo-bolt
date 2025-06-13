import { Button } from "@/components/ui/button";
import { Terminal, ArrowRight, Zap } from "lucide-react";

export function HeroSection() {
  return (
    <div className="relative overflow-hidden">
      {/* Gradient background effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-red-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/3 w-[600px] h-[600px] bg-orange-500/20 rounded-full blur-[150px]" />
      </div>
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }}
      />

      <div className="container relative z-10 mx-auto px-4 py-24 md:py-32 lg:py-40">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-3 py-1 mb-6 text-sm rounded-full bg-neutral-800/50 backdrop-blur-sm border border-neutral-700/50">
            <Zap size={14} className="mr-2 text-orange-400" />
            <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent font-medium">
              AI-Powered Development Environment
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400">
            Elevate Your Coding Experience with AI
          </h1>
          
          <p className="text-xl md:text-2xl text-neutral-400 mb-12 leading-relaxed">
            Supercharge your programming workflow with AI-assisted coding tools and intelligent prompt generation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 border-0 h-12 px-8 text-base rounded-md">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" className="h-12 px-8 text-base rounded-md border-neutral-700 bg-neutral-900/50 backdrop-blur-sm hover:bg-neutral-800/50">
              <Terminal className="mr-2 h-4 w-4" />
              View Demo
            </Button>
          </div>
        </div>
      </div>
      
      {/* Terminal visualization */}
      <div className="hidden md:block container relative z-10 mx-auto px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-xl overflow-hidden border border-neutral-800 shadow-2xl">
            {/* Terminal header */}
            <div className="bg-neutral-900 px-4 py-3 flex items-center border-b border-neutral-800">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="flex-1 text-center text-sm text-neutral-400">terminal</div>
            </div>
            
            {/* Terminal content */}
            <div className="bg-black p-4 h-64 overflow-hidden">
              <div className="text-green-500 mb-2">$ vibe init my-project</div>
              <div className="text-neutral-400 mb-1">Initializing AI coding environment...</div>
              <div className="text-neutral-400 mb-1">Analyzing your coding patterns...</div>
              <div className="text-neutral-400 mb-1">Setting up personalized prompts...</div>
              <div className="text-white mb-4">✓ vibe.rodeo initialized successfully!</div>
              
              <div className="text-green-500 mb-2">$ vibe suggest</div>
              <div className="text-white mb-1">Generating code suggestions:</div>
              <div className="relative pl-2 border-l-2 border-red-500 bg-neutral-900/50 p-2 mb-2 rounded">
                <span className="text-neutral-300">Try implementing a recursive algorithm to optimize performance</span>
              </div>
              <div className="relative pl-2 border-l-2 border-orange-500 bg-neutral-900/50 p-2 rounded">
                <span className="text-neutral-300">Consider using a memoization pattern to cache results</span>
              </div>
              
              {/* Blinking cursor */}
              <div className="flex items-center mt-4">
                <span className="text-green-500 mr-2">$</span>
                <span className="h-4 w-2 bg-white animate-pulse"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}