import React from 'react'

const Footer = () => {
  return (
    <div className="container-fluid">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-1 my-1 border-top border-dark">
            <div className="col-md-4 d-flex align-items-center">
                <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                    <img
                        src="/images/logo.jpg"
                        width="30"
                        height="30"
                        className="bi"
                        alt="React Logo"
                    />
                </a>
                <span className="mb-3 mb-md-0 text-muted text-center">© 2022 Cleaners, Inc</span>
            </div>
            <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                <li className="ms-3">
                    <a className="text-muted" href="#">
                        <img
                            src="/images/twitter.png"
                            width="24"
                            height="24"
                            className="bi"
                            alt="twitter logo" 
                        />
                    </a>
                </li>
                <li className="ms-3">
                    <a className="text-muted" href="#">
                        <img
                            src="/images/facebook.jpg"
                            width="24"
                            height="24"
                            className="bi"
                            alt="facebook logo" 
                        />
                    </a>
                </li>
                <li className="ms-3">
                    <a className="text-muted" href="#">
                        <img
                            src="/images/instagram.jpg"
                            width="24"
                            height="24"
                            className="bi"
                            alt="instagram logo" 
                        />
                        </a>
                </li>
            </ul>
        </footer>
    </div>
  )
}
export default Footer;