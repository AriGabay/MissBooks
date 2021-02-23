import bookPreview from './book-preview.cmp.js';

export default {
  props: ['books'],
  template: `
    <div class="books-list">
      <book-preview :book="book" v-for="book in books" :key="book.id" class="list-book"
        @click.native="clickBook(book.id)" />
    </div>
  `,
  methods: {
    clickBook(bookId) {
      this.$router.push('book/' + bookId);
    },
  },
  components: {
    bookPreview,
  },
};
