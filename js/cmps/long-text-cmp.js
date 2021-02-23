export default {
  props: ['txt'],
  template: `
    <div class="txt-toggle">
      <p v-if="isReadMore">description: {{txt}}</p>
      <p v-else>description:
        {{showText}} </p>
      <button v-if="isTextLong" @click="toggleRead">{{btnText}}</button>
    </div>`,
  data() {
    return {
      isReadMore: false,
      isTextLong: false,
    };
  },
  methods: {
    toggleRead() {
      this.isReadMore = !this.isReadMore;
    },
  },
  computed: {
    showText() {
      if (this.txt.length < 100) return this.txt;
      else {
        this.isTextLong = true;
        return this.txt.slice(0, 99);
      }
    },
    btnText() {
      if (!this.isReadMore) return 'Read More';
      return 'Read Less';
    },
  },
};
