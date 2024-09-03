const Filter=({filterData})=>{
  return <>
  <div>
    {filterData.map((items)=>{
      return <button key={items.id}>{items.title}</button>
    })}
  </div>
  </>
}
export default Filter;