import React from 'react'
import { useParams } from "react-router-dom"
import axios from 'axios'
import { Spinner, Card, CardDeck } from "react-bootstrap"

const DetailPage = () => {

    const { id, title } = useParams()

    const [detail, setDetail] = React.useState([])

    const [loading, setLoading] = React.useState(false)

    const [error, setError] = React.useState(null)

    const getData = async (id) => {
        try {
            setLoading(true) //เริ่มหมุน
            const resp = await axios.get('https://api.codingthailand.com/api/course/' + id)
            //console.log(resp.data)
            setDetail(resp.data.data)
        } catch (error) {
            //console.log(error.response)
            setError(error)
        } finally {
            setLoading(false)//หยุดหมุน
        }
    }

    React.useEffect(() => {
        getData(id)
    }, [id])

    if (loading === true) {
        return (
            <div className="text-center mt-5">
                <Spinner animation="border" variant="danger" />
            </div>
        )
    }

    if (error) {
        return (
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
                    <h2>Detail Page</h2>
                    <p>{title} ({id})</p>
                    <div className='row'>
                        <CardDeck>
                            {
                                detail.length > 0 ? (
                                    detail.map((d, index) => {
                                        return (
                                            <div className='col-md-4' key={d.ch_id}>
                                                <Card className='mb-4 shadow-sm'>
                                                    <Card.Body>
                                                        <Card.Title>{d.ch_title}</Card.Title>
                                                        <Card.Text>
                                                            
                                                        </Card.Text>
                                                    </Card.Body>
                                                    <Card.Footer>
                                                        <small className="text-muted">{d.ch_dateadd}</small>
                                                    </Card.Footer>
                                                </Card>
                                            </div>
                                        )
                                    })
                                ) : (
                                    <h1>No Data</h1>
                                )
                            }
                        </CardDeck>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailPage
