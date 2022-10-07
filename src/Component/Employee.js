import React  from 'react'
import './Style.css'
import Details from './Details'



const employeeDetails=[
        {
     id:1,
     Firstname:"Deepali" ,
    Contact:"dee@gmail.com" 
         },
        {
        id:2,
        Firstname:"Bat",
    Contact:"bat@gmail.com" 

       },
       {
        id:3,
        Firstname:"John" ,
    Contact:"joh@gmail.com" 

       },
       {
        id:4,
        Firstname:"LEO",
    Contact:"leo@gmail.com" 

       },
       {
        id:5,
        Firstname:"Preethi",
    Contact:"thi@gmail.com" 

       },
       {
        id:6,
        Firstname:"Janaki" ,
    Contact:"jan@gmail.com" 

       }
]

function Employee(props) {

    console.log(props)
 let {name,different}=props
  

return (
    <div>
    <h1>Employee Details</h1>
     {name}
     <h1>Employee Details with different Key</h1>
     {different}
    </div>
  )
}

export default Details(Employee,employeeDetails)
