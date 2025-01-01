import React from 'react'
import SignUpBox from './SignUpBox'
function Modal() {
        return (
          <dialog id="my_modal_2" className="modal fixed top-0 left-0 w-full h-full bg-none flex justify-center items-center z-50">
            <div className="modal-box bg-white p-6 rounded-lg max-w-lg w-full">
              <SignUpBox />
            </div>
          </dialog>
        );
      }

export default Modal;
