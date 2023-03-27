import './App.css';
import {useForm} from "react-hook-form";

function App() {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm ({
    mode: "onBlur"
  });

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <div className="App">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='inputs-container'>
          <div className='inputs'>
            <label>Email: </label>
            <input type="email" {...register("email", {
              required: "Email is required",
              pattern: {
                value: "/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i",
                message: "Invalid email address",
              }   
            })}></input>
          </div>
          <div className='error-container slide-down'>
              {errors?.email && <p>{errors?.email?.message || "Error"}</p>}
          </div>
        </div>
        <div className='inputs-container'>
          <div className='inputs'>
            <label>Username: </label>
            <input type="text" {...register("username", {
              required: "Username is required",
              minLength: {
                value: 4,
                message: "Username should be at least 4 characters long",
              }
            })}></input>
          </div>
          <div className='error-container slide-down'>
            {errors?.username && <p>{errors?.username?.message || "Error"}</p>}
          </div>
        </div>
        <div className='inputs-container'>
          <div className='inputs'>
            <label>Password: </label>
            <input type="password" {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password should be at least 8 characters long",
              }
            })}></input>
          </div>          
          <div className='error-container slide-down'>
            {errors?.password && <p>{errors?.password?.message || "Error"}</p>}
          </div>
        </div>
        <div className='inputs-container'>
          <div className='inputs'>
            <label>Confirm Password: </label>
            <input type="password" {...register("confirmPassword", {
              required: "You should confirm your password",
              validate: (value) => value === "password" || "Passwords do not match",
            })}></input>
          </div>
          <div className='error-container slide-down'>
            {errors?.confirmPassword && <p>{errors?.confirmPassword?.message || "Error"}</p>}
          </div>
        </div>
        <input id='button' type="submit" value='Sign Up'/>
      </form>
    </div>
  );
}

export default App;
