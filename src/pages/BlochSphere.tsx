import BlochSphereRender from '@apps/quantum/blochSphere/BlochSphereRender';
import BlochSphereControls from '@apps/quantum/blochSphere/BlochSphereControl';
import BlochSphereDescription from '@apps/quantum/blochSphere/BlochSphereDescription';

import create, { GetState, SetState } from 'zustand';
import {
  StoreApiWithSubscribeWithSelector,
  subscribeWithSelector,
} from 'zustand/middleware';

import { useState, useEffect } from 'react';

import '@pages/BlochSphere.scss';

// Store phi and theta in radians
type StoreState = {
  phi: number;
  theta: number;
};

const useStore = create<
  StoreState,
  SetState<StoreState>,
  GetState<StoreState>,
  StoreApiWithSubscribeWithSelector<StoreState>
>(
  subscribeWithSelector(() => ({
    phi: 0,
    theta: 0,
  })),
);

const BlochSpherePage = () => {
  const [orbitReference, setOrbitReference] = useState<HTMLElement>();

  useEffect(() => {
    console.log('BlochSphere.tsx useEddfect[] mounted ');

    const orbitReferenceElement = document.getElementById(
      'bloch-sphere-orbit-reference',
    );

    if (orbitReferenceElement) {
      setOrbitReference(orbitReferenceElement);
    }

    return () => {
      console.log('BlochSphere.tsx useEffect[] unmounted');
      useStore.destroy();
    };
  }, []);

  return (
    <div id="bloch-sphere-container">
      <section className="bloch-sphere-section">
        <BlochSphereDescription />
      </section>
      <section
        className="bloch-sphere-section"
        id="bloch-sphere-orbit-reference"
      >
        <BlochSphereControls />
        <BlochSphereRender domElement={orbitReference} />
      </section>
    </div>
  );
};

export { useStore };
export default BlochSpherePage;
