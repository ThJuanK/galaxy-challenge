import 'dotenv/config';

export default ({ config }) => {
  return {
    ...config,
    extra: {
      API_URL: process.env.API_URL,
      OTRA_LLAVE: process.env.OTRA_LLAVE,
    },
  };
};
