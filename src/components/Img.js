export default function Img({ img, name, country }) {
  const not = "https://storage.googleapis.com/www-paredro-com/uploads/2017/07/404-not-found-01.jpg";
  return (
    <div className='wrap d-flex'>
      <p className="bg-dark w-75 position-relative">
        <img className='img-fluid m-auto' src={img ? img : not} />
        <span className='title text-white position-absolute fw-bold'>
          {name ? name : "Img Not"}{name ? "," : ""} {country ? country : "Found"}
        </span>
      </p>
    </div>
  )
}
