import React, { Dispatch, SetStateAction } from 'react'
import {motion} from "framer-motion"

const ToggleButton = ({
  setOpen,
  open
}: {
  setOpen: Dispatch<SetStateAction<boolean>>;
  open:boolean
}) => {
  return (
    <button onClick={() => setOpen((d) => !d)}>
      <svg width="23" height="23" viewBox="0 0 23 23">
        <motion.path
          d="M5 5 L18 5"
          strokeWidth="4"
          stroke="black"
          strokeLinecap="round"
          variants={{
            open: { d: "M5 5 L18 20" },
            close: { d: "M5 5 L18 5" },
          }}
        />

        <motion.path
          d="M5 12 L18 12"
          strokeWidth="4"
          stroke="black"
          strokeLinecap="round"
          variants={{
            open: { opacity:0},
            close: { opacity:1 },
          }}
        />

        <motion.path
          strokeWidth="4"
          stroke="black"
          strokeLinecap="round"
          variants={{
            open: { d: "M5 19 L18 5" },
            close: { d: "M5 19 L18 19" },
          }}
        />
      </svg>
    </button>
  );
};

export default ToggleButton