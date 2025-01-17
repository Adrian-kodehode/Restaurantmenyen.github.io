import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Restaurantmenyen.github.io/", // Endre denne til navnet på repoet ditt
});
