import { useState, useEffect } from "react";

export default function StarBackground() {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  // Generate stars
  useEffect(() => {
    const generateStars = () => {
      const numberOfStars = Math.floor(window.innerWidth * window.innerHeight / 10000);
      const newStars = Array.from({ length: numberOfStars }, (_, i) => ({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2,
        floatX: (Math.random() - 0.5) * 20, // random float X distance
        floatY: (Math.random() - 0.5) * 20, // random float Y distance
      }));
      setStars(newStars);
    };

    generateStars();
    window.addEventListener("resize", generateStars);
    return () => window.removeEventListener("resize", generateStars);
  }, []);

  // Generate meteors
  useEffect(() => {
    const generateMeteors = () => {
      const numberOfMeteors = Math.floor(window.innerWidth * window.innerHeight / 50000);
      const newMeteors = Array.from({ length: numberOfMeteors }, (_, i) => ({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: 1,
        animationDuration: Math.random() * 2 + 1,
      }));
      setMeteors(newMeteors);
    };

    generateMeteors();
    window.addEventListener("resize", generateMeteors);
    return () => window.removeEventListener("resize", generateMeteors);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Stars */}
      {stars.map((star) => (
        <div
          key={`star-${star.id}`}
          className="absolute rounded-full bg-white animate-star-twinkle"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            top: `${star.y}%`,
            left: `${star.x}%`,
            opacity: star.opacity,
            animationDuration: `${star.animationDuration}s`,
            transform: `translate(0,0)`,
            animationName: "star-float",
            animationTimingFunction: "ease-in-out",
            animationIterationCount: "infinite",
          }}
        />
      ))}

      {/* Meteors */}
      {meteors.map((meteor) => (
        <div
          key={`meteor-${meteor.id}`}
          className="absolute bg-white"
          style={{
            width: `${meteor.size * 10}px`,
            height: `${meteor.size}px`,
            top: `${meteor.y}%`,
            left: `${meteor.x}%`,
            opacity: meteor.opacity,
            transform: "rotate(-45deg)",
            animation: `meteor-fall ${meteor.animationDuration}s linear infinite`,
          }}
        />
      ))}
    </div>
  );
}
