const getters = {
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  mainWallet: state => state.bank.mainWallet
}
export default getters
