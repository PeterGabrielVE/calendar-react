import { useState } from 'react';
import Modal from 'react-modal'

const customStyles = {
    content: {
      zIndex: 4,  
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

Modal.setAppElement('#root');

export const CalendarModal = () => {

    const [isOpen, setIsOpen] = useState(true)
    const onCloseModal = () =>{
        //setIsOpen(false);
        console.log('object')
        setIsOpen( false );
    }
    
    
  return (
    <Modal
    isOpen={ true }
    onRequestClose={ onCloseModal }
    style={ customStyles } 
    className="modal"
    overlayClassName="modal-fondo"
    closeTimeoutMS={ 200 }>
        <h1>Hola mundo</h1>
        <hr />
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt necessitatibus quisquam voluptatum eaque laboriosam, incidunt eos placeat nobis doloribus enim et error cumque sit dolor fugit vero assumenda nisi molestiae.</p>
    </Modal>
  )
}
