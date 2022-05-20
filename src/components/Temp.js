export default function Temp({current, location, days, error}) {
  
  return (
    <div className="temp p-5 pt-4 d-flex align-items-center flex-wrap">
      <p className="w-100 h5 mb-5"><i className="bi text-warning me-1 bi-geo-alt"></i> 
        {location ? (location.name) : 
        (<span className="h6">{error ? error.message : 
          "Loading."}..</span>)
        }
        {location ? ", " : ''}
        {location ? (location.country) : ""}</p>
      <img
        className=""
        src={current ? current.condition.icon : "Loading..."}
        alt="Loading..."
      />
      <h1 className="m-2 mb-2">{current ? current.temp_c.toFixed(0) : "0"} &#176;</h1>
      <div className="mt-4 mb-0 w-100">Updated: {days[new Date().getDay()]}, 
        <span> {current ? current.last_updated.split(" ")[1] : "00:00"}</span>
      </div>
      <hr className="bg-dark w-100" />
      <p className="mt-0">{current ? current.condition.text : "Loading..."}</p>
      <p className="w-100">Cloud - {current ? current.cloud : "10"}%</p>
    </div>
  )
}
