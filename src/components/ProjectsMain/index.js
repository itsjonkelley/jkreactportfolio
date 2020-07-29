import React from 'react';
import RainchkImg from '../../Assets/Rainchk.png';
import WorkdayImg from '../../Assets/Workday.png';
import WeatherImg from '../../Assets/weatherDashboard.png';
import './style.css'


function ProjectsMain() {
    return (
        
        <div class="row justify-content-md-center">
    <div class="col">


    <div class="row justify-content-md-center">
    <div class="col-9">
      <div class="card-body titleText rounded" id="jkProject">
          PROJECTS
      </div>
  </div>
  </div>
   
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={RainchkImg} class="d-block w-50 rounded" alt="screenshot of Rainchk project"></img>
            <div class="carousel-caption d-md-block carouselText">
              <h5>RainChk</h5>
              <p>Task Maker with Weather Display</p>
              <a href="https://itsjonkelley.github.io/RainChk/">See the real thing!</a>
              <br></br>
              <a href="https://github.com/itsjonkelley/RainChk">Repository</a>
            </div>
          </div>
          <div class="carousel-item">
            <img src={WorkdayImg} class="d-block w-50 rounded" alt="screenshot of workday project"></img>
            <div class="carousel-caption d-md-block carouselText">
              <h5>Workday Calendar</h5>
              <p>Plan Out Your Day with Hour Display</p>
              <a href="https://itsjonkelley.github.io/homeworkfilewk5/">See the real thing!</a>
              <br></br>
              <a href="https://github.com/itsjonkelley/homeworkfilewk5">Repository</a>
            </div>
          </div>
          <div class="carousel-item">
            <img src={WeatherImg} class="d-block w-50 rounded" alt="screenshot of weather dashboard"></img>
            <div class="carousel-caption d-none d-md-block carouselText">
              <h5>Weather Dashboard</h5>
              <p>Displays the Current Weather of a City Location</p>
              <a href="https://itsjonkelley.github.io/Weather-Dashboard---JK/">See the real thing!</a>
              <br></br>
              <a href="https://github.com/itsjonkelley/Weather-Dashboard---JK">Repository</a>
            </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
      </div>
      </div>
      </div>
    
    )
}

export default ProjectsMain;