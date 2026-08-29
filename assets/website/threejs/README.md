Three.js interactive version of the Zeetreat product scene.

How it works
- The scene uses your flattened PNG cutouts (transparent alpha) as textures on plane meshes.
- Camera and group transforms are animated with GSAP ScrollTrigger (scroll-driven timeline) so the experience behaves like a scroll-driven 3D video.
- Replace the files in assets/designs/ with final HD PNGs (transparent backgrounds) to get a more photoreal result.

Files added
- assets/website/threejs/index.html — Three.js scene and scroll-driven camera animation
- assets/website/threejs/css/style.css

Notes
- For best look provide 3000px cutouts with clean alpha (zeetreat-bottle-cutout-3000px.png, zeetreat-box-cutout-3000px.png, zeetreat-logo-hd.png) in assets/designs/.
- If you want an even more photoreal version, I can convert the flat cutouts into real 3D geometry (GLTF) with texture baking, or create a liquid shader for the bottle. Reply "upgrade modeling" to request that.
