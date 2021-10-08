import { Xmark } from "../Xmark";
import styles from "./styles.scss";
import { Checkmark } from "../Checkmark";
import React, { useEffect, useState } from "react";

export const Requirement = ({ value, requirement }: any) => {
  const [isValid, setIsValid] = useState();

  useEffect(() => {
    setIsValid(requirement.validator(value));
  }, [value, requirement]);

  return (
    <div className={styles.requirement}>
      {isValid ? <Checkmark /> : <Xmark />}

      <p className={isValid ? styles.valid : styles.invalid}>
        {requirement.text}
      </p>
    </div>
  );
};
