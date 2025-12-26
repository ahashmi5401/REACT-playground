import EachCard from './eachCard.jsx'


const Cards = ({task , deleteNote}) => {
  return (
    <div className="flex flex-wrap items-start justify-start gap-5 mt-6 h-[90%] overflow-auto">
      {task.map(({ title, details }, idx) => (

        <EachCard
            title={title}
            details={details}
            deleteNote={deleteNote}
            idx={idx}
        />

      ))}
    </div>
  )
}

export default Cards