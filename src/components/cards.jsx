
function Card(props) {
  return (
    <div className={`card flex flex-col ${props.styling} justify-center gap-2`}>
      <div className="cardImage flex justify-center bg-urlSection rounded-full w-16 p-4">
        <img src={props.image} alt="stats-image" className=" w-10" />
      </div>
      <div className="cardContainer shadow-xl flex flex-col justify-center py-10 pt-12 px-5 w-[290px] leading-6 gap-4 bg-white rounded-md">
        {/* <img src={props.image} alt="stats-image" className="bg-white-100 rounded-full w-20"/> */}
        <h3 style={{fontFamily: 'poppinsBold'}}>{props.name}</h3>
        <h2 className="font-md text-[12px]  font-semibold text-customGrey">{props.details}</h2>
      </div>
    </div>
  );
}

export default Card;
