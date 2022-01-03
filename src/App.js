
import './App.css';
import { Formik } from 'formik';
function App() {
  return (
    <div className="App">
     <h1>Sign Up</h1>
    <Formik
      initialValues={{
        firstName: '.',
        lastName: '.',
        email: '.',
        gender: 'male',
        hobies:[],
        country:"Turkey"
      }}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {
        ({handleSubmit,handleChange,values})=> (
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
          value={values.email}
        />
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
        )
      }
    </Formik>
    </div>
  );
}

export default App;
