import * as THREE from 'three';

import React, { useRef, useEffect } from 'react';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
// import { TTFLoader } from 'three/examples/jsm/loaders/TTFLoader';
import { useLoader } from '@react-three/fiber';

const BlochSphere = () => {
  let mount = useRef<HTMLDivElement>(null);

  const BLOCH_SPHERE_RADIUS = 5;

  const font = useLoader(FontLoader, './public/fonts/Roboto/Roboto-Regular.ttf');

  useEffect(() => {
    if (mount.current && window) {
      // setups
      const scene = new THREE.Scene();
      const renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(650, 400);
      mount.current.appendChild(renderer.domElement);

      // textures
      const texture = new THREE.TextureLoader().load('/textures/disc.png');

      // camera
      const camera = new THREE.PerspectiveCamera(75, 650 / 400, 0.1, 50);
      camera.position.z = 10;

      // controls
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.minDistance = 10;
      controls.maxDistance = 35;

      // lighting
      const ambientLight = new THREE.AmbientLight(0x000000);
      scene.add(ambientLight);

      const light1 = new THREE.PointLight(0xffffff, 1, 0);
      light1.position.set(0, 200, 0);
      scene.add(light1);

      const light2 = new THREE.PointLight(0xffffff, 1, 0);
      light2.position.set(100, 200, 100);
      scene.add(light2);

      const light3 = new THREE.PointLight(0xffffff, 1, 0);
      light3.position.set(-100, -200, -100);
      scene.add(light3);

      // shape and group
      const group = new THREE.Group();
      const geometry = new THREE.SphereGeometry(BLOCH_SPHERE_RADIUS, 32, 16);

      // materials
      const lineMaterial = new THREE.LineBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.5,
      });

      const meshMaterial = new THREE.MeshLambertMaterial({
        color: 0x156289,
        opacity: 0.5,
        transparent: true,
      });

      group.add(new THREE.LineSegments(geometry, lineMaterial));
      group.add(new THREE.Mesh(geometry, meshMaterial));
      scene.add(group);

      // axis
      const axis = new THREE.AxesHelper(10);
      const position = axis.geometry.attributes.position;

      const textGeo = new TextGeometry('Example label', {
        font: font,
        size: 15,
        height: 5,
        curveSegments: 10,
      });

      const color = new THREE.Color();
      color.setRGB(255, 0, 0);
      const textMaterial = new THREE.MeshBasicMaterial({ color: color });
      const meshText = new THREE.Mesh(textGeo, textMaterial);

      meshText.position.x = position.getX(0);
      scene.add(meshText);
      scene.add(axis);

      // state
      const dir = new THREE.Vector3(1, 3, 5);
      const norm = Math.sqrt(35) / BLOCH_SPHERE_RADIUS;
      const normalized = dir.clone().normalize();
      const origin = new THREE.Vector3(0, 0, 0);
      const hex = 0xffff00;
      const arrowHelper = new THREE.ArrowHelper(normalized, origin, BLOCH_SPHERE_RADIUS, hex, 0);
      scene.add(arrowHelper);

      // point
      const pointMaterial = new THREE.PointsMaterial({
        color: 0x0080ff,
        size: 0.5,
        alphaTest: 0.5,
        map: texture,
      });

      const pointGeometry = new THREE.BufferGeometry();
      pointGeometry.setAttribute(
        'position',
        new THREE.Float32BufferAttribute([1 / norm, 3 / norm, 5 / norm], 3),
      );

      const points = new THREE.Points(pointGeometry, pointMaterial);

      scene.add(points);

      // Animate

      const animate = () => {
        requestAnimationFrame(animate);

        group.rotation.y += 0.005;

        renderer.render(scene, camera);
      };

      animate();
    }
  });

  return <div ref={mount} />;
};

export default BlochSphere;
