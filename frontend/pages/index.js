import React, { useState } from "react";
import Modal from "../components/Model";

export default function Home() {

  const [open, setOpen] = useState(false);

  return (
    <div className="App">
      <button
        className="openModalBtn"
        onClick={() => {
          setOpen(true);
        }}
      >
        Open Modal
      </button>

      {open && <Modal setOpen={setOpen} />}
    </div>
  );
}
