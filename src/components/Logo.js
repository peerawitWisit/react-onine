import React from 'react'

const Logo = () => {
    //const logoImage = "./logo192.png"
    const logoImage = {
        url: './logo192.png'
    }
    return (
        <div>
            {/* <img src={logoImage} width="100" alt="logo" /> */}
            <img src={logoImage.url} width="100" alt="logo" />
        </div>
    )
}

export default Logo
