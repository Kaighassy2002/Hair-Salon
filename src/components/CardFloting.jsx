import React from "react";
import card from "../images/card1.jpg";
import card2 from "../images/colorteam.jpg";
import card3 from "../images/card3.jpg";
import "../css/cardfloating.css";
function CardFloting() {
  return (
    <>
      <section
        
      >
         
        <div style={{height:"50vh"}} className=" d-flex justify-content-evenly  ">
          <div className="card-section">
            <div class="card  shadow ">
              <div class="flip-card ">
                <div class="flip-card__container">
                  
                  <div class="card-front  bg-dark-subtle">
                    <div class="text-black-50 text-center pt-3 fs-4 card-front__tp--city card-front__tp">
                      <i
                        id="Layer_1"
                        viewBox="0 0 60 60"
                         className="fa-solid fa-hand-holding-heart backup"
                        style={{ height: "4.25rem" }}
                      ></i>

                      
                    </div>

                    <div class="card-front__bt ">
                      {/* <p class="card-front__text-view   d-flex justify-content-center align-items-center inside-page__btn">
                        View me
                      </p> */}
                    </div>
                  </div>
                  <div className="card-back">
                    <video className="video__container" autoplay muted loop>
                      <source
                        className="video__media"
                        src="https://player.vimeo.com/external/370331493.sd.mp4?s=e90dcaba73c19e0e36f03406b47bbd6992dd6c1c&profile_id=139&oauth2_token_id=57447761"
                        type="video/mp4"
                      />
                    </video>
                  </div>
                </div>
              </div>

              <div class="inside-page ">
              <img style={{height:"30vh",width:"100%"}} src={card} alt="" />
                {/* <div class="inside-page__container">
                                <h5 class="fs-6 bolder text-dark inside-page__heading--city">
                                    For urban lovers
                                </h5>
                                <p class="fs-6 text-success">
                                   As cities never sleep, there are always something going on, no matter what time!
                                </p>
                                <a  class="btn btn-success ">View deals</a>
                            </div> */}
              </div>
            </div>
          </div>
          <div className="card-section">
            <div class="card  shadow ">
              <div class="flip-card ">
                <div class="flip-card__container">
                  <div class="card-front bg-dark-subtle ">
                    <div class="text-black-50 text-center pt-3 fs-4 card-front__tp--city card-front__tp">
                      <i
                        id="Layer_1"
                        viewBox="0 0 60 60"
                       className="fa-solid fa-jug-detergent backup"
                        style={{ height: "4.25rem" }}
                      ></i>

                      {/* <h5 className="text-dark ">Services</h5> */}
                    </div>

                    <div class="card-front__bt ">
                      {/* <p class="card-front__text-view   d-flex justify-content-center align-items-center inside-page__btn">
                        View me
                      </p> */}
                    </div>
                  </div>
                  <div className="card-back">
                    <video className="video__container" autoplay muted loop>
                      <source
                        className="video__media"
                        src="https://player.vimeo.com/external/370331493.sd.mp4?s=e90dcaba73c19e0e36f03406b47bbd6992dd6c1c&profile_id=139&oauth2_token_id=57447761"
                        type="video/mp4"
                      />
                    </video>
                  </div>
                </div>
              </div>

              <div  class="inside-page  ">
              <img style={{height:"30vh",width:"100%"}} src={card2} alt="" />
               
              </div>
            </div>
          </div>
          <div className="card-section">
            <div class="card  shadow ">
              <div class="flip-card ">
                <div class="flip-card__container">
                  <div class="card-front bg-dark-subtle">
                    <div class="text-black-50 text-center pt-3 fs-4 card-front__tp--city card-front__tp">
                      <i
                        id="Layer_1"
                        viewBox="0 0 60 60"
                         className="fa-solid fa-scissors backup"
                        style={{ height: "4.25rem" }}
                      ></i>

                      {/* <h5 className="text-dark ">Services</h5> */}
                    </div>

                    <div class="card-front__bt">
                      {/* <p class="card-front__text-view   d-flex justify-content-center align-items-center inside-page__btn">
                        View me
                      </p> */}
                    </div>
                  </div>
                  <div className="card-back">
                    <video className="video__container" autoplay muted loop>
                      <source
                        className="video__media"
                        src="https://player.vimeo.com/external/370331493.sd.mp4?s=e90dcaba73c19e0e36f03406b47bbd6992dd6c1c&profile_id=139&oauth2_token_id=57447761"
                        type="video/mp4"
                      />
                    </video>
                  </div>
                </div>
              </div>

              <div class="inside-page ">
              <img style={{height:"30vh",width:"100%"}} src={card3} alt="" />
                {/* <div class="inside-page__container">
                                <h5 class="fs-6 bolder text-dark inside-page__heading--city">
                                    For urban lovers
                                </h5>
                                <p class="fs-6 text-success">
                                   As cities never sleep, there are always something going on, no matter what time!
                                </p>
                                <a  class="btn btn-success ">View deals</a>
                            </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CardFloting;
