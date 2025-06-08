export async function updateUserTheme(theme: string) {
  try {
    const res = await fetch("/api/theme", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ theme }),
    });

    if (!res.ok) {
      console.error("Failed to update theme:", await res.json());
    }
  } catch (err) {
    console.error("Failed to update theme:", err);
  }
}
