import * as THREE from 'three';

import { useEffect } from 'react';
import { Plane } from '@react-three/drei';
import { useThree } from '@react-three/fiber';

const HomeBackground = () => {
  const { scene } = useThree();

  useEffect(() => {
    console.log('HomeBackground.tsx ==> Rendering fog');
    const fog = new THREE.FogExp2(0x121212, 0.05);
    scene.fog = fog;
  }, [scene]);

  return (
    <>
      <Plane
        position={[0, -2, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        args={[80, 80, 128, 128]}
        scale={[2.5, 2.5, 2.5]}
      >
        <meshStandardMaterial
          wireframe
          color="#A020F0"
          side={THREE.DoubleSide}
        />
      </Plane>
    </>
  );
};

export default HomeBackground;
