import React from 'react'
import {logo, title} from '../styles/style'
import useHover from '../hooks/useHover'

const Logo = () => {
    //const logoImage = "./logo192.png"
    
    const [hover, mouseOver, mouseOut] = useHover()
    
    const logoImage = {
        url: './logo192.png'
    }
    return (
        <div>
            <h3 style={title}>logo</h3>
            {
                hover ? null : <h3>Logo</h3>
            }
            {/* <img src={logoImage} width="100" alt="logo" /> */}
            <img onMouseOut = {mouseOut} onMouseOver = {mouseOver} style={logo} src={logoImage.url} width="100" alt="logo" />
        </div>
    )
}

export default Logo
