import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {toast} from 'react-toastify'

function Index() {
  return (
  <div>
  {/* Carousel Start */}
  <div className="container-fluid mb-3">
    <div className="row px-xl-5">
      <div className="col-lg-8">
        <div id="header-carousel" className="carousel slide carousel-fade mb-30 mb-lg-0" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#header-carousel" data-slide-to={0} className="active" />
            <li data-target="#header-carousel" data-slide-to={1} />
            <li data-target="#header-carousel" data-slide-to={2} />
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item position-relative active" style={{height: 430}}>
              <img className="position-absolute w-100 h-100" src="img/carousel-1.jpg" style={{objectFit: 'cover'}} />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{maxWidth: 700}}>
                  <h1 className="display-4 text-white mb-3 animate__animated animate__fadeInDown">Men Fashion</h1>
                  <p className="mx-md-5 px-5 animate__animated animate__bounceIn">Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam</p>
                  <a className="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp" href="#">Shop Now</a>
                </div>
              </div>
            </div>
            <div className="carousel-item position-relative" style={{height: 430}}>
              <img className="position-absolute w-100 h-100" src="img/carousel-2.jpg" style={{objectFit: 'cover'}} />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{maxWidth: 700}}>
                  <h1 className="display-4 text-white mb-3 animate__animated animate__fadeInDown">Women Fashion</h1>
                  <p className="mx-md-5 px-5 animate__animated animate__bounceIn">Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam</p>
                  <a className="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp" href="#">Shop Now</a>
                </div>
              </div>
            </div>
            <div className="carousel-item position-relative" style={{height: 430}}>
              <img className="position-absolute w-100 h-100" src="img/carousel-3.jpg" style={{objectFit: 'cover'}} />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{maxWidth: 700}}>
                  <h1 className="display-4 text-white mb-3 animate__animated animate__fadeInDown">Kids Fashion</h1>
                  <p className="mx-md-5 px-5 animate__animated animate__bounceIn">Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam</p>
                  <a className="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp" href="#">Shop Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="product-offer mb-30" style={{height: 200}}>
          <img className="img-fluid" src="img/offer-1.jpg" alt />
          <div className="offer-text">
            <h6 className="text-white text-uppercase">Save 20%</h6>
            <h3 className="text-white mb-3">Special Offer</h3>
            <a href className="btn btn-primary">Shop Now</a>
          </div>
        </div>
        <div className="product-offer mb-30" style={{height: 200}}>
          <img className="img-fluid" src="img/offer-2.jpg" alt />
          <div className="offer-text">
            <h6 className="text-white text-uppercase">Save 20%</h6>
            <h3 className="text-white mb-3">Special Offer</h3>
            <a href className="btn btn-primary">Shop Now</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Carousel End */}
  {/* Featured Start */}
  <div className="container-fluid pt-5">
    <div className="row px-xl-5 pb-3">
      <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
        <div className="d-flex align-items-center bg-light mb-4" style={{padding: 30}}>
          <h1 className="fa fa-check text-primary m-0 mr-3" />
          <h5 className="font-weight-semi-bold m-0">Quality Product</h5>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
        <div className="d-flex align-items-center bg-light mb-4" style={{padding: 30}}>
          <h1 className="fa fa-shipping-fast text-primary m-0 mr-2" />
          <h5 className="font-weight-semi-bold m-0">Free Shipping</h5>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
        <div className="d-flex align-items-center bg-light mb-4" style={{padding: 30}}>
          <h1 className="fas fa-exchange-alt text-primary m-0 mr-3" />
          <h5 className="font-weight-semi-bold m-0">14-Day Return</h5>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
        <div className="d-flex align-items-center bg-light mb-4" style={{padding: 30}}>
          <h1 className="fa fa-phone-volume text-primary m-0 mr-3" />
          <h5 className="font-weight-semi-bold m-0">24/7 Support</h5>
        </div>
      </div>
    </div>
  </div>
  {/* Featured End */}
  {/* Categories Start */}
  <div className="container-fluid pt-5">
    <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span className="bg-secondary pr-3">Categories</span></h2>
    <div className="row px-xl-5 pb-3">
      <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
        <a className="text-decoration-none" href>
          <div className="cat-item d-flex align-items-center mb-4">
            <div className="overflow-hidden" style={{width: 100, height: 100}}>
              <img className="img-fluid" src="img/cat-1.jpg" alt />
            </div>
            <div className="flex-fill pl-3">
              <h6>Female Cloths</h6>
              <small className="text-body">100 Products</small>
            </div>
          </div>
        </a>
      </div>


      <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
        <a className="text-decoration-none" href>
          <div className="cat-item img-zoom d-flex align-items-center mb-4">
            <div className="overflow-hidden" style={{width: 100, height: 100}}>
              <img className="img-fluid" src="img/cat-2.jpg" alt />
            </div>
            <div className="flex-fill pl-3">
              <h6>Camera</h6>
              <small className="text-body">100 Products</small>
            </div>
          </div>
        </a>
      </div>

      <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
        <a className="text-decoration-none" href>
          <div className="cat-item img-zoom d-flex align-items-center mb-4">
            <div className="overflow-hidden" style={{width: 100, height: 100}}>
              <img className="img-fluid" src="img/cat-3.jpg" alt />
            </div>
            <div className="flex-fill pl-3">
              <h6>Shoes</h6>
              <small className="text-body">100 Products</small>
            </div>
          </div>
        </a>
      </div>

      <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
        <a className="text-decoration-none" href>
          <div className="cat-item img-zoom d-flex align-items-center mb-4">
            <div className="overflow-hidden" style={{width: 100, height: 100}}>
              <img className="img-fluid" src="img/cat-4.jpg" alt />
            </div>
            <div className="flex-fill pl-3">
              <h6>Cream</h6>
              <small className="text-body">100 Products</small>
            </div>
          </div>
        </a>
      </div>

      <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
        <a className="text-decoration-none" href>
          <div className="cat-item img-zoom d-flex align-items-center mb-4">
            <div className="overflow-hidden" style={{width: 100, height: 100}}>
              <img className="img-fluid" src="img/product-2.jpg" alt />
            </div>
            <div className="flex-fill pl-3">
              <h6>Men Clothes</h6>
              <small className="text-body">100 Products</small>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>



  {/* Categories End */}
  {/* Products Start */}
  <div className="container-fluid pt-5 pb-3">
    <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span className="bg-secondary pr-3">Men Clothes</span></h2>
    <div className="row px-xl-5">
      <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
        <div className="product-item bg-light mb-4">
          <div className="product-img position-relative overflow-hidden" style={{width: 295, height: 400}}>
            <img className="img-fluid w-100" src="https://img.freepik.com/free-photo/portrait-stylish-man-eating-ice-cream_23-2148194047.jpg?size=626&ext=jpg&ga=GA1.1.583727593.1658979819&semt=sph" alt />
          </div>
          <div className="text-center py-4">
            <a className="h6 text-decoration-none text-truncate" href>Printed Shirt</a>
            <div className="d-flex align-items-center justify-content-center mt-2">
              <h5>$399.00</h5><h6 className="text-muted ml-2"><del>$599.00</del></h6>
            </div>
            <div className="d-flex align-items-center justify-content-center mb-1">
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small>(99)</small>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
        <div className="product-item bg-light mb-4">
          <div className="product-img  position-relative overflow-hidden" style={{width: 295, height: 400}}>
            <img className="img-fluid w-100" src="https://img.freepik.com/free-photo/basic-white-shirt-men-s-fashion-apparel-studio-shoot_53876-105424.jpg?size=626&ext=jpg&ga=GA1.2.583727593.1658979819&semt=sph" alt />
          </div>
          <div className="text-center py-4">
            <a className="h6 text-decoration-none text-truncate" href>Plan Shirt</a>
            <div className="d-flex align-items-center justify-content-center mt-2">
              <h5>$599.00</h5><h6 className="text-muted ml-2"><del>$999.00</del></h6>
            </div>
            <div className="d-flex align-items-center justify-content-center mb-1">
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star-half-alt text-primary mr-1" />
              <small>(90)</small>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
        <div className="product-item bg-light mb-4">
          <div className="product-img position-relative overflow-hidden">
            <img className="img-fluid w-100" src="https://img.freepik.com/free-photo/shirt-confident-retro-man-happiness_1187-6055.jpg?size=626&ext=jpg&ga=GA1.2.583727593.1658979819&semt=sph"  alt />
          </div>
          <div className="text-center py-4">
            <a className="h6 text-decoration-none text-truncate" href>Cheks Shirt</a>
            <div className="d-flex align-items-center justify-content-center mt-2">
              <h5>$399.00</h5><h6 className="text-muted ml-2"><del>$899.00</del></h6>
            </div>
            <div className="d-flex align-items-center justify-content-center mb-1">
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star-half-alt text-primary mr-1" />
              <small className="far fa-star text-primary mr-1" />
              <small>(89)</small>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
        <div className="product-item bg-light mb-4">
          <div className="product-img position-relative overflow-hidden">
            <img className="img-fluid w-100" src="https://img.freepik.com/free-photo/portrait-handsome-smiling-stylish-young-man-model-dressed-red-checkered-shirt-fashion-man-posing_158538-4914.jpg?size=626&ext=jpg&ga=GA1.1.583727593.1658979819&semt=sph" alt />
           
          </div>
          <div className="text-center py-4">
            <a className="h6 text-decoration-none text-truncate" href>Cheks Shirt</a>
            <div className="d-flex align-items-center justify-content-center mt-2">
              <h5>$499.00</h5><h6 className="text-muted ml-2"><del>$799.00</del></h6>
            </div>
            <div className="d-flex align-items-center justify-content-center mb-1">
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="far fa-star text-primary mr-1" />
              <small className="far fa-star text-primary mr-1" />
              <small>(89)</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Products End */}


  <div className="container-fluid pt-5 pb-3">
    <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span className="bg-secondary pr-3">Women Clothes</span></h2>
    <div className="row px-xl-5">
      <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
        <div className="product-item bg-light mb-4">
          <div className="product-img position-relative overflow-hidden" style={{width: 295, height: 400}}>
            <img className="img-fluid w-100" src="https://img.freepik.com/premium-photo/women-enzyme-washed-denim-brallete-top_920356-4344.jpg?size=626&ext=jpg&ga=GA1.1.583727593.1658979819&semt=ais" alt />
          </div>
          <div className="text-center py-4">
            <a className="h6 text-decoration-none text-truncate" href>Tops</a>
            <div className="d-flex align-items-center justify-content-center mt-2">
              <h5>$499.00</h5><h6 className="text-muted ml-2"><del>$699.00</del></h6>
            </div>
            <div className="d-flex align-items-center justify-content-center mb-1">
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small>(99)</small>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
        <div className="product-item bg-light mb-4">
          <div className="product-img  position-relative overflow-hidden" style={{width: 295, height: 400}}>
            <img className="img-fluid w-100" src="https://img.freepik.com/free-photo/young-lady-designed-t-shirt-posing-with-long-hair-white_140725-14734.jpg?size=626&ext=jpg&ga=GA1.1.583727593.1658979819&semt=ais" alt />
          </div>
          <div className="text-center py-4">
            <a className="h6 text-decoration-none text-truncate" href>Women Printed Top</a>
            <div className="d-flex align-items-center justify-content-center mt-2">
              <h5>$200.00</h5><h6 className="text-muted ml-2"><del>$250.00</del></h6>
            </div>
            <div className="d-flex align-items-center justify-content-center mb-1">
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star-half-alt text-primary mr-1" />
              <small>(90)</small>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
        <div className="product-item bg-light mb-4">
          <div className="product-img position-relative overflow-hidden" style={{width: 295, height: 400}}>
            <img className="img-fluid w-100" src="https://img.freepik.com/free-photo/fashion-woman-with-clothes_1203-8300.jpg?size=626&ext=jpg&ga=GA1.1.583727593.1658979819&semt=ais"  alt />
          </div>
          <div className="text-center py-4">
            <a className="h6 text-decoration-none text-truncate" href>Casual Shirt</a>
            <div className="d-flex align-items-center justify-content-center mt-2">
              <h5>$399.00</h5><h6 className="text-muted ml-2"><del>$499.00</del></h6>
            </div>
            <div className="d-flex align-items-center justify-content-center mb-1">
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star-half-alt text-primary mr-1" />
              <small className="far fa-star text-primary mr-1" />
              <small>(89)</small>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
        <div className="product-item bg-light mb-4">
          <div className="product-img position-relative overflow-hidden" style={{width: 295, height: 400}}>
            <img className="img-fluid w-100" src="https://img.freepik.com/premium-photo/happy-girl-with-checked-plaid-pattern_757538-869.jpg?size=626&ext=jpg&ga=GA1.2.583727593.1658979819&semt=ais" alt />
           
          </div>
          <div className="text-center py-4">
            <a className="h6 text-decoration-none text-truncate" href>Printed Shirt</a>
            <div className="d-flex align-items-center justify-content-center mt-2">
              <h5>$799.00</h5><h6 className="text-muted ml-2"><del>$999.00</del></h6>
            </div>
            <div className="d-flex align-items-center justify-content-center mb-1">
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="far fa-star text-primary mr-1" />
              <small className="far fa-star text-primary mr-1" />
              <small>(89)</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Products End */}


  <div className="container-fluid pt-5 pb-3">
    <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span className="bg-secondary pr-3">Camera</span></h2>
    <div className="row px-xl-5">
      <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
        <div className="product-item bg-light mb-4">
          <div className="product-img position-relative overflow-hidden" style={{width: 295, height: 400}}>
            <img className="img-fluid w-100" src="https://img.freepik.com/free-photo/hand-holding-photo-camera_23-2150630632.jpg?size=626&ext=jpg&ga=GA1.1.583727593.1658979819&semt=sph" alt />
          </div>
          <div className="text-center py-4">
            <a className="h6 text-decoration-none text-truncate" href>Cannon</a>
            <div className="d-flex align-items-center justify-content-center mt-2">
              <h5>$30999.00</h5><h6 className="text-muted ml-2"><del>$39999.00</del></h6>
            </div>
            <div className="d-flex align-items-center justify-content-center mb-1">
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small>(99)</small>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
        <div className="product-item bg-light mb-4">
          <div className="product-img  position-relative overflow-hidden" style={{width: 295, height: 400}}>
            <img className="img-fluid w-100" style={{width: 295, height: 400}} src="https://img.freepik.com/free-vector/realistic-digital-photo-camera-tripod_1284-13126.jpg?size=626&ext=jpg&ga=GA1.1.583727593.1658979819&semt=ais" alt />
          </div>
          <div className="text-center py-4">
            <a className="h6 text-decoration-none text-truncate" href>Nikon</a>
            <div className="d-flex align-items-center justify-content-center mt-2">
              <h5>$25000.00</h5><h6 className="text-muted ml-2"><del>$25999.00</del></h6>
            </div>
            <div className="d-flex align-items-center justify-content-center mb-1">
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star-half-alt text-primary mr-1" />
              <small>(90)</small>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
        <div className="product-item bg-light mb-4">
          <div className="product-img position-relative overflow-hidden" style={{width: 295, height: 400}}>
            <img className="img-fluid w-100" src="https://img.freepik.com/free-photo/professional-object-glass-camera_144627-1721.jpg?size=626&ext=jpg&ga=GA1.1.583727593.1658979819&semt=ais"  alt />
          </div>
          <div className="text-center py-4">
            <a className="h6 text-decoration-none text-truncate" href>Lense</a>
            <div className="d-flex align-items-center justify-content-center mt-2">
              <h5>$50000.00</h5><h6 className="text-muted ml-2"><del>$59999.00</del></h6>
            </div>
            <div className="d-flex align-items-center justify-content-center mb-1">
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star-half-alt text-primary mr-1" />
              <small className="far fa-star text-primary mr-1" />
              <small>(89)</small>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
        <div className="product-item bg-light mb-4">
          <div className="product-img position-relative overflow-hidden" style={{width: 295, height: 400}}>
            <img className="img-fluid w-100" style={{width: 295, height: 400}} src="https://img.freepik.com/free-vector/set-security-cameras-pillar-realistic-composition-blue-sky-with-clouds_1284-31840.jpg?size=626&ext=jpg&ga=GA1.2.583727593.1658979819&semt=ais" alt />
           
          </div>
          <div className="text-center py-4">
            <a className="h6 text-decoration-none text-truncate" href>CCTV</a>
            <div className="d-flex align-items-center justify-content-center mt-2">
              <h5>$3999.00</h5><h6 className="text-muted ml-2"><del>$5999.00</del></h6>
            </div>
            <div className="d-flex align-items-center justify-content-center mb-1">
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="far fa-star text-primary mr-1" />
              <small className="far fa-star text-primary mr-1" />
              <small>(89)</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>



