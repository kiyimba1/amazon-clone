import React from 'react'
import './Header.css'
import SearchIcon from "@material-ui/icons/Search"
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import { Link } from 'react-router-dom'
import { useStateValue } from './StateProvider'
import { auth } from './firebase'

function Header() {
    const [{ basket, user }, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }

    return (
        <div className='header'>
            <Link to="/">
                <img className="header__logo" src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' />
            </Link>


            <div className="header__search">
                <input className="header__searchInput" type="text" />
                <SearchIcon className="header__searchIcon" />
            </div>
            <div onClick={handleAuthentication} className="header__nav">
                <Link to={!user && "/login"}>
                    <div className='header__option'>
                        <span className='header__optionLineOne'>
                            Hello, {user ? user?.email : 'Guest'}
                        </span>
                        <span className='header__optionLineTwo'>
                            {user ? 'Sign Out' : 'Sign in'}
                        </span>
                    </div>
                </Link>
                <Link to="/orders">
                    <div className='header__option'>
                        <span className='header__optionLineOne'>
                            Returns
                        </span>
                        <span className='header__optionLineTwo'>
                            & Orders
                        </span>
                    </div>
                </Link>
                <div className='header__option'>
                    <span className='header__optionLineOne'>
                        Your
                    </span>
                    <span className='header__optionLineTwo'>
                        Prime
                    </span>
                </div>
            </div>

            <Link to="/checkout">
                <div className="header__optionBasket">
                    <ShoppingBasketIcon />
                    <span className="header_optionLineTwo header__backgroundCount">{basket?.length}</span>
                </div>
            </Link>


        </div>
    )
}

export default Header
