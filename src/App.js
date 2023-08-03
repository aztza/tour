import React from "react"
import Tours from "./components/Tours"
import './App.css';

const url = "https://course-api.com/react-tours-project"  
function App() {
  const[toursList, setToursList] = React.useState([])
  const[loading, setLoading] = React.useState(false)
  const[interest, setInterest] = React.useState(true)


  const notInterest = () => {
    console.log("not interest")
  }

  const fetchTourData = async() => {
    setLoading(true)
    try{
      const response = await fetch(url)
      const tours = await response.json()
      setLoading(false)
      setToursList(tours)
    }catch(error){
      setLoading(true)
      console.log(error)
    }
  }

  React.useEffect(() => {
    fetchTourData()
  },[])

  if(loading){
    return(
      <div>
        <h1>Loading...</h1>
      </div>
    )
  }
  if(toursList.length === 0){
    return(
      <div>
        <h1>There is no data</h1>
      </div>
    )
  }
  return(
    <div>
      <Tours tours={toursList} />
    </div>
  )
}

export default App;
