const path = {
  root: {
    PATH: '/',
    NAME: 'home'
  },
  productDetail: {
    PATH: '/product/:productId',
    NAME: 'productDetail'
  }
} as const

export default path
