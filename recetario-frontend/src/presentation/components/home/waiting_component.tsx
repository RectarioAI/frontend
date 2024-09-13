import { ReactTyped } from "react-typed";

const WaitingComponent = () => {
  const Phrases = [
    "¡Estamos leyendo los comentarios por ti! Pronto tendrás recomendaciones para tu compra.",
    "Un momento, estamos buscando lo mejor para ayudarte a elegir con confianza.",
    "Analizando las opiniones de otros usuarios... ¡Ya casi tenemos una respuesta!",
    "¡Estamos revisando las reseñas para que tomes la mejor decisión!",
    "Buscando los comentarios más útiles... ¡Esto no tardará mucho!",
    "Escaneando las opiniones de otros compradores, pronto tendrás nuestros resultados.",
    "Estamos evaluando las opiniones para darte una recomendación objetiva.",
    "¡Gracias por tu paciencia! Estamos comparando comentarios para darte una mano en tu compra.",
    "Averiguando qué dicen otros usuarios... ¡En breve te mostramos los resultados!",
    "Filtrando los comentarios positivos, negativos y neutrales... ¡Estamos en ello!",
  ];

  return (
    <div className="w-full h-full flex items-center p-x-10">
      <h1 className="text-3xl">
        <ReactTyped
          className="text-blue-500"
          strings={Phrases}
          typeSpeed={30}
          backSpeed={20}
          backDelay={4000}
          loop
        />
      </h1>
    </div>
  );
};

export default WaitingComponent;
