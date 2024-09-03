import { FcLike } from "react-icons/fc";
import { FcLikePlaceholder } from "react-icons/fc";
import "./Card.css"
import { toast } from "react-toastify";

const Card = ({ lists, likedCourses, setLikedCourses }) => {
  const clickHandler = () => {
    console.log("click")
    //logic
    if (likedCourses.includes(lists.id)) {
      //pahale se liked hai
      setLikedCourses((prev) => prev.filter((cid) => (cid !== lists.id)))
      toast.error("Like removed")
    } else {
      if (likedCourses === 0) {
        setLikedCourses([lists.id])
      } else {
        setLikedCourses((prev) => [...prev, lists.id])
      }
      toast.success("Like added")
    }


  }
  return <>

    <div className="card">

      <img src={lists.image.url} alt="" />
      <div>
        <button onClick={clickHandler}>
          {
            !likedCourses.includes(lists.id) ? (<FcLikePlaceholder />) : (<FcLike />)
          }
        </button>
      </div>
      <div>
        <h4>{lists.title}</h4>
        <p>
          {
            lists.description.length>100?(lists.description.substr(0,100))+"...":
            (lists.description)
          }
        </p>
      </div>
    </div>



  </>
}
export default Card;