import React from 'react'
import Logo from './Logo'
import {Title} from '../styles/title/Title'
import Button from '../styles/button/Button'

const Header = () => {
    let companyName = "TNI"
    const companyAddress = <p>Bangkok</p>
    let number = 10

    //function
    const showMessage = () => {
        return companyName + ".com"
    }

    const isLogin = true;

    const showMe = () => {
        alert('Hello react')
    }

    const products = [
        {id: 1,name: 'Coke'},
        {id: 2,name: 'Pepsi'}
    ];

    return (
        <div>
            <Title>project react</Title>
            <h1>Hello {showMessage()}</h1>
            {companyAddress}
            {number*2}
            {showMessage()}
            {
                isLogin === true ? (
                    <div>
                        <p>Welcome</p>
                    </div>
                ):(
                    <>
                        <p>Student</p>
                    </>
                )
            }

            { isLogin ? <Logo /> : <p>Unlock</p>}

            <button onClick={showMe}>ClickMe</button>
            
            <Button onClick={showMe} keyword={false}>
                ClickMe
            </Button>
            <Button onClick={showMe} keyword={true}>
                ClickMe
            </Button>
            <ul>
            {
                products.map((product,index) => {
                    return <li key={index}>{index +1}{product.name}</li>
                })
            }
            </ul>
            
        </div>
    )
}

export default Header
