interface User {
  name: string;
  username: string;
  email: string;
  phoneNumber: number;
  password: string;
  isMale: boolean;
}
const user: User = {
  name: "Farzan",
  username: "FarzanH",
  email: "f@gmail.com",
  phoneNumber: 09121234567,
  password: "paassww",
  isMale: true,
};

export { User, user };
