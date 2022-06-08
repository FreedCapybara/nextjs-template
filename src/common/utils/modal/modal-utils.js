import { createRoot } from 'react-dom/client';

export const modalUtils = {
  _modalRoot: null,
  openModalAsync,
  openModal,
  closeModal,
  getModalRoot
};

function openModalAsync(ModalComponent, props) {
  return new Promise((resolve, reject) => {
    const modalRoot = modalUtils.getModalRoot();
    const modalProps = {
      ...props,
      resolve,
      reject
    };
    modalRoot.render(<ModalComponent { ...modalProps } />);
    document.body.classList.add('modal-open');
  }).finally(() => {
    closeModal();
  });
}

function openModal(ModalComponent, modalProps) {
  const modalRoot = modalUtils.getModalRoot();
  modalRoot.render(<ModalComponent { ...modalProps } />);
  document.body.classList.add('modal-open');
}

function closeModal() {
  const modalRoot = modalUtils.getModalRoot();
  modalRoot.render(null);
  document.body.classList.remove('modal-open');
}

function getModalRoot() {
  if (modalUtils._modalRoot) {
    return modalUtils._modalRoot;
  }

  let element = document.getElementById('modal-root');
  if (!element) {
    element = document.createElement('div');
    element.id = 'modal-root';
    document.body.appendChild(element);
  }

  const root = createRoot(element);
  modalUtils._modalRoot = root;
  return root;
}

