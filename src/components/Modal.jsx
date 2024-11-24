export default function Modal({  errorMessage = null }) {
  
    return (
        
      
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" className="btn-close fs-6" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                <div class="modal-body">
                    <h3 className="text-center" style={{ color: errorMessage ? "red" : "green" }}>
                            {errorMessage != null
                            ? errorMessage
                            : "Votre formulaire a été envoyé avec succés"}
                    </h3>
                </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
   
    );

}