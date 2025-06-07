"use server";
import { neon } from "@neondatabase/serverless";
export async function create(formData: FormData) {
  // Connect to the Neon database
  const sql = neon(`${process.env.DATABASE_URL}`);
  const comment = formData.get("comment");
  // Insert the comment from the form into the Postgres database
  await sql`INSERT INTO comments (comment) VALUES (${comment})`;
}
