import Swal from 'sweetalert'
export default {
  methods: {
    flash(title = 'Success', message, type = 'success') {
      Swal(title, message, type)
    },
  },
}
