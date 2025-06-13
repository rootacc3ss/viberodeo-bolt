export const SITE_CONFIG = {
  name: "vibe.rodeo",
  description: "Enhance your coding experience with AI-powered tools",
  url: "https://vibe.rodeo",
  ogImage: "https://vibe.rodeo/og.jpg",
};

export const NAV_ITEMS = [
  { title: "Home", href: "/" },
  { title: "Features", href: "/features" },
  { title: "Purchase", href: "/purchase" },
  { title: "News", href: "/news" },
  { title: "Support", href: "/support" },
  { title: "Dashboard", href: "/dashboard" },
];

export const FEATURES = [
  {
    title: "AI Prompt Generation",
    description:
      "Advanced AI algorithms that generate contextual prompts based on your code, helping you overcome coding blocks.",
    icon: "Sparkles",
  },
  {
    title: "Code Enhancement",
    description:
      "Automatically enhance your code with best practices, performance improvements, and modern syntax.",
    icon: "Code2",
  },
  {
    title: "Real-time Collaboration",
    description:
      "Work with other developers in real-time, sharing prompts and coding sessions for maximum productivity.",
    icon: "Users",
  },
  {
    title: "Analytics Dashboard",
    description:
      "Track your coding habits, productivity metrics, and improvement areas through detailed analytics.",
    icon: "BarChart3",
  },
];

export const PRICING_TIERS = [
  {
    name: "Starter",
    price: "Free",
    description: "Perfect for beginners exploring AI-assisted coding",
    features: [
      "Basic AI prompt suggestions",
      "Limited code enhancement",
      "Community support",
      "1 project",
    ],
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$19",
    period: "monthly",
    description: "Ideal for professional developers",
    features: [
      "Advanced AI prompt generation",
      "Unlimited code enhancement",
      "Priority support",
      "Unlimited projects",
      "Analytics dashboard",
      "Team collaboration (up to 3)",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "$49",
    period: "monthly",
    description: "For teams and organizations",
    features: [
      "Everything in Pro",
      "Dedicated support",
      "Custom integrations",
      "Team collaboration (unlimited)",
      "Advanced analytics",
      "SOC2 compliance",
    ],
    highlighted: false,
  },
];