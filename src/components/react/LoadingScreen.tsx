import '@components/react/LoadingScreen.scss';

const LoadingScreen = (): JSX.Element => {
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
      </section>
    </>
  );
};

export default LoadingScreen;
