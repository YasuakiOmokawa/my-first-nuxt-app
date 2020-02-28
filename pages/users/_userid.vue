<template>
  <section class="container">
    <div>
      <h3>{{user.id}}</h3>
      <img :src="user.profile_image_url" witdh="120" />
      <p>{{user.description || 'No description'}}</p>
      <p>
        <nuxt-link to="/">
          <small>
            <b>トップ</b>
          </small>
        </nuxt-link>
      </p>
      <h3>{{user.id}}さんの投稿一覧</h3>
      <ul>
        <li v-for="item in items" :key="item.id">
          <h4>
            <span>{{item.title}}</span>
          </h4>
          <div>{{item.body.slice(0, 130)}}...</div>
          <p>
            <a target="_blank" :href="item.url">{{item.url}}</a>
          </p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex"

export default {
  head() {
    return {
      title: this.user.id
    }
  },
  async asyncData({ route, store, redirect }) {
    if (store.getters["users"][route.params.id]) {
      return
    }
    try {
      await store.dispatch("fetchUserInfo", { id: route.params.userid })
    } catch (e) {
      redirect("/") // 簡易的なエラー処理として404を想定してリダイレクトさせる
    }
  },
  computed: {
    user() {
      return this.users[this.$route.params.userid]
    },
    items() {
      return this.userItems[this.$route.params.userid] || []
    },
    ...mapGetters(["users", "userItems"])
  }
}
</script>

<style scoped>
.container {
  min-height: 100vh;
  padding: 16px;
}

h3 {
  margin: 16px 0;
  padding: 8px 0;
  border-bottom: solid 1px #e5e5e5;
}

li + li {
  margin: 16px 0;
}

p {
  margin: 8px 0;
}
</style>