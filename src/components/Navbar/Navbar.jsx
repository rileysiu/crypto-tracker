import React, {useContext} from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import arrow_icon from '../../assets/arrow_icon.png'
import { CoinContext } from '../../context/CoinContext'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  const {setCurrency} = useContext(CoinContext)
  const currencyHandler = (event)=>{
    switch (event.target.value){
      case "usd": {
        setCurrency({ name: "usd", symbol: "$"})
        break;
      }
      case "eur": {
        setCurrency({ name: "eur", symbol: "€"})
        break;
      }
      case "twd": {
        setCurrency({ name: "twd", symbol: "NT$"})
        break;
      }
      default: {
        setCurrency({ name: "usd", symbol: "$"})
        break;
      }
    }
  }
  return (
    <div className='navbar'>
      <Link to={'/'}>
        <img src={logo} alt='logo' className='logo'/>
      </Link>
      <ul>
        <Link to={'/'}><li>Home</li></Link>
        <li>Features</li>
        <li>Pricing</li>
        <li>Blog</li>
      </ul>
      <div className="nav-right">
        <select onChange={currencyHandler}>
          <option value="usd">USD</option>
          <option value="twd">TWD</option>
          <option value="eur">EUR</option>
        </select>
        <a href="https://www.coingecko.com/zh-tw" target='_blank'>
          <button>More <img src={arrow_icon} alt='arrow_icon'/></button>
        </a>
      </div>
    </div>
  )
}
