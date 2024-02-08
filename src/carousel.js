//carousel from react-bootstrap.netlify.app

import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item style={{paddingBottom:"5%"}}>
          <a href="https://munchrit.com">
          <img
            src="/projects/munch.png"
            style={{ marginBottom: "2%" }}
            width="30%"
            height="30%"
            alt=""
          />
          <h3><b style={{ fontSize: "large", color: "rgb(235, 238, 241)" }}>Munch</b></h3>
          </a>
          <br></br>
          <p style={{width:"40%", justifyContent:"center"}}>Free food is abundant on college campuses, but it's not always easy to find. 
          I designed and built <i>Munch</i> to solve that problem: it's a community-based 
          app powered by Firebase where users can report and locate free food events around the RIT campus.</p>
          <Carousel.Caption>
            {/*Text over image goes here*/}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{paddingBottom:"5%"}}>
          <img
            src="/projects/munch.png"
            style={{ marginBottom: "2%" }}
            width="30%"
            height="30%"
            alt=""
          />
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <Carousel.Caption>
            {/*Text over image goes here*/}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{paddingBottom:"5%"}}>
          <img
            src="/projects/munch.png"
            style={{ marginBottom: "2%" }}
            width="30%"
            height="30%"
            alt=""
          />
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <Carousel.Caption>
            {/*Text over image goes here*/}
          </Carousel.Caption>
        </Carousel.Item>
      
      
    </Carousel>
  );
}

export default ControlledCarousel;