import { create } from "@/actions/example.actions";
import { auth } from "@/auth";

export default async function Page() {
  const session = await auth();
  console.log(session);
  return (
    <div>
      <form action={create}>
        <input type="text" placeholder="write a comment" name="comment" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
