import * as THREE from 'three';

import { Suspense, useRef, useEffect } from 'react';
import { OrbitControls, Text } from '@react-three/drei';
import { Canvas, useLoader, useFrame, useThree } from '@react-three/fiber';

import { useStore } from '@pages/stuff/blochSphere/BlochSphere';

import discTexture from '@assets/images/disc.png';

const BlochSphere = () => {
  const xRingRef = useRef<THREE.Mesh>(null);
  const yRingRef = useRef<THREE.Mesh>(null);
  const zRingRef = useRef<THREE.Mesh>(null);
  const xTextRef = useRef<THREE.Mesh>(null);
  const yTextRef = useRef<THREE.Mesh>(null);
  const zTextRef = useRef<THREE.Mesh>(null);
  const pointRef = useRef<THREE.Points>(null);
  const lineRef = useRef<THREE.ArrowHelper>(null);

  const threeState = useThree();
  const phiRef = useRef(useStore.getState().phi);
  const thetaRef = useRef(useStore.getState().theta);

  // ================================= LIFE CYCLE =========================================
  useEffect(() => {
    console.log('BlochSphereRender.tsx useEffect[] Mounted');
    useStore.subscribe((state) => {
      phiRef.current = state.phi;
      thetaRef.current = state.theta;
    });

    return () => {
      console.log('BlochSphereRender.tsx useEffect[] Unmounted');
    };
  }, []);

  useEffect(() => {
    console.log('BlochSphereRender.tsx useEffect[gl] Mounted');
    return () => {
      console.log('BlochSphereRender.tsx useEffect[gl] disposing');
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
  pointsGeometry.setAttribute(
    'position',
    new THREE.Float32BufferAttribute(state.toArray(), 3),
  );

  const texture = useLoader(THREE.TextureLoader, discTexture);
  const pointsMaterial = new THREE.PointsMaterial({
    color: 0x0080ff,
    size: 0.15,
    alphaTest: 0.5,
    map: texture,
  });

  // ===================================== Animation =====================================

  const lerpVec = new THREE.Vector3();

  // const slerpQ = new THREE.Quaternion();

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

      const cosPhi = Math.cos(phi);
      const sinPhi = Math.sin(phi);
      const cosTheta = Math.cos(theta);
      const sinTheta = Math.sin(theta);

      // Update state position
      lerpVec.set(cosPhi * sinTheta, sinTheta * sinPhi, cosTheta);
      lineRef.current.setDirection(lerpVec);

      pointRef.current.position.x = cosPhi * sinTheta;
      pointRef.current.position.y = sinPhi * sinTheta;
      pointRef.current.position.z = cosTheta;

      // ================= Update rings orientation =====================================
      // X ring scale
      lerpVec.set(sinTheta, sinTheta, 1);
      xRingRef.current.scale.lerp(lerpVec, 0.1);

      // XRing position
      lerpVec.set(0, 0, cosTheta);
      xRingRef.current.position.lerp(lerpVec, 0.1);

      // Y ring scale
      const yRingScaleFactory = Math.sqrt(1 - sinTheta ** 2 * sinPhi ** 2);
      lerpVec.set(yRingScaleFactory, yRingScaleFactory, 1);
      yRingRef.current.scale.lerp(lerpVec, 0.1);

      // Y Ring position
      lerpVec.set(0, sinTheta * sinPhi, 0);
      yRingRef.current.position.lerp(lerpVec, 0.1);

      // Z ring scale
      const zRingScaleFactory = Math.sqrt(
        cosTheta ** 2 + sinTheta ** 2 * sinPhi ** 2,
      );
      lerpVec.set(zRingScaleFactory, zRingScaleFactory, 1);
      zRingRef.current.scale.lerp(lerpVec, 0.1);

      // Z ring position
      lerpVec.set(cosPhi * sinTheta, 0, 0);
      zRingRef.current.position.lerp(lerpVec, 0.1);

      // ============================== TEXT ORIENTATION =========================
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
      <perspectiveCamera
        args={[75, window.innerHeight / window.innerWidth, 0.1, 10000]}
      />
      <OrbitControls
        minDistance={1.5}
        maxDistance={2.5}
        maxPolarAngle={2 * Math.PI}
        enableZoom={false}
      />
      <ambientLight intensity={0.5} />
      <mesh>
        <arrowHelper args={[axisX, origin, 1.3, 0x0080ff, 0.1]} />
        <arrowHelper args={[axisY, origin, 1.3, 0x0080ff, 0.1]} />
        <arrowHelper args={[axisZ, origin, 1.3, 0x0080ff, 0.1]} />
      </mesh>
      <mesh>
        <sphereGeometry args={[1, 32, 16]} />
        <meshLambertMaterial
          color={0x522d70}
          opacity={0.1}
          transparent={true}
          depthWrite={false}
        />
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

      <points
        ref={pointRef}
        geometry={pointsGeometry}
        material={pointsMaterial}
      />
      <mesh>
        <arrowHelper
          ref={lineRef}
          args={[state, origin, 1, 0x0080ff, 0]}
        />
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
      id="bloch-sphere-canvas"
      className="grabbable"
    >
      <Suspense fallback={<Fallback />}>
        <BlochSphere />
      </Suspense>
    </Canvas>
  );
};

export default BlochSphereRender;
