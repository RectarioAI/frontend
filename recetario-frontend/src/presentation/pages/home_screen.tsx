import { Button, Input } from "@nextui-org/react";
import { useSearch } from "../../config/helpers/stores";

const HomeScreen = () => {

    const search = useSearch((state) => state.search);
    const setSearch = useSearch((state) => state.setSearch);
    const fetchSearch = useSearch((state) => state.fetchSearch);

    return (
        <div className="grid grid-cols-12">
            <div className="col-span-2 flex flex-col justify-center items-center">
                <h2 className="text-5xl text-blue-500 pb-20 pt-40">Bienvenido</h2>
                <span className="text-2xl text-blue-300">
                    Ingresa el producto que deseas buscar y comprar, te mostraremos los mejores calificados
                </span>
            </div>
            <div className="col-span-4 pt-60">
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
            <div className="col-span-4"></div>
            <div className="col-span-2"></div>
        </div>
    );
    }

export default HomeScreen;