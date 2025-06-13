import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    quote: "vibe.rodeo has completely transformed how I approach coding. The AI suggestions are remarkably accurate and save me hours of debugging time.",
    author: "Sarah Johnson",
    role: "Full Stack Developer",
    avatar: "SJ"
  },
  {
    quote: "As a coding instructor, I recommend vibe.rodeo to all my students. It's like having an expert looking over your shoulder at all times.",
    author: "Michael Chen",
    role: "Senior Developer Advocate",
    avatar: "MC"
  },
  {
    quote: "The prompt generation is mind-blowing. It's like the AI knows exactly what I'm trying to build before I've even finished explaining it.",
    author: "Alex Rivera",
    role: "Software Engineer",
    avatar: "AR"
  }
];

export function TestimonialSection() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-red-500/10 to-orange-500/5 rounded-full blur-[100px] opacity-60" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
            Loved by Developers
          </h2>
          <p className="text-lg text-neutral-400">
            Don't just take our word for it — hear what our users have to say
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <Card key={index} className="border-neutral-800 bg-neutral-900/50 backdrop-blur-md hover:border-neutral-700 transition-all duration-300">
              <CardContent className="p-6 pt-6">
                <Quote className="h-8 w-8 mb-4 text-red-500/60" />
                
                <p className="text-neutral-300 mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                
                <div className="flex items-center">
                  <Avatar className="h-10 w-10 mr-3 border border-neutral-700">
                    <AvatarFallback className="bg-gradient-to-br from-red-500 to-orange-500 text-white">
                      {testimonial.avatar}
                    </AvatarFallback>
                    <AvatarImage src="" />
                  </Avatar>
                  
                  <div>
                    <p className="font-medium text-sm">{testimonial.author}</p>
                    <p className="text-neutral-500 text-xs">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}