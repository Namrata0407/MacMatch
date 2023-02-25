
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure,
  Button,
} from '@chakra-ui/react'
import React from 'react';
import { MdOutlineDeleteOutline } from "react-icons/md";
import { useDispatch } from 'react-redux';
import {  deleteUserAdminData } from '../../../Redux/AdminRedux/admin.action';

export const AdminDeleteUserModal = ({id}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = React.useRef()
const dispatch = useDispatch();

  const handleDelete = ()=>{
    dispatch(deleteUserAdminData(id))
    onClose()
  }
  return (
    <>
      <MdOutlineDeleteOutline color="red" cursor={"pointer"} onClick={onOpen} />


      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              Remove User
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='red' onClick={handleDelete} ml={3}>
                Remove
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  )
}