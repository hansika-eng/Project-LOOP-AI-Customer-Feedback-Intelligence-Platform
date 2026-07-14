"use client";

import { useSession } from "next-auth/react";

export default function DashboardPage() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p className="p-8">Loading...</p>;
  }

  if (!session) {
    return <p className="p-8">Not logged in.</p>;
  }

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">
        Welcome, {session.user?.name}
      </h1>

      <p className="mt-3">
        Email: {session.user?.email}
      </p>
    </div>
  );
}