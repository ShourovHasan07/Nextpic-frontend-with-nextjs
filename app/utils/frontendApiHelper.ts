// /services/frontendService.ts
export async function FrontendApiHelper(endpoint: string) {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
    if (!baseUrl) throw new Error("NEXT_PUBLIC_API_BASE_URL is not defined");

    const res = await fetch(`${baseUrl}${endpoint}`, {
      cache: "no-store", // prevent caching in App Router
    });

    if (!res.ok) throw new Error(`Failed to fetch ${endpoint}`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.error(err);
    return null;
  }
}

// Movie-specific wrapper
export async function fetchMovies() {
  const data = await FrontendApiHelper("");
  return data?.movies || [];
}