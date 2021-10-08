import styles from "./styles.scss";
import React, { useEffect, useState } from "react";

import { Xmark } from "../../animations/Xmark";
import { Checkmark } from "../../animations/Checkmark";

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
