"use client";
import { useEffect, useState, useTransition } from "react";
import { Moon, Sun } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "next-themes";

export default function ToggleDarkMode() {
  const { theme, setTheme } = useTheme();
  const [isDark, setIsDark] = useState(false);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    setIsDark(theme === "dark");
  }, [theme]);

  const handleToggle = (checked: boolean) => {
    const newTheme = checked ? "dark" : "light";
    setTheme(newTheme);
    setIsDark(checked);

    startTransition(async () => {
      try {
        const res = await fetch("/api/theme", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ theme: newTheme }),
        });

        if (!res.ok) {
          const errorText = await res.text();
          console.error("Failed to update theme:", errorText);
        }
      } catch (error) {
        console.error("Error updating theme:", error);
      }
    });
  };

  return (
    <div className="flex items-center">
      <div className="p-2 flex gap-2">
        {isDark ? (
          <Moon width={16} height={16} />
        ) : (
          <Sun width={16} height={16} />
        )}
        <span className="text-sm">{isDark ? "Dark Mode" : "Light Mode"}</span>
      </div>
      <Switch
        checked={isDark}
        onCheckedChange={handleToggle}
        disabled={isPending}
        className="ml-auto"
      />
    </div>
  );
}
