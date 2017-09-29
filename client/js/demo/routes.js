angular
  .module('app')
  .config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider', '$breadcrumbProvider', function ($stateProvider, $urlRouterProvider, $ocLazyLoadProvider, $breadcrumbProvider) {
    $stateProvider
      // ADR routes - start
      // gsr
      .state('app.gsr', {
        url: "/gsr",
        abstract: true,
        template: '<ui-view></ui-view>',
        ncyBreadcrumb: {
          label: 'GSR'
        }
      })
      .state('app.gsr.gsr', {
        url: '/gsr',
        templateUrl: 'views/gsr/gsr.html',
        ncyBreadcrumb: {
          label: 'GSR'
        },
        resolve: {
          loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
            // you can lazy load files for an existing module
            return $ocLazyLoad.load({
              files: ['js/controllers/gsr/gsr.js']
            });
          }]
        }
      })
      .state('app.gsr.create', {
        url: '/create',
        templateUrl: 'views/gsr/creategsr.html',
        ncyBreadcrumb: {
          label: 'Create GSR'
        },
        resolve: {
          loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
            // you can lazy load files for an existing module
            return $ocLazyLoad.load({
              files: ['js/controllers/gsr/creategsr.js']
            });
          }]
        }
      })
      .state('app.gsr.assign', {
        url: '/assign',
        templateUrl: 'views/gsr/assigngsr.html',
        ncyBreadcrumb: {
          label: 'Assign GSR'
        },
        resolve: {
          loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
            // you can lazy load files for an existing module
            return $ocLazyLoad.load({
              files: ['js/controllers/gsr/assigngsr.js']
            });
          }]
        }
      })

      // Occurrence
      .state('app.occurrence', {
        url: "/occurrence",
        abstract: true,
        template: '<ui-view></ui-view>',
        ncyBreadcrumb: {
          label: 'Occurrence'
        }
      })
      .state('app.occurrence.occurrence', {
        url: '/occurrence',
        templateUrl: 'views/occurrence/occurrence.html',
        ncyBreadcrumb: {
          label: 'Occurrence'
        },
        resolve: {
          loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
            // you can lazy load files for an existing module
            return $ocLazyLoad.load({
              files: ['js/controllers/occurrence/occurrence.js']
            });
          }]
        }
      })
      .state('app.occurrence.create', {
        url: '/create',
        templateUrl: 'views/occurrence/createoccurrence.html',
        ncyBreadcrumb: {
          label: 'Create Occurrence'
        },
        resolve: {
          loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
            // you can lazy load files for an existing module
            return $ocLazyLoad.load({
              files: ['js/controllers/occurrence/createoccurrence.js']
            });
          }]
        }
      })
      .state('app.occurrence.assign', {
        url: '/assign',
        templateUrl: 'views/occurrence/assignoccurrence.html',
        ncyBreadcrumb: {
          label: 'Assign Occurrence'
        },
        resolve: {
          loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
            // you can lazy load files for an existing module
            return $ocLazyLoad.load({
              files: ['js/controllers/occurrence/assignoccurrence.js']
            });
          }]
        }
      })

      //Investigation
      .state('app.investigation', {
        url: "/investigation",
        abstract: true,
        template: '<ui-view></ui-view>',
        ncyBreadcrumb: {
          label: 'Investigation'
        }
      })
      .state('app.investigation.investigation', {
        url: '/investigation',
        templateUrl: 'views/investigation/investigation.html',
        ncyBreadcrumb: {
          label: 'Investigation'
        },
        resolve: {
          loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
            // you can lazy load files for an existing module
            return $ocLazyLoad.load({
              files: ['js/controllers/investigation/investigation.js']
            });
          }]
        }
      })
      .state('app.investigation.create', {
        url: '/create',
        templateUrl: 'views/investigation/createinvestigation.html',
        ncyBreadcrumb: {
          label: 'Create Investigation'
        },
        resolve: {
          loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
            // you can lazy load files for an existing module
            return $ocLazyLoad.load({
              files: ['js/controllers/investigation/createinvestigation.js']
            });
          }]
        }
      })

      // ADR routes - end

      .state('app.icons', {
        url: "/icons",
        abstract: true,
        template: '<ui-view></ui-view>',
        ncyBreadcrumb: {
          label: 'Icons'
        }
      })
      .state('app.icons.fontawesome', {
        url: '/font-awesome',
        templateUrl: 'views/icons/font-awesome.html',
        ncyBreadcrumb: {
          label: 'Font Awesome'
        }
      })
      .state('app.icons.simplelineicons', {
        url: '/simple-line-icons',
        templateUrl: 'views/icons/simple-line-icons.html',
        ncyBreadcrumb: {
          label: 'Simple Line Icons'
        }
      })
      .state('app.components', {
        url: "/components",
        abstract: true,
        template: '<ui-view></ui-view>',
        ncyBreadcrumb: {
          label: 'Components'
        }
      })
      .state('app.components.buttons', {
        url: '/buttons',
        templateUrl: 'views/components/buttons.html',
        ncyBreadcrumb: {
          label: 'Buttons'
        }
      })
      .state('app.components.new-components', {
        url: '/new-components',
        templateUrl: 'views/components/new-components.html',
        ncyBreadcrumb: {
          label: 'New Components'
        }
      })
      .state('app.components.social-buttons', {
        url: '/social-buttons',
        templateUrl: 'views/components/social-buttons.html',
        ncyBreadcrumb: {
          label: 'Social Buttons'
        }
      })
      .state('app.components.cards', {
        url: '/cards',
        templateUrl: 'views/components/cards.html',
        ncyBreadcrumb: {
          label: 'Cards'
        }
      })
      .state('app.components.forms', {
        url: '/forms',
        templateUrl: 'views/components/forms.html',
        ncyBreadcrumb: {
          label: 'Forms'
        }
      })
      .state('app.components.switches', {
        url: '/switches',
        templateUrl: 'views/components/switches.html',
        ncyBreadcrumb: {
          label: 'Switches'
        }
      })
      .state('app.components.tables', {
        url: '/tables',
        templateUrl: 'views/components/tables.html',
        ncyBreadcrumb: {
          label: 'Tables'
        }
      })
      .state('app.forms', {
        url: '/forms',
        templateUrl: 'views/forms.html',
        ncyBreadcrumb: {
          label: 'Forms'
        },
        resolve: {
          loadPlugin: ['$ocLazyLoad', function ($ocLazyLoad) {
            return $ocLazyLoad.load([
              {
                serie: true,
                files: ['js/libs/moment.min.js']
              },
              {
                serie: true,
                files: ['js/libs/daterangepicker.min.js', 'js/libs/angular-daterangepicker.min.js']
              },
              {
                files: ['js/libs/mask.min.js']
              },
              {
                files: ['js/libs/select.min.js']
              }
            ]);
          }],
          loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
            // you can lazy load files for an existing module
            return $ocLazyLoad.load({
              files: ['js/controllers/forms.js']
            });
          }]
        }
      })
      .state('app.widgets', {
        url: '/widgets',
        templateUrl: 'views/widgets.html',
        ncyBreadcrumb: {
          label: 'Widgets'
        },
        resolve: {
          loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
            // you can lazy load controllers
            return $ocLazyLoad.load({
              files: ['js/controllers/widgets.js']
            });
          }]
        }
      })
      .state('app.charts', {
        url: '/charts',
        templateUrl: 'views/charts.html',
        ncyBreadcrumb: {
          label: 'Charts'
        },
        resolve: {
          // Plugins loaded before
          // loadPlugin: ['$ocLazyLoad', function ($ocLazyLoad) {
          //     return $ocLazyLoad.load([
          //         {
          //             serial: true,
          //             files: ['js/libs/Chart.min.js', 'js/libs/angular-chart.min.js']
          //         }
          //     ]);
          // }],
          loadMyCtrl: ['$ocLazyLoad', function ($ocLazyLoad) {
            // you can lazy load files for an existing module
            return $ocLazyLoad.load({
              files: ['js/controllers/charts.js']
            });
          }]
        }
      })
  }]);
