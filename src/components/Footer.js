import React from 'react'
import PropTypes from 'prop-types'

const Footer = ({title,website,address,postcode,isOpen}) => {
    /*const fullname = "Peerawit Wisitsurawong"
    const nickname = "Pooh"

    const name = () => {
        return fullname + " " + nickname
    }
    const {title,website,address,postcode} = props;*/
    
    return (
        <div>
            <h3>{title}&copy; {new Date().getFullYear()}</h3>
            <p>{website} {address} {postcode} {isOpen.toString()}</p>
        </div>
    )
}

Footer.propTypes = {
    title: PropTypes.string,
    postcode: PropTypes.number,
    isOpen: PropTypes.bool
};

export default Footer
