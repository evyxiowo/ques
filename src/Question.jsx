import { useState } from "react"

const Question = ({title , info}) => {
    const [showInfo, setShowInfo] = useState(false)
    function toggleFunc() {
        setShowInfo(true)
    }
  return (
    <div>
        <h1>{title}</h1>
        <button onClick={toggleFunc}>Show</button>
       {showInfo &&  <p>{info}</p>}
    </div>
  )
}
export default Question