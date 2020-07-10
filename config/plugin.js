// 配置mysql
exports.mysql = {
  enable: true,
  package: 'egg-mysql',
};
// 配置core
exports.cors = {
  enable: true,
  package: 'egg-cors',
  credentials: true,
  origin: 'https://musicserver.fullmastach.club',
  allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
};