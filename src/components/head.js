import React, { useState } from "react";
import TextCycle from "../textcycle";
import {useNavigate} from 'react-router-dom';

function maybeContact(bool){
    if(bool){
      if(window.innerWidth <= 600){
        return <div className="contact loud">
          <div>Jonah Witte</div>
          <div>240-704-2330</div>
          <div>jonahwitte10@gmail.com</div>
        </div>
      }
      return <div className="contact"><span className="left loud">Jonah Witte</span> <span className="center loud">240-704-2330</span> <span className="right loud">jonahwitte10@gmail.com</span></div>
    }
    return <div></div>
  }

export default function Head (){
    const [active, setActive] = useState(false)

    function toggleContact(){
        setActive(!active)
    }

    const navigate = useNavigate();
    const handleClickHome = () => navigate('/');

    return (
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
                        <div className="split-para" onClick={handleClickHome}>
                            <div>Jonah Witte's &nbsp;</div> 
                            <div>{TextCycle(["Project Page"])}</div>  
                        </div> 
                        { /*<span className="blocktextsmall" style={{cursor:"pointer"}} onClick={toggleContact}>Contact</span> */}
                  </h2>
              </div>
            </div>
            {/* {maybeContact(active)} */}
          </div>
    )
}