const MainSection = (e) => {
    return ( 
        <section class="section dashboard">
        <div class="row">
          {/* Left side columns */}
          <div class="col-lg-8">
            <div class="row">
  
              
              {/* <!-- Temperature Card --> */}
              <div class="col-xxl-4 col-md-6">
                <div class="card info-card temperature-card">
  
                  <div class="filter">
                    <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
                    <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                      <li class="dropdown-header text-start">
                        <h6>Filter</h6>
                      </li>
  
                      <li><a class="dropdown-item" href="#">Today</a></li>
                      <li><a class="dropdown-item" href="#">This Month</a></li>
                      <li><a class="dropdown-item" href="#">This Year</a></li>
                    </ul>
                  </div>
  
                  <div class="card-body">
                    <h5 class="card-title">Temperature <span>| Today</span></h5>
  
                    <div class="d-flex align-items-center">
                      <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                        <i class="bi bi-thermometer-snow"></i>
                      </div>
                      <div class="ps-3">
                        <h6>145 &#176;C</h6>
                        <span class="text-success small pt-1 fw-bold">12%</span> <span class="text-muted small pt-2 ps-1">increase</span>
  
                      </div>
                    </div>
                  </div>
  
                </div>
              </div>
              {/* <!-- End Temperature Card --> */}
  
              
              {/* <!-- Water Card --> */}
              <div class="col-xxl-4 col-md-6">
                <div class="card info-card water-card">
  
                  <div class="filter">
                    <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
                    <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                      <li class="dropdown-header text-start">
                        <h6>Filter</h6>
                      </li>
  
                      <li><a class="dropdown-item" href="#">Today</a></li>
                      <li><a class="dropdown-item" href="#">This Month</a></li>
                      <li><a class="dropdown-item" href="#">This Year</a></li>
                    </ul>
                  </div>
  
                  <div class="card-body">
                    <h5 class="card-title">Water Tank <span>| Today</span></h5>
  
                    <div class="d-flex align-items-center">
                      <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                        <i class="bi bi-water"></i>
                      </div>
                      <div class="ps-3">
                        <h6>64%</h6>
                        <span class="text-success small pt-1 fw-bold">8%</span> <span class="text-muted small pt-2 ps-1">increase</span>
  
                      </div>
                    </div>
                  </div>
  
                </div>
              </div>
              {/* <!-- End Water Card --> */}
  
              
              {/* <!-- Bulbs and Fans Card --> */}
              <div class="col-xxl-4 col-md-6">
  
                <div class="card info-card bulb-card">
  
                  <div class="filter">
                    <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
                    <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                      <li class="dropdown-header text-start">
                        <h6>Filter</h6>
                      </li>
  
                      <li><a class="dropdown-item" href="#">Today</a></li>
                      <li><a class="dropdown-item" href="#">This Month</a></li>
                      <li><a class="dropdown-item" href="#">This Year</a></li>
                    </ul>
                  </div>
  
                  <div class="card-body">
                    <h5 class="card-title">Bulbs & Fans <span>| Today</span></h5>
  
                    <div class="d-flex align-items-center">
                      <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                        <i class="bi bi-lightbulb"></i>
                      </div>
                      <div class="ps-3">
                        <h6>8 ON</h6>
                        <span class="text-danger small pt-1 fw-bold">3</span> <span class="text-muted small pt-2 ps-1"> OFF </span>
  
                      </div>
                    </div>
  
                  </div>
                </div>
  
              </div>
              {/* <!-- End Bulbs and Fans Card --> */}
  
              {/* <!-- Motion Sensor Card --> */}
              <div class="col-xxl-4 col-md-6">
  
                <div class="card info-card motion-card">
  
                  <div class="filter">
                    <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
                    <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                      <li class="dropdown-header text-start">
                        <h6>Filter</h6>
                      </li>
  
                      <li><a class="dropdown-item" href="#">Today</a></li>
                      <li><a class="dropdown-item" href="#">This Month</a></li>
                      <li><a class="dropdown-item" href="#">This Year</a></li>
                    </ul>
                  </div>
  
                  <div class="card-body">
                    <h5 class="card-title">Motion <span>| Current</span></h5>
  
                    <div class="d-flex align-items-center">
                      <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                        <i class="text-danger bi bi-person-bounding-box"></i>
                      </div>
                      <div class="ps-3">
                        <h6>4 Alert</h6>
                        <span class="text-danger small pt-1 fw-bold">12 </span> <span class="text-muted small pt-2 ps-1"> Suspect </span>
  
                      </div>
                    </div>
  
                  </div>
                </div>
  
              </div>
              {/* <!-- End Motion Sensor Card --> */}
  
  
              {/* <!-- Document Card --> */}
              <div class="col-xxl-4 col-md-6">
  
                <div class="card info-card document-card">
  
                  <div class="filter">
                    <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
                    <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                      <li class="dropdown-header text-start">
                        <h6>Filter</h6>
                      </li>
  
                      <li><a class="dropdown-item" href="#">Today</a></li>
                      <li><a class="dropdown-item" href="#">This Month</a></li>
                      <li><a class="dropdown-item" href="#">This Year</a></li>
                    </ul>
                  </div>
  
                  <div class="card-body">
                    <h5 class="card-title">Documents<span>| Family</span></h5>
  
                    <div class="d-flex align-items-center">
                      <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                        <i class="text-info bi bi-file-earmark-text"></i>
                      </div>
                      <div class="ps-3">
                        <h6>108</h6>
                        <span class="text-danger small pt-1 fw-bold">12</span> <span class="text-muted small pt-2 ps-1"> deleted  </span>
  
                      </div>
                    </div>
  
                  </div>
                </div>
  
              </div>
              {/* <!-- End Document Card --> */}
  
  
              {/* <!-- Gallery Card --> */}
              <div class="col-xxl-4 col-md-6">
  
                <div class="card info-card gallery-card">
  
                  <div class="filter">
                    <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
                    <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                      <li class="dropdown-header text-start">
                        <h6>Filter</h6>
                      </li>
  
                      <li><a class="dropdown-item" href="#">Today</a></li>
                      <li><a class="dropdown-item" href="#">This Month</a></li>
                      <li><a class="dropdown-item" href="#">This Year</a></li>
                    </ul>
                  </div>
  
                  <div class="card-body">
                    <h5 class="card-title">Gallery<span>| Family</span></h5>
  
                    <div class="d-flex align-items-center">
                      <div class="card-icon rounded-circle d-flex align-items-center justify-content-center">
                        <i class="bi bi-images"></i>
                      </div>
                      <div class="ps-3">
                        <h6>1244</h6>
                        <span class="text-success small pt-1 fw-bold">25</span> <span class="text-muted small pt-2 ps-1">added</span>
  
                      </div>
                    </div>
  
                  </div>
                </div>
  
              </div>
              {/* <!-- End Gallery Card --> */}
  
  
              
              {/* <!-- Reports --> */}
              <div class="col-12">
                <div class="card">
  
                  <div class="filter">
                    <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
                    <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                      <li class="dropdown-header text-start">
                        <h6>Filter</h6>
                      </li>
  
                      <li><a class="dropdown-item" href="#">Today</a></li>
                      <li><a class="dropdown-item" href="#">This Month</a></li>
                      <li><a class="dropdown-item" href="#">This Year</a></li>
                    </ul>
                  </div>
  
                  <div class="card-body">
                    <h5 class="card-title">Reports <span>/Today</span></h5>
  
                    
                    {/* <!-- Line Chart --> */}
                    <div id="reportsChart"></div>
  
                  
                    
                    {/* <!-- End Line Chart --> */}
  
                  </div>
  
                </div>
              </div>
              {/* <!-- End Reports --> */}
  
              
  
            </div>
          </div>
          {/* <!-- End Left side columns --> */}
  
          
          {/* <!-- Right side columns --> */}
          <div class="col-lg-4">
  
            
            {/* <!-- Activity Log --> */}
            <div class="card">
              <div class="filter">
                <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
                <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                  <li class="dropdown-header text-start">
                    <h6>Filter</h6>
                  </li>
  
                  <li><a class="dropdown-item" href="#">Today</a></li>
                  <li><a class="dropdown-item" href="#">This Month</a></li>
                  <li><a class="dropdown-item" href="#">This Year</a></li>
                </ul>
              </div>
  
              <div class="card-body">
                <h5 class="card-title">Activity Log <span>| Today</span></h5>
  
                <div class="activity">
  
                  <div class="activity-item d-flex">
                    <div class="activite-label">32 min</div>
                    <i class='bi bi-circle-fill activity-badge text-success align-self-start'></i>
                    <div class="activity-content">
                      Quia quae rerum <a href="#" class="fw-bold text-dark">explicabo officiis</a> beatae
                    </div>
                  </div>
                  {/* <!-- End activity item--> */}
  
                  <div class="activity-item d-flex">
                    <div class="activite-label">56 min</div>
                    <i class='bi bi-circle-fill activity-badge text-danger align-self-start'></i>
                    <div class="activity-content">
                      Voluptatem blanditiis blanditiis eveniet
                    </div>
                  </div>
                  {/* <!-- End activity item--> */}
  
                  <div class="activity-item d-flex">
                    <div class="activite-label">2 hrs</div>
                    <i class='bi bi-circle-fill activity-badge text-primary align-self-start'></i>
                    <div class="activity-content">
                      Voluptates corrupti molestias voluptatem
                    </div>
                  </div>
                  {/* <!-- End activity item--> */}
  
                  <div class="activity-item d-flex">
                    <div class="activite-label">1 day</div>
                    <i class='bi bi-circle-fill activity-badge text-info align-self-start'></i>
                    <div class="activity-content">
                      Tempore autem saepe <a href="#" class="fw-bold text-dark">occaecati voluptatem</a> tempore
                    </div>
                  </div>
                  {/* <!-- End activity item--> */}
  
                  <div class="activity-item d-flex">
                    <div class="activite-label">2 days</div>
                    <i class='bi bi-circle-fill activity-badge text-warning align-self-start'></i>
                    <div class="activity-content">
                      Est sit eum reiciendis exercitationem
                    </div>
                  </div>
                  {/* <!-- End activity item--> */}
  
                  <div class="activity-item d-flex">
                    <div class="activite-label">4 weeks</div>
                    <i class='bi bi-circle-fill activity-badge text-muted align-self-start'></i>
                    <div class="activity-content">
                      Dicta dolorem harum nulla eius. Ut quidem quidem sit quas
                    </div>
                  </div>
                  {/* <!-- End activity item--> */}
  
                </div>
  
              </div>
            </div>
            {/* <!-- End Recent Activity --> */}
  
            
            {/* <!-- Budget Report --> */}
            <div class="card">
              <div class="filter">
                <a class="icon" href="#" data-bs-toggle="dropdown"><i class="bi bi-three-dots"></i></a>
                <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                  <li class="dropdown-header text-start">
                    <h6>Filter</h6>
                  </li>
  
                  <li><a class="dropdown-item" href="#">Today</a></li>
                  <li><a class="dropdown-item" href="#">This Month</a></li>
                  <li><a class="dropdown-item" href="#">This Year</a></li>
                </ul>
              </div>
  
              <div class="card-body pb-0">
                <h5 class="card-title">Budget Report <span>| This Month</span></h5>
  
                <div id="budgetChart" style={{minHeight: "400px"}} class="echart"></div>
  
          
  
              </div>
            </div>
            {/* <!-- End Budget Report --> */}
  
            
  
          </div>
          {/* <!-- End Right side columns --> */}
  
        </div>
      </section>
     );
}
 
export default MainSection;