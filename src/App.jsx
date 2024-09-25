//pages
import { Canvas } from '@react-three/fiber';
import './style.css'
import Experience from "./components/Experience";
import { Suspense } from 'react';
import { useControls } from 'leva';

function App() {
  const { positionX, positionY, positionZ,rotation } = useControls({
    positionX: { value: 0, min: -10, max: 10, step: 0.1 },
    positionY: { value: 0, min: -10, max: 10, step: 0.01 },
    positionZ: { value: 0, min: -10, max: 10, step: 0.1 },
    rotation: { value: 0, min: -10, max: 10, step: 0.1 },
  });


  return (
<Canvas
        className='r3f'
        camera={ {
            fov: 45,
            near: 0.1,
            far: 2000,
            position: [ 0, 1, 4 ]
        } }
>
  <Suspense fallback={null}>
  <Experience/>
  </Suspense>
</Canvas>
    
    
  );
}



export default App;
