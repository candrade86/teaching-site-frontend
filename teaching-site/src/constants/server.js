const PAYMENT_SERVER_URL = process.env.NODE_ENV === 'production'
  ? process.env.REACT_APP_PAYMENT_SERVER_URL_PROD
  : process.env.REACT_APP_PAYMENT_SERVER_URL_DEV

export default PAYMENT_SERVER_URL;