import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import accordian_data from "./accordian_data";

export default function Value() {
  return (
    <section className="value">
      <div className="value-main">
        <div className="val-left">
          <img className="val-img" src="./images/r8.jpg" alt=""></img>
        </div>
        <div className="val-right">
          <div className="valheading1">
            <span className="ch1">Our Value</span>
            <br></br>
            <span className="ch2">Values we give to you</span>
            <br></br>
            <div className="accord">
              <Accordion className="Accord" allowZeroExpanded>
                {accordian_data.map((item) => (
                  <AccordionItem className="accord-item" key={item.uuid}>
                    <AccordionItemHeading className="accord-heading">
                      <AccordionItemButton>
                        <span>{item.heading}</span></AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>{item.detail}</AccordionItemPanel>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
