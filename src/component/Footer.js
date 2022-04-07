import React from "react";
import "./Footer.css"

export default function Footer(){
    return(
        <div className="mt-38">
             <footer class="footer h-40">
    <div class="waves">
      <div class="wave" id="wave1"></div>
      <div class="wave" id="wave2"></div>
      <div class="wave" id="wave3"></div>
      <div class="wave" id="wave4"></div>
    </div>
    <ul class="social-icon">
      <li class="social-icon__item"><a class="social-icon__link" href="#">
      <i class="fab fa-facebook"></i>
        </a></li>
      <li class="social-icon__item"><a class="social-icon__link" href="#">
      <i class="fab fa-twitter"></i>
        </a></li>
      <li class="social-icon__item"><a class="social-icon__link" href="#">
          <i class="fab fa-linkedin"></i>
        </a></li>
      <li class="social-icon__item"><a class="social-icon__link" href="#">
              <i class="fab fa-instagram"></i>
        </a></li>
    </ul>
    <ul class="menu">
      <li class="menu__item"><a class="menu__link" href="#">Home</a></li>
      <li class="menu__item"><a class="menu__link" href="#">About</a></li>
      <li class="menu__item"><a class="menu__link" href="#">Services</a></li>
      <li class="menu__item"><a class="menu__link" href="#">Team</a></li>
      <li class="menu__item"><a class="menu__link" href="#">Contact</a></li>

    </ul>
    <p>&copy;2022 E-Commerce | All Rights Reserved</p>
  </footer>
        </div>
    )

    }