import { toast } from "react-toastify";

const show={
   error (title: string) {
        toast(title, {
          hideProgressBar: false,
          autoClose: 2000,
          type: 'error',
          position: 'top-right'
        })
      },
      success (title: string) {
        toast(title, {
          hideProgressBar: false,
          autoClose: 2000,
          type: 'success',
          position: 'top-right'
        })
      }
}

export default show