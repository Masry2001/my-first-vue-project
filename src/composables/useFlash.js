import Swal from 'sweetalert'

export function useFlash() {
  function flash(title = 'Success', message, type = 'success') {
    Swal(title, message, type)
  }
  return flash
}
