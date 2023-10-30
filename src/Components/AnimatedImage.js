import React, { useEffect, useState } from 'react';

function AnimatedImage({ src, index }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const rect = document
        .getElementById(`image-${index}`)
        .getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [index]);

  return (
    <img
      id={`image-${index}`}
      src={src}
      className={`change ${isVisible ? 'animated' : ''}`}
    />
  );
}

export default AnimatedImage;
