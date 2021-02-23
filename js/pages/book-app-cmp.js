import { bookService } from '../services/book-services.js';
import bookList from '../cmps/books-list-cmp.js';
import bookFilter from '../cmps/book-filter.cmp.js';
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
    });
  },
};
