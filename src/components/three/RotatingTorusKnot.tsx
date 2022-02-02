import * as THREE from 'three';

import { useRef } from 'react';
import { TorusKnot } from '@react-three/drei';

import { useFrame, useLoader } from '@react-three/fiber';

import { isOrthographicCamera } from '@react-three/fiber/dist/declarations/src/core/store';

const RotatingTorusKnot = () => {
  const torusKnotRef = useRef<THREE.Mesh>();
  const isoRef = useRef<THREE.Mesh>();

  const isoGeometry = new THREE.IcosahedronGeometry(1, 0);
  const isoMaterial = new THREE.MeshPhysicalMaterial({
    metalness: 0.2,
    roughness: 0.2,
    transmission: 0.95,
    sheen: 0.5,
  });

  useFrame(({ clock }) => {
    // if (torusKnotRef.current) {
    //   torusKnotRef.current.rotation.x = torusKnotRef.current.rotation.y =
    //     0.7 * clock.getElapsedTime();
    // }

    if (isoRef.current) {
      isoRef.current.rotation.x = isoRef.current.rotation.y =
        0.7 * clock.getElapsedTime();
    }
  });

  // const [graniteTextureMap, graniteRoughnessMap, graniteNormalMap] =
  //   useLoader(THREE.TextureLoader, [
  //     graniteTexture,
  //     graniteRoughness,
  //     graniteNormal,
  //   ]);

  return (
    // <TorusKnot
    //   ref={torusKnotRef}
    //   scale={[0.4, 0.4, 0.4]}
    //   args={[1.25, 0.4, 128, 32]}
    //   position={[1, -2, 1]}
    // >
    //   <meshPhysicalMaterial
    //     metalness={0}
    //     roughness={0}
    //     transmission={0.9}
    //     sheen={}
    //   />
    // </TorusKnot>
    <mesh
      ref={isoRef}
      position={[1, -2, 0]}
      geometry={isoGeometry}
      material={isoMaterial}
    />
  );
};

export default RotatingTorusKnot;
