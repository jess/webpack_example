// This is javscript code, which uses ERB tags for templating
// All the methods will be invoked and their values will be interpolated

import Vue from 'vue';
import BlogsEdit from 'views/blogs/edit';

const el = document.getElementById("blogs-edit-view");
const props = el.dataset.props;
const app = new Vue({
  el,
  render: h => h(BlogsEdit, {props: JSON.parse(props)})
})
