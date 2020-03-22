export const state = () => ({
  isloading: false
});

export const mutations = {
  setIsLoading(state, isLoading) {
    state.isLoading = isLoading;
  }
};
