import * as THREE from 'three';

import { useEffect } from 'react';
import { useThree } from '@react-three/fiber';
import { Plane, Stars } from '@react-three/drei';

const HomeBackground = () => {
  const { scene } = useThree();

  useEffect(() => {
    console.log('HomeBackground.tsx useEffect[scene] Rendering fog');
    const fog = new THREE.FogExp2(0x121212, 0.05);
    scene.fog = fog;
  }, [scene]);
  //  {/* <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade /> */}

  return (
    <>
      <Plane
        position={[2, 0, 0]}
        rotation={[0, Math.PI / 2, 0]}
        args={[80, 80, 128, 128]}
        scale={[2.5, 2.5, 2.5]}
      >
        <meshStandardMaterial wireframe color="#A020F0" side={THREE.DoubleSide} />
      </Plane>
    </>
  );
};

export default HomeBackground;
