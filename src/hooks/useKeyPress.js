/*
 * @Author: junjie.lean
 * @Date: 2020-01-09 16:09:35
 * @Last Modified by: junjie.lean
 * @Last Modified time: 2020-01-09 17:06:13
 */

import React, { useEffect, useState } from "react";

export default function useKeyPress(keyCode) {
  const [isCheckedPass, setCheckedPass] = useState(false);

  const keydownHandle = e => {
    if (e.keyCode === keyCode) {
      console.log("key down at:", e.keyCode);
      setCheckedPass(true);
    }
  };

  const keyupHandle = e => {
    if (e.keyCode === keyCode) {
      setCheckedPass(false);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", keydownHandle);
    document.addEventListener("keyup", keyupHandle);

    return () => {
      document.removeEventListener("keydown", keydownHandle);
      document.removeEventListener("keyup", keyupHandle);
    };
  }, []);

  return isCheckedPass;
}
