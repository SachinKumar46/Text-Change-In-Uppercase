import React, { useState } from 'react'

export default function Navbar(props) {
    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar- ${props.mode} bg-${props.mode}`}>
                <div className="container-fluid">
                    <a className={`navbar-brand text-${props.mode==="light"?"dark":"light"}`} href="/">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className={`nav-link active text-${props.mode==="light"?"dark":"light"}`} aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link  text-${props.mode==="light"?"dark":"light"}`} href="#">Link</a>
                            </li>
                            
                            <li className="nav-item">
                                <a className={`nav-link active text-${props.mode==="light"?"dark":"light"}`}>About</a>
                            </li>
                        </ul>
                        <form className="d-flex align-items-center" role="search">
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault" />
                            </div>
                            <button className="btn btn-outline-success btn-sm" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>

        </>
    )
}
