import type { ReactNode } from "react";

type PropsWithChildren = {
  children: ReactNode;
  className?: string;
};

export const Card = ({ className = "", children }: PropsWithChildren) => (
  <div className={`rounded-xl p-6 bg-slate-700 border border-slate-600 ${className}`}>
    {children}
  </div>
);

export const CardHeader = ({ children }: { children: ReactNode }) => (
  <div className="mb-4">{children}</div>
);

export const CardTitle = ({ children, className = "" }: PropsWithChildren) => (
  <h3 className={`text-xl font-bold mb-2 text-white ${className}`}>{children}</h3>
);

export const CardDescription = ({ children, className = "" }: PropsWithChildren) => (
  <p className={`mb-2 text-slate-300 ${className}`}>{children}</p>
);

export const CardContent = ({ children }: { children: ReactNode }) => (
  <div>{children}</div>
);
