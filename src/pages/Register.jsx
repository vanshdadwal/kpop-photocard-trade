import { useForm } from "react-hook-form";
import { registerUser } from "../mock-api";

function Register() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");

  const onSubmit = (data) => {
    const user = {
      email: data.email,
      displayName: data.displayName,
      password: data.password,
      favoriteGroup: data.favoriteGroup,
    };

    const result = registerUser(user);

    alert(result.message);
  };

  return (
    <div className="min-h-screen bg-[#120d19] flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md bg-[#1d1727] border border-purple-500/30 rounded-xl p-6 shadow-lg">

        {/* Heading */}
        <h1 className="text-3xl font-bold text-center text-white mb-2">
          Create Account
        </h1>

        <p className="text-center text-gray-300 mb-6">
          Join the K-Pop Photocard Vault
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

          {/* Display Name */}
          <div className="mb-4">
            <label
              htmlFor="displayName"
              className="block text-white mb-2"
            >
              Display Name
            </label>

            <input
              id="displayName"
              type="text"
              placeholder="Enter your display name"
              maxLength={100}
              className="w-full min-h-[48px] rounded-lg pl-8 pr-4 bg-[#120d19] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
              aria-invalid={errors.displayName ? "true" : "false"}
              aria-describedby={
                errors.displayName
                  ? "displayName-error"
                  : undefined
              }
              {...register("displayName", {
                required: "Display name is required",
                maxLength: {
                  value: 100,
                  message:
                    "Display name cannot exceed 100 characters",
                },
              })}
            />

            {errors.displayName && (
              <p
                id="displayName-error"
                role="alert"
                className="text-pink-400 text-sm mt-1"
              >
                {errors.displayName.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div className="mb-4">
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
                minLength: {
                  value: 8,
                  message:
                    "Password must be at least 8 characters",
                },
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

          {/* Confirm Password */}
          <div className="mb-4">
            <label
              htmlFor="confirmPassword"
              className="block text-white mb-2"
            >
              Confirm Password
            </label>

            <input
              id="confirmPassword"
              type="password"
              placeholder="Confirm your password"
              className="w-full min-h-[48px] rounded-lg pl-8 pr-4 bg-[#120d19] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
              aria-invalid={
                errors.confirmPassword ? "true" : "false"
              }
              aria-describedby={
                errors.confirmPassword
                  ? "confirmPassword-error"
                  : undefined
              }
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: (value) =>
                  value === password ||
                  "Passwords do not match",
              })}
            />

            {errors.confirmPassword && (
              <p
                id="confirmPassword-error"
                role="alert"
                className="text-pink-400 text-sm mt-1"
              >
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          {/* Favorite Group */}
          <div className="mb-6">
            <label
              htmlFor="favoriteGroup"
              className="block text-white mb-2"
            >
              Favorite K-Pop Group
            </label>

            <select
              id="favoriteGroup"
              className="w-full min-h-[48px] rounded-lg pl-8 pr-4 bg-[#120d19] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
              aria-invalid={
                errors.favoriteGroup ? "true" : "false"
              }
              aria-describedby={
                errors.favoriteGroup
                  ? "favoriteGroup-error"
                  : undefined
              }
              {...register("favoriteGroup", {
                required:
                  "Please select your favorite group",
              })}
            >
              <option value="">Select a group</option>
              <option value="BTS">BTS</option>
              <option value="BLACKPINK">BLACKPINK</option>
              <option value="TWICE">TWICE</option>
              <option value="SEVENTEEN">SEVENTEEN</option>
              <option value="Stray Kids">Stray Kids</option>
              <option value="NewJeans">NewJeans</option>
              <option value="IVE">IVE</option>
              <option value="aespa">aespa</option>
            </select>

            {errors.favoriteGroup && (
              <p
                id="favoriteGroup-error"
                role="alert"
                className="text-pink-400 text-sm mt-1"
              >
                {errors.favoriteGroup.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full min-h-[48px] rounded-lg bg-gradient-to-r from-[#8B5CF6] to-[#EC4899] text-white font-semibold hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-pink-400"
          >
            Create Account
          </button>

        </form>

        {/* Login Link */}
        <p className="text-center text-gray-300 mt-5">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-pink-400 hover:underline"
          >
            Login
          </a>
        </p>

      </div>
    </div>
  );
}

export default Register;