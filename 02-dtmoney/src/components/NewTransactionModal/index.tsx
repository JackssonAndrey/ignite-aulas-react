import Modal from 'react-modal';
import { Container } from './styles';

interface newTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void; 
}

export function NewnTransactionModal({ isOpen, onRequestClose }: newTransactionModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container>
        <h2>Cadastrar Transação</h2>

        <input 
          type="text"
          placeholder="Título" 
        />

        <input 
          type="number"
          placeholder="Valor" 
        />

        <input 
          type="text"
          placeholder="Categoria" 
        />

        <button type="submit">
          Cadastrar
        </button>
      </Container>
    </Modal>
  );
}