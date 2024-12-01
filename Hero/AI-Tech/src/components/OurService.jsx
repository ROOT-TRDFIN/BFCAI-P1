

import OurServiceData from "../components/OurServiceData"
import service from "../Servicelist"



const OurService = () => {

  

  return (
    <div>
      <h1 className="title">We Offer The Best Services</h1>
      <div className="mouse-container">
        <div className="mouse-main">
          {service.map((card) => (
            <OurServiceData key={card.id} cardData={card} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default OurService;