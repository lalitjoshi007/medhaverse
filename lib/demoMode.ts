export const isDemoMode =
  typeof process.env.NEXT_PUBLIC_DEMO_MODE !== "undefined" &&
  process.env.NEXT_PUBLIC_DEMO_MODE === "true";
