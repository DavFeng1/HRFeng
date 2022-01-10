import * as THREE from 'three';

import { useEffect, useRef } from 'react';
import { Suspense } from 'react';

import { Canvas, useThree, useLoader } from '@react-three/fiber';

import { OrbitControls, Points, Point, PointMaterial, useTexture } from '@react-three/drei';

import { TextureLoader } from 'three/src/loaders/TextureLoader';

const BLOCH_SPHERE_RADIUS = 1;

const BlochSphere = () => {
  // const texture = new THREE.TextureLoader().load('textures/disc.png');

  const texture = useLoader(TextureLoader, 'textures/disc.png');

  const ctx = useThree();

  ctx.gl.context.canvas.addEventListener(
    'webglcontextlost',
    function (event) {
      console.log('list it');
      event.preventDefault();

      // animationID would have been set by your call to requestAnimationFrame
    },
    false,
  );

  // const texture = useTexture('textures/disc.png');

  // Sphere Geometry
  const sphereGeoemtry = new THREE.SphereGeometry(BLOCH_SPHERE_RADIUS, 32, 16);

  // Material for the surface of the sphere
  const meshLambertMaterial = new THREE.MeshLambertMaterial({
    color: 0x522d70,
    opacity: 0.1,
    transparent: true,
    depthWrite: false,
  });

  // Material for line segments on the surface of the sphere
  const linesMaterial = new THREE.LineBasicMaterial({
    color: 0x113b47,
    opacity: 0.5,
    transparent: true,
    linewidth: 1,
  });

  // Lines on the surface of the sphere       <points geometry={pointsGeometry} material={pointsMaterial} />
  const edgesGeometry = new THREE.EdgesGeometry(sphereGeoemtry);

  // Points on the sphere
  const pointsGeometry = new THREE.BufferGeometry();

  const vertices = new Float32Array([
    -1.0, -1.0, 1.0, 1.0, -1.0, 1.0, 1.0, 1.0, 1.0,

    1.0, 1.0, 1.0, -1.0, 1.0, 1.0, -1.0, -1.0, 1.0,
  ]);

  pointsGeometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));

  const pointsMaterial = new THREE.PointsMaterial({
    color: 0x0080ff,
    size: 0.5,
    alphaTest: 0.5,
    map: texture,
  });

  // const points = new THREE.Points(pointsGeometry, pointsMaterial);

  // return (
  //   <>
  //     <perspectiveCamera args={[75, window.innerHeight / window.innerWidth, 0.1, 10000]} />
  //     <OrbitControls minDistance={1.5} maxDistance={2.5} />
  //     <ambientLight intensity={0.5} />
  //     <pointLight position={[0, 200, 0]} />
  //     <pointLight position={[100, 200, 100]} />
  //     <pointLight position={[-100, -200, -100]} />
  //     <axesHelper args={[2]} />
  //     <mesh geometry={sphereGeoemtry} material={meshLambertMaterial} />
  //     <lineSegments geometry={edgesGeometry} material={linesMaterial} />
  //     <points geometry={pointsGeometry} material={pointsMaterial} dispose={null} />
  //   </>
  // );

  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight />
      <mesh>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial />
      </mesh>
    </>
  );
};

const Main = () => {
  return (
    <Canvas
      onCreated={(state) => state.gl.setClearColor('red', 0)}
      gl={{ antialias: true, alpha: true }}
      camera={{ fov: 75, position: [15, 10, 15] }}
      style={{ height: '100%', width: '100%' }}
    >
      <Suspense fallback={null}>
        <BlochSphere />
      </Suspense>
    </Canvas>
  );
};

export default Main;
