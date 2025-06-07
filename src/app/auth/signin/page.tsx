import SignInForm from "@/components/ui/signin-form";
import { Suspense } from "react";

export default function Page() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="flex h-20 w-full justify-center items-center rounded-lg bg-blue-500 p-3 md:h-36">
          <div className="text-4xl w-32 text-white md:w-36">Freenance</div>
        </div>
        <Suspense>
          <SignInForm />
        </Suspense>
      </div>
    </main>
  );
}
