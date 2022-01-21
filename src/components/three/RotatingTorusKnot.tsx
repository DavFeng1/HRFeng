import * as THREE from 'three';

import { useRef } from 'react';
import { TorusKnot } from '@react-three/drei';

import { useFrame, useLoader } from '@react-three/fiber';

import marbleTexture from '@assets/images/marble.png';

const RotatingTorusKnot = () => {
  const torusKnotRef = useRef<THREE.Mesh>();

  useFrame(({ clock }) => {
    if (torusKnotRef.current) {
      torusKnotRef.current.rotation.x = torusKnotRef.current.rotation.y = clock.getElapsedTime();
    }
  });

  const texture = useLoader(THREE.TextureLoader, marbleTexture);

  return (
    <TorusKnot
      ref={torusKnotRef}
      scale={[0.4, 0.4, 0.4]}
      args={[1.25, 0.4, 128, 32]}
      position={[0, 2.5, 0]}
    >
      <meshStandardMaterial map={texture} />
    </TorusKnot>
  );
};

export default RotatingTorusKnot;
