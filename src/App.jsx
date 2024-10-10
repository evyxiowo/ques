import {useState} from "react"
import data from "./data";
import Questions from "./Questions";
const App = () => {
const [questions, setQuestions] = useState(data)
  return <div>
    <Questions questions={questions}/>
  </div>
};
export default App;
 