import React from 'react'
import { useState } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState
} from 'react-accessible-accordion';
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import data from '../../utils/accordion';
import './Values.css';

const Values = () => {

  const [className, setClassName] = useState(null)

  return (
    <section className="v-wrapper" id='values'>
      <div className="paddings innerWidth flexCenter v-container">
        {/* left side */}
        <div className="v-left">
          <div className="image-container">
            <img src="./grant-lemons.jpg" alt="" />
          </div>
        </div>
        {/* right-side */}
        <div className="flexColStart v-right">
          <span className='orangeText'>Our Values.</span>
          <span className='primaryText'>Value We Give to You.</span>
          <span className='secondaryText'>We believe there is a gratifying pleasure attained when everyone lives in a home well suited <br />
          We believe a good place to live is everyone's right, but at <span className='orangeText'>HavenHunt</span> we believe it is our responsibility to make that happen.</span>
          
          <Accordion className='accordion'
            allowMultipleExpanded={false} preExpanded={[0]} >
            {
              data.map((item, i) => (
                <AccordionItem key={i} uuid={i} className={`accordionItem ${className === i ? 'expanded' : 'collapsed'}`}>
                  <AccordionItemHeading>
                    <AccordionItemButton className='accordionButton flexCenter' onClick={() => setClassName(i)}>
                 
                      {/* <AccordionItemState>
                        {({ expanded }) =>
                          expanded
                            ? setClassName("expanded")
                            : setClassName("collapsed")
                        }
                      </AccordionItemState> */}

                      {/* <div className="flexCenter icon">
                        {item.icon} 
                      </div> */}
                      <span className="primaryText">
                        {item.heading }
                      </span>
                      <div className="flexCenter icon">
                        <MdOutlineArrowDropDown size={20} />
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p className="secondaryText">
                      {item.detail }
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
              ))
            }
             
          </Accordion>
        </div>
      </div>
    </section>
  );
}

export default Values