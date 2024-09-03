import Navbar from './Components/Navbar'
import Filter from './Components/Filter'
import Cards from './Components/Cards'
import Spinner from './Components/Spinner'
import { apiUrl, filterData } from './Data'
import './App.css'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

function App() {
  const [courses, setCourses] = useState('')
  const [loading, setLoading] = useState(true)
  const [cetegory, setCetegory] = useState(filterData[0].title)


  useEffect(() => {
    setLoading(true)
    const fetchData = async () => {
      try {
        const res = await fetch(apiUrl);
        const output = await res.json();

        //save data into a variable
        // console.log(data)
        setCourses(output.data)
      } catch (error) {
        toast.error("Something went wrong")
      }
      setLoading(false)
    }
    fetchData();
  }, [])
  return (
    <>
      <div className='big-container'>
        <Navbar></Navbar>
        <Filter filterData={filterData} cetegory={cetegory} setCetegory={setCetegory}/>
        {
          loading ? (<Spinner />) : (<Cards courses={courses} cetegory={cetegory}/>)

        }

      </div>

    </>
  )
}

export default App
