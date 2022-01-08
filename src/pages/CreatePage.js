import React from 'react'
import {Form, Button} from "react-bootstrap"
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import axios from 'axios';
import {useParams ,useHistory} from 'react-router-dom'


const schema = yup.object({
    name: yup.string().required('Category news cannot be null'),
  }).required();

const CreatePage = () => {

    const [error, setError] = React.useState(null)

    const history = useHistory()

    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
      });

    const onSubmit = async (data) => {
        //console.log(data)
        try{
            const apiURL = 'https://api.codingthailand.com/api/category'
            const resp = await axios.post(apiURL,
                {
                    name: data.name
                }
            )
            alert(resp.data.message)
            history.goBack()
        }
        catch(error){
            setError(error)
        }
    }

    if(error){
        return(
            <div className="text-center mt-5 text-danger">
                <h4>Error from API, please try again</h4>
                <p>{error.response.data.message}</p>
            </div>
        )
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 mt-2">
                    <h2>Add New Category</h2>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group controlId="name">
                            <Form.Label>Category New</Form.Label>
                            <Form.Control type="text" name="name" ref={register} className={`form-control ${errors.name ? 'is-invalid' : ''}`} />
                            {
                                errors.name && (
                                    <Form.Control.Feedback type="invalid">
                                        {errors.name.message}
                                    </Form.Control.Feedback>
                                )
                            }
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default CreatePage
