import swal from 'sweetalert2';

export const ALERT_ICON = {
  INFO: 'info',
  WARNING: 'warning',
  ERROR: 'error',
  SUCCESS: 'success',
  QUESTION: 'question'
};

export const customAlert = ({icon = ALERT_ICON.INFO, title = '', text = '', callback = ()=>{} }) => {
  swal.fire({
    icon: icon,
    title: title,
    text: text
  }).then(callback());


}


