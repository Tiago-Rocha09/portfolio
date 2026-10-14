import type { MDXComponents } from "mdx/types";

export function useMDXComponents(): MDXComponents {
  return {
    h1: (props) => (
      <h1 className="text-3xl font-semibold tracking-tight" {...props} />
    ),
    p: (props) => (
      <p className="mt-4 text-lg leading-8 text-muted-foreground" {...props} />
    ),
  };
}
