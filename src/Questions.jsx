import Question from "./Question"

const Questions = ({questions}) => {
  return (
    <div>
        {questions.map((question) => {
            return <Question key={questions.id} {...question}/>
        })}
    </div>
  )
}
export default Questions