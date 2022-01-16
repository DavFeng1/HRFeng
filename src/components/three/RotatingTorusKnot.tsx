import * as THREE from 'three';

import { useRef } from 'react';
import { TorusKnot } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const RotatingTorusKnot = () => {
  const torusKnotRef = useRef<THREE.Mesh>();

  useFrame(({ clock }) => {
    if (torusKnotRef.current) {
      torusKnotRef.current.rotation.x = torusKnotRef.current.rotation.y = clock.getElapsedTime();
    }
  });

  return (
    <TorusKnot
      ref={torusKnotRef}
      position={[0, 2.5, 0]}
      scale={[0.5, 0.5, 0.5]}
      args={[1, 0.4, 128, 32]}
    >
      <meshStandardMaterial />
    </TorusKnot>
  );
};

export default RotatingTorusKnot;
