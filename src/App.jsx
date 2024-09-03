import Navbar from './Components/Navbar'
import Filter from './Components/Filter'
import Cards from './Components/Cards'
import { apiUrl, filterData } from './Data'
import './App.css'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

function App() {
  const [courses, setCourses] = useState('')
  useEffect(() => {
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
    }
    fetchData();
  }, [])
  return (
    <>
      <div className='big-container'>
        <Navbar></Navbar>
        <Filter  filterData={filterData} />
        <Cards courses={courses}/>
      </div>

    </>
  )
}

export default App
