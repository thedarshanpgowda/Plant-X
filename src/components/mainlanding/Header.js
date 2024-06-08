import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

export default function Header(props) {
  const data = [
    {
      name: props.location.pathname === "/about" ? "About" : props.location.pathname === "/analysis" ? "Analysis" : props.location.pathname === "/history" ? "History" : "",
      path: props.location.pathname
    }
  ]
  return (
    <div className="headerContainer">
      <div className="header">
        <Link to={`/`}>{`${"Home >"}`} </Link>
        {data.map((eachVal, i) => {
          const headerVal = " " + eachVal.name + (i === data.length - 1 ? " " : " >")
          // console.log(headerVal)
          return (
            <Link key={Math.random()} to={`${eachVal.path}`}>{headerVal}</Link>
          )
        })}
      </div>
     
    </div>
  )
}
