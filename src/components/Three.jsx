import React, { useRef, useState, useMemo } from "react";

import * as THREE from "three";
import { Canvas, useFrame } from "react-three-fiber";
import { OrbitControls, Stars } from "@react-three/drei";

import five from "../assests/five.png";

const Box = (props) => {
  // This reference will give us direct access to the mesh
  const mesh = useRef();
  const [hovered, setHover] = useState(false);

  // Set up state for the hovered and active state
  const [active, setActive] = useState(false);

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += 0.001;
  });

  // const texture = useMemo(() => new THREE.TextureLoader().load(five), []);

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? [2, 2, 2] : [1.5, 1.5, 1.5]}
      onClick={(e) => setActive(!active)}
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}
    >
      <tetrahedronBufferGeometry args={[1, 0, 0]} />
      <meshDepthMaterial color={hovered ? "#ec407a" : "#f4511e"} />
    </mesh>
  );
};

function Three() {
  return (
    <div style={{ height: "2000px" }}>
      <Canvas height="">
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Box position={[0, 0, 0]} />
        <Stars
          radius={100} // Radius of the inner sphere (default=100)
          depth={50} // Depth of area where stars should fit (default=50)
          count={5000} // Amount of stars (default=5000)
          factor={4} // Size factor (default=4)
          saturation={0} // Saturation 0-1 (default=0)
          fade // Faded dots (default=false)
        />
      </Canvas>
    </div>
  );
}
export default Three;
