import { storageService } from './async-storage-service.js';

const BOOKS_KEY = 'books';
_createBooks();

export const bookService = {
  query,
  remove,
  save,
  getEmptyBook,
  getById,
  addReview,
};

function query() {
  return storageService.query(BOOKS_KEY);
}

function remove(bookId) {
  return storageService.remove(BOOKS_KEY, bookId);
}

function save(book) {
  if (book.id) {
    return storageService.put(BOOKS_KEY, book);
  } else {
    return storageService.post(BOOKS_KEY, book);
  }
}

function getEmptyBook() {
  return { id: '', vendor: '', maxSpeed: 0 };
}

function getById(id) {
  return storageService.get(BOOKS_KEY, id);
}

function addReview(bookId, review) {
  return new Promise((resolve, reject) => {
    getById(bookId).then((book) => {
      if (!book.reviews) {
        book.reviews = [];
      }
      book.reviews.push(review);
      save(book).then((newBook) => {
        resolve(newBook);
      });
    });
  });
}

function _createBooks() {
  storageService.query(BOOKS_KEY).then((books) => {
    if (!books || !books.length) {
      books = [];
      books.push(
        _createBook(
          _makeId(),
          'metus hendrerit',
          'mi est eros convallis auctor arcu dapibus himenaeos',
          ['Barbara Cartland'],
          1999,
          'placerat nisi sodales suscipit tellus tincidunt mauris elit sit luctus interdum ad dictum platea vehicula conubia fermentum habitasse congue suspendisse',
          713,
          ['Computers', 'Hack'],
          'http://coding-academy.org/books-photos/20.jpg',
          'en',
          {
            amount: 109,
            currencyCode: 'EUR',
            isOnSale: false,
          }
        )
      );
      books.push(
        _createBook(
          _makeId(),
          'morbi',
          'lorem euismod dictumst inceptos mi',
          ['Barbara Cartland'],
          1978,
          'aliquam pretium lorem laoreet etiam odio cubilia iaculis placerat aliquam tempor nisl auctor',
          129,
          ['Computers', 'Hack'],
          'http://coding-academy.org/books-photos/14.jpg',
          'sp',
          {
            amount: 44,
            currencyCode: 'EUR',
            isOnSale: true,
          }
        )
      );
      books.push(
        _createBook(
          _makeId(),
          'at viverra venenatis',
          'gravida libero facilisis rhoncus urna etiam',
          ['Dr. Seuss'],
          1999,
          'lorem molestie ut euismod ad quis mi ultricies nisl cursus suspendisse dui tempor sit suscipit metus etiam euismod tortor sagittis habitant',
          972,
          ['Computers', 'Hack'],
          'http://coding-academy.org/books-photos/2.jpg',
          'he',
          {
            amount: 108,
            currencyCode: 'ILS',
            isOnSale: false,
          }
        )
      );
      books.push(
        _createBook(
          _makeId(),
          'dictum',
          'augue eu consectetur class curabitur conubia ligula in ullamcorper',
          ['Danielle Steel'],
          1978,
          'interdum inceptos mauris habitant primis neque tempus lacus morbi auctor cras consectetur euismod vehicula neque netus enim vivamus augue molestie imperdiet tincidunt aliquam',
          303,
          ['Computers', 'Hack'],
          'http://coding-academy.org/books-photos/16.jpg',
          'en',
          {
            amount: 30,
            currencyCode: 'EUR',
            isOnSale: true,
          }
        )
      );
      books.push(
        _createBook(
          _makeId(),
          'sem himenaeos aptent',
          'interdum per habitasse luctus purus est',
          ['Dr. Seuss'],
          2011,
          'et vehicula faucibus amet accumsan lectus cras nulla cubilia arcu neque litora mi habitasse quis amet augue facilisis sed',
          337,
          ['Computers', 'Hack'],
          'http://coding-academy.org/books-photos/12.jpg',
          'sp',
          {
            amount: 19,
            currencyCode: 'USD',
            isOnSale: false,
          }
        )
      );
      books.push(
        _createBook(
          _makeId(),
          'mi ante posuere',
          'sapien curae consectetur ultrices fringilla blandit ipsum curae faucibus',
          ['Leo Tolstoy'],
          1978,
          'senectus habitant nam imperdiet nostra elit dapibus nisl adipiscing in',
          748,
          ['Computers', 'Hack'],
          'http://coding-academy.org/books-photos/1.jpg',
          'en',
          {
            amount: 91,
            currencyCode: 'USD',
            isOnSale: true,
          }
        )
      );
      books.push(
        _createBook(
          _makeId(),
          'non',
          'leo tortor per dapibus mattis ut conubia porttitor ligula viverra',
          ['Leo Tolstoy'],
          2011,
          'nec scelerisque id cursus platea sit ullamcorper bibendum ultrices tempus ante mi aliquet cras tortor dapibus dictum scelerisque',
          65,
          ['Computers', 'Hack'],
          'http://coding-academy.org/books-photos/14.jpg',
          'he',
          {
            amount: 90,
            currencyCode: 'USD',
            isOnSale: false,
          }
        )
      );
      books.push(
        _createBook(
          _makeId(),
          'tristique',
          'consectetur a eu tincidunt condimentum amet nisi',
          ['Dr. Seuss'],
          1999,
          'magna quisque venenatis laoreet purus in semper habitant proin pellentesque sed egestas cursus faucibus nam enim id sit mi ligula risus curabitur senectus curabitur sodales fames sem',
          299,
          ['Computers', 'Hack'],
          'http://coding-academy.org/books-photos/11.jpg',
          'he',
          {
            amount: 176,
            currencyCode: 'EUR',
            isOnSale: false,
          }
        )
      );
      books.push(
        _createBook(
          _makeId(),
          'urna ornare gravida',
          'sem vestibulum semper convallis pharetra tempor himenaeos ut',
          ['Jin Yong'],
          2011,
          'porttitor nisl sodales id eu tellus venenatis laoreet auctor dictumst nulla',
          803,
          ['Computers', 'Hack'],
          'http://coding-academy.org/books-photos/10.jpg',
          'sp',
          {
            amount: 116,
            currencyCode: 'USD',
            isOnSale: true,
          }
        )
      );
      books.push(
        _createBook(
          _makeId(),
          'consequat neque volutpat',
          'vel quis taciti fermentum feugiat ullamcorper curae praesent',
          ['Dr. Seuss'],
          1978,
          'curabitur bibendum in dolor neque magna phasellus arcu nulla cubilia senectus maecenas ullamcorper neque accumsan facilisis dictumst ornare',
          891,
          ['Computers', 'Hack'],
          'http://coding-academy.org/books-photos/5.jpg',
          'en',
          {
            amount: 145,
            currencyCode: 'EUR',
            isOnSale: false,
          }
        )
      );
      books.push(
        _createBook(
          _makeId(),
          'risus',
          'pretium bibendum pharetra curabitur quisque dictumst',
          ['Danielle Steel'],
          2018,
          'auctor amet nostra luctus molestie proin platea cubilia netus sed purus egestas a primis eu tristique interdum litora lorem venenatis mattis senectus',
          86,
          ['Computers', 'Hack'],
          'http://coding-academy.org/books-photos/16.jpg',
          'sp',
          {
            amount: 157,
            currencyCode: 'ILS',
            isOnSale: true,
          }
        )
      );
      books.push(
        _createBook(
          _makeId(),
          'interdum etiam vulputate',
          'velit sapien eget tincidunt nunc tortor',
          ['Danielle Steel'],
          2018,
          'aenean mauris porta netus accumsan turpis etiam vestibulum vivamus sagittis nullam nec tellus quam mattis est pellentesque nisi litora sit ad',
          882,
          ['Computers', 'Hack'],
          'http://coding-academy.org/books-photos/17.jpg',
          'sp',
          {
            amount: 57,
            currencyCode: 'USD',
            isOnSale: true,
          }
        )
      );
      books.push(
        _createBook(
          _makeId(),
          'sagittis justo',
          'etiam primis proin praesent placerat nisi fermentum nisi',
          ['Agatha Christie'],
          2011,
          'nec faucibus arcu suspendisse tempus potenti lobortis aliquam quisque augue integer consectetur etiam ultrices curabitur tristique metus',
          598,
          ['Computers', 'Hack'],
          'http://coding-academy.org/books-photos/8.jpg',
          'en',
          {
            amount: 167,
            currencyCode: 'ILS',
            isOnSale: false,
          }
        )
      );
      books.push(
        _createBook(
          _makeId(),
          'quam ullamcorper himenaeos',
          'ut placerat eu dapibus sapien sodales laoreet',
          ['Danielle Steel'],
          1999,
          'etiam nec aliquam euismod platea vel laoreet quisque condimentum sapien neque ut aliquam torquent in nam',
          608,
          ['Computers', 'Hack'],
          'http://coding-academy.org/books-photos/3.jpg',
          'he',
          {
            amount: 150,
            currencyCode: 'USD',
            isOnSale: true,
          }
        )
      );
      books.push(
        _createBook(
          _makeId(),
          'quis',
          'suscipit turpis etiam turpis libero lobortis',
          ['Jin Yong'],
          2011,
          'etiam pretium urna fusce lobortis curae viverra aptent metus semper nisi litora feugiat elementum purus nunc consequat lorem ultricies non primis phasellus sociosqu donec dolor',
          583,
          ['Computers', 'Hack'],
          'http://coding-academy.org/books-photos/6.jpg',
          'en',
          {
            amount: 58,
            currencyCode: 'ILS',
            isOnSale: true,
          }
        )
      );
      books.push(
        _createBook(
          _makeId(),
          'aliquam aliquet dapibus',
          'neque eu purus euismod placerat adipiscing odio egestas consequat',
          ['Leo Tolstoy'],
          2011,
          'dolor morbi malesuada eleifend purus taciti sit interdum aliquet commodo ut libero tincidunt',
          497,
          ['Computers', 'Hack'],
          'http://coding-academy.org/books-photos/7.jpg',
          'en',
          {
            amount: 78,
            currencyCode: 'USD',
            isOnSale: false,
          }
        )
      );
      books.push(
        _createBook(
          _makeId(),
          'class',
          'elit enim ultricies amet imperdiet a molestie class elementum venenatis',
          ['Danielle Steel'],
          1999,
          'rhoncus odio netus consectetur aenean hendrerit massa scelerisque elementum aptent lobortis pharetra maecenas quam nulla volutpat turpis non habitasse aenean ante sodales lobortis quisque libero imperdiet gravida eleifend nulla',
          804,
          ['Computers', 'Hack'],
          'http://coding-academy.org/books-photos/10.jpg',
          'en',
          {
            amount: 118,
            currencyCode: 'ILS',
            isOnSale: false,
          }
        )
      );
      books.push(
        _createBook(
          _makeId(),
          'vitae',
          'class habitant at commodo semper ligula a bibendum',
          ['Leo Tolstoy'],
          1999,
          'himenaeos quis iaculis orci libero egestas quam varius primis erat lacus facilisis blandit dictum tristique interdum litora quisque purus senectus pretium purus',
          231,
          ['Computers', 'Hack'],
          'http://coding-academy.org/books-photos/12.jpg',
          'he',
          {
            amount: 60,
            currencyCode: 'EUR',
            isOnSale: false,
          }
        )
      );
      books.push(
        _createBook(
          _makeId(),
          'rhoncus vivamus',
          'nullam class risus amet senectus scelerisque etiam curabitur',
          ['Agatha Christie'],
          1978,
          'torquent in et id lacus vivamus aptent cursus erat integer venenatis risus ac ante quam etiam euismod feugiat risus suscipit rhoncus pharetra quisque felis',
          652,
          ['Computers', 'Hack'],
          'http://coding-academy.org/books-photos/20.jpg',
          'he',
          {
            amount: 110,
            currencyCode: 'USD',
            isOnSale: true,
          }
        )
      );
      books.push(
        _createBook(
          _makeId(),
          'donec mi ullamcorper',
          'varius malesuada augue molestie sollicitudin faucibus mi eu tempus',
          ['William Shakespeare'],
          2011,
          'aliquet euismod mi vivamus bibendum donec etiam quisque iaculis ullamcorper est sed',
          904,
          ['Computers', 'Hack'],
          'http://coding-academy.org/books-photos/2.jpg',
          'sp',
          {
            amount: 186,
            currencyCode: 'ILS',
            isOnSale: true,
          }
        )
      );
      storageService.postMany(BOOKS_KEY, books);
    }
  });
}

function _makeId(length = 5) {
  var text = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

function _createBook(
  id,
  title,
  subtitle,
  authors,
  publishedDate,
  description,
  pageCount,
  categories,
  thumbnail,
  language,
  listPrice,
  reviews
) {
  const book = {
    id,
    title,
    subtitle,
    authors,
    publishedDate,
    description,
    pageCount,
    categories,
    thumbnail,
    language,
    listPrice,
    reviews,
  };
  return book;
}
