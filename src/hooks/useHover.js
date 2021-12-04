import React from 'react'

function useHover(){
    const [hover, sethover] = React.useState()

    const mouseOver = () => {
        sethover(true)
    }

    const mouseOut = () =>{
        sethover(false)
    }
    
    return [hover, mouseOut, mouseOver]
}

export default useHover
