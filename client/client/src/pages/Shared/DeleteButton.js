import { Button , Text } from '@mantine/core';
import { modals } from '@mantine/modals';

export default function DeleteButton({onconfirm,oncancel}) {
  const openDeleteModal = () =>
    modals.openConfirmModal({
      title: 'Confirm The Operation',
      centered: true,
      children: (
        <Text size="sm">
          Are you sure you want to delete? This action is destructive and you will have
          to contact support to restore your data.
        </Text>
      ),
      labels: { confirm: 'Delete Song', cancel: "No don't delete it" },
      confirmProps: { color: 'red' },
      onCancel: () => oncancel(),
      onConfirm: () => onconfirm (),
    });

  return <Button onClick={openDeleteModal} color="red">Delete account</Button>
}