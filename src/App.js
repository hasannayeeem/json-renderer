import { useEffect, useState } from 'react';
import './App.css';
import RenderComponent from './renderFunction/RenderComponent';

function App() {
  const [elements, setElements] = useState([])
  useEffect(()=>{
    fetch('initialData.json').then(res => res.json()).then(data=>setElements(data))
  },[]);

  return (
    <div className="">
      {elements?.map((element)=>(
        <RenderComponent element={element} />
      ))}
    </div>
  );
}

export default App;
