import Card from "./Card";

const Cards = ({ courses }) => {
  let allCourses = [];

  //returns you a list of all courses received from the api response
  const getCourses = () => {
    Object.values(courses).forEach((courseCategory) => {
      courseCategory.forEach((course) => {
        allCourses.push(course)
      })
    })
    return allCourses
  }

  return <>
    <div>
      {getCourses().map((lists) => {
        return <Card key={lists.id} lists={lists}></Card>
      })}
    </div>
  </>
}
export default Cards;