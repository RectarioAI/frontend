/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Input } from "@nextui-org/react";
import { useSearch } from "../../config/helpers/stores";
import CardProduct from "../components/home/card_product";
import { motion } from "framer-motion";
import WaitingComponent from "../components/home/waiting_component";
import { useEffect } from "react";

const HomeScreen = () => {
  const search = useSearch((state) => state.search);
  const setSearch = useSearch((state) => state.setSearch);
  const fetchSearch = useSearch((state) => state.fetchSearch);
  const productList = useSearch((state) => state.productList);
  const resetProductList = useSearch((state) => state.resetProductList);
  const loading = useSearch((state) => state.loading);

  useEffect(() => {
    if (search === "") {
      resetProductList();
    }
  }, [search]);

  return (
    <div className="grid grid-cols-12 h-screen max-h-screen">
      <div className="col-span-3 h-screen flex flex-col justify-center items-center">
        <h2 className="text-5xl text-blue-500 pb-16 font-semibold">
          Bienvenid@
        </h2>
        <span className="text-2xl text-blue-500 font-semibold">
          Ingresa el producto que deseas buscar y comprar, te mostraremos los
          mejores calificados por la comunidad
        </span>
      </div>
      <div className="flex flex-col justify-center items-center col-span-4">
        <Input
          isClearable
          variant="bordered"
          color="primary"
          type="text"
          label="Producto"
          placeholder="Escribe lo que quieres buscar"
          labelPlacement="inside"
          className="p-10"
          value={search}
          onValueChange={setSearch}
        />
        <Button
          size="md"
          variant="solid"
          color="primary"
          className="w-60"
          onPress={() => fetchSearch(search)}
        >
          Buscar
        </Button>
      </div>
      {search !== "" ? (
        <div className="col-span-5 flex flex-col justify-center gap-1 overflow-y-scroll">
          {!loading ? (
            productList.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index }}
                className="p-2"
              >
                <CardProduct product={product} />
              </motion.div>
            ))
          ) : (
            <WaitingComponent />
          )}
        </div>
      ) : (
        <div className="col-span-5 flex flex-col justify-center">
          <h1 className="px-5 text-3xl text-blue-500">
            Ingresa un producto para buscar
          </h1>
        </div>
      )}
    </div>
  );
};

export default HomeScreen;
