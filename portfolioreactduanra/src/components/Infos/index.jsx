import React, { useState } from "react";
import "./Infos.css";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

const Infos = () => {
  const [info, setInfo] = useState({
    name: "Arnaud",
    job: "Web Developer",
    email: "arnaudscrivo.dev@proton.me",
  });

  const searchParams = useSearchParams();

  useEffect(() => {
    const name = searchParams.get("name");
    const job = searchParams.get("job");
    const email = searchParams.get("email");

    if (name || job || email) {
      setInfo({
        name: name || info.name,
        job: job || info.job,
        email: email || info.email,
      });
    }
  }, [searchParams, info.name, info.job, info.email]);

  return (
    <div className="infos">
      <div className="infos-container">
        <div className="infos-content">
          <h1 className="infos-title">
            {info.name} {info.job}
          </h1>
          <p className="infos-subtitle">{info.email}</p>
        </div>
      </div>
    </div>
  );
};

export default Infos;
