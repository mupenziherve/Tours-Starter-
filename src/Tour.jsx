
const Tour = ({id, image, info, name, price}) => {
  return (
    <article className="single-tours">
        <img src={image} alt={name} className="img" />
        <span className="" ></span>

    </article>
  )
};
export default Tour;