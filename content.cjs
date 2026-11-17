// The glob of this package's component files, for a Tailwind config's `content` list.
const path = require("node:path");
module.exports = path.join(__dirname, "src/**/*.{ts,tsx}");
