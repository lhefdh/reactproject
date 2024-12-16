import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


export default function ModalComponent({ errorMessage, closeModal, show}) {


    
    return (
  
        <div>
            <Modal show={show} onHide={closeModal}>
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <h3 className="text-center" style={{ color: errorMessage ? "red" : "green" }}>
                        {(errorMessage!=null)? errorMessage: "Votre formulaire a été envoyé avec succés"}
                    </h3>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={closeModal}>
                        Fermer
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
