export type SandboxedPageOptions = {
  presentation?: string;
  canvasSelector?: string;
};

export function buildSandboxedPageDocument(source: string, options?: SandboxedPageOptions): string {
  if (!options) return source;
  return source;
}
