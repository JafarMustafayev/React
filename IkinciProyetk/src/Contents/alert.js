import Swal from "sweetalert2";

const showBasicSwal = (title, icon, message, timer = 2000) => {
  Swal.fire({
    position: "top-end",
    title: title,
    icon: icon,
    text: message,
    showConfirmButton: false,
    timer: timer,
  });
};

export { showBasicSwal };
