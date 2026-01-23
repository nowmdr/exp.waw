"use client";

import { Button } from "@heroui/react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 p-8">
      <h1 className="text-4xl font-bold">Next.js + HeroUI</h1>
      <p className="text-lg text-gray-600 dark:text-gray-400">
        Your project is ready to go!
      </p>
      <div className="flex gap-4">
        <Button color="primary">Primary</Button>
        <Button color="secondary">Secondary</Button>
        <Button color="success">Success</Button>
        <Button color="warning">Warning</Button>
        <Button color="danger">Danger</Button>
      </div>
    </div>
  );
}
