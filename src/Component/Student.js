import React  from 'react'
import './Style.css'
import Details from './Details'



const employeeDetails=[
    {
 id:1,
 Firstname:"Red" ,
 Colour:"red@gmail.com" 
     },
    {
    id:2,
    Firstname:"Yellow",
 Colour:"low@gmail.com" 

   },
   {
    id:3,
   Firstname:"White" ,
 Colour:"ite@gmail.com" 

   },
   {
    id:4,
   Firstname:"Blue",
 Colour:"lue@gmail.com" 

   },
   {
    id:5,
   Firstname:"Pink",
 Colour:"ink@gmail.com" 

   },
   {
    id:6,
   Firstname:"Green" ,
 Colour:"een@gmail.com" 

   }
]

function Student(props) {

    console.log(props)
 let {student,different}=props
  

return (
    <div>
    <h1>Student Details</h1>
     {student}
     <h1>Student Details with different Key</h1>
     {different}
    </div>
  )
}

export default Details(Student,employeeDetails)
