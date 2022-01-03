import React from 'react'
import {useFormik } from 'formik';
import validationSchema from './validations';
function Signup() {
    const {handleChange,handleSubmit,handleBlur,values,errors,touched} = useFormik({
        initialValues:{
          firstName: '.',
          lastName: '.',
          email: '',
          gender: 'male',
          hobies:[],
          country:"Turkey",
          password:'',
          passwordConfirm:''
        },
        onSubmit: (values) => {
          console.log(values);
        },
        validationSchema,
      });
    return (
        <div>
             <h1>Sign Up</h1>
          <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input  name="firstName" value={values.firstName} onChange={handleChange} />
        <br/>
        <br/>
        <label htmlFor="lastName">Last Name</label>
        <input  name="lastName"value={values.lastName} onChange={handleChange}/>
        <br/>
        <br/>
        <label htmlFor="email">Email</label>
        <input
          name="email"
          type="email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
        />
        {
            errors.email && touched.email && (<div className='error'> {errors.email}</div>
            )}
        <br/>
        <br/>
        <label htmlFor="password">Password</label>
        <input
          name="password"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
        />
        {
            errors.password && touched.password && (<div className='error'> {errors.password}</div>
            )}
        <br/>
        <br/>
        <label htmlFor="passwordConfirm">PasswordConfirmation</label>
        <input
          name="passwordConfirm"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.passwordConfirm}
        />
        {
            errors.passwordConfirm && touched.passwordConfirm && (<div className='error'> {errors.passwordConfirm}</div>
            )}
        
        <br/>
        <br/>
        <br/>
        <br/>
        <span>Male</span>
        <input type="radio"
         name='gender'
        value="male" 
        onChange={handleChange}
        checked={values.gender =="male"}
        />
        <span>Female</span>
        <input type="radio" 
        name='gender' 
        value="female" 
        onChange={handleChange}
        checked={values.gender=="female"}
        />
        <br/>
        <br/>
        <div>
          Games
          <input type="checkbox" name='hobies' value="games" onChange={handleChange}/>
        </div>
          <div>
            Books
          <input type="checkbox" name='hobies' value="books" onChange={handleChange}/>
          </div>
        <div>
          Sports
          <input type="checkbox" name='hobies' value="sports" onChange={handleChange}/>
        </div>
        <br/>
        <br/>

        <select name="country" onChange={handleChange} value={values.county}>
          <option value="tturkeyr">Turkey</option>
          <option value="england">England</option>
          <option value="usa">USA</option>
        </select>
          <br/>
          <br/>
        <button type="submit">Submit</button>
        <br/>
        <br/>
        {JSON.stringify(values)}
      </form>
        </div>
    )
}

export default Signup
