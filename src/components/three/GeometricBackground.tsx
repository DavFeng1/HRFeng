import * as THREE from 'three';

import { useEffect } from 'react';
// import { Stars } from '@react-three/drei';
import { useThree } from '@react-three/fiber';

const GeometricBackground = () => {
  const { scene } = useThree();

  useEffect(() => {
    console.log('HomeBackground.tsx ==> Rendering fog');
    const fog = new THREE.FogExp2(0x121212, 0.05);
    scene.fog = fog;
  }, [scene]);

  return (
    <>
      {/* <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
      /> */}
    </>
  );
};

export default GeometricBackground;
