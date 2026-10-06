export const registerUser = (user) => {
  const existingUser = JSON.parse(localStorage.getItem("user"));

  if (existingUser && existingUser.email === user.email) {
    return {
      success: false,
      message: "An account with this email already exists.",
    };
  }

  localStorage.setItem("user", JSON.stringify(user));

  return {
    success: true,
    message: "Registration successful!",
  };
};

export const loginUser = (email, password) => {
  const savedUser = JSON.parse(localStorage.getItem("user"));

  if (!savedUser) {
    return {
      success: false,
      message: "No account found. Please register first.",
    };
  }

  if (
    savedUser.email !== email ||
    savedUser.password !== password
  ) {
    return {
      success: false,
      message: "Invalid email or password.",
    };
  }

  return {
    success: true,
    message: "Login successful!",
  };
};