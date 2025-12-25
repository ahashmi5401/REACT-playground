const DecreaseBtn = ({onDecrease}) => {
  return (
    <button onClick={onDecrease}
          className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
 >
          Decrease
        </button>   
  )
}

export default DecreaseBtn