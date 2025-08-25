// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import icon from "astro-icon";
import tailwindcss from "@tailwindcss/vite";
import { astroFont } from "astro-font/integration";

import { sitemapIntegration } from "./src/libs/integrations/sitemap";
import { PROCESS_ENV, astroEnvSchema } from "./src/config/process-env";

import partytown from "@astrojs/partytown";


export default defineConfig({
  server: {
    port: 4321,
    // develop mode, disable cache
    headers: {
      "Cache-Control": "no-store, max-age=0, must-revalidate",
      Pragma: "no-cache",
      Expires: "0",
    },
  },

  /**
   * @property {string} site - 网站的最终部署 URL。
   * Astro 会用这个 URL 来生成站点地图、规范链接 (canonical URLs) 和其他绝对链接。
   */
  site: PROCESS_ENV.SITE_URL,
  trailingSlash: "ignore",
  env: astroEnvSchema,
  compressHTML: true,
  devToolbar: { enabled: false },

  // viewTransitions: false,

  integrations: [
    react({
      // 配置React集成，使用外部模式减少客户端JS体积
      include: ["**/*.tsx"],
    }),
    icon({ iconDir: "./src/assets/icons" }),
    partytown({ config: { forward: ["dataLayer.push"] } }),
    expressiveCodeIntegration(),
    sitemapIntegration(),
    mdx(),
    astroFont(),
  ],
  vite: {
    build: {
      sourcemap: false,
    },

    server: {
      allowedHosts: ["localhost", "thrive-therapies.com"],
      // develop mode, hot module replacement
      hmr: true,
    },

    // develop mode
    optimizeDeps: {
      force: true,
    },

    resolve: {
      alias: {
        "@/assets": "/src/assets",
        "@/components": "/src/components",
        "@/modules": "/src/modules",
        "@/constants": "/src/constants",
        "@/content": "/src/content",
        "@/layouts": "/src/layouts",
        "@/features": "/src/features",
        "@/libs": "/src/libs",
        "@/pages": "/src/pages",
        "@/schemas": "/src/schemas",
        "@/styles": "/src/styles",
        "@/types": "/src/types",
        "@/utils": "/src/utils",
        "@/config": "/src/config",
        "@/paraglide": "/src/paraglide",
        "@/scripts": "/src/scripts",
      },
    },

    plugins: [
      tailwindcss(),
      paraglideVitePlugin({
        project: "./project.inlang",
        outdir: "./src/paraglide",
        // Configure locale detection strategy for SSG mode
        strategy: [
          "url", // Primary: URL-based detection (essential for SSG)
          "localStorage", // User preference storage
          "baseLocale", // Fallback to default locale
        ],
        // Disable AsyncLocalStorage for static builds
        disableAsyncLocalStorage: true,
      }),
    ],
  },
  output: "static",
});