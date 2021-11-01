import { useEffect } from 'react';
import './modal.css';

const Modal = props => {
    let { taskData, closeModal, isModalOpen } = props;
    useEffect(() => {
        document.getElementsByClassName('modal-short')[0].innerHTML =
            taskData.shortDesc;
        document.getElementsByClassName('modal-description')[0].innerHTML =
            taskData.description;
    }, [taskData]);

    useEffect(() => {
        let listener = function (event) {
            if (event.key === 'Escape') {
                closeModal();
            }
        };
        if (isModalOpen) {
            window.addEventListener('keydown', listener);
        }
        return () => {
            window.removeEventListener('keydown', listener);
        };
    }, [closeModal, isModalOpen]);

    return (
        <div className="modal-container">
            <div
                className="modal-content"
                onKeyPress={e => {
                    console.log(e);
                }}
            >
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
