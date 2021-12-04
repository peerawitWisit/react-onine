import React from 'react'
import useHover from '../hooks/useHover'

function Menu() {

    const [hover, mouseOut, mouseOver] = useHover()

    return (
        <div>
            <h1>Menu</h1>
            {
                hover ? <h3>Welcome</h3> : null
            }
            <img onMouseOver={mouseOver} onMouseOut={mouseOut} src='./logo192.png' alt='logo'/>
        </div>
    )
}

export default Menu
