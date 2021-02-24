import { bookService } from '../services/book-services.js';
import bookList from '../cmps/books-list-cmp.js';
import bookFilter from '../cmps/book-filter.cmp.js';
import { eventBus } from '../services/event-bus-service.js';
export default {
  template: `
  <main>
    <book-filter @filtered="setFilter" />
    <book-list :books="booksToShow" />
  </main>
    `,
  data() {
    return {
      books: null,
      filterBy: null,
    };
  },
  methods: {
    setFilter(filterBy) {
      this.filterBy = filterBy;
    },
    nextPage(currId) {
      console.log('currId:', currId);
      console.log('Next Page!!');
      const newBook = bookService.query().then((book) => {
        let idx = book.findIndex((book) => {
          return book.id === currId;
        });
        let backBook = book[idx + 1];
        return backBook;
      });
      newBook.then((res) => {
        console.log(res);
      });
      newBook.then((book) => {
        this.$router.push(book.id);
      });
    },
    backPage(currId) {
      console.log('currId:', currId);
      console.log('back Page!!');
      const newBook = bookService.query().then((book) => {
        let idx = book.findIndex((book) => {
          return book.id === currId;
        });
        let backBook = book[idx - 1];
        return backBook;
      });
      newBook.then((book) => {
        this.$router.push(book.id);
      });
    },
  },
  computed: {
    booksToShow() {
      if (!this.filterBy || this.filterBy.byName === '' || this.filterBy.fromPrice === '') return this.books;
      var { byName } = this.filterBy;
      console.log('byName:', byName);
      byName = byName.toLowerCase();

      const booksToShow = this.books.filter(({ title, listPrice }) => {
        return (
          title.toLowerCase().includes(byName) &&
          listPrice.amount > this.filterBy.fromPrice &&
          listPrice.amount < this.filterBy.toPrice
        );
      });
      return booksToShow;
    },
  },
  components: {
    bookList,
    bookFilter,
  },
  created() {
    bookService.query().then((books) => {
      this.books = books;
      console.log('3');
      eventBus.$on('backPage', this.backPage);
      eventBus.$on('nextPage', this.nextPage);
    });
  },
};
