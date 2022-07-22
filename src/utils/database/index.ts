import { mysql } from '@nichengkai/express/typescript';

export const DAO = {
  async test(str) {
    console.log(await mysql.querySync(`SELECT ${mysql.escape(str)}`));
  },
};
