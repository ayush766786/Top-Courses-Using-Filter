import { FcLike } from "react-icons/fc";

const Card=({lists})=>{
  return <>
  <div>
    <div>
     <img src={lists.image.url}  alt="" />
     <div>
      <button>
      <FcLike />
      </button>
     </div>
     <div>
      <p>{lists.title}</p>
      <p>{lists.description}</p>
     </div>
    </div>
  </div>
  </>
}
export default Card;