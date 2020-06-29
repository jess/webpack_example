<template>
  <div>
    <h1>Title: {{title}}</h1>
    <input type="text" v-model="new_title" />
    <button type="button" @click="saveBlog">Save</button>
  </div>
</template>

<script>
  import Api from "tools/api"
  export default {
    props: ['blog_id', 'title'],
    data() {
      return {
        new_title: this.title,
        message: 'testing'
      }
    },
    methods: {
      saveBlog() {
        Api().patch(`/blogs/${this.blog_id}`, {
          blog: {
            title: this.new_title
          }
        })
          .then((r) => {
            debugger
          })
      }
    },
    mounted() {
    }
  }
</script>

<style lang="scss" scoped>
</style>
