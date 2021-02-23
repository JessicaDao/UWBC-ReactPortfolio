function WorkCard() {
    return (

<div className="port row row-cols-3">
  <div className="col">
    <div className="card">
      <a href="https://vantango.github.io/uw-project1-parksky-app/" target="_blank"><img src="https://i.postimg.cc/wjGftgfM/ps-400x400.png" className="card-img-top" alt="Park Sky"/></a>
      <div className="card-body">
        <p className="card-text">An app that allows a user to search for a national park for a given visitation date in the US.</p>
      </div>
    </div>
  </div>

  <div className="col">
    <div className="card">
      <img src="https://i.postimg.cc/9ff22m4f/cn-400x400.png" className="card-img-top" alt="Coffee Notes"/>
      <div className="card-body">
        <h5 className="card-title">Still in progress...</h5>
        <p className="card-text">An app that allows a user to journal through their coffee ventures. It is still in the works but I can proudly say it's a work created all on my own.</p>
      </div>
    </div>
  </div>

  <div className="col">
    <div className="card">
      <img src="https://earlsribpalace.com/wp-content/uploads/2019/07/coming-soon-store-placeholder-image.gif" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Beer and Brush</h5>

      </div>
    </div>
  </div>
</div>


    )
  }
  
  export default WorkCard;