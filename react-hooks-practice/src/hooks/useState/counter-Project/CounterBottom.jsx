import DecreaseBtn from './decreaseBtn.jsx'
import IncreaseBtn from './increaseBtn.jsx'

const counterBottom = ({onIncrease,onDecrease}) => {
  return (
    <div className="flex gap-5 mt-10">

        <DecreaseBtn onDecrease={onDecrease} />
        <IncreaseBtn  onIncrease={onIncrease} />

    </div>
  )
}

export default counterBottom