import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useTexture } from '@react-three/drei';

const VueLogo = (props) => {
  const vueLogoRef = useRef();
  const texture = useTexture('textures/vuejs.png'); // Path to your Vue.js PNG

  useGSAP(() => {
    gsap.to(vueLogoRef.current.position, {
      y: vueLogoRef.current.position.y + 2,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
    });
  });

  return (
    <mesh
      {...props}
      ref={vueLogoRef}
      rotation={[0, Math.PI / 5, 0]} // Same rotation as your target component
      scale={1.5} // Same scale as your target component
    >
      <planeGeometry args={[3, 3]} />  {/* Adjust the plane size to fit your logo */}
      <meshBasicMaterial map={texture} />
    </mesh>
  );
};

export default VueLogo;
