import React, { useEffect } from 'react';
import gsap from 'gsap';

const Banner = () => {
  const icons = [
    { id: 'icon1', src: 'https://icon.icepanel.io/Technology/svg/JavaScript.svg' },
    { id: 'icon2', src: 'https://icon.icepanel.io/Technology/svg/Python.svg' },
    { id: 'icon3', src: 'https://icon.icepanel.io/Technology/svg/React.svg' },
    { id: 'icon4', src: 'https://icon.icepanel.io/Technology/svg/HTML5.svg' },
    { id: 'icon5', src: 'https://icon.icepanel.io/Technology/svg/CSS3.svg' },
    { id: 'icon6', src: 'https://icon.icepanel.io/Technology/svg/TypeScript.svg' },
    { id: 'icon7', src: 'https://icon.icepanel.io/Technology/svg/PHP.svg' },
    { id: 'icon8', src: 'https://icon.icepanel.io/Technology/svg/MySQL.svg' },
    { id: 'icon9', src: 'https://icon.icepanel.io/Technology/svg/Node.js.svg' },
    { id: 'icon10', src: 'https://icon.icepanel.io/Technology/svg/MongoDB.svg' },
    { id: 'icon11', src: 'https://icon.icepanel.io/Technology/svg/Django.svg' },
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;

      gsap.to('.background-icon', {
        x: (i) => (clientX / window.innerWidth) * 20 - 10 * i,
        y: (i) => (clientY / window.innerHeight) * 20 - 10 * i,
        duration: 0.5,
        ease: 'power2.out',
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.upperText h3', {
        x: () => Math.random() * 1000 - 200,
        y: () => Math.random() * 1000 - 200,
        opacity: 0,
        duration: 3,
        stagger: 0.1,
        ease: 'power4.out',
      });

      gsap.from('.upperText h1', {
        scale: 2,
        opacity: 0,
        duration: 2,
        delay: 1.5,
        stagger: 0.2,
        ease: 'elastic.out(1, 0.5)',
      });

      gsap.from('.lowerText h1', {
        x: () => Math.random() * 200 - 100,
        y: () => Math.random() * 200 - 100,
        opacity: 0,
        duration: 1.5,
        delay: 3.2,
        stagger: 0.2,
        ease: 'power4.out',
      });

      const iconTimeline = gsap.timeline();

      iconTimeline
        .fromTo(
          '.icon',
          { y: -500, scale: 0 },
          { y: 0, scale: 1, duration: 2, ease: 'bounce' }
        )
        .to('.icon', {
          rotation: 360,
          duration: 1.5,
          repeat: -1,
          repeatDelay: 1,
          yoyo: true,
          ease: 'back.inOut',
        });

      gsap.to('.upperText .i', {
        rotationX: 360,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'power2.inOut',
      });
    });

    return () => ctx.revert(); 
  }, []);

  return (
    <div className="Banner">
      {icons.map((icon) => (
        <img
          key={icon.id}
          id={icon.id}
          src={icon.src}
          alt={`${icon.id}`}
          className="background-icon"
        />
      ))}

      <div className="upperText">
        <div className='letter'>
          <h3>D</h3>
          <h3>R</h3>
          <h3>E</h3>
          <h3>A</h3>
          <h3>M</h3>
        </div>
        &nbsp; &nbsp;
        <div className='letter sec'>
          <h1>B</h1>
          <div className="i-container"> 
            <h1 className="i">!</h1>
          </div>
          <h1>G</h1>
        </div>
      </div>
      <div className="lowerText">
        <h1>WE&apos;LL MAKE IT</h1>
        <h1>DIGITAL</h1>
        <h1 className='small'>WE&apos;LL</h1>
        <h1 className='small'>MAKE IT</h1>
        <h1 className='small'>DIGITAL</h1>
      </div>
    </div>
  );
};

export default Banner;
