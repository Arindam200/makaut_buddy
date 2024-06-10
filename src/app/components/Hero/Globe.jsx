"use client";
import React, { useEffect, useRef, useState } from "react";
import createGlobe from "cobe";
import LoadingSign from '../../ui/loadingSign';

function Globe() {
  const canvasRef = useRef();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let phi = 0;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 500 * 2,
      height: 500 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [
        { location: [37.7595, -122.4367], size: 0.03 },
        { location: [40.7128, -74.006], size: 0.1 },
      ],
      onRender: (state) => {
        state.phi = phi;
        phi += 0.01;
      },
    });

    setIsLoading(false);

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <div>
      {isLoading && (
        <LoadingSign />
      )}
      <canvas
        ref={canvasRef}
        style={{
          width: 600,
          height: 600,
          maxWidth: "100%",
          aspectRatio: 1,
          transition: "all 0.3s",
          opacity: isLoading ? 0 : 1,
        }}
      />
    </div>
  );
}

export default Globe;
