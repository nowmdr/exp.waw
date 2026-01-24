"use client";

import { Button, Switch } from "@heroui/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

function ThemeSwitch() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <Switch
      isSelected={isDark}
      onValueChange={(selected) => setTheme(selected ? "dark" : "light")}
      size="lg"
      startContent={<span>☀️</span>}
      endContent={<span>🌙</span>}
    />
  );
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 p-8">
      <div className="absolute top-4 right-4">
        <ThemeSwitch />
      </div>
      <h1 className="text-4xl font-bold">Next.js + HeroUI</h1>
      <p className="text-lg text-default-500">Hello World</p>
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
