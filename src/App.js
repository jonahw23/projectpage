import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ControlledCarousel from './carousel';
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
        style={{ height:"full", paddingTop: "2%"}}
      >
        <div style={{ marginLeft:"1%" }}>
          <div className="topic" style={{ marginBottom: "2%", marginTop:"-3%" }}>
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
            {maybeContact(active)}
          </div>
          {ControlledCarousel()}
          <div className="container">

          </div>
        </div>
      </section>
    </div>

  );
}

export default App;
