import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export type ColorTheme = 'cyan' | 'amber' | 'emerald';

interface ThreeBackgroundProps {
  currentTheme?: ColorTheme;
  speedMultiplier?: number;
}

export const ThreeBackground: React.FC<ThreeBackgroundProps> = ({
  currentTheme = 'cyan',
  speedMultiplier = 1,
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const themeRef = useRef<ColorTheme>(currentTheme);
  const speedRef = useRef<number>(speedMultiplier);

  // Sync refs so animation loop uses latest without tearing down WebGL context
  useEffect(() => {
    themeRef.current = currentTheme;
  }, [currentTheme]);

  useEffect(() => {
    speedRef.current = speedMultiplier;
  }, [speedMultiplier]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // SCENE, CAMERA, RENDERER
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0xf6f7f9, 0.012);

    const isMobile = window.innerWidth < 768;

    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = isMobile ? 36 : 32;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: !isMobile, // Disable MSAA on mobile for maximum battery and fps
      powerPreference: 'high-performance',
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2));
    renderer.setClearColor(0x000000, 0); // Transparent to blend with HTML background
    container.appendChild(renderer.domElement);

    // GROUPS
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // LIGHTING
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.1);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x4fd1c0, 3, 60);
    pointLight1.position.set(15, 15, 15);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xff9580, 2, 60);
    pointLight2.position.set(-15, -15, 10);
    scene.add(pointLight2);

    const pointLight3 = new THREE.PointLight(0x93ddb9, 2, 50);
    pointLight3.position.set(0, 20, -10);
    scene.add(pointLight3);

    // 1. DYNAMIC PARTICLE FIELD
    const particleCount = isMobile ? 850 : 2200;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const originalPositions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const scales = new Float32Array(particleCount);

    const colorPalettes = {
      cyan: [
        new THREE.Color(0x0b0f14),
        new THREE.Color(0x1f2933),
        new THREE.Color(0x3a4752),
        new THREE.Color(0x0b0f14),
      ],
      amber: [
        new THREE.Color(0x0b0f14),
        new THREE.Color(0x1f2933),
        new THREE.Color(0x3a4752),
        new THREE.Color(0x0b0f14),
      ],
      emerald: [
        new THREE.Color(0x0b0f14),
        new THREE.Color(0x1f2933),
        new THREE.Color(0x3a4752),
        new THREE.Color(0x0b0f14),
      ],
    };

    const initialColors = colorPalettes[themeRef.current] || colorPalettes.cyan;

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      const x = (Math.random() - 0.5) * 90;
      const y = (Math.random() - 0.5) * 90;
      const z = (Math.random() - 0.5) * 70;

      positions[i3] = x;
      positions[i3 + 1] = y;
      positions[i3 + 2] = z;

      originalPositions[i3] = x;
      originalPositions[i3 + 1] = y;
      originalPositions[i3 + 2] = z;

      const c = initialColors[Math.floor(Math.random() * initialColors.length)];
      colors[i3] = c.r;
      colors[i3 + 1] = c.g;
      colors[i3 + 2] = c.b;

      scales[i] = Math.random() * 2.5 + 0.8;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Custom circle canvas texture for smooth round glowing particles
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
      gradient.addColorStop(0.55, 'rgba(255, 255, 255, 1)');
      gradient.addColorStop(0.8, 'rgba(255, 255, 255, 0.35)');
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 64, 64);
    }
    const particleTexture = new THREE.CanvasTexture(canvas);

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.6,
      vertexColors: true,
      map: particleTexture,
      transparent: true,
      opacity: 0.8,
      depthWrite: false,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    mainGroup.add(particles);

    // 2. CENTRAL FLOATING 3D GEOMETRY (Interactive Wireframe & Crystal Polyhedron)
    const centralGroup = new THREE.Group();
    if (isMobile) {
      centralGroup.scale.set(0.72, 0.72, 0.72);
    }
    mainGroup.add(centralGroup);

    // Inner Icosahedron
    const icoGeom = new THREE.IcosahedronGeometry(7.5, 1);
    const icoMat = new THREE.MeshPhysicalMaterial({
      color: 0xf1f4f6,
      emissive: 0x4fd1c0,
      emissiveIntensity: 0.03,
      metalness: 0.2,
      roughness: 0.35,
      wireframe: false,
      transparent: true,
      opacity: 0.4,
    });
    const icoMesh = new THREE.Mesh(icoGeom, icoMat);
    centralGroup.add(icoMesh);

    // Wireframe overlay for glowing cyber aesthetic
    const wireGeom = new THREE.WireframeGeometry(icoGeom);
    const wireMat = new THREE.LineBasicMaterial({
      color: 0x1f2933,
      transparent: true,
      opacity: 0.75,
    });
    const wireMesh = new THREE.LineSegments(wireGeom, wireMat);
    centralGroup.add(wireMesh);

    // Outer Orbiting Rings (Gyroscopic Torus Rings)
    const ring1Geom = new THREE.TorusGeometry(12, 0.08, 16, 100);
    const ring1Mat = new THREE.MeshBasicMaterial({
      color: 0x111827,
      transparent: true,
      opacity: 0.8,
    });
    const ring1 = new THREE.Mesh(ring1Geom, ring1Mat);
    ring1.rotation.x = Math.PI / 3;
    centralGroup.add(ring1);

    const ring2Geom = new THREE.TorusGeometry(14.5, 0.06, 16, 100);
    const ring2Mat = new THREE.MeshBasicMaterial({
      color: 0x4b5563,
      transparent: true,
      opacity: 0.7,
    });
    const ring2 = new THREE.Mesh(ring2Geom, ring2Mat);
    ring2.rotation.y = Math.PI / 4;
    centralGroup.add(ring2);

    // 3. SATELLITE FLOATING POLYHEDRA
    const satellites: { mesh: THREE.Mesh; speed: number; orbitRadius: number; angle: number; yOffset: number }[] = [];
    const satGeometries = [
      new THREE.OctahedronGeometry(1.6, 0),
      new THREE.TetrahedronGeometry(1.8, 0),
      new THREE.DodecahedronGeometry(1.4, 0),
      new THREE.IcosahedronGeometry(1.5, 0),
    ];

    for (let i = 0; i < 6; i++) {
      const geom = satGeometries[i % satGeometries.length];
      const mat = new THREE.MeshStandardMaterial({
        color: i % 2 === 0 ? 0x4fd1c0 : 0xff9580,
        emissive: i % 2 === 0 ? 0x0f5a52 : 0x7a3426,
        metalness: 0.85,
        roughness: 0.2,
        wireframe: i % 3 === 0,
      });
      const satMesh = new THREE.Mesh(geom, mat);
      const orbitRadius = 18 + i * 2.5;
      const angle = (i * Math.PI * 2) / 6;
      const yOffset = (Math.random() - 0.5) * 12;

      satMesh.position.set(
        Math.cos(angle) * orbitRadius,
        yOffset,
        Math.sin(angle) * orbitRadius
      );
      mainGroup.add(satMesh);

      satellites.push({
        mesh: satMesh,
        speed: (Math.random() * 0.005 + 0.003) * (i % 2 === 0 ? 1 : -1),
        orbitRadius,
        angle,
        yOffset,
      });
    }

    // MOUSE TRACKING & PARALLAX
    let targetMouseX = 0;
    let targetMouseY = 0;
    let currentMouseX = 0;
    let currentMouseY = 0;

    const onMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      targetMouseX = x * 1.5;
      targetMouseY = y * 1.5;
    };

    const onTouchMove = (e: TouchEvent) => {
      if (e.touches && e.touches.length > 0) {
        const touch = e.touches[0];
        const x = (touch.clientX / window.innerWidth) * 2 - 1;
        const y = -(touch.clientY / window.innerHeight) * 2 + 1;
        targetMouseX = x * 1.2;
        targetMouseY = y * 1.2;
      }
    };

    const onTouchStart = () => {
      shockwaveTime = 0;
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchstart', onTouchStart, { passive: true });

    // SCROLL PARALLAX
    let scrollY = 0;
    const onScroll = () => {
      scrollY = window.scrollY;
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    // RESIZE LISTENER
    const onResize = () => {
      const mobileNow = window.innerWidth < 768;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.position.z = mobileNow ? 36 : 32;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, mobileNow ? 1.5 : 2));
    };
    window.addEventListener('resize', onResize);

    // CLICK PULSE / SHOCKWAVE
    let shockwaveTime = 999;
    const onClick = () => {
      shockwaveTime = 0;
    };
    window.addEventListener('click', onClick, { passive: true });

    // ANIMATION LOOP
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime() * speedRef.current;
      shockwaveTime += delta * 2;

      // Smooth mouse lerp
      currentMouseX += (targetMouseX - currentMouseX) * 0.04;
      currentMouseY += (targetMouseY - currentMouseY) * 0.04;

      // Dynamic theme color update on materials
      const theme = themeRef.current;
      if (theme === 'cyan') {
        icoMat.emissive.setHex(0x4fd1c0);
        wireMat.color.setHex(0x1f3d3a);
        pointLight1.color.setHex(0x4fd1c0);
      } else if (theme === 'amber') {
        icoMat.emissive.setHex(0xff9580);
        wireMat.color.setHex(0x5a2a22);
        pointLight1.color.setHex(0xff9580);
      } else if (theme === 'emerald') {
        icoMat.emissive.setHex(0x93ddb9);
        wireMat.color.setHex(0x1f4030);
        pointLight1.color.setHex(0x93ddb9);
      }

      // Rotate central cluster
      centralGroup.rotation.x = elapsed * 0.15 + currentMouseY * 0.3;
      centralGroup.rotation.y = elapsed * 0.2 + currentMouseX * 0.4;

      ring1.rotation.z = elapsed * 0.25;
      ring2.rotation.x = elapsed * -0.18;

      // Orbit satellites
      satellites.forEach((sat) => {
        sat.angle += sat.speed * speedRef.current;
        sat.mesh.position.x = Math.cos(sat.angle) * sat.orbitRadius;
        sat.mesh.position.z = Math.sin(sat.angle) * sat.orbitRadius;
        sat.mesh.position.y = sat.yOffset + Math.sin(elapsed * 1.5 + sat.orbitRadius) * 2;
        sat.mesh.rotation.x += 0.015;
        sat.mesh.rotation.y += 0.02;
      });

      // Animate Particles with Wave & Shockwave
      const posAttr = particleGeometry.attributes.position as THREE.BufferAttribute;
      const posArray = posAttr.array as Float32Array;

      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        const ox = originalPositions[i3];
        const oy = originalPositions[i3 + 1];
        const oz = originalPositions[i3 + 2];

        // Harmonic wave oscillation
        posArray[i3 + 1] = oy + Math.sin(elapsed * 1.2 + ox * 0.05 + oz * 0.05) * 1.5;

        // Shockwave ripple if clicked
        if (shockwaveTime < 4) {
          const distFromCenter = Math.sqrt(ox * ox + oy * oy + oz * oz);
          const waveFront = shockwaveTime * 15;
          const diff = Math.abs(distFromCenter - waveFront);
          if (diff < 5) {
            const push = (5 - diff) * 0.4;
            posArray[i3] = ox + (ox / (distFromCenter || 1)) * push;
            posArray[i3 + 1] += (oy / (distFromCenter || 1)) * push;
            posArray[i3 + 2] = oz + (oz / (distFromCenter || 1)) * push;
          }
        }
      }
      posAttr.needsUpdate = true;

      // Scroll camera reaction
      const scrollOffset = scrollY * 0.012;
      camera.position.y = -scrollOffset * 0.4;
      camera.position.x = currentMouseX * 3;
      camera.position.z = 32 - Math.min(scrollOffset * 0.5, 12);
      camera.lookAt(0, -scrollOffset * 0.3, 0);

      mainGroup.rotation.y = elapsed * 0.03 + currentMouseX * 0.15;
      mainGroup.rotation.x = currentMouseY * 0.1;

      renderer.render(scene, camera);
    };

    animate();

    // CLEANUP
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('click', onClick);

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }

      particleGeometry.dispose();
      particleMaterial.dispose();
      particleTexture.dispose();
      icoGeom.dispose();
      icoMat.dispose();
      wireGeom.dispose();
      wireMat.dispose();
      ring1Geom.dispose();
      ring1Mat.dispose();
      ring2Geom.dispose();
      ring2Mat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      style={{ opacity: 0.95 }}
    />
  );
};
export default ThreeBackground;
