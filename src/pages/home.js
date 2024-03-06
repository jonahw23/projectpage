import React from "react";
import Head from "../components/head";
import {useNavigate} from 'react-router-dom';

export default function Projects (){
    const navigate = useNavigate();
    const handleOnClick = () => navigate('/projects');

    const handleGitClick = () => window.location.href = "https://github.com/jonahw23";

    return(
        <section style={{ height:"full", paddingTop: "2%"}}>
        <div style={{ marginLeft:"0%" }}>
            {Head()}

        </div>
        <div className="center">
            <button type="button" class="btn btn-primary btn-lg" onClick={handleOnClick}>Projects</button>
            <button type="button" class="btn btn-primary btn-lg" onClick={handleGitClick}>GitHub</button>
            <button type="button" class="btn btn-primary btn-lg">[⚠️ Under Construction ⚠️]</button>
        </div>
      </section>
    )
}