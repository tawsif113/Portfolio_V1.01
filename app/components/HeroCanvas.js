"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function HeroCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x080912);

    const camera = new THREE.PerspectiveCamera(
      55,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);

    const geometry = new THREE.IcosahedronGeometry(1.4, 1);
    const material = new THREE.MeshStandardMaterial({
      color: 0x7b5cff,
      roughness: 0.2,
      metalness: 0.8,
      wireframe: true,
    });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const ambient = new THREE.AmbientLight(0xffffff, 0.6);
    const point = new THREE.PointLight(0x9b8bff, 1.2);
    point.position.set(3, 4, 6);
    scene.add(ambient, point);

    const starGeometry = new THREE.BufferGeometry();
    const starMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.004 });
    const starVertices = [];
    for (let i = 0; i < 400; i += 1) {
      const x = THREE.MathUtils.randFloatSpread(16);
      const y = THREE.MathUtils.randFloatSpread(16);
      const z = THREE.MathUtils.randFloatSpread(16);
      starVertices.push(x, y, z);
    }
    starGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(starVertices, 3)
    );
    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    let animationFrame;
    const onResize = () => {
      const { innerWidth, innerHeight } = window;
      camera.aspect = innerWidth / innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(innerWidth, innerHeight);
    };

    const animate = () => {
      mesh.rotation.x += 0.0035;
      mesh.rotation.y += 0.0045;
      stars.rotation.y += 0.0006;
      renderer.render(scene, camera);
      animationFrame = window.requestAnimationFrame(animate);
    };

    onResize();
    animate();
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      window.cancelAnimationFrame(animationFrame);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      starGeometry.dispose();
      starMaterial.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} className="hero-canvas" />;
}
