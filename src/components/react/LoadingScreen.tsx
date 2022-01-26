// import { useRef } from 'react';

// import { useHomePageStore } from '@pages/home';

import '@components/react/LoadingScreen.scss';

const LoadingScreen = (): JSX.Element => {
  // const progressRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   console.log('LoadingScreen.tsx ==> Component mounted');

  //   let currentProgress = 0;
  //   let progressQueue: number[] = [0];

  //   let nextProgress = progressQueue.shift();

  //   const listenForUpdates = () => {
  //     const id = setInterval(() => {
  //       if (currentProgress >= 100) {
  //         clearInterval(id);
  //         useHomePageStore.setState({ isLoading: false });
  //       }
  //       if (nextProgress) {
  //         if (currentProgress < nextProgress) {
  //           progressRef.current?.style.setProperty(
  //             'width',
  //             `${currentProgress}%`,
  //           );
  //           currentProgress++;
  //         } else {
  //           currentProgress = nextProgress;
  //           nextProgress = progressQueue.shift();
  //         }
  //       } else {
  //         nextProgress = progressQueue.shift();
  //       }
  //     }, 1);
  //   };

  //   listenForUpdates();

  //   useHomePageStore.subscribe((state) => {
  //     progressQueue.push(state.loadingProgress);
  //   });

  //   return () => {
  //     console.log('LoadingScreen.tsx ==> Component unmounted');
  //   };
  // }, []);

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
        {/* <div id="progress-bar-container">
          <div id="progress-bar" ref={progressRef}></div>
        </div> */}
      </section>
    </>
  );
};

export default LoadingScreen;
