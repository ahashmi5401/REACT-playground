import  { useState } from 'react'
import CounterBottom from './counterBottom.jsx'
import CounterTop from './CounterTop.jsx'

const Counter = () => {
  const [num, setNum] = useState(0)

  const increaseNum = () => {
    setNum(num + 1)
  }

  const decreaseNum = () => {
    setNum(num - 1)
  }

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center text-3xl font-bold">
      <CounterTop num={num} />
      <CounterBottom 
      onIncrease = {increaseNum}
      onDecrease = {decreaseNum}
      />
    </div>
  )
}

export default Counter
