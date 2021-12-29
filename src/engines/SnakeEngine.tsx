import React, { useEffect, useRef } from 'react';

const Snake = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Positions
  let px = 10;
  let py = 10;
  // grid size, tile cap
  let gs = 20;
  let tc = 20;
  // acceleration
  let ax = 15;
  let ay = 15;
  // velocity
  let xv = 0;
  let yv = 0;

  const keyPush = (event: KeyboardEvent) => {
    switch (event.code) {
      case 'ArrowLeft':
        event.preventDefault();
        xv = -1;
        yv = 0;
        break;
      case 'ArrowUp':
        event.preventDefault();
        xv = 0;
        yv = -1;
        break;
      case 'ArrowRight':
        event.preventDefault();
        xv = 1;
        yv = 0;
        break;
      case 'ArrowDown':
        event.preventDefault();
        xv = 0;
        yv = 1;
        break;
    }
  };

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const canvasContext = canvas.getContext('2d');

      if (canvasContext) {
        const game = () => {
          px += xv;
          py += yv;
          if (px < 0) {
            px = tc - 1;
          }
          if (px > tc - 1) {
            px = 0;
          }
          if (py < 0) {
            py = tc - 1;
          }
          if (py > tc - 1) {
            py = 0;
          }

          canvasContext.fillStyle = 'blue';
          canvasContext.fillRect(0, 0, canvas.width, canvas.height);

          canvasContext.fillStyle = 'lime';
          for (var i = 0; i < trail.length; i++) {
            canvasContext.fillRect(trail[i].x * gs, trail[i].y * gs, gs - 2, gs - 2);
            // Eat own tail
            if (trail[i].x === px && trail[i].y === py) {
              tail = 5;
            }
          }

          // update trail
          trail.push({ x: px, y: py });
          while (trail.length > tail) {
            trail.shift();
          }

          // eat apple
          if (ax === px && ay === py) {
            tail++;
            ax = Math.floor(Math.random() * tc);
            ay = Math.floor(Math.random() * tc);
          }

          canvasContext.fillStyle = 'red';
          canvasContext.fillRect(ax * gs, ay * gs, gs - 2, gs - 2);
        };

        document.addEventListener('keydown', keyPush);
        setInterval(game, 1000 / 15);

        let trail: any[] = [];
        let tail = 5;
      }
    }
  }, []);

  return <canvas id="gc" width="400" height="400" ref={canvasRef}></canvas>;
};

export default Snake;
