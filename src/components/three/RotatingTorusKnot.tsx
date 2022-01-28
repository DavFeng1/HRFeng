import * as THREE from 'three';

import { useRef } from 'react';
import { TorusKnot } from '@react-three/drei';

import { useFrame, useLoader } from '@react-three/fiber';

import graniteTexture from '@assets/images/Granite08small_4K_BaseColor.png';
import graniteNormal from '@assets/images/Granite08small_4K_Normal.png';
import graniteRoughness from '@assets/images/Granite08small_4K_Roughness.png';

const RotatingTorusKnot = () => {
  const torusKnotRef = useRef<THREE.Mesh>();

  useFrame(({ clock }) => {
    if (torusKnotRef.current) {
      torusKnotRef.current.rotation.x = torusKnotRef.current.rotation.y =
        0.7 * clock.getElapsedTime();
    }
  });

  const [graniteTextureMap, graniteRoughnessMap, graniteNormalMap] =
    useLoader(THREE.TextureLoader, [
      graniteTexture,
      graniteRoughness,
      graniteNormal,
    ]);

  return (
    <TorusKnot
      ref={torusKnotRef}
      scale={[0.4, 0.4, 0.4]}
      args={[1.25, 0.4, 128, 32]}
      position={[1, -2, 1]}
    >
      <meshPhysicalMaterial
        map={graniteTextureMap}
        roughnessMap={graniteRoughnessMap}
        normalMap={graniteNormalMap}
      />
    </TorusKnot>
  );
};

export default RotatingTorusKnot;
