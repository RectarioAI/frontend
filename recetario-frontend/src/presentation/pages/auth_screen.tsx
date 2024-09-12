import { Button } from "@nextui-org/react";
import LoginComponent from "../components/auth/login_component";
import { useState } from "react";
import SignUpComponent from "../components/auth/signup_component";
import { useUser } from "../../config/helpers/stores";
import { statics } from "../../assets/statics";
import { useNavigate } from "react-router-dom";

const AuthScreen = () => {
  const navigate = useNavigate();
  const [mode, setmode] = useState(false);
  const register = useUser((state) => state.fetchSignUpUser);
  const login = useUser((state) => state.fetchLoginUser);
  const age = useUser((state) => state.age);
  const email = useUser((state) => state.email);
  const genre = useUser((state) => state.genre);
  const lastName = useUser((state) => state.last_names);
  const name = useUser((state) => state.names);
  const password = useUser((state) => state.password);

  const userHandlerNewUser = () => {
    if (!email || !name || !lastName || !password || !genre || !age) {
      return;
    }
    const user = {
      email: email,
      names: name,
      last_names: lastName,
      password: password,
      genre: genre,
      age: age,
    };
    register(user);
    setmode(true);
  };

  const loginHandler = () => {
    if (!email || !password) {
      return;
    }
    login(email, password);
    if (name !== "") {
      navigate("/home");
    }
  };

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-12">
        <img
          className="absolute inset-0 object-cover h-screen w-full -z-30"
          src={statics.bgimage}
          alt=""
        />
      </div>
      <div className="-z-10 absolute inset-0 opacity-80 bg-gradient-to-b from-blue-200 to-blue-400 col-span-12"></div>
      <div className="col-span-1"></div>
      <div className="col-span-10">
        <div className="grid grid-cols-12">
          <div className="col-span-5 max-h-screen flex flex-col items-center justify-center gap-4 p-10">
            <h1 className="text-4xl pt-10 text-blue-800 font-bold">
              Dinos el producto que buscas y te diremos los mejor calificados
            </h1>
            <span className="font-semibold text-white">
              Una herrramienta pensada para hacer la vida de los colombianos
              <br /> mas saludable, mas amigable, mas económica.
            </span>
          </div>
          <div className="col-span-1"></div>
          <div className="col-span-4 max-h-screen">
            {mode ? (
                <LoginComponent />
            ) : (
                <SignUpComponent />
            )}
            <div className="flex flex-col my-4 gap-4">
              <Button
                variant="solid"
                color="primary"
                radius="sm"
                onPress={() => (mode ? loginHandler() : userHandlerNewUser())}
                className="shadow-md shadow-gray-600"
              >
                {mode ? "Iniciar Sesión" : "Registrarme"}
              </Button>
              <Button
                variant="faded"
                color="primary"
                radius="sm"
                onPress={() => {
                  setmode(!mode);
                }}
                className="shadow-md shadow-gray-600"
              >
                {mode ? "No tengo cuenta" : "Ya tengo cuenta"}
              </Button>
            </div>
          </div>

          <div className="col-span-2 max-h-screen"></div>
        </div>
      </div>
      <div className="col-span-1"></div>
    </div>
  );
};

export default AuthScreen;
