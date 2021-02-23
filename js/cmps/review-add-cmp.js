export default {
  template: `
    <div>
      <form  @submit.prevent="addReview">        
      <input type="txt" placeholder="Books Reader" v-model="review.bookerReader"/>
      <select v-model="review.review">
        <option value=1>1</option>
        <option value=2>2</option>
        <option value=3>3</option>
        <option value=4>4</option>
        <option value=5>5</option>
      </select>
      <label for="readAt"></label>
      <input type="date" name="readAt" id="readAt" placeholder="Read at" v-model="review.readAt"/>
      <input type="textarea" placeholder="for free text" v-model="review.textarea"/>
      <!-- <router-link to="/" @click.native="addReview">Add Review</router-link> -->
      <button >Add Review</button>
      </form>
    </div>`,
  data() {
    return {
      review: {
        bookerReader: '',
        review: 0,
        readAt: '',
        textarea: '',
      },
    };
  },
  methods: {
    addReview() {
      console.log(this.review);
      this.$emit('changeInput', { ...this.review });
    },
  },
  components: {},
  computed: {},
};
