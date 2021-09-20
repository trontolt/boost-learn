import { useEffect } from 'react';
import './modal.css';

const Modal = props => {
    let { taskData, closeModal } = props;
    useEffect(() => {
        document.getElementsByClassName('modal-short')[0].innerHTML =
            taskData.shortDesc;
        document.getElementsByClassName('modal-description')[0].innerHTML =
            taskData.description;
    }, [taskData]);
    return (
        <div className="modal-container">
            <div className="modal-content">
                <span onClick={closeModal} className="close">
                    &times;
                </span>
                <div className="modal-title">{taskData.title}</div>
                <div className="modal-short">Not provided</div>
                <div className="modal-description">Not provided</div>
            </div>
        </div>
    );
};

export default Modal;
