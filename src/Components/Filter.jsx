import "./Filter.css"

const Filter=({filterData})=>{
  return <>
  <div className="btns">
    {filterData.map((items)=>{
      return <button className="btn" key={items.id}>{items.title}</button>
    })}
  </div>
  </>
}
export default Filter;