import React from "react";

function Contacts(){
    return       <section class="contact padding">
    <div class="container">
      <header class="sec-header text-center">
        <h2 class="heading">Contact Us</h2>
        <div class="dot-wrapper">
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
        </div>
      </header>
      <div class="flex">
        <form class="flex-60" action="index.html" method="post">
          <fieldset>
            <div class="flex">
              <input
                class="form-control flex-48"
                type="text"
                name="name"
                placeholder="Full Name"
              />
              <input
                class="form-control flex-48"
                type="email"
                name="email"
                placeholder="Your Email"
              />
            </div>
            <div class="flex">
              <input
                class="form-control flex-48"
                name="number"
                type="tel"
                placeholder="Your Phone"
              />
              <select class="form-control flex-48" name="budget">
                <option value="Budget Level">Budget Level</option>
                <option value="Budget Level1">Budget Level1</option>
                <option value="Budget Level2">Budget Level2</option>
                <option value="Budget Level3">Budget Level3</option>
              </select>
            </div>
            <textarea
              class="form-control"
              name="requirements"
              placeholder="Your Requirements"
              id=""
              rows="6"
            ></textarea>
          </fieldset>
          <input
            type="submit"
            value="Send Message"
            class="btn btn-primary"
          />
        </form>
        <div class="flex-40 map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3375.9195155713787!2d76.35140991561741!3d32.206399320166405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391b530e24726e0d%3A0x71ff0cae0784712d!2sAltCampus%20Services%20Pvt.%20Ltd!5e0!3m2!1sen!2sin!4v1600510560646!5m2!1sen!2sin"
            frameborder="0"
            style="border: 0"
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></iframe>
        </div>
      </div>
    </div>
  </section>
</main>
<footer class="footer padding">
  <div class="container">
    <div class="flex align-start">
      <div class="flex-40">
        <h3>Hydro Company</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex
          veniam autem illo recusandae sit velit adipisci ab perspiciatis
          voluptate. Eos fuga soluta necessitatibus provident ad culpa
          explicabo quod error maxime!
        </p>
      </div>
      <div class="flex-20">
        <h3>Company</h3>
        <nav>
          <ul>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Join our team</a>
            </li>
            <li>
              <a href="#">Read blog</a>
            </li>
            <li>
              <a href="#">Press</a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="flex-20">
        <h3>Services</h3>
        <nav>
          <ul>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Documentation</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="flex-20">
        <h3>Find Us</h3>
        <address>
          AltCampus, Thehr, Khaniyara,
          <br />
          Kangra, Himachal Pradesh, 176218
        </address>
      </div>
    </div>
    <hr />
    <div class="flex footer-additional-info">
      <small> Copyright &copy; 2017 Your Company </small>
      <div class="flex">
        <p>Call us (+66) 010-020-0340</p>
        <nav>
          <ul class="flex">
            <li class="social-media-item">
              <a href="#"><i class="fab fa-facebook-square"></i></a>
            </li>
            <li class="social-media-item">
              <a href="#"><i class="fab fa-twitter"></i></a>
            </li>
            <li class="social-media-item">
              <a href="#"><i class="fab fa-instagram"></i></a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</footer>
}

export default Contacts;