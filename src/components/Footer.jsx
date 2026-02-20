import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <Link to="/" className="footer__logo">
            <span className="footer__logo-orb" />
            <span>Green Orb Solutions Ltd</span>
          </Link>
          <p>Empowering UK homes with clean, affordable solar energy. Your roof becomes your power station.</p>
          <div className="footer__certs">
            <span className="cert-badge">MCS Certified</span>
            <span className="cert-badge">NICEIC Approved</span>
            <span className="cert-badge">Which? Trusted</span>
          </div>
        </div>

        <div className="footer__col">
          <h5>Company</h5>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer__col">
          <h5>Services</h5>
          <ul>
            <li><Link to="/services">Solar Panel Installation</Link></li>
            <li><Link to="/services">Battery Storage</Link></li>
            <li><Link to="/services">Solar Monitoring</Link></li>
            <li><Link to="/services">Maintenance & Aftercare</Link></li>
          </ul>
        </div>

        <div className="footer__col">
          <h5>Contact</h5>
          <ul>
            <li>
              <a href="tel:08001234567">0800 123 4567</a>
            </li>
            <li>
              <a href="mailto:info@greenorbsolutions.co.uk">info@greenorbsolutions.co.uk</a>
            </li>
            <li>Green Orb Solutions Ltd<br />14 Solar Way, London<br />EC1A 1BB, UK</li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>© {new Date().getFullYear()} Green Orb Solutions Ltd. All rights reserved.</p>
          <p>Registered in England & Wales · Company No. 12345678</p>
        </div>
      </div>
    </footer>
  )
}
