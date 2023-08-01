import { useEffect, useState } from "react";

const Register = () => {
    const initialValues = {
        username: "",
        email: "",
        password: "",
        confirmpassword: "",
        phonenumber: "",
      };
      const [formValues, setFormValues] = useState(initialValues);
      const [formErrors, setFormErrors] = useState({});
      const [isSubmit, setIsSubmit] = useState(false);
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Hello");
        setFormErrors(validate(formValues));
        setIsSubmit(true);
      };
    
      useEffect(() => {
        console.log(formErrors,"123");
        if (Object.keys(formErrors).length === 0 && isSubmit) {
          console.log(formValues,"123");
        }
      }, [formErrors]);
    
      const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    
        if (!values.username) {
          errors.username = "Username is required!";
        }
    
        if (!values.email) {
          errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
          errors.email = "This is not a valid email format!";
        }
    
        if (!values.password) {
          errors.password = "Password is required";
        } else if (values.password.length < 4) {
          errors.password = "Password must be more than 4 characters";
        } else if (values.password.length > 10) {
          errors.password = "Password cannot exceed more than 10 characters";
        }
    
        if (!values.confirmpassword) {
          errors.confirmpassword = "Confirm Password is required";
        } else if (values.password !== values.confirmpassword) {
          errors.confirmpassword = "Passwords do not match";
        }
    
        if (!values.phonenumber || values.phonenumber.length<10) {
          errors.phonenumber = "Invalid Phone Number";
        } else if (isNaN(values.phonenumber)) {
          errors.phonenumber = "Phone Number must be a number";
        }
    
        return errors;
      };
    
      return (
        <div className="outer-container">
          <div className="container">
            <div className="form">
              <div className="heading">
                <h1>Register Here</h1>
              </div>
              {Object.keys(formErrors).length === 0 && isSubmit ? (
                <div className="ui message success">Signed in successfully</div>
              ) : null}
    
              <form onSubmit={handleSubmit}>
                <div className="ui divider"></div>
                <div className="ui form">
                  <div className="field">
                    <label>USERNAME</label>
                    <input
                      type="text"
                      name="username"
                     
                      value={formValues.username}
                      onChange={handleChange}
                    />
                    <span className="focus-input2"></span>
                    <p>{formErrors.username}</p>
                  </div>
    
                  <div className="field">
                    <label>E-MAIL</label>
                    <input
                      type="text"
                      name="email"
                  
                      value={formValues.email}
                      onChange={handleChange}
                    />
                    <span className="focus-input2"></span>
                    <p>{formErrors.email}</p>
                  </div>
    
                  <div className="field">
                    <label>PASSWORD</label>
                    <input
                      type="password"
                      name="password"
                      
                      value={formValues.password}
                      onChange={handleChange}
                    />
                    <span className="focus-input2"></span>
                    <p>{formErrors.password}</p>
                  </div>
    
                  <div className="field">
                    <label>CONFIRM PASSWORD</label>
                    <input
                      type="password"
                      name="confirmpassword"
                     
                      value={formValues.confirmpassword}
                      onChange={handleChange}
                    />
                    <span className="focus-input2"></span>
                    <p>{formErrors.confirmpassword}</p>
                  </div>
    
                  <div className="field">
                    <label>PHONE NUMBER</label>
                    <input
                      type="number"
                      name="phonenumber"
                      
                      value={formValues.phonenumber}
                      onChange={handleChange}
                    />
                    <span className="focus-input2"></span>
                    <p>{formErrors.phonenumber}</p>
                  </div>
                  {/* <div class="image">
            <img src="HII5.jpg" class="img" alt=""/>
        </div> */}
                </div>
                

    
               <div><button className="btn">Register</button>
                </div>
              </form>

            </div>
            <div class="image">
            <img src="HII5.jpg" class="img" alt=""/>
        </div>
          </div>
        </div>
         );
    
}

export default Register