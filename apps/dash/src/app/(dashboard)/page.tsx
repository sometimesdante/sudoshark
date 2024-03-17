"use client";

import { useUser } from "@clerk/nextjs";

export default function Home() {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  return (
    <main className="w-full m-12">
      <div className="w-full shadow-md p-4 mb-12">
        <h2 className="text-2xl">Uptime monitor</h2>
      </div>
      <div>
        <h1 className="text-4xl ml-4">
          <b>Hello, {user.firstName}!</b>
        </h1>
      </div>
      <div className="w-full shadow-md p-4 my-12">
        <h2 className="text-2xl">Analytics</h2>
      </div>
      <div className="w-full shadow-md p-4 my-12">
        <h2 className="text-2xl">Usage Report</h2>
      </div>
      <div className="w-full shadow-md p-4 my-12">
        <h2 className="text-2xl">Add Service</h2>
      </div>
      <div className="w-full shadow-md p-4 my-12">
        <h2 className="text-2xl">Support</h2>
      </div>
    </main>
  );
}
