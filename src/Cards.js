import React from "react";
import Ourwork from "./Ourwork";
import Form from "./Form";
import Footer from "./Footer";

export default function Cards() {
  return (
    <>
    <div
      className="container"
      style={{
        background: "rgba(243,242,255,1)",
        height: "550px",
      

      }}
    >
      <div className="d-flex justify-content-center align-item-center mb-4">
        <h2 style={{ marginTop: "40px" }}>WHY CHOOSE US</h2>
      </div>
      <div className="d-flex justify-content-center align-item-center mb-4">
        <div className="card" style={{ width: "18rem", marginRight: "40px" }}>
          <div className="card-body">
            <div className="d-flex">
              <img src="icon (2).png" alt="" style={{ marginRight: "20px" }} />
              <h5 className="card-title">
                Take Control of Your Entire Marketing Landscape
              </h5>
            </div>
            <p className="card-text">
              We ve curated top-tier teams under one roof, enabling you to
              bypass the complexities of overseeing a network of agencies and
              internal hires.
            </p>
          </div>
        </div>

        <div className="card" style={{ width: "18rem", marginRight: "40px" }}>
          <img src="" className="card-img-top" alt="" />
          <div className="card-body">
            <div className="d-flex">
              <img src="icon (2).png" alt="" style={{ marginRight: "20px" }} />
              <h5 className="card-title">
                Your Business s Dedicated Marketing Wing
              </h5>
            </div>
            <p className="card-text">
              Even if your business is modest in size, having a well versed
              extension focused on digital marketing provides a distinct
              competitive edge.
            </p>
          </div>
        </div>

        <div className="card" style={{ width: "18rem", marginleft: "80px" }}>
          <img src="" className="card-img-top" alt="" />
          <div className="card-body">
            <div className="d-flex">
              <img src="icon (3).png" alt="" style={{ marginRight: "20px" }} />
              <h5 className="card-title">A Reliable Collaborator</h5>
            </div>
            <p className="card-text">
              Our exceptional team members function seamlessly as an integral
              part of your team, fully committed to your success and the
              sanctity of your brand.
            </p>
          </div>
        </div>
      </div>
      </div>


      <div
        className="container mb-4"
        style={{
          background:
            "linear-gradient(102.26deg, #5B53F9 -13.11%, #AC71D6 36.24%, #FF8E57 110.26%)",
          height: "740px",
          marginright: "40px",
        }}
      >
        <div className="d-flex ">
          <div>
            <h2
              className="d-flex justify-content-center align-item-center mb-4"
              style={{
                marginLeft: "100px",
                marginTop: "50px",
                marginright: "50px",
              }}
            >
              Our bespoke website
              <br />
              include the following
            </h2>

            <p
              className="d-flex justify-content-center align-item-center mb-4"
              style={{ marginBottom: "20px", marginLeft: "100px" }}
            >
              Your hub for bespoke web design and digital marketing success.
              <br />
              We seamlessly merge creativity and SEO expertise to craft visually
              <br />
              stunning websites that magnetize audiences.
            </p>

            <button
              className="btn btn-primary my-4"
              type="button"
              style={{
                background:
                  "linear-gradient(102.26deg, #5B53F9 -13.11%, #AC71D6 36.24%, #FF8E57 110.26%)",
                marginLeft: "100px",
                borderRadius: "100px",
                gap: "10px",
              }}
            >
              CONTACT US &#8599;
            </button>
          </div>
          <div className="justify-content-center align-item-center mb-4 my-4">
            <div className="container" style={{ marginRight: "20px" }}>
              <div
                className="card mx-4 my-4"
                style={{ width: "25rem", height: "200px", marginRight: "10px" }}
              >
                <img
                  src="icon 2.png"
                  className="card-img-top"
                  alt="..."
                  style={{ width: "60px" }}
                />
                <div className="card-body">
                  <h5 className="card-title">Bespoke Design</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
              <div
                className="card mx-4 my-4"
                style={{ width: "25rem", height: "200px", marginRight: "10px" }}
              >
                <img
                  src="icon 2.png"
                  className="card-img-top"
                  alt="..."
                  style={{ width: "60px" }}
                />
                <div className="card-body">
                  <h5 className="card-title">Mobile Optimised</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
              <div
                className="card mx-4 my-4"
                style={{ width: "25rem", height: "200px", marginRight: "10px" }}
              >
                <img
                  src="icon 2.png"
                  className="card-img-top"
                  alt="..."
                  style={{ width: "60px" }}
                />
                <div className="card-body">
                  <h5 className="card-title">SEO Optimised</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <h2 className="d-flex justify-content-center align-item-center  ">
        Overviews Of Services
      </h2>
      <br />

      <div className="  d-flex justify-content-center align-item-center mx-2 " >
        <div style={{width:'300px'}}>
          <img style={{width:'300px',height:'300px'}} src="Rectangle 1.png" alt=""  />
          <h4>Bespoke Web Design</h4>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            quibusdam explicabo porro nisi dolorem quam mollitia omnis
            asperiores rerum delectus!
          </p>

          <button
            className="btn btn-primary"
            type="button"
            style={{
              background:
                "linear-gradient(93.05deg, #FF66C4 5.8%, rgba(242, 74, 177, 0) 98.1%)",
              marginTop: "10px",
              borderRadius: "100px",
              gap: "10px",
              color: "black",
            }}
          >
            Bespoke Web Design &#8599;
          </button>
        </div>

        <div className="mx-4" style={{width:'300px'}}>
          <img style={{width:'300px',height:'300px'}} src="Rectangle 2.png" alt="" />

          <h4>App Development</h4>
          <br />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe,
            reiciendis! Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Quibusdam, minima.
          </p>
          <button
            className="btn btn-primary"
            type="button"
            style={{
              background:
                "linear-gradient(93.05deg, #FF66C4 5.8%, rgba(242, 74, 177, 0) 98.1%)",
              marginTop: "10px",
              borderRadius: "100px",
              gap: "10px",
              color: "black",
            }}
          >
            App Development &#8599;
          </button>
        </div>

        <div style={{width:'300px'}}>
          <img style={{width:'300px',height:'300px'}} src="Rectangle 03.png" alt="" />

          <h4>Digital Marketing</h4>
          <br />
          <p>
            {" "}
            ipsum dolor sit amet, consectetur adipisicing elit. Assumenda,
            debitis?Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Iste, aliquam?
          </p>

          <button
            className="btn btn-primary"
            type="button"
            style={{
              background:
                "linear-gradient(93.05deg, #FF66C4 5.8%, rgba(242, 74, 177, 0) 98.1%)",
              marginTop: "10px",
              borderRadius: "100px",
              gap: "10px",
              color: "black",
            }}
          >
            Digital Marketing &#8599;
          </button>
        </div>
      </div>

      <Ourwork />
      <Form />
      <Footer />
      </>
  );
}
