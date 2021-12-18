import React from 'react'
import {Button} from "react-bootstrap"
import { AiFillGithub } from "react-icons/ai";

const ContactUs = () => {
    const name = "Peerawit Wisitsurawong"

    return (
        <div className="container">
            <h1>Contact Us</h1>
            <h3>{name}</h3>
            <p>- ชื่อ พีรวิชญ์ วิศิษฏ์สุรวงศ์ นักศึกษาชั้นปีที่3 คณะIT สาขาMT ในอนาคตอยากทำงานเป็ฯGame Developer</p>
            <p>- มีเกมที่อยากซื้อเพียบ แต่ไม่มีตัง</p>
            <p>- ง่วง</p>
            <p><b>For my github visit link below</b></p>
            <Button variant="outline-primary" href="https://github.com/peerawitWisit"><h3><AiFillGithub/>Click here</h3></Button>
            <p><b>Contact me : </b>wi.peerawit_st@tni.ac.th</p>
        </div>
    )
}

export default ContactUs
