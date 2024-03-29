import './App.css';
import React, { useState } from "react";

function maybeContact(bool){
  if(bool){
    if(window.innerWidth <= 600){
      return <div className="contact loud">
        Jonah Witte<br></br>
        240-704-2330<br></br>
        jonahwitte10@gmail.com
      </div>
    }
    return <div className="contact"><span className="left loud">Jonah Witte</span> <span className="center loud">240-704-2330</span> <span className="right loud">jonahwitte10@gmail.com</span></div>
  }
  return <div></div>
}

function App() {
  const [active, setActive] = useState(false)

  function toggleContact(){
    setActive(!active)
  }

  return (
    <div className="App">
      <section
        style={{ backgroundColor: "aliceblue", height:"full", paddingTop: "2%", paddingBottom:"5%" }}
      >
        <div style={{ marginLeft:"1%" }}>
          <div className="topic" style={{ marginBottom: "2%", marginTop:"-3%" }}>
            <div className="col-md-6">
              <div className="detail-box">
                <div className="heading_container">
                  <h2
                    style={{
                      fontSize: "x-large",
                      padding: "0%",
                      marginTop: "4%",
                      borderBottom: "2px solid #000000"
                    }}
                  >
                    <p className="split-para">Project Page <span style={{cursor:"pointer"}} onClick={toggleContact}>Contact</span></p>
                  </h2>
                </div>
              </div>
            </div>
            {maybeContact(active)}
          </div>
          <div className="container">
              <div className="box">
                  <a href="https://munchrit.com">
                    <img
                      src="/projects/munch.png"
                      style={{ marginBottom: "2%" }}
                      width="45%"
                      height="45%"
                      alt=""
                    />
                  </a>
                  <br />
                  <a href="https://munchrit.com">
                    <b style={{ fontSize: "large", color: "#000000" }}>Munch</b>
                  </a>
                  <br />
                  Free food is abundant on college campuses, but it's not always easy to find. 
                  I designed and built <i>Munch</i> to solve that problem: it's a community-based 
                  app powered by Firebase where users can report and locate free food events around the RIT campus.
                </div>
                <div className="box">
                  <a href="https://qdungeon.pages.dev/">
                    <img
                      src="/projects/qDungeon.png"
                      style={{ marginBottom: "2%" }}
                      width="45%"
                      height="50%"
                      alt=""
                    />
                  </a>
                  <br />
                  <a href="https://qdungeon.pages.dev/">
                    <b style={{ fontSize: "large", color: "#000000" }}>qDungeon</b>
                  </a>
                  <br />
                  Created as a project for a software design class, <i>
                    qDungeon
                  </i>{" "}
                  is an in-browser turn-based dungeon-crawler in the style of{" "}
                  <i>NetHack</i> or other old roguelikes. I built it along with a
                  friend as practice using React to craft a responsive webpage.
                </div>
                <div className="box">
                  <a href="https://qroute.pages.dev/">
                    <img
                      src="/projects/qRoute.png"
                      style={{ marginBottom: "2%" }}
                      width="50%"
                      height="50%"
                      alt=""
                    />
                  </a>
                  <br />
                  <a href="https://qroute.pages.dev/">
                    <b style={{ fontSize: "large", color: "#000000" }}>qRoute</b>
                  </a>
                  <br />
                  This was a another group project in a CS class, where we aimed to
                  solve the travelling-salesman-esque problem of optimizing
                  transport routes.
                </div>
                <div className="box">
                  <a href="https://github.com/jonahw23/qGroup">
                    <img
                      src="/projects/qGroup.png"
                      style={{ marginBottom: "2%" }}
                      width="70%"
                      height="50%"
                      alt=""
                    />
                  </a>
                  <br />
                  <a href="https://github.com/jonahw23/qGroup">
                    <b style={{ fontSize: "large", color: "#000000" }}>qGroup</b>
                  </a>
                  <br />
                  Another React-powered group project, qGroup aimed to create a
                  service that would provide teachers and other would-be
                  group-makers with a convenient, customizable way to create groups
                  and organizational seating layouts.
                </div>
                <div className="box">
                  <a href="https://mccollegeuniversity.pages.dev/">
                    <img
                      src="/projects/McCollege.png"
                      style={{ marginBottom: "2%" }}
                      width="70%"
                      height="60%"
                      alt=""
                    />
                  </a>
                  <br />
                  <a href="https://mccollegeuniversity.pages.dev/">
                    <b style={{ fontSize: "large", color: "#000000" }}>
                      McCollege University Webpage
                    </b>
                  </a>
                  <br />
                  <i>McCollege University</i> was
                  an independent project to work on my webpage design my making a
                  satirical mockup of a fictional college's website. I'm a big fan
                  of satire in general and this project was an enjoyable way to mix
                  humor and web design.
                </div>
                <div className="box">
                  <a href="https://github.com/facebookresearch/nle">
                    <img
                      src="/projects/NLE.png"
                      style={{ marginBottom: "2%" }}
                      width="65%"
                      height="50%"
                      alt=""
                    />
                  </a>
                  <br />
                  <a href="https://github.com/facebookresearch/nle">
                    <b style={{ fontSize: "large", color: "#000000" }}>
                      NetHack RL Project
                    </b>
                  </a>
                  <br />
                  Summer of 2022, I was part of a research team affiliated with UMD.
                  We were working on solving the 
                  <a
                    href="https://github.com/facebookresearch/nle"
                    style={{ all: "unset", cursor: "pointer" }}
                  >
                    <u> NetHack Learning Enviroment (NLE)</u>
                  </a>
                   &nbsp;using reinforcement learning. 
                </div>

          </div>
        </div>
      </section>
    </div>

  );
}

export default App;
