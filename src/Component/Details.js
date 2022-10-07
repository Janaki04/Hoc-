import React from 'react'
import './Style.css'


const Details = (WrappedComponent,employeeDetails) => {

    // console.log(employeeDetails)

    const keys=Object.keys(employeeDetails[0])

return function(props){

    const data= 
    <table className='table'>
        <tr>
            <th> Id</th>
            <th>Name</th>
            <th>Email</th>
        </tr>
        {employeeDetails?.map((value)=>( 
        <tr>
        <td>{value.id}</td>
        <td>{value.Firstname}</td>
        <td>{value.Contact}</td>


        </tr> ))}
    </table>

const stData= 
<table className='table'>
    <tr>
        <th> Id</th>
        <th>Name</th>
        <th>Email</th>
    </tr>
    {employeeDetails?.map((value)=>( 
    <tr>
    <td>{value.id}</td>
    <td>{value.Firstname}</td>
    <td>{value.Colour}</td>


    </tr> ))}
</table>


    const details= 
    <table className='table'>
    {keys.map((val)=>
    
    <td>
    <th> {val}</th>
   

    
</td>
    )}
       
        {employeeDetails?.map((value)=>( 
        <tr>
            {keys?.map((key)=>
        <td>{value[key]}</td>
        )}
        </tr>
          
        ))}
    </table>
    
   
     
return(
            <div>
        <WrappedComponent name={data}  different={details} student={stData} {...props}/>
            </div>
        )
    }
    

  }
export default Details











