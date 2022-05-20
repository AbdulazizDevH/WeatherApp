export default function Load({id}) {
  return (
    <div key={id} className="col-xl-2 col-12 col-md-4 col-lg-3 col-sm-6 mt-3 week">
      <div className="card">
        <div className="card-body text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    </div>
  )
}
