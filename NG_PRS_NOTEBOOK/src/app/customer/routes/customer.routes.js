/** Created by CUIJA on 05-19-2017.*/


module.exports = function ($stateProvider) {
  $stateProvider
    .state({
      name: 'login',
      url: '/login',
      template: require('../template/customer-login.html'),
        controller: "loginController",
        controllerAs: 'vm'
    })
    .state({
      name: 'register',
      url: '/register',
      template: require('../template/customer-register.html')
    })

      .state({
          name: 'info',
          url: '/info',
          template: require('../template/customer-info.html')
      });
};