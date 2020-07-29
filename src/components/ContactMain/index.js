import React from 'react';
import './style.css'



function ContactMain () {
    return (


<>
<div class="row justify-content-md-center">
      <div class="col-9">
         <div id="jkContact">
          <div class="card-body titleText rounded">
            CONTACT
        </div>
      </div>
    </div>
    </div>
    <div class="row justify-content-md-center">
      <div class="col-5">
        <div class="card-body aboutText rounded">
          <section class="card-body contactCard">
            <h5 class="finalText">
              Jonathan Kelley
              <br></br>
              678-637-7448
              <br></br>
              jonathankelley87@gmail.com
            </h5>
            <h6>
              Click the letter below to send me an email directly!
            </h6>
            <a href="mailto:jonathankelley87@gmail.com"><i class="far fa-envelope fa-5x icon-border" style={{color:'rgb(99, 97, 97)'}}></i></a>
          </section>
        </div>
      </div>
    </div>
    </>
    

    )
}

export default ContactMain;
