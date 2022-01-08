import React from 'react'
import {Table, Badge, Spinner, Button} from "react-bootstrap"
import axios from 'axios'
import { BiEdit } from "react-icons/bi";
import {Link, useHistory} from 'react-router-dom'


const CategoryPage = () => {

    const history = useHistory()

    const [category, setCategory] = React.useState([])

    const [loading, setLoading] = React.useState(false)

    const [error, setError] = React.useState(null)

    const getData = async() => {
        try{
            setLoading(true) //เริ่มหมุน
            const resp = await axios.get('https://api.codingthailand.com/api/category')
            //console.log(resp.data)
            setCategory(resp.data)
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
                        <Button variant="success" className='mb-3' onClick={() => {history.push('/category/create')}}>
                            + Add new Category
                        </Button>
                    <h2>Category</h2>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Detail</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                category.map((c,index) =>{
                                    return (
                                        <tr key={c.id}>
                                            <td>{c.id}</td>
                                            <td>{c.name}</td>
                                            <td><Button variant="outline-primary">Edits<BiEdit/></Button>
                                            <Button variant="outline-danger ml-3" onClick={() => {
                                                const isConfirm = window.confirm('Confirm to delete >> ' + c.name + '?')
                                                if(isConfirm === true){
                                                    
                                                }
                                            }}>Delete<BiEdit/></Button></td>
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

export default CategoryPage
