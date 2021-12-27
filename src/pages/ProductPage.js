import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'
import {Table, Image, Badge, Spinner, Button} from "react-bootstrap"
import { BiCommentDetail } from "react-icons/bi";

const ProductPage = () => {

    const [product, setProduct] = React.useState([])

    const [loading, setLoading] = React.useState(false)

    const [error, setError] = React.useState(null)

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
    )
}

export default ProductPage
