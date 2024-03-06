import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import ControlledCarousel from '../carousel';
import React from "react";
import Head from '../components/head';

export default function Home() {
  return (
    <div className="App">
      <section
        style={{ height:"full", paddingTop: "2%"}}
      >
        <div style={{ marginLeft:"0%" }}>

            {Head()}
          
          {ControlledCarousel()}
          <div className="container">

          </div>
        </div>
      </section>
    </div>

  );
}