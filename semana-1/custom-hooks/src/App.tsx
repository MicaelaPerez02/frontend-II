import { useState } from "react";
import { Modal, Sidebar } from "./components";
import "./App.css";
import { useToggle } from "./hooks/useToggle";

export default function App() {
  const { isOpen: isOpenSidebar, toggle: toggleSidebar } = useToggle();
  const { isOpen: isOpenModal, toggle: toggleModal } = useToggle();

  return (
    <div className="h-screen w-full">
      <div className="container">
        <Sidebar visible={isOpenSidebar} close={toggleSidebar} />
        <h1>Custom Hook</h1>
        <div className="button-container">
          <button onClick={toggleSidebar}>Open sidebar</button>
          <button onClick={toggleModal}>Open modal</button>
        </div>
        <Modal visible={isOpenModal} close={toggleModal} />
      </div>
    </div>
  );
}
