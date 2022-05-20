export default function Week({item, current, id}) {
  return (
    <div key={id} className="col-xl-2 col-12 col-md-4 col-lg-3 col-sm-6 mt-3 week">
      <div className="card border-0">
        <div className="card-body text-center border-0">
          <h6 className='m-0 mb-2'>{item.slice(0, 3)}</h6>
          <img src={current.condition.icon} alt="Load" />
          <h5 className='m-0'>{current.temp_c.toFixed(0)}&#176;</h5>
          <p></p>
        </div>
      </div>
    </div>
  )
}
