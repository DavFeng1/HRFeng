import { useEffect } from 'react';

const HomeBackground = () => {
  // const { scene } = useThree();

  useEffect(() => {
    // console.log('HomeBackground.tsx ==> Rendering fog');
    // const fog = new THREE.FogExp2(0x121212, 0.05);
    // scene.fog = fog;
  }, []);

  return (
    <>
      {/* <Plane
        position={[2, 0, 0]}
        rotation={[0, Math.PI / 2, 0]}
        args={[80, 80, 128, 128]}
        scale={[2.5, 2.5, 2.5]}
      >
        <meshStandardMaterial wireframe color="#A020F0" side={THREE.DoubleSide} />
      </Plane> */}
    </>
  );
};

export default HomeBackground;
