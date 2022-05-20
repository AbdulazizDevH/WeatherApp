export default function Cards({ humidity, vis_km, uv, wind_kph, wind_dir }) {
  return (
    <div className="cards d-flex col-12 p-0 flex-wrap">
      <div className="card mt-3 border-0">
        <div className="card-body d-flex align-items-center flex-wrap border p-4 pe-0">
          <h6 className="card-subtitle mb-4 text-muted w-100">Wind Status</h6>
          <img className="w-25 me-2" src="https://cdn-icons-png.flaticon.com/512/5532/5532989.png" />
          <p className="mt-3 ms-0"><span className="h1 m-0">{wind_kph}</span>km/h</p>
          <p className="w-100 d-flex align-items-center justify-content-between">
            {wind_dir} 
            <img 
              src="https://cdn-icons-png.flaticon.com/512/594/594846.png" 
              className="ms-4 me-4 card-index" />
          </p>
        </div>
      </div>
      <div className="card mt-3 border-0">
        <div className="card-body d-flex flex-wrap align-items-center border p-4">
          <h6 className="card-subtitle mb-4 w-100 text-muted">UV index</h6>
          <img className="w-25" src="https://cdn-icons-png.flaticon.com/512/4005/4005885.png" />
          <p className="mt-3 ms-3"><span className="h1 m-0">{uv}</span></p>
          <p className="w-100 d-flex align-items-center justify-content-between">
            {uv > 10 ? "Extreme" : 
              (uv > 7 ? "Very high" : 
                (uv > 5 ? "High" : 
                  (uv > 2 ? "Moderate" : 
                    "Low"
                  )
                )
              )} 
            <img 
              src="https://cdn-icons-png.flaticon.com/512/594/594846.png" 
              className="ms-4 mt-1 card-index" />
          </p>
        </div>
      </div>
      <div className="card mt-3 border-0">
        <div className="card-body d-flex flex-wrap align-items-center border p-4">
          <h6 className="card-subtitle mb-4 w-100 text-muted">Humidity</h6>
          <img className="w-25" src="https://cdn-icons-png.flaticon.com/512/4015/4015433.png" />
          <p className="mt-3 ms-3"><span className="h1 m-0">{humidity}</span> <sup className="h4">%</sup></p>
          <p className="w-100 d-flex align-items-center justify-content-between">
            Normal 
            <img 
              src="https://cdn-icons-png.flaticon.com/512/594/594846.png" 
              className="ms-4 card-index" />
          </p>
        </div>
      </div>
      <div className="card mt-3 border-0">
        <div className="card-body border d-flex flex-wrap align-items-center p-4">
          <h6 className="card-subtitle mb-4 w-100 text-muted">Visibility</h6>
          <img className="w-25" src="https://cdn-icons-png.flaticon.com/512/5618/5618479.png" />
          <p className="mt-3 ms-3"><span className="h1 m-0">{vis_km}</span> km</p>
          <p className="w-100 d-flex align-items-center justify-content-between">
            Average 
            <img 
              src="https://cdn-icons-png.flaticon.com/512/594/594846.png"
              className="ms-4 mt-1 card-index" />
          </p>
        </div>
      </div>
    </div>
  )
}
