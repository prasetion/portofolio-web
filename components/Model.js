import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/coffeemat.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[5.06, -8.64, -1.83]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_4.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <group position={[5.06, -8.64, -1.83]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_6.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <group position={[5.06, -8.64, -1.83]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_8.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <group position={[5.06, -8.64, -1.83]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_10.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <group position={[5.06, -8.64, -1.83]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_12.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <group position={[5.06, -8.64, -1.83]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_14.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <group position={[5.06, -8.64, -1.83]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_16.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <group position={[5.06, -8.64, -1.83]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_18.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <group position={[5.06, -8.64, -1.83]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_20.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <group position={[5.06, -8.64, -1.83]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_22.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <group position={[5.06, -8.64, -1.83]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_24.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <group position={[5.06, -8.64, -1.83]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_26.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <group position={[5.06, -8.64, -1.83]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_28.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <group position={[5.06, -8.64, -1.83]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_30.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <group position={[5.06, -8.64, -1.83]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_32.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <group position={[5.06, -8.64, -1.83]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_34.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <group position={[5.06, -8.64, -1.83]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_36.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <group position={[5.06, -8.64, -1.83]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_38.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <group position={[5.06, -8.64, -1.83]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_40.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <group position={[5.06, -8.64, -1.83]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_42.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <group position={[5.06, -8.64, -1.83]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_44.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <group position={[5.06, -8.64, -1.83]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_46.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <group position={[5.06, -8.64, -1.83]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_48.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <group position={[5.06, -8.64, -1.83]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_50.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <group position={[5.06, -8.64, -1.83]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_52.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <group position={[5.06, -8.64, -1.83]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_54.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <group position={[5.06, -8.64, -1.83]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_56.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <group position={[5.06, -8.64, -1.83]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_58.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <group position={[5.06, -8.64, -1.83]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_60.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <group position={[5.06, -8.64, -1.83]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_62.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <group position={[5.06, -8.64, -1.83]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_64.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <group position={[5.06, -8.64, -1.83]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_66.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <group position={[5.06, -8.64, -1.83]} scale={100}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_68.geometry}
              material={materials["Material.001"]}
            />
          </group>
          <group position={[6.02, 150.51, 0.43]} rotation={[0, 0.4, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_70.geometry}
              material={materials["OREO.001"]}
            />
          </group>
          <group
            position={[-80.26, 51.16, 9.89]}
            rotation={[-Math.PI / 2, 1.53, 0]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_72.geometry}
              material={materials["OREO.001"]}
            />
          </group>
          <group
            position={[-99.76, 51.29, -11.52]}
            rotation={[Math.PI / 2, 1.47, -Math.PI]}
          >
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_74.geometry}
              material={materials["OREO.001"]}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/coffeemat.glb");
