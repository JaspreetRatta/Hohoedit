import React from 'react';
import "../resourses/home.css";


import { Container, Row, Col } from "reactstrap";
import heroImg from "../resourses/images/hero-img01.jpg";
import heroImg02 from "../resourses//images/hero-img02.jpg";
import heroVideo from "../resourses//images/hero-video.mp4";
import worldImg from "../resourses//images/world.png";

import Subtitle from "./../shared/Subtitle";



const House = () => {

  return (
    <>
      {/* ========== hero section start =========== */}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center ">
                  <Subtitle subtitle={"Know Before You GO"} />
                  <img src={worldImg} alt="" />
                </div>
                <h1>
                  Traveling opens the door to creating
                  <span className="highlight"> memories</span>
                </h1>
                <br></br>
                <p>
                  Welcome to Bus and Tours in Thailand, your ultimate destination for seamless and memorable travel experiences throughout the enchanting land of Thailand. As a premier bus reservation system and tour operator, we take pride in offering top-notch services that cater to the diverse needs of travelers, whether they are exploring the bustling city streets of Bangkok or the serene beaches of Phuket.
                </p>
              </div>
            </Col>

            <Col lg="2">
              <div className="hero__img-box">
                <img src={heroImg} alt="" />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box hero__video-box mt-4">
                <video src={heroVideo} alt="" controls />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box mt-5">
                <img src={heroImg02} alt="" />
              </div>
            </Col>


          </Row>
        </Container>
      </section>
      {/* ========== hero section start =========== */}
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      {/* ============ featured tour section start ============ */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <Subtitle subtitle={"Explore"} />
              <h2 className="featured__tour-title">Our featured Buses</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Ullam ipsum nobis asperiores soluta voluptas quas voluptates.
                Molestiae tempora dignissimos, animi praesentium molestias
                perferendis porro expedita delectus. Soluta natus porro.
              </p>
            </Col>

          </Row>
        </Container>
      </section>
      {/* ============ featured tour section end ============ */}

      <section className="message py-5">
        <div className="container text-center">
          <h1>We've got what you need!</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic est
            quis et iure tempora minima similique amet cum commodi id rerum,
            in non doloremque veniam accusamus distinctio, at animi ea

          </p>
          <button className="btn btn-primary">Check it out!</button>
        </div>
      </section>
      <section className="services">
        <div className="container text-center1 py-5">
          <h1>About our services</h1>

          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <i className="fa fa-bar-chart myicon"></i>
                  <h1>Become a Travel Agent</h1>
                  <p>
                    You can also become a travel agent and add your buses for traveling.
                    If you interested then go through this link or add button
                    Link:- bus-business.herokuapp.com
                  </p>
                  <button className="btn btn-primary" href="bus-business.herokuapp.com">Visit Site</button>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <i className="fa fa-bell-o myicon"></i>
                  <h1>Best Explanation</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Reprehenderit in molestias similique et, perferendis, officiis
                    labore harum sequi deleniti itaque rem ea? Labore repellat
                    doloribus, beatae perferendis placeat recusandae nam!
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <i className="fa fa-braille myicon"></i>
                  <h1>Best Explanation</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Reprehenderit in molestias similique et, perferendis, officiis
                    labore harum sequi deleniti itaque rem ea? Labore repellat
                    doloribus, beatae perferendis placeat recusandae nam!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section >
        <div className="container text-center">
          <h1>Let's Get In Touch!</h1>
          <p>
            Ready to start your next project with us? Give us a call or send us an
            email and we will get back to you as soon as possible!
          </p>
          <i className="fa fa-phone myicon text-warning"></i>
          <i className="fa fa-heart myicon text-danger"></i>
          <p>+667930453444</p>
          <p>saiyaandaaldenge@gmaill.com</p>
        </div>
      </section>

      
      <section className="footer bg-dark">
        <div className="container py-5 text-white text-center">
          <p>Copyright © 2021 -Ultimate Pvt Ltd.</p>
        </div>
      </section>

    </>
  );
};

export default House;