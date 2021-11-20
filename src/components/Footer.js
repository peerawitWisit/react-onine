import React from 'react'

const Footer = () => {
    const fullname = "Peerawit Wisitsurawong"
    const nickname = "Pooh"

    const name = () => {
        return fullname + " " + nickname
    }

    return (
        <div>
            <h1>{name()}</h1>
        </div>
    )
}

export default Footer
