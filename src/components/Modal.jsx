export default function Modal({  errorMessage = null }) {
  
    return (
  
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="btn-close fs-6" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                <div className="modal-body">
                    <h3 className="text-center" style={{ color: errorMessage ? "red" : "green" }}>
                            {errorMessage != null
                            ? errorMessage
                            : "Votre formulaire a été envoyé avec succés"}
                    </h3>
                </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
}