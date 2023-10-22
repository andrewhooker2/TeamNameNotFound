import React, { useState } from 'react';
import Modal from "../../CommonComponents/Modal Component/LogOutPopUp";
import Button from "../../CommonComponents/Buttons/BasicButtonComponent";
import { useNavigate } from 'react-router-dom';
import { auth } from '../../configurations/firebase';
import logging from '../../configurations/logging';

function Logout() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  } 

  const navigate = useNavigate();

  const logout = () => {
    auth.signOut()
    .then(result => {
        logging.info(result);
        navigate('/login');
    })
    .catch(error => logging.error(error));
}

  return (
    <>
      <Button color={"light"} onClick={openModal} title={"Logout"}/>
      <Modal size='m' isOpen={isOpen} onClose={closeModal}>
        
        <Button color={"dark"} onClick={logout} title={"Logout"}/>
        <Button color={"light"} onClick={closeModal} title={"Cancel"}/>

      </Modal>
    </>
  );
}

export default Logout;