import { Input } from "@nextui-org/react";
import { useUser } from "../../../config/helpers/stores";

const LoginComponent = () => {
  const email = useUser((state) => state.email);
  const password = useUser((state) => state.password);
  const setEmail = useUser((state) => state.setEmail);
  const setPassword = useUser((state) => state.setPassword);

  return (
    <div className="w-full mt-40 flex flex-col justify-around items-center">
      <h2 className="text-3xl pb-20 text-blue-800 font-extrabold">Inicia sesión para continuar</h2>
      <Input
        color="primary"
        type="email"
        label="Email"
        placeholder="you@example.com"
        labelPlacement="outside"
        className="pt-4"
        value={email}
        onValueChange={setEmail}
      />
      <Input
        color="primary"
        type="password"
        label="Password"
        placeholder="your password"
        labelPlacement="outside"
        className="pt-4"
        value={password}
        onValueChange={setPassword}
      />
    </div>
  );
};

export default LoginComponent;
