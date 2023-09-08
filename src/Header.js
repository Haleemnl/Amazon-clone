import React from 'react'
import './css/header.css'
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import { ShoppingBasket } from '@mui/icons-material';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
import { signOut } from 'firebase/auth';

const Header = () => {

    // dispatch: like a gun that shoots to the datalayer to add or remove an item

    // const [{ basket }, dispatch] = useStateValue();
    const [{ basket, user }] = useStateValue();


    const handleAuthentication = async () => {
        try {
            await signOut(auth);
        } catch (error) {
            alert(error.message);
        }
    };


    return (
        <nav className='header'>
            <Link to='/'>
                {/* logo on left */}
                <img className='header-logo'
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    alt="" />
            </Link>

            {/* search box */}
            <div className="header-search">
                <input type="text" className='header-searchinput' />
                <SearchIcon className='header-searchicon' />
            </div>

            {/*  links */}
            <div className="header-nav">
                {/* 1st link */}
                <Link to={!user && '/login'} className='header-link'>
                    <div onClick={handleAuthentication} className="header-option">

                        <span className='header-optionline1'>{!user ?
                            'Hello Guest' : user.email}</span>
                        <span className='header-optionline2'>{user ?
                            'Sign Out' : 'Sign In'}</span>

                    </div>
                </Link>

                {/* 2nd link */}
                <Link to='/' className='header-link'>
                    <div className="header-option">

                        <span className='header-optionline1'>& Returns</span>
                        <span className='header-optionline2'> Order</span>

                    </div>
                </Link>

                {/* 3rd link */}
                <Link to='/' className='header-link'>
                    <div className="header-option">

                        <span className='header-optionline1'>Your</span>
                        <span className='header-optionline2'>Prime</span>

                    </div>
                </Link>

                {/* Basket icon */}
                <Link to='/checkout' className='header-link'>

                    <div className="header-optionbasket">
                        {/* basket icon */}
                        <ShoppingBasket />
                        {/* No of items in it */}

                        {/* changed the 0 value of span below to basket.length  */}
                        <span className='header-optionline2 header-basketcount'>{basket?.length}</span>
                    </div>

                </Link>

            </div>




        </nav>
    )
}

export default Header