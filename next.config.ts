import type { NextConfig } from "next";

// When building inside GitHub Actions for a GitHub Pages "project site"
// (https://<user>.github.io/<repo>/), Next.js needs to know the repo name
// so every asset and route is prefixed correctly. This is set automatically
// by the deploy workflow — no manual config needed for most repos.
// If you deploy to a "user/org site" repo (named <user>.github.io), the
// basePath/assetPrefix are correctly left empty.
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isUserOrOrgSite = repoName.endsWith(".github.io");
const basePath =
  process.env.GITHUB_ACTIONS && repoName && !isUserOrOrgSite
    ? `/${repoName}`
    : "";

const nextConfig: NextConfig = {
  // Produces a fully static `out/` folder that can be served by GitHub
  // Pages (or any static host) with zero server runtime required.
  output: "export",
  // Generates `/work/thotha/index.html` instead of `/work/thotha.html`,
  // which is what static hosts expect for clean URLs.
  trailingSlash: true,
  // Static export cannot use the Next.js Image Optimization API.
  images: {
    unoptimized: true,
  },
  basePath,
  assetPrefix: basePath,
};

export default nextConfig;
