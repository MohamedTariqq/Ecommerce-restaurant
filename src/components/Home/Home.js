import React from "react";
import Header from "./Header";
import "./Home.css";
import prideImg from "../../assets/1.png";
import slider1 from "../../assets/1 (1).jpg";
import slider2 from "../../assets/2 (1).jpg";
import catg from "../../assets/2.png";
import Date from "../../Data";
import { Carousel } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faDribbble } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
const Home = () => {
  const blogitem = Date.map((item) => {
    return (
      <div className="col-md-4">
        <div className="box">
          <img src={item.img} alt="" />
          <h5> {item.title}</h5>
          <span> {item.time}</span>
          <h6> {item.price}</h6>
        </div>
        <button>
          <a href="#">Order Now</a>
        </button>
      </div>
    );
  });
  return (
    <>
      <Header />
      <section className="numbers">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h2>9852+</h2>
              <h6>SAVINGS</h6>
            </div>
            <div className="col-md-3">
              <h2>3205+</h2>
              <h6>PHOTOS</h6>
            </div>
            <div className="col-md-3">
              <h2>6578+</h2>
              <h6>ROCKETS</h6>
            </div>
            <div className="col-md-3">
              <h2>6580+</h2>
              <h6>GLOBES</h6>
            </div>
          </div>
        </div>
      </section>
      <section className="pride">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src={prideImg} alt="" title="prideImg" />
            </div>
            <div className="col-md-6">
              <h2>
                We pride ourselves on making real food from the best
                ingredients.
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                et purus a odio finibus bibendum in sit amet leo. Mauris feugiat
                erat tellus.
              </p>
              <button>
                <a alt="" href="#">
                  Learn more
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="catg">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2>
                We make everything by hand with the best possible ingredients.
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                et purus a odio finibus bibendum in sit amet leo. Mauris feugiat
                erat tellus.Far far away, behind the word mountains, far from
                the countries Vokalia and Consonantia, there live the blind
                texts.
              </p>
              <ul>
                <li>Etiam sed dolor ac diam volutpat.</li>
                <li>Erat volutpat aliquet imperdiet.</li>
                <li>purus a odio finibus bibendum.</li>
              </ul>
              <button>
                <a href="#" alt="">
                  Learn more
                </a>
              </button>
            </div>
            <div className="col-md-6">
              <img src={catg} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="story">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-12">
              <h2>
                When a man's stomach is full it makes no <br /> difference
                whether he is rich or poor.
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                et purus a odio <br /> finibus bibendum in sit amet leo. Mauris
                feugiat erat tellus.
              </p>
              <a
                href="https://www.youtube.com/watch?v=bZx8rPd-PKQ"
                target="blank"
              >
                Watch Our Story
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="blogs">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-12">
              <h2>Explore Our Foods</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                et purus a odio finibus bibendum in sit amet leo. Mauris feugiat
                erat tellus. Far far away, behind the word mountains, far from
                the countries Vokalia and Consonantia, there live the blind
                texts. Separated they live in Bookmarksgrove.
              </p>
            </div>
          </div>
          <div className="row">{blogitem}</div>
        </div>
      </section>
      <section className="slider">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <h2>Testimonials</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <Carousel>
                <Carousel.Item>
                  <img src={slider1} alt="" />
                  <Carousel.Caption>
                    <p>
                      "Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts. Separated they live."
                    </p>
                    <span>Simab Dave - Web Designer</span>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img src={slider2} alt="" />
                  <Carousel.Caption>
                    <p>
                      "Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts. Separated they live far from the countries
                      Vokalia."
                    </p>
                    <span>Johnthan Doe - UX Designer</span>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </section>
      <section className="asks">
        <div className="container">
          <div className="head">
            <h1>Frequently Asked Questions</h1>
          </div>
          <div className="row">
            <div className="col-md-6">
              <h5>
                <span>~</span> Is Foodera Bread really baked fresh each day?
              </h5>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language.
              </p>
              <h5>
                <span>~</span> Can I order your products online?
              </h5>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language.
              </p>
            </div>
            <div className="col-md-6">
              <h5>
                <span>~</span> Do you bake breads containing animal fats or
                products?
              </h5>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language.
              </p>
              <h5>
                <span>~</span> When are you opening a shop near me?
              </h5>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="view">
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <h4>Baked fresh daily by bakers with passion.</h4>
            </div>
            <div className="col-md-5">
              <button>
                <a href="#" alt="">
                  Learn More
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="subscribe">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-12">
              <h1>
                Hurry up! Subscribe our newsletter <br /> and get 25% Off
              </h1>
              <p>Limited time offer for this month. No credit card required.</p>
            </div>
            <form className="form">
              <div className="row">
                <div className="col-md-8">
                  <input
                    class="e-mail"
                    placeholder="Email Address here"
                    name="email"
                    id="eaddress"
                    data-validate="validate(required, email)"
                    type="email"
                  />
                </div>
                <div className="col-md-4">
                  <button type="submit">Subscribe</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      <section className="footer">
        <footer class="footer2" id="footer2">
          <div class="container">
            <div class="row">
              <div class="col-md-12 footerP text-center">
                <a href="#">Register</a>
                <a href="#">Forum</a>
                <a href="#">Affiliate</a>
                <a href="#">FAQ</a>
              </div>
              <div class="footer-social space30 text-center">
                <a href="#">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={faDribbble} />
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="#">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </div>
            </div>
          </div>
        </footer>
        <div class="footer-copy">
          <div class="container">
            &copy; 2021. Foodera. All rights reserved.
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
