import * as THREE from 'three';

import { useLoader, useFrame, useThree } from '@react-three/fiber';

import { Plane } from '@react-three/drei';

import { useEffect, useRef } from 'react';

import discTexture from '@assets/images/disc.png';

const HomeBackground = () => {
  const { scene } = useThree();

  const starsRef = useRef<THREE.Points>();
  const sunRef = useRef<THREE.Mesh>();

  // =========================== STARS ======================================

  const vertices: THREE.Vector3[] = [];

  for (let i = 0; i < 6000; i++) {
    const star = new THREE.Vector3(
      Math.random() * 500 - 250,
      Math.random() * 500 - 250,
      Math.random() * 500 - 250,
    );
    vertices.push(star);
  }

  const starGeometry = new THREE.BufferGeometry();
  starGeometry.setFromPoints(vertices);

  const starMaterial = new THREE.PointsMaterial({
    color: 0xaaaaaa,
    size: 0.7,
    map: useLoader(THREE.TextureLoader, discTexture),
  });

  const rotate = new THREE.Matrix4().makeRotationZ(0.002);

  // =========================== BLACK HOLE ===================================

  const sunGeometry = new THREE.CylinderGeometry(0.5, 4, 5, 64, 64, true);
  const sunMaterial = new THREE.MeshPhysicalMaterial({
    metalness: 0.2,
    roughness: 0.2,
    transmission: 0.95,
    sheen: 0.5,
  });

  // =========================== HOOKS ========================================

  useEffect(() => {
    console.log('HomeBackground.tsx ==> Mounted ');
  }, [scene]);

  useFrame(() => {
    if (starsRef.current) {
      const positions = starsRef.current.geometry.attributes.position;
      positions.applyMatrix4(rotate);

      positions.needsUpdate = true;
    }
  });

  // =========================== RENDER ======================================

  return (
    <>
      <mesh
        position={[0, 0, -10]}
        rotation={[Math.PI / 2, 0, 0]}
        ref={sunRef}
        geometry={sunGeometry}
        material={sunMaterial}
      />
      {/* <Plane
        position={[0, -10, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        args={[80, 80, 128, 128]}
        scale={[2.5, 2.5, 2.5]}
      >
        <meshStandardMaterial
          wireframe
          color="#A020F0"
          side={THREE.DoubleSide}
        />
      </Plane> */}
      <points
        ref={starsRef}
        material={starMaterial}
        geometry={starGeometry}
      />
    </>
  );
};

export default HomeBackground;
