import AOS from 'aos';
import 'aos/dist/aos.css';

export default () => {
  if (process.client) {
    window.onNuxtReady(() => {
      AOS.init({
        duration: 800,
      });
    });
  }
};
