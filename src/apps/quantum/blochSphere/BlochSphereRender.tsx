import * as THREE from 'three';

import { Suspense, useRef, useEffect } from 'react';

import { OrbitControls, Text } from '@react-three/drei';

import { Canvas, useLoader, useFrame, useThree } from '@react-three/fiber';

import { useStore } from '@pages/BlochSphere';

import discTexture from '@assets/images/disc.png';

THREE.Object3D.DefaultUp.set(0, 0, 1);

const BlochSphere = () => {
  const xRingRef = useRef<THREE.Object3D>(null);
  const yRingRef = useRef<THREE.Object3D>(null);
  const zRingRef = useRef<THREE.Object3D>(null);
  const lineRef = useRef<THREE.ArrowHelper>(null);

  const xTextRef = useRef<THREE.Object3D>(null);
  const yTextRef = useRef<THREE.Object3D>(null);
  const zTextRef = useRef<THREE.Object3D>(null);

  const pointRef = useRef<THREE.Object3D>(null);

  const threeState = useThree();

  const phiRef = useRef(useStore.getState().phi);
  const thetaRef = useRef(useStore.getState().theta);

  // ================================= LIFE CYCLE =========================================
  useEffect(
    () =>
      useStore.subscribe((state) => {
        phiRef.current = (state.phi * Math.PI) / 180;
        thetaRef.current = (state.theta * Math.PI) / 180;
      }),
    [],
  );

  useEffect(() => {
    return () => {
      threeState.gl.dispose();
    };
  }, [threeState.gl]);

  // ================================== GRID ON SPHERE =====================================
  const sphereGeoemtry = new THREE.SphereGeometry(1, 32, 16);

  const edgesGeometry = new THREE.EdgesGeometry(sphereGeoemtry);
  const linesMaterial = new THREE.LineBasicMaterial({
    color: 0x113b47,
    opacity: 0.5,
    transparent: true,
    linewidth: 1,
  });

  // ====================================== state plot ======================================
  const origin = new THREE.Vector3(0, 0, 0);
  const axisX = new THREE.Vector3(1, 0, 0);
  const axisY = new THREE.Vector3(0, 1, 0);
  const axisZ = new THREE.Vector3(0, 0, 1);
  const state = new THREE.Vector3(0, 0, 0);

  const pointsGeometry = new THREE.BufferGeometry();
  pointsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(state.toArray(), 3));

  const texture = useLoader(THREE.TextureLoader, discTexture);
  const pointsMaterial = new THREE.PointsMaterial({
    color: 0x0080ff,
    size: 0.15,
    alphaTest: 0.5,
    map: texture,
  });

  // ===================================== Animation =====================================
  const directionVec = new THREE.Vector3();

  const lerpVec = new THREE.Vector3();

  useFrame(() => {
    if (
      lineRef.current &&
      xRingRef.current &&
      yRingRef.current &&
      zRingRef.current &&
      xTextRef.current &&
      yTextRef.current &&
      zTextRef.current &&
      pointRef.current
    ) {
      const theta = thetaRef.current || 0;
      const phi = phiRef.current || 0;

      directionVec.set(
        Math.cos(phi) * Math.sin(theta),
        Math.sin(phi) * Math.sin(theta),
        Math.cos(theta),
      );

      pointRef.current.position.lerp(directionVec, 0.1);

      // pointRef.current.position.x = Math.cos(phi) * Math.sin(theta);
      // pointRef.current.position.y = Math.sin(phi) * Math.sin(theta);
      // pointRef.current.position.z = Math.cos(theta);

      lineRef.current.setDirection(directionVec);

      // Update rings orientation

      // X ring scale
      lerpVec.set(Math.sin(theta), Math.sin(theta), 1);
      xRingRef.current.scale.lerp(lerpVec, 0.1);

      // XRing position
      lerpVec.set(0, 0, Math.cos(theta));
      xRingRef.current.position.lerp(lerpVec, 0.1);

      // Y ring scale
      lerpVec.set(
        Math.sqrt(1 - Math.sin(theta) ** 2 * Math.sin(phi) ** 2),
        Math.sqrt(1 - Math.sin(theta) ** 2 * Math.sin(phi) ** 2),
        1,
      );
      yRingRef.current.scale.lerp(lerpVec, 0.1);

      // Y Ring position
      lerpVec.set(0, Math.sin(theta) * Math.sin(phi), 0);
      yRingRef.current.position.lerp(lerpVec, 0.1);

      // Z ring scale
      lerpVec.set(
        Math.sqrt(Math.cos(theta) ** 2 + Math.sin(theta) ** 2 * Math.sin(phi) ** 2),
        Math.sqrt(Math.cos(theta) ** 2 + Math.sin(theta) ** 2 * Math.sin(phi) ** 2),
        1,
      );
      zRingRef.current.scale.lerp(lerpVec, 0.1);

      // Z ring position
      lerpVec.set(Math.cos(phi) * Math.sin(theta), 0, 0);
      zRingRef.current.position.lerp(lerpVec, 0.1);

      // Update Text orientation
      zTextRef.current.lookAt(threeState.camera.position);
      yTextRef.current.lookAt(threeState.camera.position);
      xTextRef.current.lookAt(threeState.camera.position);

      xTextRef.current.position.x = 1.4;
      yTextRef.current.position.y = 1.4;
      zTextRef.current.position.z = 1.4;
    }
  });

  // ====================================== Components ===============================

  return (
    <>
      <perspectiveCamera args={[75, window.innerHeight / window.innerWidth, 0.1, 10000]} />
      <OrbitControls minDistance={2} maxDistance={2.5} />
      <ambientLight intensity={0.5} />
      <pointLight position={[0, 200, 0]} />
      <pointLight position={[100, 200, 100]} />
      <pointLight position={[-100, -200, -100]} />
      <mesh>
        <arrowHelper args={[axisX, origin, 1.3, 0x0080ff, 0.1]} />
        <arrowHelper args={[axisY, origin, 1.3, 0x0080ff, 0.1]} />
        <arrowHelper args={[axisZ, origin, 1.3, 0x0080ff, 0.1]} />
      </mesh>
      <mesh>
        <sphereGeometry args={[1, 32, 16]} />
        <meshLambertMaterial color={0x522d70} opacity={0.1} transparent={true} depthWrite={false} />
      </mesh>
      <lineSegments geometry={edgesGeometry} material={linesMaterial} />
      <mesh ref={xRingRef}>
        <torusGeometry args={[1, 0.007, 10, 70]} />
        <meshBasicMaterial color={0x00ff00} side={THREE.DoubleSide} />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]} ref={yRingRef}>
        <torusGeometry args={[1, 0.007, 10, 70]} />
        <meshBasicMaterial color={0xff0000} side={THREE.DoubleSide} />
      </mesh>
      <mesh rotation={[0, Math.PI / 2, 0]} ref={zRingRef}>
        <torusGeometry args={[1, 0.007, 10, 70]} />
        <meshBasicMaterial color={0x9300ff} side={THREE.DoubleSide} />
      </mesh>

      <points ref={pointRef} geometry={pointsGeometry} material={pointsMaterial} />
      <mesh>
        <arrowHelper ref={lineRef} args={[state, origin, 1, 0x0080ff, 0]} />
      </mesh>

      <mesh ref={xTextRef}>
        <Text color="white"> x </Text>
      </mesh>
      <mesh ref={yTextRef}>
        <Text color="white"> y</Text>
      </mesh>
      <mesh ref={zTextRef}>
        <Text color="white"> z </Text>
      </mesh>
    </>
  );
};

const Fallback = () => {
  return <mesh></mesh>;
};

const BlochSphereRender = () => {
  return (
    <Canvas
      gl={{ antialias: true }}
      camera={{ fov: 75, position: [10, 15, 15] }}
      style={{ height: '100%', width: '100%' }}
    >
      {/* <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade /> */}
      <Suspense fallback={<Fallback />}>
        <BlochSphere />
      </Suspense>
    </Canvas>
  );
};

export default BlochSphereRender;
