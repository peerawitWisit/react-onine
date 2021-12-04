import React from 'react'

const Footer = () => {

    const fullname = "Peerawit"
    const surname = "Wisitsurawong"
    const name =()=>{
        return fullname + " " + surname
    }

    const birth = 2001
    return (
        <>
            <footer className="container">
                <p>© {name()} {birth}-{new Date().getFullYear()}</p>
            </footer>
        </>
    )
}

export default Footer
