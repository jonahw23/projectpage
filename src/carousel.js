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
        <Carousel.Item style={{paddingBottom:"6vh"}}>
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
          <p className="carBox">Free food is abundant on college campuses, but it's not always easy to find! <br></br>
          I designed and built <i>Munch</i> to solve that problem: it's a community-based 
          app powered by Firebase where users can report and locate free food events around the RIT campus.</p>
          <Carousel.Caption>
            {/*Text over image goes here*/}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{paddingBottom:"6vh"}}>
          <a href="https://qdungeon.pages.dev/">
          <img
            src="/projects/qDungeon.png"
            style={{ marginBottom: "2%" }}
            width="30%"
            height="25%"
            alt=""
          />
          <h3><b style={{ fontSize: "large", color: "rgb(235, 238, 241)" }}>qDungeon</b></h3>
          </a>
          <br></br>
          <p className="carBox">Created as a final project for a software design class, <i>qDungeon
            </i>{" "}is an in-browser, turn-based dungeon-crawler in the style of{" "}
            <i>NetHack</i> or other old roguelikes. I built it along with a
            friend as practice using React to craft a responsive webpage.</p>
          <Carousel.Caption>
            {/*Text over image goes here*/}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{paddingBottom:"6vh"}}>
          <a href="https://github.com/jonahw23/qGroup">
          <img
            src="/projects/qGroup.png"
            style={{ marginBottom: "2%" }}
            width="45%"
            height="45%"
            alt=""
          />
          <h3><b style={{ fontSize: "large", color: "rgb(235, 238, 241)" }}>qGroup</b></h3>
          </a>
          <br></br>
          <p className="carBox">A React-based website with a Flask backend, qGroup was created to a
          provide teachers and other would-be
          group-makers with a convenient, customizable way to create groups
          and organizational seating layouts.</p>
          <Carousel.Caption>
            {/*Text over image goes here*/}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{paddingBottom:"6vh"}}>
        <a href="https://qroute.pages.dev/">
          <img
            src="/projects/qRoute.png"
            style={{ marginBottom: "2%" }}
            width="30%"
            height="30%"
            alt=""
          />
          <h3><b style={{ fontSize: "large", color: "rgb(235, 238, 241)" }}>qRoute</b></h3>
          </a>
          <br></br>
          <p className="carBox">Yep, it's another Q-project. What does the Q stand for? That's a longer story than I have space for here. <br></br>
          This was a another group project in a CS class, where we aimed to
          solve the traveling-salesman-esque problem of optimizing
          transport routes.</p>
          <Carousel.Caption>
            {/*Text over image goes here*/}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{paddingBottom:"6vh"}}>
        <a href="https://mccollegeuniversity.pages.dev/">
          <img
            src="/projects/McCollege.png"
            style={{ marginBottom: "2%" }}
            width="40%"
            height="40%"
            alt=""
          />
          <h3><b style={{ fontSize: "large", color: "rgb(235, 238, 241)" }}>McCollege University</b></h3>
          </a>
          <br></br>
          <p className="carBox"><i>McCollege University</i> was
          an independent project to work on my webpage design my making a
          satirical mockup of a fictional college's website. I'm a big fan
          of satire in general and this project was an enjoyable way to mix
          humor and web design.</p>
          <Carousel.Caption>
            {/*Text over image goes here*/}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{paddingBottom:"6vh"}}>
        <a href="https://github.com/facebookresearch/nle">
          <img
            src="/projects/NLE.png"
            style={{ marginBottom: "2%" }}
            width="40%"
            height="40%"
            alt=""
          />
          <h3><b style={{ fontSize: "large", color: "rgb(235, 238, 241)" }}>NetHack RL Project</b></h3>
          </a>
          <br></br>
          <p className="carBox">Summer of 2022, I was part of a research team affiliated with UMD.
          We were working on solving the&nbsp;
          <a href="https://github.com/facebookresearch/nle"
          style={{ all: "unset", cursor: "pointer" }}>
          <u>NetHack Learning Enviroment (NLE)</u>
          </a> &nbsp;using reinforcement learning. </p>
          <Carousel.Caption>
            {/*Text over image goes here*/}
          </Carousel.Caption>
        </Carousel.Item>
      
      
    </Carousel>
  );
}

export default ControlledCarousel;