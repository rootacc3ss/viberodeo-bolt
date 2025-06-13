import { cn } from "@/lib/utils";

interface PageLayoutProps {
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
}

export function PageLayout({ children, className, fullWidth = false }: PageLayoutProps) {
  return (
    <div className={cn(
      "min-h-screen bg-black",
      className
    )}>
      <div className={cn(
        "mx-auto px-4",
        fullWidth ? "w-full" : "container"
      )}>
        {children}
      </div>
    </div>
  );
}