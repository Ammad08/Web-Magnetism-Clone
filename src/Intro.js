import React from "react";

export default function Intro() {
  return (
    <>
      <div
        className="container"
        style={{
          background:
            "linear-gradient(102.26deg, #5B53F9 -13.11%, #AC71D6 36.24%, #FF8E57 110.26%)",
          height: "550px",
        }}
      >
        <nav className="navbar  ">
          <div className="container-fluid">
            <img
              src="img.png"
              alt=""
              style={{
                height: "20px",
                overflow: "hidden",
                marginLeft: "80px",
                marginTop: "20px",
              }}
            />
            <form className="d-flex">
              <img src="vector.png" alt="" />
            </form>
          </div>
        </nav>
        <div
          className="d-flex justify-content-center align-item-center  "
          style={{ height: "33vh", color: "white" }}
        >
          <div className="position-absolute top-50 start-50 translate-middle my-4">
            <br />
            <div>
              Transforming Businesses with unique Web design and
              <br />
              strategic digital marketing for impactful online visibility.
            </div>
          </div>
          <br />
          <br />
          <br />
        </div>
        <div
          className="d-flex justify-content-center align-item-center mb-4"
          style={{ height: "33vh", color: "white" }}
        >
          <div className="d-flex position-absolute top-30 start-50 translate-middle">
            <h1 style={{ marginBottom: "40px" }}>WEB MAGNETISM</h1>
          </div>
        </div>

        <div className="d-grid gap-2 col-2 mx-auto mb-4">
          <button
            className="btn btn-primary"
            type="button"
            style={{
              background:
                "linear-gradient(93.05deg, #FF66C4 5.8%, rgba(242, 74, 177, 0) 98.1%)",
              marginTop: "0px",
              borderRadius: "100px",
              gap: "10px",
            }}
          >
            Get a proposal &nbsp; &#8599;
          </button>
        </div>
      </div>
      <div className=" d-flex justify-content-between align-item-center  " style={{width:"700px"}}>

      <div className="md-d-flex my-4" style={{left:"0px"}}>
        <div className="my-4" style={{ width: "550px", height: "500px" }}>
          <h2 style={{ marginLeft: "100px" }}>Welcome to web magnetism</h2>
          <div>
            <p style={{ marginBottom: "20px", marginLeft: "100px" }}>
              Your hub for bespoke web design and digital marketing success.
              We seamlessly merge creativity and SEO expertise to craft visually
              stunning websites that magnetize audiences.
            </p>

            <p style={{ marginBottom: "20px", marginLeft: "100px" }}>
              Our digital marketing, from SEO mastery to impactful campaigns,
              ensures your brand s resonance online. At Web Magnetism, we re 
              not just designers; we re digital architects, sculpting unique online
              experiences that elevate your brand.
            </p>

            <p style={{ marginBottom: "20px", marginLeft: "100px" }}>
              Navigate the digital landscape with confidence choose Web
              Magnetism for tailored web design and strategic digital marketing,
              where innovation meets results for a compelling online journey.
            </p>
          </div>

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
            ABOUT US &#8599;
          </button>
        </div>
      </div>
        <div className="my-4" style={{ width: "33vh" }}>
          <img src="draw.png" alt="" />
        </div>
        </div>
      <div className="container">
        <div className="d-flex justify-content-center align-item-center mb-4">
          <h2>
            An Integrated Team for unique Web
            <br />
            design and strategic digital marketing{" "}
          </h2>
        </div>
        <div
          className="d-flex justify-content-center align-item-center mb-4"
          style={{ marginTop: "20px" }}
        >
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Voluptates delectus
          atque
          <br /> eaque nulla rerum tempore consectetur molestiae dignissimos id
          necessitatibus optio maiores dolorem,
          <br />{" "}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;porro
          earum ut, ipsam, officiis adipisci eveniet cumque suscipit!
        </div>
        <div
          className="d-flex justify-content-center align-item-center mb-4"
          style={{ marginTop: "20px" }}
        >
          <img src="funnel.png" alt="" />
        </div>
      </div>
    </>
  );
}
