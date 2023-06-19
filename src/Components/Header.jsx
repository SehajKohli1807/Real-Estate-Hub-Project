export default function Header() {
  return (
    <section className="navbar">
      <div className="head-container">
        <img
          className="hc-img"
          src="../images/logob.png"
          alt="logo"
          width={100}
        ></img>

        <div className="menu">
          <a href="">Residency</a>
          <a href="">Values</a>
          <a href="">Contact Us</a>
          <a href="">Get Started</a>
          <button className="contact">Contact</button>
        </div>
      </div>
    </section>
  );
}
