import React from "react";
import "./Pfp.css";

function Pfp() {
  return (
    <div className="pfp">
      <img
        src="/PFP.webp"
        alt="pfp"
        onLoad={() => console.log("Image chargée")}
        onError={() => console.log("Erreur de chargement de l'image")}
      />

      <div className="infos">
        <p className="infos__text">
          Bonjour ! Je m'appelle Arnaud, et je suis développeur web. J'ai
          terminé ma reconversion professionnelle en Octobre 2025. Passionné
          d'informatique, je crée des scripts pour faire du pentesting avec le
          Flipper Zero. Ma prochaine étape sera de me former en réseau pour
          devenir un DevOps.
        </p>
      </div>
    </div>
  );
}

export default Pfp;
