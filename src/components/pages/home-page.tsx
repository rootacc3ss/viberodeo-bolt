import { HeroSection } from "@/components/sections/hero-section";
import { FeatureSection } from "@/components/sections/feature-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { VideoSection } from "@/components/sections/video-section";
import { TestimonialSection } from "@/components/sections/testimonial-section";
import { CTASection } from "@/components/sections/cta-section";

export function HomePage() {
  return (
    <div className="bg-black min-h-screen">
      <HeroSection />
      <FeatureSection />
      <VideoSection />
      <PricingSection />
      <TestimonialSection />
      <CTASection />
    </div>
  );
}