import { ContactShadows, Environment, Float, Html, PresentationControls, Text, useGLTF } from '@react-three/drei'
import { useState } from 'react';

export default function Experience() {
    const laptopModel = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf');
    const [hovered, setHovered] = useState(false);

    const handleTextClick = () => {
        window.open('https://devbyamirulilman.github.io/amirulilmanportfolio/', '_blank');
    };

    return (
        <>
            <Environment preset='city' />
            <color args={['#241a1a']} attach="background" />

            <PresentationControls 
                global
                rotation={[0.13, 0.1, 0]}  
                polar={[-0.4, 0.2]}  //limit rotation for vertical
                azimuth={[-1, 0.75]} //limit rotation for horizontal
                config={{ mass: 2, tension: 400 }}
                snap={{ mass: 4, tension: 400 }}
            >
                <Float rotationIntensity={0.4}>
                    <rectAreaLight
                        width={2.5}
                        height={1.65}
                        intensity={65}
                        color={'purple'}
                        rotation={[0.1, Math.PI, 0]}
                        position={[0, 0.55, -1.15]}
                    />
                    <primitive 
                        object={laptopModel.scene} 
                        position-y={-1.2}
                    >
                        <Html
                            transform
                            wrapperClass='htmlScreen'
                            distanceFactor={1.17}
                            position={[0, 1.56, -1.4]}
                            rotation-x={-0.256}
                        >
                            <iframe src='https://devbyamirulilman.github.io/amirulilmanportfolio/' />
                        </Html>
                    </primitive>
                    <Text
                        
                        fontSize={0.5}
                        position={[2, 0.75, 0.5]}
                        rotation-y={-1.25}
                        onClick={handleTextClick}
                        onPointerOver={() => setHovered(true)}
                        onPointerOut={() => setHovered(false)}
                        color={hovered ? 'purple' : 'white'}
                        maxWidth={2}
                    >
                        AMIRUL ILMAN
                    </Text>
                </Float>
            </PresentationControls>
            <ContactShadows 
                position-y={-1.4}
                opacity={0.4}
                scale={5}
                blur={2.4}
            />
        </>
    );
}
