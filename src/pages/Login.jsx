import { useForm } from "react-hook-form";
import { loginUser } from "../mock-api";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const result = loginUser(data.email, data.password);

    alert(result.message);
  };

  return (
    <div className="min-h-screen bg-[#120d19] flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md bg-[#1d1727] border border-purple-500/30 rounded-xl p-6 shadow-lg">

        {/* Heading */}
        <h1 className="text-3xl font-bold text-center text-white mb-2">
          Welcome Back
        </h1>

        <p className="text-center text-gray-300 mb-6">
          Login to your K-Pop Photocard Vault
        </p>

        <form onSubmit={handleSubmit(onSubmit)} noValidate>

          {/* Email */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-white mb-2"
            >
              Email
            </label>

            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full min-h-[48px] rounded-lg pl-8 pr-4 bg-[#120d19] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
              aria-invalid={errors.email ? "true" : "false"}
              aria-describedby={
                errors.email ? "email-error" : undefined
              }
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Please enter a valid email",
                },
              })}
            />

            {errors.email && (
              <p
                id="email-error"
                role="alert"
                className="text-pink-400 text-sm mt-1"
              >
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-white mb-2"
            >
              Password
            </label>

            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="w-full min-h-[48px] rounded-lg pl-8 pr-4 bg-[#120d19] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
              aria-invalid={errors.password ? "true" : "false"}
              aria-describedby={
                errors.password ? "password-error" : undefined
              }
              {...register("password", {
                required: "Password is required",
              })}
            />

            {errors.password && (
              <p
                id="password-error"
                role="alert"
                className="text-pink-400 text-sm mt-1"
              >
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full min-h-[48px] rounded-lg bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] text-white font-semibold hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-pink-400"
          >
            Login
          </button>

        </form>

        {/* Register Link */}
        <p className="text-center text-gray-300 mt-5">
          Don't have an account?{" "}
          <a
            href="/register"
            className="text-pink-400 hover:underline"
          >
            Create Account
          </a>
        </p>

      </div>
    </div>
  );
}

export default Login;