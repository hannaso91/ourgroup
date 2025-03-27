import { SanityClient } from "@sanity/client";

export const client = SanityClient({
    projectId: "p7tw8lfq",
    dataset: "production",
    apiVersion: "v2025-03-24",
    useCdn: false,
})