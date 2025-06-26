import type { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  className?: string;
};

export const Badge = ({ className = "", children }: BadgeProps) => (
  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${className}`}>
    {children}
  </span>
);
