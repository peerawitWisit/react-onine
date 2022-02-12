import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'
import {Table, Image, Badge, Spinner, Button} from "react-bootstrap"
import { BiCommentDetail } from "react-icons/bi";
import { addToCart } from '../redux/actions/cartAction';
import { useSelector, useDispatch} from 'react-redux'

const ProductPage = () => {

    const [product, setProduct] = React.useState([])

    const [loading, setLoading] = React.useState(false)

    const [error, setError] = React.useState(null)

    const dispatch = useDispatch()
    const cart = useSelector((state) => state.cartReducer.cart)
    const total = useSelector((state) => state.cartReducer.total)


    const getData = async() => {
        try{
            setLoading(true) //เริ่มหมุน
            const resp = await axios.get('https://api.codingthailand.com/api/course')
            //console.log(resp.data)
            setProduct(resp.data.data)
        } catch(error){
            //console.log(error.response)
            setError(error)
        } finally {
            setLoading(false)//หยุดหมุน
        }
    }

    React.useEffect(() => {
        getData()
    }, [])

    if(loading === true){
        return(
            <div className="text-center mt-5">
                <Spinner animation="border" variant="danger" />
            </div>
        )
    }

    if(error){
        return(
            <div className="text-center mt-5 text-danger">
                <h4>Error for API ,Please try again</h4>
                <p>{error.response.data.message}</p>
            </div>
        )
    }

    const addCart = (p) => {
        //console.log(p)
        const product = {
            id: p.id,
            name: p.title,
            price: p.view, //สมมติให้ view = price
            qty:1
        }

        //call action
        dispatch(addToCart( product, cart))
        console.log(cart)
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 mt-2">
                    <h2>Product Page</h2>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Title</th>
                                <th>Detail</th>
                                <th>Created Date</th>
                                <th>View</th>
                                <th>Picture</th>
                                <th>Detail</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                product.map((p,index) =>{
                                    return (
                                        <tr key={p.id}>
                                            <td>{p.id}</td>
                                            <td>{p.title}</td>
                                            <td>{p.detail}</td>
                                            <td>{p.date}</td>
                                            {/*<td>{p.view}</td>*/}
                                            <td><Badge variant="danger">{p.view}</Badge></td>
                                            {/*<td>{p.picture}</td>*/}
                                            <td><Image src={p.picture} rounded width = {60} /></td>
                                            <td className="text-center">
                                                < Link to={`/detail/${p.id}/title/${p.title}`}>
                                                    <Button variant="outline-info">
                                                        Click<BiCommentDetail/>
                                                    </Button>
                                                </Link>

                                                <Button variant='outline-success' className='ml-2' onClick={() => addCart(p)}>Buy</Button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    );
}

export default ProductPage
