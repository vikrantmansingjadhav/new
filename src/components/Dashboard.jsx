import React, { useState } from 'react';
import "./Dash.css"
import axios from "axios"


const Dash = () => {
         
  

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobileNo: '',
    designation: '',
    gender: '',
    course: [],
    imgUpload: null,
  });

  const [error , setError] = useState("");



  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData({
        ...formData,
        course: checked
          ? [...formData.course, value]
          : formData.course.filter((course) => course !== value),
      });
    } else if (type === 'file') {
      setFormData({ ...formData, imgUpload: e.target.files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit =  async (e) => {
    e.preventDefault();

    alert ( "Sucessfully Submited We Will Contact You Immediately ")
    
    
      try{

        const response = await axios.post("http://localhost:3000/Form" , formData)

        console.log(response.json())
        console.log(response.status)
        console.log("hello")
       
        
      }catch(error){

          console.log("error is " , error)

      }
          
  };


        
    

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div>
        <label>Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange}
        placeholder='Name' required />
      </div>
      <div>
        <label>Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange}
        placeholder='Email' required />
      </div>
      <div>
        <label>Mobile No</label>
        <input type="tel" name="mobileNo" value={formData.mobileNo} onChange={handleChange}
        placeholder='Mobile No' required />
      </div>
      <div>
        <label>Designation</label>
        <select name="designation" value={formData.designation} onChange={handleChange}>
          <option  value="">Select</option>
          <option value="HR">HR</option>
          <option value="Manager">Manager</option>
          <option value="Sales">Sales</option>
          <option value="Reactdeveloper">React-Developer</option>
          <option value="Mernstackdeveloper">Mern-Stack Developer</option>
        </select>
      </div>
      <div>
        <label><h4>Gender</h4></label> <br />
        <div>
          <input
            type="radio"
            name="gender"
            value="M"
            checked={formData.gender === 'M'}
            onChange={handleChange}
            required
          />
          <label>Male</label>
          <input
            type="radio"
            name="gender"
            value="F"
            checked={formData.gender === 'F'}
            onChange={handleChange}
            required
          />
          <label>Female</label>
        </div>
      </div>
      <div>
        <label><h4>Course</h4></label> <br />
        <div>
          
          <label>MCA</label>
          <input
            type="checkbox"
            name="course"
            value="BCA"
            checked={formData.course.includes('BCA')}
            onChange={handleChange}
         

          /> 
          <label>BCA</label>
          <input
            type="checkbox"
            name="course"
            value="BSC"
            checked={formData.course.includes('BSC')}
            onChange={handleChange}
           

          />
          <label>BSC</label>
        </div>
      </div>
      <div>
        <label>Img Upload</label>
        <input type="file" name="imgUpload" onChange={handleChange} required />
      </div>
      <button className='btn btn-danger'  type="submit">Submit</button>
    </form>
  );
};

export default Dash;
