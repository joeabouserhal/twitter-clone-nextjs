import React, { useEffect, useState } from "react";
import { BsPlus } from "react-icons/bs";

const ActionButton = () => {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const handleEsc = (event: { keyCode: number }) => {
      if (event.keyCode === 27) {
        setModalOpen(false);
      }
    };
    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  return (
    <>
      <button className="right-0 bottom-0 fixed bg-blue-500 rounded-full m-10">
        <BsPlus
          size={60}
          onClick={() => {
            setModalOpen(true);
          }}
        />
      </button>
      {modalOpen && (
        <div className="top-0 bottom-0 right-0 left-0 w-screen h-screen fixed bg-black bg-opacity-50 flex backdrop-blur-md">
          <div className="bg-stone-900 m-auto p-4 rounded-lg border border-stone-500 max-w-[80%] ">
            <h1 className="text-2xl mb-4">Add Tweet</h1>
            <div className="flex flex-col gap-2 my-1">
              <input type="text" className="input" placeholder="username" />
              <input type="text" className="input" placeholder="tweet" />
            </div>
            <div className="flex gap-2 justify-end mt-4">
              <button
                className="text-blue-500 rounded-md p-1 text-lg"
                onClick={() => {
                  setModalOpen(false);
                }}
              >
                Close
              </button>
              <button className="bg-blue-500 rounded-md p-1 text-lg">
                Tweet
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ActionButton;
