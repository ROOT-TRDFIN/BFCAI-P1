import { Container } from 'react-bootstrap'
import FP from "../assets/Clients/FP-logo.png"
import EEB from "../assets/Clients/EEB-logo.png"
import Nexus from "../assets/Clients/Nexus-Logo.png"
import Synergist from "../assets/Clients/Syn-logo.png"
import PC from "../assets/Clients/PC-logo.png"
import Consulven from "../assets/Clients/Consulven-logo.png"
const Clients = () => {
  return (
    <Container fluid>
        <div className="Clients">
            <div className="heading">
                <h1 className='title'>Our  Clients</h1> 
            </div>
            <div className="logo-wrapper">
              <div className="logo-items">
                <div className="logo-item">
                  <img src={FP}></img>
                </div>
                <div className="logo-item">
                  <img src={EEB}></img>
                </div>
                <div className="logo-item">
                  <img src={Nexus}></img>
                </div>
              </div>
              <div className="logo-items">
                <div className="logo-item">
                  <img src={Synergist}></img>
                </div>
                <div className="logo-item">
                  <img src={PC}></img>
                </div>
                <div className="logo-item">
                  <img src={Consulven}></img>
                </div>
              </div>
            </div>
        </div>
    </Container>
  )
}

export default Clients
