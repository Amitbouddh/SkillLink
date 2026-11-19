import * as React from "react";
import { cn } from "@/lib/utils";

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  fallback?: string;
  color?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const sizeMap = {
  sm: 'w-8 h-8 text-xs',
  md: 'w-10 h-10 text-sm',
  lg: 'w-12 h-12 text-base',
  xl: 'w-20 h-20 text-2xl',
};

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ className, children, fallback, color = "#2563eb", size = 'md', ...props }, ref) => {
    const initials = fallback
      ? fallback.split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase()
      : "";
    return (
      <div
        ref={ref}
        className={cn("relative flex shrink-0 overflow-hidden rounded-full", sizeMap[size], className)}
        style={{ backgroundColor: color }}
        {...props}
      >
        {children ? (
          children
        ) : (
          <span className="flex h-full w-full items-center justify-center font-medium text-white">
            {initials}
          </span>
        )}
      </div>
    );
  }
);
Avatar.displayName = "Avatar";

export { Avatar };