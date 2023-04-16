import { initTRPC } from "@trpc/server";

const t = initTRPC.create();

export const appRouter = t.router({
  sayHi: t.procedure.query(() => {
    return "Hi";
  }),
});

export type AppRouter = typeof appRouter;
