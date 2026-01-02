import { defineConfig } from "@prisma/config";
import * as dotenv from "dotenv";

// This manually loads your .env file
dotenv.config();

export default defineConfig({
  schema: "prisma/schema.prisma",
  datasource: {
    // Use process.env directly now that we've loaded it
    url: process.env.DATABASE_URL,
  },
});
