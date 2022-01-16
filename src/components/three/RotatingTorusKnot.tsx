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
      scale={[0.4, 0.4, 0.4]}
      args={[1.25, 0.4, 128, 32]}
      position={[0, 2.5, 0]}
    >
      <meshStandardMaterial color={0x692380} />
    </TorusKnot>
  );
};

export default RotatingTorusKnot;
