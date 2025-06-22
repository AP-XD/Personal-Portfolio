const fs = require("fs");
const path = require("path");

// This script extracts the actual webpack asset paths and injects them into index.html
// Run this after build to get the real hashed filenames

function findAssetPath(buildDir, originalFilename) {
  const staticDir = path.join(buildDir, "static", "media");

  if (!fs.existsSync(staticDir)) {
    return null;
  }

  const files = fs.readdirSync(staticDir);
  const targetFile = files.find(
    (file) =>
      file.includes(originalFilename.replace(".svg", "")) &&
      file.endsWith(".svg")
  );

  return targetFile ? `/static/media/${targetFile}` : null;
}

function injectCriticalResourcePreloads() {
  const buildDir = path.join(__dirname, "..", "build");
  const indexPath = path.join(buildDir, "index.html");

  if (!fs.existsSync(indexPath)) {
    console.log("Build directory not found. Run npm run build first.");
    return;
  }

  // Find the actual asset paths
  const programmingSvgPath = findAssetPath(buildDir, "Programming.svg");

  if (!programmingSvgPath) {
    console.log("Programming.svg not found in build assets");
    return;
  }

  // Read the built index.html
  let indexHtml = fs.readFileSync(indexPath, "utf8");

  // Create preload tags for critical resources
  const preloadTags = `
    <!-- Critical LCP image preload -->
    <link rel="preload" href="${programmingSvgPath}" as="image" type="image/svg+xml" fetchpriority="high">
  `;

  // Inject before closing </head>
  indexHtml = indexHtml.replace("</head>", `${preloadTags}</head>`);

  // Write back to index.html
  fs.writeFileSync(indexPath, indexHtml);

  console.log("✅ Injected critical resource preloads:");
  console.log(`   - ${programmingSvgPath}`);
}

module.exports = { injectCriticalResourcePreloads };

// Run if called directly
if (require.main === module) {
  injectCriticalResourcePreloads();
}
