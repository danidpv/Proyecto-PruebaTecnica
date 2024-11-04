import { useEffect, useState } from "react";
import { getRandomFact } from "./services/facts";
import { useCatImage } from "./hooks/useCatImage";
import { useCatFact } from "./hooks/useCatFact";

export function App() {
  const { fact, refreshRandomFact } = useCatFact();
  const { imageUrl } = useCatImage({ fact });

  //Recuperar la cita al cargar pagina

  const handleClick = async () => {
    refreshRandomFact();
  };

  return (
    <>
      <h1>App de gatitos</h1>

      <button onClick={handleClick}>Get new fact</button>
      {fact && <p>{fact}</p>}
      {imageUrl && (
        <img
          src={`${CAT_PREFIX_IMAGE_URL} ${imageUrl}`}
          alt={`Image extracted usiong the first three words for ${fact}`}
        />
      )}
    </>
  );
}
