import { eventBus } from '../services/event-bus-service.js';
export default {
  props: ['bookId'],
  template: `
    <div>
      <button class="back-page" @click="backPage">back page</button>
      <button class="next-page" @click="nextPage">next page</button>
    </div>`,
  data() {
    return {};
  },
  methods: {
    backPage() {
      console.log('this.bookId:', this.bookId);
      eventBus.$emit('backPage', this.bookId);
    },
    nextPage() {
      console.log('this.bookId:', this.bookId);
      eventBus.$emit('nextPage', this.bookId);
    },
  },
  computed: {},
  components: {},
};
