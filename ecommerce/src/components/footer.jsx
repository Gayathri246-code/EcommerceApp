import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">

      {/* BACK TO TOP */}
      <div
        className="footer-top"
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth"
          })
        }
      >
        Back to top
      </div>

      <div className="footer-content">
        <div>
          <h4>Get to Know Us</h4>
          <p>About Us</p>
          <p>Careers</p>
          <p>Press Releases</p>
          <p>Amazon Science</p>
        </div>

        <div>
          <h4>Connect with Us</h4>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p>
        </div>

        <div>
          <h4>Make Money with Us</h4>
          <p>Sell on Amazon</p>
          <p>Affiliate Program</p>
          <p>Advertise Your Products</p>
        </div>

        <div>
          <h4>Let Us Help You</h4>
          <p>Your Account</p>
          <p>Returns Centre</p>
          <p>100% Purchase Protection</p>
          <p>Help</p>
        </div>
      </div>

      <div className="footer-bottom">
        © 2026 Amazon Clone | Built with React
      </div>
    </footer>
  );
}

export default Footer;
