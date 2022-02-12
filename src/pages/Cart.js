import React from 'react';
import { addToCart } from '../redux/actions/cartAction';
import { useSelector, useDispatch} from 'react-redux'
import {Table} from "react-bootstrap"

const Cart = () => {

    const cart = useSelector((state) => state.cartReducer.cart)

  return (
    <div className='container'>
        <h1>Cart Page</h1>
        <div className="row">
            <div className="col-md-12 mt-2">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>ProductID</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>QTY</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((c,index) => {
                                return(
                                    <tr key={c.id}>
                                        <td>{index+1}</td>
                                        <td>{c.id}</td>
                                        <td>{c.name}</td>
                                        <td>{c.price}</td>
                                        <td>{c.qty}</td>
                                        <td>{c.price*c.qty}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    </div>
  )
};

export default Cart;
