import { FC, useEffect, useState } from 'react';
import './modal.scss';
import { modalProps } from './modal.type';
import { close } from '../../../assets/modalIcons';

const Modal: FC<modalProps> = ({
  closeModal,
  closeButton = true,
  open,
  additionalClass,
  children,
}) => {
  const [initiated, setInitiated] = useState(false);

  useEffect(() => {
    if (open) {
      setInitiated(true);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      {initiated ? (
        <div onClick={closeModal} className={open ? 'dark-bg' : 'hiddenss'}>
          <div
            onClick={(e) => e.stopPropagation()}
            className={`modal-container ${additionalClass}`}
          >
            {closeButton && (
              <div className="modal-header">
                <span onClick={() => closeModal()} className="close-animate">
                  {close}
                </span>
              </div>
            )}
            {children}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
