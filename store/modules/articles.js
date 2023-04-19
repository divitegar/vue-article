import axios from "axios";

const articles = {
  namespaced: true,
  state: {
    articles: [],
    detail: {},
  },
  mutations: {
    STORE_ARTICLES(state, data) {
      if (process.client) {
        localStorage.setItem("articles", JSON.stringify(data));
        const dataStorage = JSON.parse(localStorage.getItem("articles"));
        if (dataStorage) {
          state.articles = dataStorage;
        }
      }
    },
    STORE_DETAIL(state, title) {
      if (process.client) {
        const dataStorage = JSON.parse(localStorage.getItem("articles"));

        const detailData = dataStorage.posts.filter(
          (item) => item.title === title
        );
        state.detail = detailData;
      }
    },
  },
  actions: {
    storeArticles({ commit }, title) {
      axios
        .get(`https://jakpost.vercel.app/api/category/${title}`)
        .then((res) => {
          commit("STORE_ARTICLES", res.data);
        })
        .catch((err) => console.log(err));
    },

    detailArticles({ commit }, title) {
      commit("STORE_DETAIL", title);
    },
  },
};

export default articles;
