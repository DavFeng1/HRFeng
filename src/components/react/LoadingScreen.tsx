import { useEffect, useRef } from 'react';

import { useHomePageStore } from '@pages/home';

import '@components/react/LoadingScreen.scss';

const LoadingScreen = (): JSX.Element => {
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log('LoadingScreen.tsx ==> Component mounted');

    useHomePageStore.subscribe((state) => {
      console.log('updating css', state.loadingProgress);
      progressBarRef.current?.style.setProperty(
        '--progress',
        `${state.loadingProgress.toString()}%`,
      );
    });

    return () => {
      console.log('LoadingScreen.tsx ==> Component unmounted');
    };
  }, []);

  return (
    <>
      <section id="loading-screen">
        <div id="center" />
        <div className="ring">
          <div id="x-ring-container">
            <div id="x-ring" />
          </div>
          <div id="y-ring-container">
            <div id="y-ring" />
          </div>
          <div id="z-ring-container">
            <div id="z-ring" />
          </div>

          <div id="z-ring-dot" />
        </div>
        <div id="outer-ring" />
        <div
          ref={progressBarRef}
          id="progress-percentage"
          role="progressbar"
          aria-valuenow={0}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </section>
    </>
  );
};

export default LoadingScreen;
