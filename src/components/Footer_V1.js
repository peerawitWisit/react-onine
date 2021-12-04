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
            <h1 style={styles.title}>{title}&copy; {new Date().getFullYear()}</h1>
            <p style={{color:'green',fontSize: 18}}>{website} {address} {postcode} {isOpen.toString()}</p>
        </div>
    )
}

const styles = {
    title : {
        color:'red'
    }
}

Footer.propTypes = {
    title: PropTypes.string,
    postcode: PropTypes.number,
    isOpen: PropTypes.bool
};

export default Footer
