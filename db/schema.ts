import { pgTable as table } from "drizzle-orm/pg-core";
import * as t from "drizzle-orm/pg-core";

export const recipes = table("recipes", {
  id: t.integer("id").primaryKey().generatedAlwaysAsIdentity(),
  name: t.varchar("name").notNull().unique(),
  description: t.text("description").notNull(),
  subname: t.varchar("subname"),
  createdAt: t.timestamp("created_at").defaultNow().notNull(),
  updatedAt: t.timestamp("updated_at"),
});
