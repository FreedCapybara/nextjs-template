import * as ReactDOM from 'react-dom';

export const modalUtils = {
  openModalAsync,
  openModal,
  closeModal,
  getModalRoot
};

function openModalAsync(ModalComponent, props) {
  return new Promise((resolve, reject) => {
    const modalRoot = getModalRoot();
    const modalProps = {
      ...props,
      resolve,
      reject
    };
    ReactDOM.render(<ModalComponent { ...modalProps } />, modalRoot);
  }).finally(() => {
    closeModal();
  });
}

function openModal(ModalComponent, modalProps) {
  const modalRoot = getModalRoot();
  ReactDOM.render(<ModalComponent { ...modalProps } />, modalRoot);
}

function closeModal() {
  const modalRoot = document.getElementById('modal-root');
  if (modalRoot) {
    ReactDOM.unmountComponentAtNode(modalRoot);
    modalRoot.parentNode.removeChild(modalRoot);
    document.body.classList.remove('modal-open');
  }
}

function getModalRoot() {
  let modalRoot = document.getElementById('modal-root');
  if (!modalRoot) {
    modalRoot = document.createElement('div');
    modalRoot.id = 'modal-root';
    document.body.appendChild(modalRoot);
    document.body.classList.add('modal-open');
  }
  return modalRoot;
}

