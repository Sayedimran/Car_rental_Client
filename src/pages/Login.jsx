
import { Link, useNavigate } from 'react-router-dom';
import UseAuth from '../Hooks/UseAuth';
import Swal from 'sweetalert2';

const Login = () => {
  const { signIn } = UseAuth();
 const naviget = useNavigate();
  const handleLogin = async (e) => {
      e.preventDefault();
  
      const form = e.target;
      
      const email = form.email.value;
      const password = form.password.value;
      
  
      try {
        const result = await signIn(email, password);
        console.log(result);
        Swal.fire({
          title: " signUp Successfully !",
          icon: "success",
          draggable: true,
        });
        naviget("/");
      } catch (err) {
        console.log(err);
        //   Swal.fire({
        //     title: "Drag me!",
        //     icon: "error",
        //     draggable: true,
        //   });
      }
      console.log( email, password,);
      };
    return (
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className=" shadow-lg rounded-xl p-8 w-full max-w-md bg-gradient-to-r from-purple-950  to-indigo-700  ">
          <h2 className="text-2xl font-bold text-center mb-6 bg-gradient-to-r from-cyan-50 via-green-400 to-white text-transparent bg-clip-text ">
            Create an Account Now!
          </h2>

          <form onSubmit={handleLogin}>
            {/* Name Input */}
            <div className="form-control"></div>

            {/* Email Input */}
            <div className="form-control mt-3">
              <label className="label">
                <span className="label-text text-gray-200">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="Enter your email"
                className="input input-bordered  rounded-lg w-full"
              />
            </div>

            {/* Password Input */}
            <div className="form-control mt-3">
              <label className="label">
                <span className="label-text text-gray-200">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="Enter your password"
                className="input input-bordered rounded-lg w-full"
              />
            </div>

           

            {/* Submit Button */}
            <div className=" mt-6">
              <button className="btn text-white rounded-lg w-full bg-gradient-to-r from-blue-800 via-purple-800 to-green-400 ">
                Login
              </button>
            </div>
          </form>

          {/* Already have an account */}
          <p className="text-center text-gray-200 mt-4">
            Already have an account?
            <Link to="/register" className=" text-red-700 hover:underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    );
};

export default Login;