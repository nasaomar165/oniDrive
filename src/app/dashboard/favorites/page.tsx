"use client";

import { useQuery } from "convex/react";
import { FileBrowser } from "../_components/file-browser";
import { api } from "../../../../convex/_generated/api";

export default function FavoritesPage() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-8">
      <FileBrowser title="Favorites" favoritesOnly />
      </div>
    </div>
  );
}
