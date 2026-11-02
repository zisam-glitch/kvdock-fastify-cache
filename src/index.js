import { KVDockStore } from "kvdock";
import { MemoryAdapter } from "kvdock/adapters/memory";

export const store = new KVDockStore({
  adapter: new MemoryAdapter(),
  prefix: "kvdock-fastify-cache:",
});

console.log("Initialized kvdock-fastify-cache with kvdock runtime engine.");
