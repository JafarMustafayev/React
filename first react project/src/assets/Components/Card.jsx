function Card(params) {
  return (
    <>
      <div className="cardItem">
        <div className="cardImage">
          <img src={params.image.src} alt={params.image.alt} />
        </div>
        <div className="cardBody">
          <h1>{params.title}</h1>
          <p>{params.description}</p>
        </div>
      </div>
    </>
  );
}

export default Card;