{/* Shoes */}

<div className="container-fluid pt-5 pb-3">
    <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span className="bg-secondary pr-3">Shoes</span></h2>
    <div className="row px-xl-5">
      <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
        <div className="product-item bg-light mb-4">
          <div className="product-img position-relative overflow-hidden" style={{width: 295, height: 300}}>
            <img className="img-fluid w-100" style={{width: 295, height: 300}} src="https://img.freepik.com/premium-photo/new-unbranded-running-shoe-sneaker-trainer-isolated-white-background_116317-16563.jpg?size=626&ext=jpg&ga=GA1.1.583727593.1658979819&semt=sph" alt />
          </div>
          <div className="text-center py-4">
            <a className="h6 text-decoration-none text-truncate" href>Canvas</a>
            <div className="d-flex align-items-center justify-content-center mt-2">
              <h5>$899.00</h5><h6 className="text-muted ml-2"><del>$999.00</del></h6>
            </div>
            <div className="d-flex align-items-center justify-content-center mb-1">
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small>(99)</small>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
        <div className="product-item bg-light mb-4">
          <div className="product-img  position-relative overflow-hidden" style={{width: 295, height: 300}}>
            <img className="img-fluid w-100" style={{width: 295, height: 300}} src="https://img.freepik.com/free-photo/pair-trainers_144627-3798.jpg?size=626&ext=jpg&ga=GA1.1.583727593.1658979819&semt=ais" alt />
          </div>
          <div className="text-center py-4">
            <a className="h6 text-decoration-none text-truncate" href>Sports</a>
            <div className="d-flex align-items-center justify-content-center mt-2">
              <h5>$399.00</h5><h6 className="text-muted ml-2"><del>$499.00</del></h6>
            </div>
            <div className="d-flex align-items-center justify-content-center mb-1">
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star-half-alt text-primary mr-1" />
              <small>(90)</small>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
        <div className="product-item bg-light mb-4">
          <div className="product-img position-relative overflow-hidden" style={{width: 295, height: 300}}>
            <img className="img-fluid w-100" style={{width: 295, height: 300}} src="https://img.freepik.com/free-photo/brown-leather-shoes_1203-8175.jpg?size=626&ext=jpg&ga=GA1.1.583727593.1658979819&semt=ais"  alt />
          </div>
          <div className="text-center py-4">
            <a className="h6 text-decoration-none text-truncate" href>HOL-125E Genuine Leather</a>
            <div className="d-flex align-items-center justify-content-center mt-2">
              <h5>$999.00</h5><h6 className="text-muted ml-2"><del>$1299.00</del></h6>
            </div>
            <div className="d-flex align-items-center justify-content-center mb-1">
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star-half-alt text-primary mr-1" />
              <small className="far fa-star text-primary mr-1" />
              <small>(89)</small>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
        <div className="product-item bg-light mb-4">
          <div className="product-img position-relative overflow-hidden" style={{width: 295, height: 300}}>
            <img className="img-fluid w-100" style={{width: 295, height: 300}} src="https://img.freepik.com/free-photo/pair-brown-shoes-with-black-leather-sole-word-bottom_123827-23446.jpg?size=626&ext=jpg&ga=GA1.1.583727593.1658979819&semt=ais" alt />
           
          </div>
          <div className="text-center py-4">
            <a className="h6 text-decoration-none text-truncate" href>Lace Up For Men</a>
            <div className="d-flex align-items-center justify-content-center mt-2">
              <h5>$1599.00</h5><h6 className="text-muted ml-2"><del>$1699.00</del></h6>
            </div>
            <div className="d-flex align-items-center justify-content-center mb-1">
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="far fa-star text-primary mr-1" />
              <small className="far fa-star text-primary mr-1" />
              <small>(89)</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


