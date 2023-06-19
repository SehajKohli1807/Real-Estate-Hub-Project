import { MdCall } from "react-icons/md";
import {HiChatBubbleBottomCenter} from "react-icons/hi2";
import {BsFillChatDotsFill} from "react-icons/bs";

export default function Contacts() {
  return (
    <section className="contacts">
      <div className="contacts-main">
        <div className="contacts-left">
          <div className="contactheading1">
            <span className="ch1">Contact Us</span>
            <br></br>
            <span className="ch2">Easy to contact us</span>
            <br></br>
          </div>
          <br></br>
          <div className="contact-cards">
            <div className="parent-flex">
            <span className="contact-card-icon">
                <MdCall size={40} />
            </span>
            <div className="info-center">
            <span className="contact-card-title">Call</span>
            <span className="contact-card-num">97899087</span>
            
            </div>
            </div>
            <div className="contactcard-btn">
                <button>Call Now</button>
            </div>
          </div>
{/* */}
          <div className="contact-cards">
            <div className="parent-flex">
            <span className="contact-card-icon">
                <BsFillChatDotsFill size={40} />
            </span>
            <div className="info-center">
            <span className="contact-card-title">Video Call</span>
            <span className="contact-card-num">97899087</span>
            
            </div>
            </div>
            <div className="contactcard-btn">
                <button>Video Call Now</button>
            </div>
          </div>
{/* */}
        </div>
        <div className="contacts-right">
          <img src="./images/r7.jpg" alt="" />
        </div>
      </div>
    </section>
  );
}
