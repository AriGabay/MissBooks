import bookApp from './pages/book-app-cmp.js';
import appHeader from './pages/app-header.js';
import userMsg from './cmps/user-msg.cmp.js';
import { myRouter } from './routes.js';
const options = {
  router: myRouter,
  el: '#app',
  template: `
  <section class="app-container">
    <app-header/>
    <user-msg/>
  <router-view />
  </section>
`,
  components: {
    bookApp,
    appHeader,
    userMsg,
  },
};

const app = new Vue(options);
