import iziToast from 'izitoast';

const IziToastSettings = {
  timeout: 3000,
  close: false,
  closeOnClick: true,
  icon: null,
  position: 'topRight',
  transitionIn: 'fadeInDown',
  transitionOut: 'fadeOutUp',
};

export class Messages {
  static success(message) {
    iziToast.success({
      title: 'OK',
      titleColor: 'green',
      message: message,
      messageColor: 'green',

      progressBarColor: 'green',
      ...IziToastSettings,
    });
  }
  static error(message) {
    iziToast.error({
      title: 'Error',
      titleColor: 'red',
      message: message,
      messageColor: 'red',
      progressBarColor: 'red',
      ...IziToastSettings,
    });
  }
  static warning(message) {
    iziToast.warning({
      title: 'Caution',
      message: message,
      titleColor: 'red',
      messageColor: 'red',
      progressBarColor: 'red',
      ...IziToastSettings,
    });
  }
}
