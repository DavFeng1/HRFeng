import * as THREE from 'three';

import { useLoader, useFrame, useThree } from '@react-three/fiber';

import { useEffect, useRef } from 'react';

import discTexture from '@assets/images/disc.png';

const HomeBackground = () => {
  const { scene } = useThree();

  const starsRef = useRef<THREE.Points>(null);

  // =========================== STARS ======================================

  const vertices: THREE.Vector3[] = [];

  for (let i = 0; i < 1000; i++) {
    const star = new THREE.Vector3(
      Math.random() * 300 - 150,
      Math.random() * 300 - 150,
      Math.random() * 50 - 50,
    );
    vertices.push(star);
  }

  const starGeometry = new THREE.BufferGeometry();
  starGeometry.setFromPoints(vertices);

  const starMaterial = new THREE.PointsMaterial({
    color: 0xd7d3ce,
    size: 0.5,
    map: useLoader(THREE.TextureLoader, discTexture),
    alphaTest: 0.5,
  });

  const rotate = new THREE.Matrix4().makeRotationZ(0.001);

  // =========================== HOOKS ========================================

  useEffect(() => {
    console.log('HomeBackground.tsx ==> Mounted ');
  }, [scene]);

  useFrame(() => {
    if (starsRef.current) {
      const positions = starsRef.current.geometry.attributes.position;

      for (let i = 0; i < 1000; i++) {
        const zCoordinate = positions.getZ(i);
        if (zCoordinate >= 10) {
          positions.setXYZ(
            i,
            positions.getX(i),
            positions.getY(i),
            Math.random() * 100 - 200,
          );
        } else {
          positions.setXYZ(
            i,
            positions.getX(i),
            positions.getY(i),
            positions.getZ(i) + 0.1,
          );
        }
      }
      starsRef.current.applyMatrix4(rotate);
      positions.needsUpdate = true;
    }
  });

  // =========================== RENDER ======================================

  return (
    <>
      <points
        ref={starsRef}
        material={starMaterial}
        geometry={starGeometry}
      />
    </>
  );
};

export default HomeBackground;
