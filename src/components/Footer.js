import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <section className="container-fluid footer text-center">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <p className="email">
              <span className="d-none d-sm-block">
                <a href="mailto:official.youthartsmovement@gmail.com">
                  official.youthartsmovement@gmail.com
                </a>
              </span>
              <span className="d-block d-sm-none">
                <a href="mailto:official.youthartsmovement@gmail.com">
                  official.youthartsmovement
                </a>
                <a href="mailto:official.youthartsmovement@gmail.com">
                  @gmail.com
                </a>
              </span>
            </p>
            <p>
              <Link to="/">Home</Link> ~{" "}
              <Link to="/gallery/submit">Submit</Link> ~{" "}
              <Link to="/gallery/blm">BLM Gallery</Link> ~{" "}
              <a href="mailto:official.youthartsmovement@gmail.com">Contact</a>
            </p>
            <p className="copyright">
              &copy; Copyright 2020 Youth Arts Movement. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}