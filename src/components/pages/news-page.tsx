import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function NewsPage() {
  return (
    <div className="bg-black min-h-screen pt-24">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">
            News
          </h1>
          <p className="text-xl text-neutral-400 mb-12">
            Stay updated with the latest announcements and releases
          </p>
          
          <div className="space-y-16">
            <div className="p-8 border border-neutral-800 rounded-xl bg-neutral-900/50 backdrop-blur-md">
              <h2 className="text-2xl font-bold tracking-tight mb-4">Coming Soon</h2>
              <p className="text-neutral-400 mb-6">
                We're working hard to bring you the latest news and updates. Check back soon!
              </p>
              <Button className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 border-0">
                Back to Home
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}