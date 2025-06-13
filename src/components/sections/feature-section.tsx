import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FEATURES } from "@/lib/constants";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import * as LucideIcons from "lucide-react";

export function FeatureSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Enhanced gradient background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-24 left-1/4 w-[500px] h-[500px] bg-red-500/10 rounded-full blur-[150px] animate-glow" />
        <div className="absolute -bottom-24 right-1/4 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[150px] animate-glow" />
      </div>
      
      <div className="container relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-heading-lg font-bold tracking-tighter mb-4">
            Powerful Tools for Modern Developers
          </h2>
          <p className="text-lg text-neutral-400">
            Discover how vibe.rodeo can transform your coding workflow with AI-powered assistance.
          </p>
        </motion.div>
        
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {FEATURES.map((feature, index) => {
            const IconComponent = LucideIcons[feature.icon as keyof typeof LucideIcons];
            
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
              >
                <Card className="group relative overflow-hidden border-neutral-800/50 bg-neutral-900/30 backdrop-blur-xl transition-all duration-300 hover:border-neutral-700/50 hover:shadow-[0_0_30px_rgba(255,80,80,0.15)]">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-orange-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  
                  <CardHeader className="relative z-10">
                    <div className="relative h-12 w-12 rounded-full bg-gradient-to-br from-red-500 to-orange-500 p-2.5 mb-4">
                      <div className="absolute inset-0 rounded-full bg-gradient-glow opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      <div className="relative z-10 flex items-center justify-center">
                        {IconComponent && <IconComponent className="h-5 w-5 text-white" />}
                      </div>
                    </div>
                    <CardTitle className="text-xl tracking-tight">{feature.title}</CardTitle>
                  </CardHeader>
                  
                  <CardContent className="relative z-10">
                    <CardDescription className="text-neutral-400 leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                  
                  {/* Enhanced glow effect */}
                  <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-full blur-[50px] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}