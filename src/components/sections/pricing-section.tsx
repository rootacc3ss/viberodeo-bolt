import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PRICING_TIERS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function PricingSection() {
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
      {/* Enhanced gradient effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-red-500/10 rounded-full blur-[150px] animate-glow" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[150px] animate-glow" />
      </div>
      
      <div className="container relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-heading-lg font-bold tracking-tighter mb-4">
            Choose Your Coding Journey
          </h2>
          <p className="text-lg text-neutral-400">
            Select a plan that fits your needs and unlock the full potential of AI-assisted coding.
          </p>
        </motion.div>
        
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {PRICING_TIERS.map((tier, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className={cn(
                "relative rounded-xl backdrop-blur-xl transition-all duration-300",
                tier.highlighted 
                  ? "border-gradient bg-neutral-900/30" 
                  : "border border-neutral-800/50 bg-neutral-900/20"
              )}
            >
              {tier.highlighted && (
                <div className="absolute -top-3 left-0 right-0 mx-auto w-fit px-4 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-red-500 to-orange-500 text-white">
                  Most Popular
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-xl font-semibold mb-2">{tier.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{tier.price}</span>
                  {tier.period && (
                    <span className="text-neutral-400 ml-1">/{tier.period}</span>
                  )}
                </div>
                <p className="text-neutral-400 mb-6">{tier.description}</p>
                
                <Button 
                  className={cn(
                    "w-full mb-8 transition-all duration-300", 
                    tier.highlighted 
                      ? "bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 border-0 text-white shadow-[0_0_20px_rgba(255,80,80,0.3)] hover:shadow-[0_0_30px_rgba(255,80,80,0.5)]" 
                      : "bg-neutral-800 hover:bg-neutral-700 text-white"
                  )}
                >
                  Get Started
                </Button>
                
                <ul className="space-y-4">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <div className={cn(
                        "flex-shrink-0 h-5 w-5 rounded-full mr-2 flex items-center justify-center",
                        tier.highlighted ? "bg-gradient-to-r from-red-500 to-orange-500" : "bg-neutral-800"
                      )}>
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-sm text-neutral-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Enhanced glow effect */}
              <div className={cn(
                "absolute -right-8 -bottom-8 w-48 h-48 rounded-full blur-[100px] transition-opacity duration-300 opacity-0 group-hover:opacity-100",
                tier.highlighted 
                  ? "bg-gradient-to-br from-red-500/30 to-orange-500/30"
                  : "bg-gradient-to-br from-red-500/10 to-orange-500/10"
              )} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}