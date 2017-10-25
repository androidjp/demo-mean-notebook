module.exports = function ($stateProvider) {
  $stateProvider
    .state({
      name: 'default',
      url: '',
      template: require('./../templates/note-list.html'),
      controller: "noteController",
      controllerAs: 'vm'
    })
    .state({
      name: 'noteList',
      url: '/note/list',
      template: require('./../templates/note-list.html'),
      controller: "noteController",
      controllerAs: 'vm'
    })
};