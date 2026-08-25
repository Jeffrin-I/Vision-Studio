import React, { useEffect, useRef } from 'react';

export default function ScrollAnimationBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameCount = 300;

  const currentFrame = (index: number) =>
    `/ezgif-frame-${index.toString().padStart(3, '0')}.jpg`;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext('2d');
    if (!context) return;

    const images: HTMLImageElement[] = [];

    // Load all frames
    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      images.push(img);

      img.onload = () => {
        if (i === 1) {
          canvas.width = img.width;
          canvas.height = img.height;
          context.drawImage(img, 0, 0);
        }
      };
    }

    let currentFrameIndex = 0;
    let targetFrameIndex = 0;
    let animationFrameId: number;

    const render = () => {
      currentFrameIndex += (targetFrameIndex - currentFrameIndex) * 0.1;
      let frameToDraw = Math.round(currentFrameIndex);

      if (frameToDraw < 0) frameToDraw = 0;
      if (frameToDraw > frameCount - 1) frameToDraw = frameCount - 1;

      if (images[frameToDraw] && images[frameToDraw].complete) {
        if (canvas.width !== images[frameToDraw].width) {
          canvas.width = images[frameToDraw].width;
          canvas.height = images[frameToDraw].height;
        }
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(images[frameToDraw], 0, 0);
      }

      animationFrameId = requestAnimationFrame(render);
    };

    const handleScroll = () => {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      const maxScrollTop =
        document.documentElement.scrollHeight - window.innerHeight;

      const scrollFraction = maxScrollTop > 0 ? scrollTop / maxScrollTop : 0;
      targetFrameIndex = Math.min(
        frameCount - 1,
        Math.max(0, scrollFraction * (frameCount - 1))
      );
    };

    // Trigger an initial scroll calculation in case the page is reloaded partway down
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    render();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[100vh] overflow-hidden -z-10 pointer-events-none">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full object-cover object-center bg-black"
      />
    </div>
  );
}
