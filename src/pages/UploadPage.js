import React from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import {useHistory} from 'react-router-dom'
import { useToasts } from 'react-toast-notifications';

const SUPPORT_IMAGE_FORMAT = ['image/jpg','image/jpeg']

const UploadPage = () => {

    const history = useHistory()
    const { register, handleSubmit, errors } = useForm()

    const {addToast } = useToasts()

    const onSubmit = (data) => {
        //console.log(data)
        let fileUpload = data.picture[0]
        const reader = new FileReader() //function ของ javaScript
        reader.readAsDataURL(fileUpload)
        reader.onload = async (e) => {
            let base64Image = e.target.result //result ของการอ่านรูปภาพเป็นไฟล์ base64
            //console.log(base64Image)
            const urlAPI = 'https://api.codingthailand.com/api/upload'
            const resp = await axios.post(urlAPI,{
                picture: base64Image
            })

            //alert(resp.data.data.message)
            addToast(resp.data.data.message , {appearance:'success', autoDismiss:true})
            history.replace("/")
        }
    }

    return (
        <div className='container'>
            <div className='row mt-4'>
                <div className='col-md-12'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <label htmlFor="exampleFormControlFile1">Example file input</label>
                            <input 
                            type="file" 
                            name="picture" 
                            ref={register({
                                required:'Please select file',
                                validate: {
                                    checkFileType: (value) => {
                                        return value && SUPPORT_IMAGE_FORMAT.includes(value[0].type)
                                    }
                                }
                            })} 
                            id="exampleFormControlFile1" 
                            className={`form-control-file ${errors.picture ? 'is-invalid' : ''}`}
                            />
                            {
                                errors.picture && errors.picture.type === 'required' && (
                                    <div className='invalid-feedback'>{errors.picture.message}</div>
                                )
                            }

{
                                errors.picture && errors.picture.type === 'checkFileType' && (
                                    <div className='invalid-feedback'>Support Only .jpg and .jpeg</div>
                                )
                            }
                        </div>
                        <button type='submit' className='btn btn-primary mb-2'>Upload</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default UploadPage
