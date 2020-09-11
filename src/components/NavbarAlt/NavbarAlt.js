import React from 'react'
import classes from './NavbarAlt.module.css'
import Logo from '../../assets/LogoBlack.png'
import LocationIcon from '../../assets/location.svg'
import DownIcon from '../../assets/chevron.svg'
import UserIcon from '../../assets/user.svg'
import CartIcon from '../../assets/cart.svg'

class NavbarAlt extends React.Component{
    render() {
        return(
            <React.Fragment>
                <div className={classes.Container}>
                    <div className={classes.Left}>
                        <img className={classes.Logo} src={Logo} alt="Logo" />
                        <div className={classes.Location}>
                            <img src={LocationIcon} alt="Location Icon" />
                            <span className={classes.Text}>HSR Layout</span>
                            <img className={classes.Chevron} src={DownIcon} alt="Dropdown" />
                        </div>
                        <input className={classes.Search} placeholder="Search for restaurants, shops, brands, items etc." />
                    </div>

                    <div className={classes.Right}>
                        <img className={classes.User} src={UserIcon} alt="User" />
                        <div className={classes.Cart}>
                            <img className={classes.Cart} src={CartIcon} alt="Cart" />
                            <span className={classes.Count}>2</span>
                        </div>
                    </div>
                </div>
                <div className={classes.Space}></div>
            </React.Fragment>
        )
    }
}

export default NavbarAlt