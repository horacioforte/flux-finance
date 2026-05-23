import type { ElementType, ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
};

export function Card({
  children,
  className = "",
  as: Tag = "section",
}: CardProps) {
  return (
    <Tag className={`flux-card ${className}`.trim()}>{children}</Tag>
  );
}
