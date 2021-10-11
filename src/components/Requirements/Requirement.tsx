// import styles from "./Requirements.module.scss";
import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { Xmark } from "../../animations/Xmark";
import { Checkmark } from "../../animations/Checkmark";

export const Requirement = ({ value, requirement }: any) => {
  const [isValid, setIsValid] = useState();

  useEffect(() => {
    setIsValid(requirement.validator(value));
  }, [value, requirement]);

  return (
    <div className={clsx("requirement")}>
      <style jsx>{`
        .requirement {
          height: 35px;
          display: flex;
          align-items: center;
        }
        .requirement p {
          font-size: 14px;
          margin-left: 10px;
          font-weight: bold;
          font-family: sans-serif;
        }
        .invalid {
          color: red;
        }
        .valid {
          color: #7ac142;
        }
      `}</style>
      {isValid ? <Checkmark /> : <Xmark />}

      <p className={clsx(isValid ? "valid" : "invalid")}>{requirement.text}</p>
    </div>
  );
};
