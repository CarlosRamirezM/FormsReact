import { useState } from "react";
import Joi from "joi";

const schemaEmail = Joi.object({
  email: Joi.string().min(3).required()
});

const schemaPassword = Joi.object({
  password: Joi.string().min(3).required()
});

function Signup() {
  const [inputs, setInputs] = useState({});
  const [validoEmail, setValidoEmail] = useState(true);
  const [validoPasssword, setValidoPassword] = useState(true);

  const handleSubmit = (event) => {
    console.log("Submitted");
    event.preventDefault();
    
    console.log(inputs);
  };

  const handleChange = (event) => {
    console.log(`Input ${event.target.name} changed`, event.target.value);
    setInputs({ ...inputs, [event.target.name]: event.target.value });
    
    const { errorEmail } = schemaEmail.validate(inputs);
    const { errorPasword } = schemaPassword.validate(inputs);

    if(errorEmail) {
      console.log("Error email!");
      setValidoEmail(false);
    }
    else
    {
      setValidoEmail(true);
    }

    if(errorPasword) {
      console.log("Error password!");
      setValidoPassword(false);
    }
    else {
      setValidoPassword(true);
    }
    /*
    {
        email: "a@a.com", -> requeridos y de 3 chars
        password: "12335"
    }
    */
  };

  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            name="email"
            onChange={handleChange}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
          {!validoEmail ? (<div>
            Error: Email must be at least 3 characters long
          </div>) : ''}
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            onChange={handleChange}
          />
          {!validoPasssword ? (<div>
            Error: Password must be at least 3 characters long
          </div>) : ("")}
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Signup;
