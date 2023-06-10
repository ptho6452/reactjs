import React, { Component } from "react";								
import "../css/tooplate-wave-cafe.css";
import "../fontawesome/css/all.min.css";
import a from '../img/about-1.png';
import b from '../img/about-2.png';





const About = () =>{
    return (

        <div id="about" class="tm-page-content">
        <div class="tm-black-bg tm-mb-20 tm-about-box-1">              
          <h2 class="tm-text-primary tm-about-header">About Wave Cafe</h2>
          <div class="tm-list-item tm-list-item-2">                
            <img src={a} alt="Image" class="tm-list-item-img tm-list-item-img-big"/>
            <div class="tm-list-item-text-2">
              <p>Wave Cafe is a one-page video background HTML CSS template from Tooplate. You can use this for your business websites.</p>
              <p>You can also use this for your client websites which you get paid for your website services. Please tell your friends about us.</p>
            </div>                
          </div>
        </div>
        <div class="tm-black-bg tm-mb-20 tm-about-box-2">              
          <div class="tm-list-item tm-list-item-2">                
            <div class="tm-list-item-text-2">
              <h2 class="tm-text-primary">How we began</h2>
              <p>If you wish to support us, please contact Tooplate. Thank you. Duis bibendum erat nec ipsum consectetur sodales.</p>                  
            </div>                
            <img src={b} alt="Image" class="tm-list-item-img tm-list-item-img-big tm-img-right"/>                
          </div>
          <p>Donec non urna elit. Quisque ut magna in dui mattis iaculis eu finibus metus. Suspendisse vel mi a lacus finibus vehicula vel ut diam. Nam pellentesque, mi quis ullamcorper.</p>
        </div>
      </div>

    )
}
export default About;