import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

export function PostTitle({ children }: Props) {
  return (
    <h1 className="text-5xl md:text-6xl lg:text-7xl max-w-3xl font-semibold tracking-tight leading-tight md:leading-none mb-2 text-left">
      {children}
    </h1>
  );
}
