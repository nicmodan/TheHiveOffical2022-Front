import React, {useEffect} from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { inistalizeNote } from './reducers/thehivecatlogreducer';


function App() {
  const newState = useSelector(state=>state.catlog)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(inistalizeNote())
  }, [dispatch])

  return (
    <div className="App">
      {console.log(newState)}
    </div>
  );
}

export default App;
