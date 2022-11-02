import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

function Main() {
  return (
    <>
      {/* Main start */}
      <main>
        {/* Start our-service-section*/}
        <section id="our-service-section">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div
                className="text-center col-md-5 col-sm-12  me-4"
                data-aos="fade-right"
                data-aos-offset={200}
              >
                <img
                  src="./src/assets/images/img_service.png"
                  className="img-fluid"
                  id="service-img"
                  width="100%"
                />
              </div>
              <div
                className="col-md-5 col-sm-12 "
                data-aos="zoom-in-up"
                data-aos-offset={200}
              >
                <h2 className="mb-3 fw-boldanimate__animated animate__bounce">
                  Best Car Rental for any kind of trip in Lhokseumawe!
                </h2>
                <p className="align-content-sm-center">
                  Sewa mobil di Lhokseumawe bersama Binar Car Rental jaminan
                  harga lebih murah dibandingkan yang lain, kondisi mobil baru,
                  serta kualitas pelayanan terbaik untuk perjalanan wisata,
                  bisnis, wedding, meeting,dll.
                </p>
                <p>
                  <span>
                    <img
                      src="./src/assets/images/checklist.png"
                      alt="checklist"
                      className="me-2"
                      width="24px"
                    />
                  </span>
                  Sewa Mobil Dengan Supir di Bali 12 Jam
                </p>
                <p>
                  <span>
                    <img
                      src="./src/assets/images/checklist.png"
                      alt="checklist"
                      className="me-2"
                      width="24px"
                    />
                  </span>
                  Sewa Mobil Lepas Kunci di Bali 24 Jam
                </p>
                <p>
                  <span>
                    <img
                      src="./src/assets/images/checklist.png"
                      alt="checklist"
                      className="me-2"
                      width="24px"
                    />
                  </span>
                  Sewa Mobil Jangka Panjang Bulanan
                </p>
                <p>
                  <span>
                    <img
                      src="./src/assets/images/checklist.png"
                      alt="checklist"
                      className="me-2"
                      width="24px"
                    />
                  </span>
                  Gratis Antar - Jemput Mobil di Bandara
                </p>
                <p>
                  <span>
                    <img
                      src="./src/assets/images/checklist.png"
                      alt="checklist"
                      className="me-2"
                      width="24px"
                    />
                  </span>
                  Layanan Airport Transfer / Drop In Out
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* End our service section*/}
        {/* Start why-us-section */}
        <section id="why-section">
          <div className="container">
            <div className="row">
              <div
                className="col-12 title-why-us"
                data-aos="fade-right"
                data-aos-offset={200}
              >
                <h2 className="fw-bold">Why Us?</h2>
                <p>Mengapa harus pilih Binar Car Rental?</p>
              </div>
            </div>
            <div
              className="row mt-4"
              data-aos="zoom-in-up"
              data-aos-offset={200}
            >
              <div className="col-md-3 col-sm-6">
                <div className="card card-why-us">
                  <div className="card-body">
                    <img
                      src="./src/assets/images/icon_complete.png"
                      width="32px"
                    />
                    <h5 className="card-title mt-3 fw-bold">Mobil Lengkap</h5>
                    <p className="card-text">
                      Tersedia banyak pilihan mobil, kondisi masih baru, bersih
                      dan terawat
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="card card-why-us">
                  <div className="card-body">
                    <img
                      src="./src/assets/images/icon_price.png"
                      width="32px"
                    />
                    <h5 className="card-title mt-3 fw-bold">Harga Murah</h5>
                    <p className="card-text">
                      Harga murah dan bersaing, bisa bandingkan harga kami
                      dengan rental mobil lain
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="card card-why-us">
                  <div className="card-body">
                    <img
                      src="./src/assets/images/icon_24hrs.png"
                      width="32px"
                    />
                    <h5 className="card-title mt-3 fw-bold">Layanan 24 Jam</h5>
                    <p className="card-text">
                      Siap melayani kebutuhan selama 24 jam nonstop. Kami
                      tersedia akhir minggu
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6">
                <div className="card card-why-us">
                  <div className="card-body">
                    <img
                      src="./src/assets/images/icon_professional.png"
                      width="32px"
                    />
                    <h5 className="card-title mt-3 fw-bold">
                      Sopir Profesional
                    </h5>
                    <p className="card-text">
                      Sopir yang profesional, berpengalaman, jujur, ramah dan
                      selalu tepat waktu
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*End why-us-section*/}
        {/*Start Testimonial-Section*/}
        <section id="testimony-section">
          <div className="container-fluid" style={{ height: "430px" }}>
            <div className="row">
              <div
                className="testimonial-header text-center"
                style={{ marginBottom: "3em" }}
              >
                <h2 style={{ marginBottom: "1em" }}>Testimonial</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod
                </p>
              </div>
            </div>
            <div
              className="row"
              style={{ height: "370px", paddingBottom: "100px" }}
            >
              <div className="carouse-content">
                <Swiper
                  modules={[Navigation]}
                  className="carousel-container mySwiper"
                  centeredSlides={true}
                  loop={true}
                  slidesPerView="auto"
                  style={{ cursor: "pointer" }}
                >
                  <div className="carouse-content">
                    <SwiperSlide className="carousel-card">
                      <div className="carousel-image">
                        <img
                          src="./src/assets/images/img_photo.png"
                          alt="testimonial user image"
                        />
                      </div>
                      <div className="carousel-text ms-5">
                        <div className="rating-stars">
                          <img
                            src="./src/assets/images/Star.png"
                            alt="Rating stars"
                          />
                          <img
                            src="./src/assets/images/Star.png"
                            alt="Rating stars"
                          />
                          <img
                            src="./src/assets/images/Star.png"
                            alt="Rating stars"
                          />
                          <img
                            src="./src/assets/images/Star.png"
                            alt="Rating stars"
                          />
                          <img
                            src="./src/assets/images/Star.png"
                            alt="Rating stars"
                          />
                        </div>
                        <div className="carousel-desc">
                          <p className="justify-content-between">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod lorem ipsum dolor sit amet,
                            consectetur adipiscing elit, sed do eiusmod lorem
                            ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod
                          </p>
                          <h4 className="username">
                            Adi Prasetyo 20, Pematangsiantar
                          </h4>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="carousel-card">
                      <div className="carousel-image">
                        <img
                          src="./src/assets/images/img_photo2.png"
                          alt="testimonial user image"
                        />
                      </div>
                      <div className="carousel-text ms-5">
                        <div className="rating-stars">
                          <img
                            src="./src/assets/images/Star.png"
                            alt="Rating stars"
                          />
                          <img
                            src="./src/assets/images/Star.png"
                            alt="Rating stars"
                          />
                          <img
                            src="./src/assets/images/Star.png"
                            alt="Rating stars"
                          />
                          <img
                            src="./src/assets/images/Star.png"
                            alt="Rating stars"
                          />
                          <img
                            src="./src/assets/images/Star.png"
                            alt="Rating stars"
                          />
                        </div>
                        <div className="carousel-desc">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod lorem ipsum dolor sit amet,
                            consectetur adipiscing elit, sed do eiusmod lorem
                            ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod
                          </p>
                          <h4 className="username">
                            Adi Prasetyo 20, Pematangsiantar
                          </h4>
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide className="carousel-card">
                      <div className="carousel-image">
                        <img
                          src="./src/assets/images/img_photo2.png"
                          alt="testimonial user image"
                        />
                      </div>
                      <div className="carousel-text ms-5">
                        <div className="rating-stars">
                          <img
                            src="./src/assets/images/Star.png"
                            alt="Rating stars"
                          />
                          <img
                            src="./src/assets/images/Star.png"
                            alt="Rating stars"
                          />
                          <img
                            src="./src/assets/images/Star.png"
                            alt="Rating stars"
                          />
                          <img
                            src="./src/assets/images/Star.png"
                            alt="Rating stars"
                          />
                          <img
                            src="./src/assets/images/Star.png"
                            alt="Rating stars"
                          />
                        </div>
                        <div className="carousel-desc">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod lorem ipsum dolor sit amet,
                            consectetur adipiscing elit, sed do eiusmod lorem
                            ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod
                          </p>
                          <h4 className="username">
                            Adi Prasetyo 20, Pematangsiantar
                          </h4>
                        </div>
                      </div>
                    </SwiperSlide>
                  </div>
                </Swiper>
              </div>
            </div>
          </div>
        </section>
        {/*End Testimonial-Section*/}
        {/* Start of Banner */}
        <section id="banner-section" className="ms-3 me-3">
          <div
            className="container banner "
            data-aos="zoom-in"
            data-aos-delay={600}
          >
            <div className="row">
              <div
                className="card text-center cta-banner text-white "
                style={{ width: "100%" }}
              >
                <div className="card-body ">
                  <div className="container">
                    <h2 className="card-title fw-bold text-white mt-2">
                      Sewa Mobil di Lhokseumawe Sekarang
                    </h2>
                    <p className="card-text text-white pb-3 mt-2 pt-3">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                  <button className="btn btn-success mt-2 fw-bold">
                    Mulai Sewa Mobil
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End of Banner */}
        {/* Start faq-section */}
        <section id="faq-section">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-12 title-faq-section">
                <h2 className="fw-bold pb-2 mb-md-1">
                  Frequently Asked Question
                </h2>
                <p className="pb-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit
                </p>
              </div>
              <div className="col-md-6 col-sm-12 ">
                <div
                  className="accordion accordion-flush"
                  id="accordionExample"
                >
                  <div className="accordion-item border rounded-1 ">
                    <h3 className="accordion-header " id="headingOne">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        ria-controls="collapseOne"
                      >
                        Apa saja syarat yang dibutuhkan?
                      </button>
                    </h3>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nihil eum eius odit rem magni aut aspernatur nemo, quam
                        consequuntur consectetur culpa sunt reprehenderit
                        similique saepe?
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item border rounded-1">
                    <h3 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        {" "}
                        Berapa hari minimal sewa mobil lepas kunci?
                      </button>
                    </h3>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nihil eum eius odit rem magni aut aspernatur nemo, quam
                        consequuntur consectetur culpa sunt reprehenderit
                        similique saepe?
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item border rounded-1">
                    <h3 className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        {" "}
                        Berapa hari sebelumnya sebaiknya booking sewa mobil?
                      </button>
                    </h3>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nihil eum eius odit rem magni aut aspernatur nemo, quam
                        consequuntur consectetur culpa sunt reprehenderit
                        similique saepe?
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item border rounded-1">
                    <h3 className="accordion-header" id="headingFour">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      >
                        Apakah ada biaya antar jemput?
                      </button>
                    </h3>
                    <div
                      id="collapseFour"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFour"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nihil eum eius odit rem magni aut aspernatur nemo, quam
                        consequuntur consectetur culpa sunt reprehenderit
                        similique saepe?
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item border rounded-1">
                    <h3 className="accordion-header" id="headingFive">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFive"
                        aria-expanded="false"
                        aria-controls="collapseFive"
                      >
                        Bagaimana jika terjadi kecelakaan?
                      </button>
                    </h3>
                    <div
                      id="collapseFive"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFive"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Nihil eum eius odit rem magni aut aspernatur nemo, quam
                        consequuntur consectetur culpa sunt reprehenderit
                        similique saepe?
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End faq-section */}
      </main>
      {/* End main */}
    </>
  );
}

export default Main;
