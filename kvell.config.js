module.exports = {
  protocol: "http",
  routes: [
    {
      name: 'home',
      path: '/'
    },
    {
      name: 'upload',
      path: '/upload'
    }
  ],
  models: ['test'],
  autoRequireRoutes: true
};
