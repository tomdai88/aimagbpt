module.exports = {
  content: [
    // 明确指定要扫描的目录，避免扫描 node_modules
    // 扫描你网站根目录下的 content 和 layouts 文件夹中的 .html 和 .md 文件
    "./content/**/*.{html,md}",
    "./layouts/**/*.{html,js}", // 如果你的布局文件有 JS 或者你想扫描布局里的 JS
    
    // 扫描主题目录下的 layouts 和 assets 文件夹中的 .html 和 .js 文件
    // 请注意，这里假设你的主题路径是 themes/tella
    "./themes/tella/**/*.{html,js}",
    
    // 明确排除 node_modules 目录，防止性能问题
    "!./node_modules/**/*", 
  ],
  theme: {
    extend: {
      colors: {
        tlgray: {
          200: "#E5E7EB",
          400: "#9CA3AF",
          700: "#374151",
          800: "#1F2937"
        }
      }
    }
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};