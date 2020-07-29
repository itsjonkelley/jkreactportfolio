import React from 'react';
import FamilyPhoto from '../../Assets/me.png';


function AboutMain () {
    return (
<div>

<div className="row justify-content-md-center" id="jkAbout">
  <div className="col-9">
    <div className="card-body titleText rounded">
        ABOUT ME
    </div>
</div>
</div>
<div className="row justify-content-md-center">
  <div className="col-7">
    <div className="card-body aboutText rounded">
      <div className="containerAbout">
      <div className="row">
        <div className="col-4">
          <img src={FamilyPhoto} alt="family" className="meImage"></img>
          
        </div>
        <div className="col-8">
          <h5>
          Hi!  My name is Jonathan. I have been working to continue further into the IT world by developing my coding skills.  A little about myself:  I have a gorgeous wife and daughter, and a dog who loves to keep me active.
         <br>
         </br>
          I have always loved to solve puzzles and fix things from around the house to technical issues at work.  I love using this passion to carry into coding and dissecting issues that arise throughout the process of bringing code to life!
          </h5>
        </div>
      </div>
      <div class="row">
            <div class="col-4">
                <a href="https://www.linkedin.com/in/jonathan-kelley-a4056896/"><i class="fab fa-linkedin fa-3x icon-border"> Linkedin</i></a>
            </div>
            <div class="col-4">
              <a href="https://github.com/itsjonkelley"><i class="fab fa-github fa-3x icon-border" style={{color: 'rgb(0, 0, 0)'}}> Github</i></a>
            </div>
            <div class="col-4">
              <a href="./Assets/devResume2020.pdf" id="trigger"><i class="far fa-file fa-3x icon-border" style={{color: 'rgb(99, 97, 97'}}> Resume</i></a>
                <div id="dialog" style={{display: 'none'}}>
                  <div>
                    <embed src="/Assets/devResume2020.pdf" type="application/pdf" width="100%" height="100%"></embed>
                </div>
            </div> 
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
    )
}

export default AboutMain;