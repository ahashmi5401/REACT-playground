const IncreaseBtn = ({onIncrease}) => {
  return (
    <button
          onClick={onIncrease}
          className="bg-green-500 text-white px-5 py-2 rounded-lg hover:bg-green-700"
        >
          Increase
        </button>
  )
}

export default IncreaseBtn