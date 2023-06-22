export default function Footer() {
  return (
    <section className="footer">
      <div className="footer-main">
        <div className="footer-left">
          <img src="./images/logo-w.png" alt="" width={100}></img>
        </div>
        <div className="footer-right">
          <div className="footer-info">
            <span className="footer-ch2 ch2">Information</span>
            <span className="footer-ch3">18 New York, FL 5477, USA</span>
          </div>

          <div className="footer-menu">
            <ul>Property</ul>
            <ul>Service</ul>
            <ul>Product</ul>
            <ul>About Us</ul>
          </div>
        </div>
      </div>
      
    </section>
  );
}
