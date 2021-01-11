import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { ReactComponent as MentorAcceptGraphic } from '../../../src/assets/me/mentorship-started.svg'

import UserContext from '../../context/userContext/UserContext';
import { Modal } from './Modal';

import Button from '../components/Button';



export const MentorAccept = (modalVisable) => {

  
  return (
    <Modal title="Accept Mentor" closeModal={closeModal}>
      <MentorAcceptGraphic/>

      <Button skin="secondary" onClick={handleAccept}> 
        Close
      </Button>
    </Modal>
  )
}




// issue #755
// accept mentor modal