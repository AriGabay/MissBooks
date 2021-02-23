export default {
  props: ['book'],
  template: `
  <section class="book-container">
    <div class="book-preview">
      <p>title: {{bookToShow.title}}</p>
      <p>price: {{price}} </p>
      <img :src="bookToShow.thumbnail"/>      
    </div>
  </section>
  `,
  data() {
    return {
      bookToShow: this.book,
    };
  },
  methods: {},
  computed: {
    price() {
      if (this.bookToShow.listPrice.currencyCode === 'USD') {
        return this.bookToShow.listPrice.amount + '$';
      }
      if (this.bookToShow.listPrice.currencyCode === 'ILS') {
        return this.bookToShow.listPrice.amount + '₪';
      }
      if (this.bookToShow.listPrice.currencyCode === 'EUR') {
        return this.bookToShow.listPrice.amount + '€';
      }
    },
  },
  create: {},
};
