import React from "react";
import Header from "@/components/headerComponents/Header";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        hideOptions={{
          about: true,
          howItWorks: true,
          support: true,
        }}
      />
      <main className="flex-1">{children}</main>
    </div>
  );
}
