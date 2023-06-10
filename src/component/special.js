
import React, { Component } from "react";								
import "../css/tooplate-wave-cafe.css";
import "../fontawesome/css/all.min.css";
import a from '../img/special-01.jpg';
import b from '../img/special-01.jpg';
import c from '../img/special-02.jpg';
import d from '../img/special-03.jpg';
import e from '../img/special-04.jpg';
import f from '../img/special-05.jpg';










const Special = () =>{
    return (
        <div id="special" class="tm-page-content">
        <div class="tm-special-items">
          <div class="tm-black-bg tm-special-item">
            <img src={a} alt="Image"/>
            <div class="tm-special-item-description">
              <h2 class="tm-text-primary tm-special-item-title">Special One</h2>
              <p class="tm-special-item-text">Here is a short text description for the first special item. You are not allowed to redistribute this template ZIP file.</p>  
            </div>
          </div>
          <div class="tm-black-bg tm-special-item">
            <img src={b} alt="Image"/>
            <div class="tm-special-item-description">
              <h2 class="tm-text-primary tm-special-item-title">Second Item</h2>
              <p class="tm-special-item-text">You are allowed to download, modify and use this template for your commercial or non-commercial websites.</p>  
            </div>
          </div>
          <div class="tm-black-bg tm-special-item">
            <img src={c} alt="Image"/>
            <div class="tm-special-item-description">
              <h2 class="tm-text-primary tm-special-item-title">Third Special Item</h2>
              <p class="tm-special-item-text">Pellentesque in ultrices mi, quis mollis nulla. Quisque sed commodo est, quis tincidunt nunc.</p>  
            </div>
          </div>
          <div class="tm-black-bg tm-special-item">
            <img src={d} alt="Image"/>
            <div class="tm-special-item-description">
              <h2 class="tm-text-primary tm-special-item-title">Special Item Fourth</h2>
              <p class="tm-special-item-text">Vivamus finibus nulla sed metus sagittis, sed ultrices magna aliquam. Mauris fermentum.</p>  
            </div>
          </div>      
          <div class="tm-black-bg tm-special-item">
            <img src={e} alt="Image"/>
            <div class="tm-special-item-description">
              <h2 class="tm-text-primary tm-special-item-title">Sixth Sense</h2>
              <p class="tm-special-item-text">Here is a short text description for sixth item. This text is four lines.</p>  
            </div>
          </div>
          <div class="tm-black-bg tm-special-item">
            <img src={f} alt="Image"/>
            <div class="tm-special-item-description">
              <h2 class="tm-text-primary tm-special-item-title">Seventh Item</h2>
              <p class="tm-special-item-text">Curabitur eget erat sit amet sapien aliquet vulputate quis sed arcu.</p>  
            </div>
          </div>                      
        </div>            
      </div>
    )
}
export default Special;