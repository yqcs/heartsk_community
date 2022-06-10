import { defineConfig } from "dumi";

export default defineConfig({
  sitemap: {
    hostname: "https://heartsk.com",
  },
  hash: true,
  title: "Hearts K - App",
  mode: "site",
  logo: "../../public/scan.png",
  publicPath: "/public/",
  favicon: "../../public/scan.svg",
  exportStatic: {},
  extraBabelPlugins: [
    [
      "import",
      {
        libraryName: "antd",
        libraryDirectory: "es",
        style: true,
      },
    ],
  ],
  mfsu: {},
});
