import { FcLike } from "react-icons/fc";

const Card = ({ lists }) => {
  return <>

    <div className="card">

      <img src={lists.image.url} alt="" />
      <div>
        <button>
          <FcLike />
        </button>
      </div>
      <div>
        <h4>{lists.title}</h4>
        <p>{lists.description}</p>
      </div>
    </div>



  </>
}
export default Card;