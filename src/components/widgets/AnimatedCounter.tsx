import React, { useEffect, useRef, useState } from 'react';

type AnimatedCounterProps = {
  targetValue: number; // Valeur finale à atteindre
  duration?: number; // Durée de l'animation en millisecondes
};

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  targetValue,
  duration = 2000,
}) => {
  const [value, setValue] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return;
      const rect = elementRef.current.getBoundingClientRect();
      const isInViewport = rect.top >= 0 && rect.bottom <= window.innerHeight;

      if (isInViewport) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const startValue = 0;
    const increment = targetValue / (duration / 50); // 50ms par frame

    let currentValue = startValue;
    const interval = setInterval(() => {
      currentValue += increment;
      if (currentValue >= targetValue) {
        setValue(targetValue);
        clearInterval(interval);
      } else {
        setValue(Math.round(currentValue));
      }
    }, 50);

    return () => clearInterval(interval);
  }, [isVisible, targetValue, duration]);

  return (
    <div
      ref={elementRef}
      className="font-heading text-primary text-[2.6rem] font-bold dark:text-white lg:text-5xl xl:text-6xl"
    // style={{
    //   fontSize: '2rem',
    //   fontWeight: 'bold',
    //   textAlign: 'center',
    //   margin: '20px 0',
    // }}
    >
      {/* {zeroOrNot(value)}{'+'} */}
      {value}{'+'}
    </div>
  );
};

export default AnimatedCounter;
