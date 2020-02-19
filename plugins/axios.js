export default function({ $axios }) {
  $axios.onRequest(config => {
    config.headers.common["Authorization"] = "hoge";
    if (process.env.QIITA_TOKEN) {
      config.headers.common["Authorization"] = process.env.QIITA_TOKEN;
    }
    return config;
  });
}
