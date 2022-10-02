import React, {useEffect} from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { inistalizeNote } from './reducers/thehivecatlogreducer';
import NavBar from './Components/Inc/navbar';


function App() {
  const newState = useSelector(state=>state.catlog)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(inistalizeNote())
  }, [dispatch])

  return (
    <div className="App">
      <NavBar />
      {console.log(newState)}
      {/* <h2>HELLO WORLD</h2> */}
    </div>
  );
}

export default App;
