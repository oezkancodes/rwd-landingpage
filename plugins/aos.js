import AOS from 'aos';
import 'aos/dist/aos.css';

export default (context) => {
  if (process.client) {
    AOS.init({
      duration: 800,
    });
  }
};
