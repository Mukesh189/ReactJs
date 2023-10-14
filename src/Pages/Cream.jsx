import React from 'react'

function Cream() {
  return (
    <div>

    {/* Shop Start */}
    <div className="container-fluid">
      <div className="row  px-xl-5">
       
        <div className="col-lg-9 col-md-8">
          <div className="row pb-3">
            <div className="col-12 pb-1">
              <div className="d-flex align-items-center justify-content-between mb-4">
                <div>
                  <button className="btn btn-sm btn-light"><i className="fa fa-th-large" /></button>
                  <button className="btn btn-sm btn-light ml-2"><i className="fa fa-bars" /></button>
                </div>
                <div className="ml-2">
                  <div className="btn-group">
                    <button type="button" className="btn btn-sm btn-light dropdown-toggle" data-toggle="dropdown">Sorting</button>
                    <div className="dropdown-menu dropdown-menu-right">
                      <a className="dropdown-item" href="#">Latest</a>
                      <a className="dropdown-item" href="#">Popularity</a>
                      <a className="dropdown-item" href="#">Best Rating</a>
                    </div>
                  </div>
                  <div className="btn-group ml-2">
                    <button type="button" className="btn btn-sm btn-light dropdown-toggle" data-toggle="dropdown">Showing</button>
                    <div className="dropdown-menu dropdown-menu-right">
                      <a className="dropdown-item" href="#">10</a>
                      <a className="dropdown-item" href="#">20</a>
                      <a className="dropdown-item" href="#">30</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 pb-1">
              <div className="product-item bg-light mb-4">
                <div className="product-img position-relative overflow-hidden">
                  <img className="img-fluid w-100" src="img/product-1.jpg" alt />
              
                </div>
                <div className="text-center py-4">
                  <a className="h6 text-decoration-none text-truncate" href>Camera</a>
                  <div className="d-flex align-items-center justify-content-center mt-2">
                    <h5>$8999.00</h5><h6 className="text-muted ml-2"><del>$9999.00</del></h6>
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
            <div className="col-lg-4 col-md-6 col-sm-6 pb-1">
              <div className="product-item bg-light mb-4">
                <div className="product-img position-relative overflow-hidden">
                  <img className="img-fluid w-100" src="img/product-2.jpg" alt />
                 
                </div>
                <div className="text-center py-4">
                  <a className="h6 text-decoration-none text-truncate" href>T-shirt</a>
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
            <div className="col-lg-4 col-md-6 col-sm-6 pb-1">
              <div className="product-item bg-light mb-4">
                <div className="product-img position-relative overflow-hidden">
                  <img className="img-fluid w-100" src="img/product-3.jpg" alt />
               
                </div>
                <div className="text-center py-4">
                  <a className="h6 text-decoration-none text-truncate" href>Light Lamp</a>
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
            <div className="col-lg-4 col-md-6 col-sm-6 pb-1">
              <div className="product-item bg-light mb-4">
                <div className="product-img position-relative overflow-hidden">
                  <img className="img-fluid w-100" src="img/product-4.jpg" alt />
              
                </div>
                <div className="text-center py-4">
                  <a className="h6 text-decoration-none text-truncate" href>Shoes</a>
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
            <div className="col-lg-4 col-md-6 col-sm-6 pb-1">
              <div className="product-item bg-light mb-4">
                <div className="product-img position-relative overflow-hidden">
                  <img className="img-fluid w-100" src="img/product-5.jpg" alt />
                
                </div>
                <div className="text-center py-4">
                  <a className="h6 text-decoration-none text-truncate" href> Dron</a>
                  <div className="d-flex align-items-center justify-content-center mt-2">
                    <h5>$17999.00</h5><h6 className="text-muted ml-2"><del>$19999.00</del></h6>
                  </div>
                  <div className="d-flex align-items-center justify-content-center mb-1">
                    <small className="fa fa-star text-primary mr-1" />
                    <small className="fa fa-star text-primary mr-1" />
                    <small className="fa fa-star text-primary mr-1" />
                    <small className="fa fa-star text-primary mr-1" />
                    <small className="fa fa-star text-primary mr-1" />
                    <small>(79)</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 pb-1">
              <div className="product-item bg-light mb-4">
                <div className="product-img position-relative overflow-hidden">
                  <img className="img-fluid w-100" src="img/product-6.jpg" alt />
            
                </div>
                <div className="text-center py-4">
                  <a className="h6 text-decoration-none text-truncate" href>Watch</a>
                  <div className="d-flex align-items-center justify-content-center mt-2">
                    <h5>$1999.00</h5><h6 className="text-muted ml-2"><del>$2999.00</del></h6>
                  </div>
                  <div className="d-flex align-items-center justify-content-center mb-1">
                    <small className="fa fa-star text-primary mr-1" />
                    <small className="fa fa-star text-primary mr-1" />
                    <small className="fa fa-star text-primary mr-1" />
                    <small className="fa fa-star text-primary mr-1" />
                    <small className="fa fa-star-half-alt text-primary mr-1" />
                    <small>(95)</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 pb-1">
              <div className="product-item bg-light mb-4">
                <div className="product-img position-relative overflow-hidden">
                  <img className="img-fluid w-100" src="img/product-7.jpg" alt />
              
                </div>
                <div className="text-center py-4">
                  <a className="h6 text-decoration-none text-truncate" href>Women Top</a>
                  <div className="d-flex align-items-center justify-content-center mt-2">
                    <h5>$199.00</h5><h6 className="text-muted ml-2"><del>$399.00</del></h6>
                  </div>
                  <div className="d-flex align-items-center justify-content-center mb-1">
                    <small className="fa fa-star text-primary mr-1" />
                    <small className="fa fa-star text-primary mr-1" />
                    <small className="fa fa-star text-primary mr-1" />
                    <small className="fa fa-star-half-alt text-primary mr-1" />
                    <small className="far fa-star text-primary mr-1" />
                    <small>(199)</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 pb-1">
              <div className="product-item bg-light mb-4">
                <div className="product-img position-relative overflow-hidden">
                  <img className="img-fluid w-100" src="img/product-8.jpg" alt />
                
                </div>
                <div className="text-center py-4">
                  <a className="h6 text-decoration-none text-truncate" href>Cream</a>
                  <div className="d-flex align-items-center justify-content-center mt-2">
                    <h5>$299.00</h5><h6 className="text-muted ml-2"><del>$330.00</del></h6>
                  </div>
                  <div className="d-flex align-items-center justify-content-center mb-1">
                    <small className="fa fa-star text-primary mr-1" />
                    <small className="fa fa-star text-primary mr-1" />
                    <small className="fa fa-star text-primary mr-1" />
                    <small className="far fa-star text-primary mr-1" />
                    <small className="far fa-star text-primary mr-1" />
                    <small>(39)</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 pb-1">
              <div className="product-item bg-light mb-4">
                <div className="product-img position-relative overflow-hidden">
                  <img className="img-fluid w-100" src="img/product-9.jpg" alt />
             
                </div>
                <div className="text-center py-4">
                  <a className="h6 text-decoration-none text-truncate" href>Chair</a>
                  <div className="d-flex align-items-center justify-content-center mt-2">
                    <h5>$1799.00</h5><h6 className="text-muted ml-2"><del>$2500.00</del></h6>
                  </div>
                  <div className="d-flex align-items-center justify-content-center mb-1">
                    <small className="fa fa-star text-primary mr-1" />
                    <small className="fa fa-star text-primary mr-1" />
                    <small className="fa fa-star text-primary mr-1" />
                    <small className="far fa-star text-primary mr-1" />
                    <small className="far fa-star text-primary mr-1" />
                    <small>(39)</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <nav>
                <ul className="pagination justify-content-center">
                  <li className="page-item disabled"><a className="page-link" href="#">Previous</a></li>
                  <li className="page-item active"><a className="page-link" href="#">1</a></li>
                  <li className="page-item"><a className="page-link" href="#">2</a></li>
                  <li className="page-item"><a className="page-link" href="#">3</a></li>
                  <li className="page-item"><a className="page-link" href="#">Next</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        {/* Shop Product End */}
      </div>
    </div>
    {/* Shop End */}
  </div>
  )
}

export default Cream