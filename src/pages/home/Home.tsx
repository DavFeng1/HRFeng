import { useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { motion, useViewportScroll } from 'framer-motion';
import { useHomePageStore } from '@pages/home/HomeStore';
import HomeCanvas from '@components/three/HomeCanvas';
import LoadingScreen from '@components/react/LoadingScreen';
import Landing from '@pages/home/Landing';

const Home = () => {
  const { scrollYProgress } = useViewportScroll();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    useHomePageStore.setState({ scrollPosition: scrollYProgress });
  }, [scrollYProgress]);

  useEffect(() => {
    console.log('home.tsx ==> Component mounted');

    useHomePageStore.subscribe((state) => {
      if (state.loadingProgress === 100) {
        setIsLoading(false);
      }
    });

    return () => {
      useHomePageStore.destroy();
      console.log('home.tsx ==> Component unmounted');
    };
  }, []);

  return (
    <motion.div exit={{ opacity: 0 }}>
      <Canvas className="canvas-background">
        <HomeCanvas />
      </Canvas>

      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <Landing />
          {/* <About /> */}
        </>
      )}
    </motion.div>
  );
};

export default Home;
