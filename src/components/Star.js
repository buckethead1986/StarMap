import React, { useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

export default function Star({ radius, color, brightness, position }) {
  return (
    <mesh position={position}>
      <sphereGeometry attach="geometry" args={[radius, 16, 16]} />
      <meshLambertMaterial attach="material" color={color} />
    </mesh>
  );
}
