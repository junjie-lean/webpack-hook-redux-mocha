import React,{useEffect} from 'react'
function test(props){
    useEffect(()=>{
        console.log(props)
    },[])
    return(
        <div>
            Test
        </div>
    )
}
export default test