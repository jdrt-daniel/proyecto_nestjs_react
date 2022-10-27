import Swal from "sweetalert2";

const ConfirmAlert = (title, message, icon) => {
  Swal.fire({
    title: title,
    text: message,
    icon: icon,
    confirmButtonText: "Si, inhabilitar",
    confirmButtonColor: "#cf2525",
    cancelButtonText: "Cancelar",
    showCancelButton: true,
  });
};
export default ConfirmAlert;
