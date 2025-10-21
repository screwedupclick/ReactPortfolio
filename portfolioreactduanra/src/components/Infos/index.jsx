import React, { useState } from "react";
import "./Infos.css";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

function Infos() {
  return (
    <div className="infos">
      <p className="infos__text">
        Bonjour ! Je m'appelle Arnaud, et je suis développeur web. J'ai terminé
        ma reconversion professionnelle en Octobre 2025. Passionné
        d'informatique, je crée des scripts pour faire du pentesting avec le
        Flipper Zero. Ma prochaine étape sera de me former en réseau pour
        devenir un DevOps.
      </p>
    </div>
  );
}

export default Infos;
