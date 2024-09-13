import { Image } from "@nextui-org/react";
import { Product } from "../../../config/helpers/stores-types";

interface CardProductProps {
  product: Product
}

const CardProduct = ({ product} : CardProductProps  )  => {
  return (
    <div className="w-full h-40 bg-blue-300 rounded-lg flex items-center shadow-lg shadow-blue-200 gap-8 overflow-hidden p-2">
      <Image
        width={100}
        className="p-1 object-contain"
        alt="NextUI hero Image"
        src={product.image}
      />
      <div className="w-72 flex flex-col">
        <span className="text-medium line-clamp-2 overflow-clip mb-1">
          {product.title}
        </span>
        <span className="text-small font-bold">Precio: { product.price }</span>
        <span className="text-small font-bold">Comentarios Positivos: { product.positive_comments}</span>
        <span className="text-small font-bold">Comentarios Negativos: { product.negative_comments}</span>
        <span className="text-small font-bold">Comentarios Neutrales: { product.neutral_comments }</span>
      </div>
    </div>
  );
};

export default CardProduct;
