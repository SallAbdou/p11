const Banner = ({ img, text }) => {
  return (
    <section className="banner">
      <img src={img} alt='banner' />
      <span>{text}</span>
    </section>
  )
}

export default Banner
