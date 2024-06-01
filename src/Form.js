import React from "react";

export default function Form() {
  return (
    <>
      <div
        className="container d-flex justify-content-between align-item-center  "
        style={{ backgroundColor: "rgba(243,242,255,1)" }}
      >
        <div style={{ marginLeft: "60px" }}>
          <h2 style={{ marginTop: "100px" }}>
            Let's talk about
            <br />
            your project
          </h2>
          <br />
          <p>
            Do you have a project in mind, that you feel our
            <br />
            approach would work well for?
          </p>
          <br />
          <p>
            We’re always happy to discuss your project with you
            <br />
            and put together a free proposal.
          </p>
        </div>

        <div
          className="container"
          style={{
            backgroundColor: "white",
            width: "500px",
            marginTop: "100px",
            borderRadius: "10px",
          }}
        >
          <form
            className="was-validated"
            style={{ borderRadius: "10px", border: "2px solid white" }}
          >
            <div style={{ marginTop: "40px" }}>
              <h4> Just fill out the form below to get started.</h4>
            </div>
            <div class="input-group flex-nowrap" style={{ marginTop: "40px" }}>
              <input
                type="text"
                class="form-control"
                placeholder="Name"
                aria-label="Username"
                aria-describedby="addon-wrapping"
              />
            </div>
            <br />
            <div class="input-group flex-nowrap">
              <input
                type="text"
                class="form-control"
                placeholder="Email"
                aria-label="Email"
                aria-describedby="addon-wrapping"
              />
            </div>
            <br />

            <div class="input-group flex-nowrap">
              <input
                type="text"
                class="form-control"
                placeholder="Company"
                aria-label="Company"
                aria-describedby="addon-wrapping"
              />
            </div>
            <br />
            <div class="input-group flex-nowrap">
              <input
                type="text"
                class="form-control"
                placeholder="Phone number"
                aria-label="Phone number"
                aria-describedby="addon-wrapping"
              />
            </div>
            <br />

            <div className="mb-3">
              <input
                type="file"
                className="form-control"
                aria-label="file example"
                required
              />
            </div>
            <div className="mb-3">
              <label
                htmlfor="validationTextarea"
                className="form-label"
              ></label>
              <textarea
                className="form-control is-invalid"
                id="validationTextarea"
                placeholder="Message"
                required
              ></textarea>
            </div>

            <div className="form-check mb-3">
              <input
                type="checkbox"
                className="form-check-input"
                id="validationFormCheck1"
                required
              />
              <label
                className="form-check-label"
                htmlfor="validationFormCheck1"
              >
                <p style={{ color: "black" }}>
                  I agree to have my information stored privacy policy.
                </p>
              </label>
            </div>

            <div className="container d-flex justify-content-center align-item-center mb-3">
              <button
                type="submit"
                style={{
                  background:
                    "linear-gradient(102.26deg, #5B53F9 -13.11%, #AC71D6 36.24%, #FF8E57 110.26%)",
                  width: "500px",
                  Padding: "12px, 32px, 12px, 32px",
                  Gap: "8px",
                  color: "white",
                  borderRadius: "8px",
                  border: "2px solid white",
                }}
              >
                Send Your Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
