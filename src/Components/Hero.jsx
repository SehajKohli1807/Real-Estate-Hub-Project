import {motion} from 'framer-motion'
export default function Hero() {
  return (
    <section className="hero-main">
      <div className="hero-container">
        <div className="hero-left">
          {/* <div className="cur"><h1>Welcome</h1></div>
        <br></br> */}
          <h1>
            {" "}
            Discover Most <br></br> Suitable property
          </h1>
          <br></br>
          <div className="info">
            <span>
              <p>Find your dream place to live!</p>
            </span>

            <span>
              <p>We will help out find your home without any difficulty !</p>
            </span>
          </div>
          <br></br>
          <div className="searchbar">
            <input type="text" placeholder="Search location"></input>
            <button className="searchbtn">Search</button>
          </div>
        </div>
        <div className="hero-right">
          <img src="./images/hero.jpg" alt="img"></img>
        </div>
      </div>
    </section>
  );
}
