import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    NODE_ENV: z.enum(["development", "production", "test"]),
  },
  client: {
    NEXT_PUBLIC_DISCORD_USER_ID: z.string(18),
  },
  runtimeEnv: {
    NEXT_PUBLIC_DISCORD_USER_ID: process.env.NEXT_PUBLIC_DISCORD_USER_ID,
    NODE_ENV: process.env.NODE_ENV,
  },
  skipValidation: !!process.env.CI,
  emptyStringAsUndefined: true,
});
