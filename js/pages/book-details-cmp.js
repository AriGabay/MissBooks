import longText from '../cmps/long-text-cmp.js';
import reviewAdd from '../cmps/review-add-cmp.js';
import { bookService } from '../services/book-services.js';
import { eventBus } from '../services/event-bus-service.js';
export default {
  template: `
  <div v-if="bookModal" class="book-details">
    <div class="information">
      <h2>Title: {{bookModal.title}}</h2>
      <review-add @changeInput="review"/>
      <p>Subtitle: {{bookModal.subtitle}}</p>
      <h2 v-for="author in bookModal.authors">author: {{author}}</h2>
      <p>publishedDate: {{publishedDate}}</p>
      <long-text :txt="bookModal.description" />
      <p v-for="category in bookModal.categories">category: {{category}}</p>
      <p>language: {{bookModal.language}}</p>
      <p>pageCount: {{pageCount}}</p>
      <img v-if="bookModal.listPrice.isOnSale" src="../img/sale.jpg" class="img-sale" />
      <div>
        <span>price:</span>
        <p :class="colorPrice">{{price}}</p>
      </div>
      <h3>Reviews</h3>
      <div class="show-review" v-for="review in bookModal.reviews">
        <p>Booker Reader: {{review.bookerReader}}</p>
        <p>Booker Rate: {{review.review}} star</p>
        <p>Read At: {{review.readAt}}</p>
        <p>Review: {{review.textarea}}</p>
      </div>
    </div>
  </div>`,
  data() {
    return {
      bookModal: null,
    };
  },
  methods: {
    review(reviewFormUser) {
      if (this.bookModal) {
        bookService.addReview(this.bookModal.id, reviewFormUser).then((book) => {
          this.getBookById(book.id);
          const msg = {
            txt: 'Review saved succesfully',
            type: 'success',
          };
          eventBus.$emit('show-msg', msg);
        });
      }
    },
    getBookById(bookId) {
      bookService.getById(bookId).then((book) => {
        this.bookModal = book;
      });
    },
  },
  computed: {
    colorPrice() {
      if (this.bookModal.listPrice.amount > 150) return 'red';
      if (this.bookModal.listPrice.amount > 20) return 'green';
    },
    price() {
      if (this.bookModal.listPrice.currencyCode === 'USD') {
        return this.bookModal.listPrice.amount + '$';
      }
      if (this.bookModal.listPrice.currencyCode === 'ILS') {
        return this.bookModal.listPrice.amount + '₪';
      }
      if (this.bookModal.listPrice.currencyCode === 'EUR') {
        return this.bookModal.listPrice.amount + '€';
      }
    },
    pageCount() {
      if (this.bookModal.pageCount > 500) return 'Long reading';
      if (this.bookModal.pageCount > 200) return 'Decent Reading';
      if (this.bookModal.pageCount < 100) return 'Light Reading';
    },
    publishedDate() {
      let currYear = new Date().getFullYear();
      if (currYear - this.bookModal.publishedDate > 10) return 'Veteran Book';
      else return 'New!';
    },
  },
  created() {
    const bookId = this.$route.params.bookId;
    this.getBookById(bookId);
  },
  components: {
    longText,
    reviewAdd,
  },
};
