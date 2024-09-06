import React, { useEffect, useState } from "react";
import { jsx } from "react/jsx-runtime";

const useLocalStorage = (key, defaulValue) => {
  const [value, setValue] = useState(() => {
    let currentValue;
    try {
      currentValue = JSON.parse(
        localStorage.getItem(key) || String(defaulValue)
      );
    } catch (error) {
      console.log(error);
      currentValue = String(defaulValue);
    }
    return currentValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;
