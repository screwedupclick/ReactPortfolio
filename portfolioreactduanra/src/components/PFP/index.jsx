import React from "react";
import "./Pfp.css";
import StackIcon from "tech-stack-icons";

function Pfp() {
  return (
    <>
      <div className="pfp__container">
        <div className="pfp">
          <img
            className="pfp__image"
            src="/PFP.webp"
            alt="pfp"
            onLoad={() => console.log("Image chargée")}
            onError={() => console.log("Erreur de chargement de l'image")}
          />

          <div className="pfp__infos">
            <p className="pfp__infos__text">
              Bonjour ! Je m'appelle Arnaud, et je suis développeur web. J'ai
              terminé ma reconversion professionnelle en Octobre 2025. Passionné
              d'informatique, je crée des scripts pour faire du pentesting avec
              le Flipper Zero. Ma prochaine étape sera de me former en réseau
              pour devenir un DevOps.
            </p>
          </div>
        </div>
      </div>

      <div className="tech__stack">
        <p className="tech__stack__text">Tech stack utilisés :</p>
      </div>
      <div className="tech__stack__icons">
        <div style={{ width: 60, height: 60 }}>
          <StackIcon name="mongodb" />
        </div>
        <div style={{ width: 60, height: 60 }}>
          <StackIcon name="react" />
        </div>
        <div style={{ width: 60, height: 60 }}>
          <StackIcon name="python" />
        </div>
        <div style={{ width: 60, height: 60 }}>
          <StackIcon name="git" />
        </div>
      </div>
    </>
  );
}

export default Pfp;
