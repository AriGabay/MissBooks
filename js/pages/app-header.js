import { bookService } from '../services/book-services.js';
export default {
  template: `
  <header class="main-header">
    <nav class="main-nav">
      <div class="title">
        <h1 class="main-title">Book Shop</h1>
      </div>
      <div class="nav-column">
        <div class="route-links">
          <router-link to="/">Home Page</router-link>
          <router-link to="/book">Book App</router-link>
          <router-link to="/about">About</router-link>
        </div>
        <div class="search-google">
          <form @submit.prevent="searchBook(setResults)">
            <input type="search" name="input-search-google" placeholder="Search for a book in Google" v-model="book">
            <button>Search</button>
            <ul>
              <li v-for="(title) in showResults()" @click.prevent="selectBook(title)">{{title}}</li>
            </ul>
            <!-- {{showResults}} -->
          </form>
        </div>
      </div>
    </nav>
  </header>`,
  data() {
    return {
      book: null,
      bookRequest: null,
      titles: null,
    };
  },
  methods: {
    searchBook(func) {
      var request = new XMLHttpRequest();
      request.open(
        'GET',
        `https://www.googleapis.com/books/v1/volumes?printType=books&q=effective%20${this.book}`,
        true
      );
      request.onload = function () {
        var data = JSON.parse(request.responseText);
        if (request.status >= 200 && request.status < 400) {
          func(data);
        } else {
          console.log('error');
        }
      };
      request.send();
    },
    setResults(results) {
      this.bookRequest = results;
    },
    showResults() {
      const items = this.bookRequest ? this.bookRequest.items : 'no results';
      console.log('items:', items);
      if (items === 'no results') return;
      return items.map((book) => {
        return book.volumeInfo.title;
      });
    },
    selectBook(title) {
      bookService.addGoogleBook(title, this.bookRequest);
    },
  },
  computed: {},
};

// export default {
//   props: [],
//   template: `
//     <div>
//       This is a vue component
//     </div>`,
//   data() {
//     return {};
//   },
// };
// components:
