import React from 'react'

function Sidebar() {
    
    // let fullname = 'John'

    const [isShow,setisShow] = React.useState(true)

    const changeName = () =>{
        //fullname = 'Marry'
        
        setfullname('Marry')
        setisShow(false)
    }

    React.useEffect(() => {
        console.log('Sidebar useEffect')
        //ทำงานทุกครั้งที่ update ui
    })

    React.useEffect(() => {
        console.log('Sidebar useEffect one time only')
        //render component
    },[])
    
    const [fullname,setfullname] = React.useState('John')
    
    React.useEffect(() => {
        console.log('Sidebar useEffect fullname')
        //render component และfullnameเปลี่ยน
    },[fullname])

   
    
    return (
        <>
            <p>สวัสดี {fullname}</p>
            {
                isShow ? <p>Hello</p> : <p>Wolrd</p>
            }
            <button onClick = {changeName}>Changename</button>
        </>
    )
}

export default Sidebar
