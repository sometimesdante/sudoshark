"use client";

import { useUser } from "@clerk/nextjs";

export default function Home() {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  return (
    <main className="w-full ml-64 mt-12">
      <h1 className="text-4xl mb-2">
        <b>Hello, {user.firstName}!</b>
      </h1>
    </main>
  );
}
