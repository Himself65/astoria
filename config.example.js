module.exports = {
  appName: "Himself65",
  port: 3000,
  distPath: '/root/himself65/dist',
  apiUrl: '/api',
  mongodb: {
    port: '27017',
    database: 'astoria'
  },
  plugins: {
    checkin: {
      getUserUrl: 'http://ecs.zhehao.top:5002/api/credit/get_by_group',
      getGroupsUrl: 'http://ecs.zhehao.top:5002/api/credit/get_groups'
    }
  }
}
