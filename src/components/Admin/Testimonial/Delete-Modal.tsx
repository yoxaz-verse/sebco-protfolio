import React, { useState } from 'react';
import { Modal, ModalBody, ModalContent, ModalHeader, ModalFooter, Button } from '@nextui-org/react';
import { deleteImage } from '@/backend/Services/storage';
import { deleteData } from '@/backend/Services/firestore';

interface DeleteModalProps {
  title: string;
  isOpen: boolean;
  onOpenChange: () => void;
  deletedata: any;
  generateRandomId: () => any;
}

const DeleteModal: React.FC<DeleteModalProps> = ({ deletedata, title, isOpen, onOpenChange, generateRandomId }) => {
  const [submitting, setSubmitting] = useState<boolean>(false);

  const handleDelete = async (close: () => void) => {
    try {
      setSubmitting(true);
      if (deletedata.image) {
        const image_delete_resp = await deleteImage(deletedata.image);
        if (!image_delete_resp.status) {
          throw new Error('Failed to delete the image');
        }
      }
      const data_delete_resp = await deleteData(title, deletedata.id);
      if (!data_delete_resp.status) {
        throw new Error('Failed to delete the testimonial');
      }
      setSubmitting(false);
      close();
      alert(`${title} deleted successfully`);
      generateRandomId();
    } catch (error) {
      console.error('Error deleting testimonial:', error);
      alert('An error occurred while deleting the testimonial: ' + error);
      setSubmitting(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader>Delete {title}</ModalHeader>
            <ModalBody>
              Are you sure you want to delete this {title}? This action cannot be undone.
            </ModalBody>
            <ModalFooter>
              <Button color="secondary" onPress={onClose}>
                Cancel
              </Button>
              <Button
                isLoading={submitting}
                color="danger"
                onPress={() => handleDelete(onClose)}
              >
                Confirm
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default DeleteModal;
