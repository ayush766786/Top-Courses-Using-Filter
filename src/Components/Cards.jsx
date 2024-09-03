import "./Cards.css"

import Card from "./Card";
import { useState } from "react";

const Cards = ({ courses,cetegory }) => {
  
const [likedCourses,setLikedCourses]=useState([])
  //returns you a list of all courses received from the api response
  const getCourses = () => {
    if(cetegory==="All"){
      let allCourses = [];
      Object.values(courses).forEach((courseCategory) => {
        courseCategory.forEach((course) => {
          allCourses.push(course)
        })
        
      })
      return allCourses
    }
    else{
      //sirt specific cetefory ka array pass karungs
      return courses[cetegory]
    }
    
  }
  

  return <>
    <div className="card-container">
      {getCourses().map((lists) => {
        return <Card key={lists.id} lists={lists} likedCourses={likedCourses} setLikedCourses={setLikedCourses}></Card>
      })}
    </div>
  </>
}
export default Cards;