import React from 'react'

function Menu1() {

    const [hover, sethover] = React.useState()

    const mouseOver = () => {
        sethover(true)
    }

    const mouseOut = () =>{
        sethover(false)
    }

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

export default Menu1
