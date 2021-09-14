import './modal.css';

const Modal = props => {
    let { taskData, closeModal } = props;
    return (
        <div className="modal-container">
            <div className="modal-content">
                <span onClick={closeModal} className="close">
                    &times;
                </span>
                <p>{taskData}</p>
            </div>
        </div>
    );
};

export default Modal;
