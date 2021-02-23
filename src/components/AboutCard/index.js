function AboutCard() {
  return (

      <div className="container">

          <div className="row" id="row-top">
              <div className="col-md-12">
                  <h1>HI, I'M JESSICA</h1>
                  <p>A FULL-STACK DEVELOPER.</p>
              </div>
          </div>

          <div className="row">
              <div className="col-sm-4" id="index-card">
                  <div className="card" >
                      <img id="image" src='https://i.postimg.cc/RhK9YWj3/me.jpg' className="card-img-top"
                          alt='Me' />
                  </div>
              </div>

              <div className="col-sm-4">
        <p className="intro">An eager learner who is seeking a new challenging career after a few years of being in healthcare. I am currently a Full-Stack Web Developer student through the University of Washington Bootcamps. After graduating, I aim to gain job experience in the web development while completing my Bachelor's degree.</p>
              </div>
              <div className="col-sm-2"></div>
          </div>

      </div>
  )
}

export default AboutCard;