{/* Cream */}

<div className="container-fluid pt-5 pb-3">
    <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span className="bg-secondary pr-3">Cream</span></h2>
    <div className="row px-xl-5">
      <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
        <div className="product-item bg-light mb-4">
          <div className="product-img position-relative overflow-hidden" style={{width: 295, height: 400}}>
            <img className="img-fluid w-100" style={{width: 295, height: 400}} src="https://img.freepik.com/free-vector/cosmetics-advertising-skin-softening-moisturizing-tender-cream-tubes-realistic-composition-with-lotus-flower-bamboo-stalks_1284-29030.jpg?size=626&ext=jpg&ga=GA1.1.583727593.1658979819&semt=ais" alt />
          </div>
          <div className="text-center py-4">
            <a className="h6 text-decoration-none text-truncate" href>Tender Face Cream </a>
            <div className="d-flex align-items-center justify-content-center mt-2">
              <h5>$899.00</h5><h6 className="text-muted ml-2"><del>$999.00</del></h6>
            </div>
            <div className="d-flex align-items-center justify-content-center mb-1">
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small>(99)</small>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
        <div className="product-item bg-light mb-4">
          <div className="product-img  position-relative overflow-hidden" style={{width: 295, height: 400}}>
            <img className="img-fluid w-100" style={{width: 295, height: 400}} src="https://img.freepik.com/free-vector/cosmetics-advertising-skin-softening-cream-jar-pot-container-realistic-composition-with-lotus-flower-bamboo-stalks_1284-29031.jpg?size=626&ext=jpg&ga=GA1.1.583727593.1658979819&semt=ais" alt />
          </div>
          <div className="text-center py-4">
            <a className="h6 text-decoration-none text-truncate" href>Face Cream</a>
            <div className="d-flex align-items-center justify-content-center mt-2">
              <h5>$699.00</h5><h6 className="text-muted ml-2"><del>$799.00</del></h6>
            </div>
            <div className="d-flex align-items-center justify-content-center mb-1">
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star-half-alt text-primary mr-1" />
              <small>(90)</small>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
        <div className="product-item bg-light mb-4">
          <div className="product-img position-relative overflow-hidden" style={{width: 295, height: 400}}>
            <img className="img-fluid w-100" style={{width: 295, height: 400}} src="https://img.freepik.com/free-vector/realistic-cosmetic-product-template_1284-36562.jpg?size=626&ext=jpg&ga=GA1.1.583727593.1658979819&semt=ais"  alt />
          </div>
          <div className="text-center py-4">
            <a className="h6 text-decoration-none text-truncate" href>Foundetion Cream</a>
            <div className="d-flex align-items-center justify-content-center mt-2">
              <h5>$399.00</h5><h6 className="text-muted ml-2"><del>$499.00</del></h6>
            </div>
            <div className="d-flex align-items-center justify-content-center mb-1">
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star-half-alt text-primary mr-1" />
              <small className="far fa-star text-primary mr-1" />
              <small>(89)</small>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
        <div className="product-item bg-light mb-4">
          <div className="product-img position-relative overflow-hidden" style={{width: 295, height: 400}}>
            <img className="img-fluid w-100" style={{width: 295, height: 400}} src="https://img.freepik.com/free-vector/eco-hand-wash-gel-with-antibacterial-effect-container-surrounded-by-bubbles-flowing-water_1268-15511.jpg?size=626&ext=jpg&ga=GA1.2.583727593.1658979819&semt=ais" alt />
           
          </div>
          <div className="text-center py-4">
            <a className="h6 text-decoration-none text-truncate" href>Hand Wash</a>
            <div className="d-flex align-items-center justify-content-center mt-2">
              <h5>$799.00</h5><h6 className="text-muted ml-2"><del>$999.00</del></h6>
            </div>
            <div className="d-flex align-items-center justify-content-center mb-1">
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="far fa-star text-primary mr-1" />
              <small className="far fa-star text-primary mr-1" />
              <small>(89)</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


  {/* Offer Start */}
  <div className="container-fluid pt-5 pb-3">
    <div className="row px-xl-5">
      <div className="col-md-6">
        <div className="product-offer mb-30" style={{height: 300}}>
          <img className="img-fluid" src="img/offer-1.jpg" alt />
          <div className="offer-text">
            <h6 className="text-white text-uppercase">Save 20%</h6>
            <h3 className="text-white mb-3">Special Offer</h3>
            <a href className="btn btn-primary">Shop Now</a>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="product-offer mb-30" style={{height: 300}}>
          <img className="img-fluid" src="img/offer-2.jpg" alt />
          <div className="offer-text">
            <h6 className="text-white text-uppercase">Save 20%</h6>
            <h3 className="text-white mb-3">Special Offer</h3>
            <a href className="btn btn-primary">Shop Now</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Offer End */}

  {/* Vendor Start */}
  <div className="container-fluid py-5">
    <div className="row px-xl-5">
      <div className="col">
        <div className="owl-carousel vendor-carousel">
          <div className="bg-light p-4">
            <img src="img/vendor-1.jpg" alt />
          </div>
          <div className="bg-light p-4">
            <img src="img/vendor-2.jpg" alt />
          </div>
          <div className="bg-light p-4">
            <img src="img/vendor-3.jpg" alt />
          </div>
          <div className="bg-light p-4">
            <img src="img/vendor-4.jpg" alt />
          </div>
          <div className="bg-light p-4">
            <img src="img/vendor-5.jpg" alt />
          </div>
          <div className="bg-light p-4">
            <img src="img/vendor-6.jpg" alt />
          </div>
          <div className="bg-light p-4">
            <img src="img/vendor-7.jpg" alt />
          </div>
          <div className="bg-light p-4">
            <img src="img/vendor-8.jpg" alt />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Vendor End */}</div>

  )
}

export default Index