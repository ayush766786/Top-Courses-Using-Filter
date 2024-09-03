import "./Filter.css"

const Filter=({filterData,cetegory,setCetegory})=>{
  const filterDataHandler=(title)=>{
    setCetegory(title)
  }
  return <>
  <div className="btns" >
    {filterData.map((items)=>{
      return <button className="btn" key={items.id} onClick={()=>filterDataHandler(items.title)}>{items.title} </button>
    })}
  </div>
  </>
}
export default Filter;