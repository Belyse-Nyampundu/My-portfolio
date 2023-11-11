import React from "react";
import './style.css'

const Project = () =>{
    return(
        <div>
        <h2 class="movie-heading">Project</h2>
        <div className="movie-container">
        <div>
        <img src="/moovie.jpeg" alt="Movie" class="movie-image"/>
        </div>
    
        <div class="movie-overlay">
          <p class="movie-description">Movie Description</p>
          <div class="movie-buttons">
            <button class="movie-button">GitHub</button>
            <button class="movie-button">Figma</button>
          </div>
        </div>
        </div>
       
        <div className="movie-container">
        <div>
        <img src="/moovie.jpeg" alt="Movie" class="movie-image"/>
        </div>
    
        <div class="movie-overlay">
          <p class="movie-description">Movie Description</p>
          <div class="movie-buttons">
            <button class="movie-button">GitHub</button>
            <button class="movie-button">Figma</button>
          </div>
        </div>
        </div>

        <div className="movie-container">
        <div>
        <img src="/moovie.jpeg" alt="Movie" class="movie-image"/>
        </div>
    
        <div class="movie-overlay">
          <p class="movie-description">Movie Description</p>
          <div class="movie-buttons">
            <button class="movie-button">GitHub</button>
            <button class="movie-button">Figma</button>
          </div>
        </div>
        </div>
      </div>
    )
}
export default Project;