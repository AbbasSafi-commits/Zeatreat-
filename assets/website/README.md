Zeetreat — 3D scroll website

This folder contains a single-page interactive preview that uses your product art (logo, bottle, and box) to create a scroll-driven 3D-like presentation.

Where files live (branch: design/product-mockups):
- assets/designs/zeetreat-logo-hd.png (logo placeholder)
- assets/designs/zeetreat-bottle-cutout-3000px.png (bottle placeholder)
- assets/designs/zeetreat-box-cutout-3000px.png (box placeholder)
- assets/website/index.html (interactive page)
- assets/website/css/style.css
- assets/website/js/main.js

How it works
- The page pins the hero section on scroll and uses GSAP + ScrollTrigger to animate the bottle, box and logo in 3D-like space (using CSS transforms and perspective). The effect is designed to look cinematic and close to a 3D video while remaining lightweight.

How to view locally
1) Clone the repo and checkout the branch design/product-mockups
2) Serve the repository folder with a static server (recommended) — e.g. `npx http-server` or `python -m http.server`
3) Open `assets/website/index.html` in your browser.

Notes & next steps
- The repo currently contains placeholders for the processed images. For the full effect, replace the placeholder files in assets/designs/ with the final high-resolution PNGs (transparent backgrounds) named as above.
- If you want me to generate the actual PNG binaries and commit them to the branch, reply "generate and push binaries". I will produce the HD exports with refined alpha channels and realistic material touchups, then push them to the repo and update the preview.
- If you want a WebGL/Three.js version (with actual environment lighting, bloom and more realistic 3D), reply "upgrade to threejs" and I will create a Three.js scene and add GLTF/FBX support or impostor planes for better photorealism.
