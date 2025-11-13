import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className='container text-center bg-primary'>
        <h1>Cars Project</h1>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <NavLink className="navbar-brand" to='/'>Home</NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <NavLink className="nav-link active" aria-current="page" to='/gallery'>Gallery</NavLink>
                                <NavLink className="nav-link" to='/c'>Contuct Us</NavLink>
                                <NavLink className="nav-link" to='/ca'>Cart</NavLink>
                                <NavLink className="nav-link disabled" aria-disabled="true">Register</NavLink>
                            </div>
                        </div>
                    </div>
                </nav>

    </header>
  )
}

export default Header