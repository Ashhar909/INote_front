import React from "react";

const Quote = () => {
  return (
    <div>
    <h2 className="my-3 ">Today's Quote</h2>
      <div className="mb-3 my-4 quoteBox">
        <div className="row g-0">
          <div className="col-md-4 image">
            <img src="/imgs/Quote.jpeg" className="img-fluid rounded-start" alt="..."/>
          </div>
          <div className="col-md-8">
            <div className="card-body" style={{paddingTop:"40px"}}>
              <h5 className="fw-lighter fst-italic">Wise Words</h5>
              <p className="card-text quote">
                "Success is the sum of small efforts, repeated"
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quote;
