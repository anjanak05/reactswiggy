import React from 'react'
import logo from "../assets/logo.svg"

const Navbar = (props) => {

    let x =[
        {"iconeName":"person_outline",
          "textName":"Sign In" },
          {"iconeName":"shopping_bag",
          "textName":"Cart" },
          {"iconeName":"support",
          "textName":"Help" },
          {"iconeName":"search",
          "textName":"Search" },
    ]
  return (
    <div>
      <section className="navbar">
        <div className="container">
            <img className="logo" src={logo} />
            <div className="location">
                <span className="city"> {props.city}</span>
                <span className="state">{props.state}, {props.country}</span>
            </div>
            <div className="navbar-options">
                {x.map((elem) =>(
                    <div className="navbar-option">
                    <span className="material-icons"> {elem.iconeName}</span> {elem.textName}
                </div>
                ))}
                
                
            </div>
        
        </div>
    </section>
    </div>
  )
}

export default Navbar