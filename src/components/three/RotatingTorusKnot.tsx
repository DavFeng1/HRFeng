import * as THREE from 'three';

import { useRef } from 'react';

import { useFrame } from '@react-three/fiber';

const RotatingTorusKnot = () => {
  const isoRef = useRef<THREE.Mesh>(null);

  const isoGeometry = new THREE.IcosahedronGeometry(1, 0);
  const isoMaterial = new THREE.MeshPhysicalMaterial({
    metalness: 0.2,
    roughness: 0.2,
    transmission: 0.95,
    sheen: 0.5,
  });

  useFrame(({ clock }) => {
    if (isoRef.current) {
      isoRef.current.rotation.x = isoRef.current.rotation.y =
        0.7 * clock.getElapsedTime();
    }
  });

  return (
    <mesh
      ref={isoRef}
      position={[1, -2, 0]}
      geometry={isoGeometry}
      material={isoMaterial}
    />
  );
};

export default RotatingTorusKnot;
