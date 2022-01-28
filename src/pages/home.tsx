import { useEffect, useState } from 'react';

import { Canvas } from '@react-three/fiber';

import { useViewportScroll, MotionValue } from 'framer-motion';

import create, { SetState, GetState } from 'zustand';
import {
  StoreApiWithSubscribeWithSelector,
  subscribeWithSelector,
} from 'zustand/middleware';

import HomeCanvas from '@components/three/HomeCanvas';
import LoadingScreen from '@components/react/LoadingScreen';

import Landing from '@pages/home/Landing';
import Projects from '@pages/home/Projects';
import Contact from '@pages/home/Contact';

type HomePageStoreState = {
  scrollPosition: MotionValue<number>;
  loadingProgress: number;
};

export const useHomePageStore = create<
  HomePageStoreState,
  SetState<HomePageStoreState>,
  GetState<HomePageStoreState>,
  StoreApiWithSubscribeWithSelector<HomePageStoreState>
>(
  subscribeWithSelector(() => ({
    scrollPosition: new MotionValue<number>(0),
    loadingProgress: 0,
  })),
);

const Home = () => {
  const { scrollYProgress } = useViewportScroll();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    useHomePageStore.setState({ scrollPosition: scrollYProgress });
  }, [scrollYProgress]);

  useEffect(() => {
    console.log('home.tsx ==> Component mounted');

    useHomePageStore.subscribe((state) => {
      if (state.loadingProgress === 100) setIsLoading(false);
    });

    return () => {
      console.log('home.tsx ==> Component unmounted');
    };
  }, []);

  return (
    <>
      {/* ========================THREE JS CANVAS BACKGROUND ===================*/}

      <Canvas className="canvas-background">
        <HomeCanvas />
      </Canvas>

      {/* ======================== PAGE CONTENT =================================*/}

      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <Landing />
          <Contact />
          <Projects />
        </>
      )}
    </>
  );
};

export default Home;
