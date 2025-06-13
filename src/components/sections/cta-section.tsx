import { ArrowRight, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto relative rounded-2xl overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 to-black" />
          
          {/* Animated particle background */}
          <div className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: "radial-gradient(circle at center, rgba(255, 80, 80, 0.4) 1px, transparent 1px)",
              backgroundSize: "24px 24px"
            }}
          />
          
          {/* Glow effect */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-red-500/20 rounded-full blur-[100px]" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-orange-500/20 rounded-full blur-[100px]" />
          
          {/* Content */}
          <div className="relative z-10 p-12 md:p-16 text-center">
            <Terminal className="h-12 w-12 mx-auto mb-6 text-red-500" />
            
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
              Ready to Transform Your Coding Experience?
            </h2>
            
            <p className="text-lg text-neutral-400 mb-8 max-w-2xl mx-auto">
              Join thousands of developers who have elevated their programming workflow with our AI-powered tools.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 border-0 h-12 px-8 text-base rounded-md">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="h-12 px-8 text-base rounded-md border-neutral-700 bg-neutral-800/50 backdrop-blur-sm hover:bg-neutral-700/50">
                View Pricing
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}