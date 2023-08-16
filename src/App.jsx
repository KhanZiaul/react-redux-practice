import React from 'react';

const App = () => {
  return (
    <div className='h-[100vh] flex justify-center items-center'>
      <div>
        <h2 className='text-4xl font-semibold mb-4'>Increment/Decrement Counter</h2>
        <p className='text-xl font-semibold text-center'>using react-redux</p>
        <div className='flex justify-center items-center mt-7 gap-5'>
          <button className='btn font-bold'>-</button>
          <p className='font-bold text-xl'>0</p>
          <button className='btn font-bold'>+</button>
        </div>
      </div>
    </div>
  );
};

export default App;
