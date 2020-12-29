<template>
  <div class="pt-5">
    <div v-if="posts && posts.length">
      <b-jumbotron class="mb-3" v-for="post of posts" v-bind:key="post.id">
        <h5 class="display-4">{{ post.title }}</h5>
        <p class="lead">{{ post.content }}</p>
        <b-button
          :to="{ name: 'edit', params: { id: post.id } }"
          class="lead btn btn-lg"
          variant="primary"
          >Edit</b-button
        >
        <b-button
          :to="{ name: 'details', params: { id: post.id } }"
          class="lead btn btn-lg ml-1"
          variant="info"
          >Details</b-button
        >
        <b-button
          class="lead btn-lg ml-1"
          v-on:click="deletePost(post)"
          variant="danger"
        >
          Delete
        </b-button>
      </b-jumbotron>
    </div>
    <div class="d-flex justify-content-center mb-3">
      <b-spinner style="width: 3rem; height: 3rem" v-if="posts.length == 0"
        >No Posts</b-spinner
      >
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      posts: [],
    };
  },
  created() {
    this.all();
  },
  methods: {
    deletePost: function (post) {
      axios
        .delete(
          `https://nameless-spire-79883.herokuapp.com/api/posts/${post.id}`
        )
        .then((response) => {
          console.log(response);
          this.all();
        });
    },
    all: function () {
      axios
        .get("https://nameless-spire-79883.herokuapp.com/api/posts/")
        .then((response) => {
          this.posts = response.data;
        });
    },
  },
};
</script>