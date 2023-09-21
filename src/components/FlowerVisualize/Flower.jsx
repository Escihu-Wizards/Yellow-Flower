import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export const Flower = () => {
  const [decodedMessage, setDecodedMessage] = useState("");
  const { message } = useParams();

  useEffect(() => {
    setDecodedMessage(atob(message));
  }, [message]);

  return (
    <div className="h-full">
        <h1 className="text-3xl font-bold mb-6">
            Alguien que te quiere te envio una flor!
            <span role="img" aria-label="flower">
            🌻
            </span>
        </h1>

        <img 
            className="w-full max-w-lg mx-auto rounded-lg" 
            src="https://www.bloomberglinea.com/resizer/-duYn76ZQbqQ4X1XzJkLSOxu7p0=/600x0/filters:format(webp):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/bloomberglinea/NJKR6OXHYZA5TKBTNL66O5BM3A.jpg" 
            alt="imagen de flores" 
        />

        <div className="w-full my-5 text-start">
            <h3 className="w-full text-start text-2xl mb-1">Y un mensaje...</h3>
            <p className="text-xl">
                {decodedMessage}
            </p>
        </div>


        <p className="">
            Desarrollado por <a className="text-teal-400 hover:text-teal-600" href="https://github.com/Escihu-Wizards" target="_blank" rel="noopener noreferrer">Escihu-Wizards</a>
        </p>
    </div>
  );
};
