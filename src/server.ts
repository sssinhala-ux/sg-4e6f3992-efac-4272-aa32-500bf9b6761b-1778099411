import type { ServerEntry } from "@tanstack/react-start/server-entry";

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    const { default: handler } = await import(
      "@tanstack/react-start/server-entry"
    );
    return (handler as ServerEntry).fetch(request, env, ctx);
  },
};
