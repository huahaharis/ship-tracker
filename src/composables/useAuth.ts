import mockUsers from "../mock/user.json";

export function simulateLogin(email: string, password: string) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = mockUsers.find(
        (u) => u.email === email && u.password === password
      );
      if (!user) {
        reject({ message: "Invalid email or password" });
      } else {
        resolve({
          data: {
            user: { email: user.email, role: user.role },
            token: "Bearer",
          },
          message: "Login Success",
        });
      }
    }, 700);
  });
}
