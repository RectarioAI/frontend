import { Input } from "@nextui-org/react";
import { useUser } from "../../../config/helpers/stores";

const SignUpComponent = () => {
  const email = useUser((state) => state.email);
  const name = useUser((state) => state.names);
  const lastName = useUser((state) => state.last_names);
  const password = useUser((state) => state.password);
  const genre = useUser((state) => state.genre);
  const age = useUser((state) => state.age);
  const setEmail = useUser((state) => state.setEmail);
  const setName = useUser((state) => state.setName);
  const setLastName = useUser((state) => state.setLastName);
  const setPassword = useUser((state) => state.setPassword);
  const setGenre = useUser((state) => state.setGenre);
  const setAge = useUser((state) => state.setAge);

  return (
    <div className="w-full mt-16 flex flex-col justify-around items-center">
      <h2 className="text-3xl pb-5 text-green-800 font-extrabold">Regístrate para continuar</h2>
      <Input
        color="success"
        type="email"
        label="Email"
        placeholder="you@example.com"
        labelPlacement="outside"
        className="pt-4"
        value={email}
        onValueChange={setEmail}
      />
      <Input
        color="success"
        type="password"
        label="password"
        placeholder="your password"
        labelPlacement="outside"
        className="pt-4"
        value={password}
        onValueChange={setPassword}
      />
      <Input
        color="success"
        type="your name"
        label="Names"
        placeholder="your names"
        labelPlacement="outside"
        className="pt-4"
        value={name}
        onValueChange={setName}
      />
      <Input
        color="success"
        type="your last name"
        label="Last Name"
        placeholder="you@example.com"
        labelPlacement="outside"
        className="pt-4"
        value={lastName}
        onValueChange={setLastName}
      />
      <Input
        color="success"
        type="age"
        label="Age"
        placeholder="your age"
        labelPlacement="outside"
        className="pt-4"
        value={age}
        onValueChange={setAge}
      />
      <Input
        color="success"
        type="genre"
        label="Genre"
        placeholder="your genre"
        labelPlacement="outside"
        className="pt-4"
        value={genre}
        onValueChange={setGenre}
      />
    </div>
  );
};

export default SignUpComponent;
