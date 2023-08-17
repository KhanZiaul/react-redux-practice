import { useDispatch, useSelector } from 'react-redux';
import { decNumber, incNumber } from './components/actions/action';

const App = () => {
  const mystate = useSelector((state)=> state.changeTheNumber)
  const dispatch = useDispatch()
  return (
    <div className='h-[50vh] flex justify-center items-center'>
      <div>
        <h2 className='text-4xl font-semibold mb-4'>Increment/Decrement Counter</h2>
        <p className='text-xl font-semibold text-center'>using react-redux</p>
        <div className='flex justify-center items-center mt-7 gap-5'>
          <button onClick={()=> dispatch(decNumber())}  className='btn font-bold'>-</button>
          <p className='font-bold text-xl'>{mystate.count}</p>
          <button onClick={()=> dispatch(incNumber())} className='btn font-bold'>+</button>
        </div>
      </div>
    </div>
  );
};

export default App;
