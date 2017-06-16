export const MAIN_MENU = [  
  {
    path: 'welcome',  // path for our page
    data: { // custom menu declaration
      menu: {
        title: 'Welcome', // menu title
        icon: 'ion-android-home', // menu icon
        pathMatch: 'prefix', // use it if item children not displayed in menu
        selected: false,
        expanded: false,
        order: 0
      }
    }
  },
  {
    path: 'football-pitches',  // path for our page
    data: { // custom menu declaration
      menu: {
        title: 'Football Pitches', // menu title
        icon: 'ion-ios-football', // menu icon
        pathMatch: 'prefix', // use it if item children not displayed in menu
        selected: false,
        expanded: false,
        order: 0
      }
    }
  },
  {
    path: 'add-football-pitch',  // path for our page
    data: { // custom menu declaration
      menu: {
        title: 'Add Football Pitch', // menu title
        icon: 'ion-plus-round', // menu icon
        pathMatch: 'prefix', // use it if item children not displayed in menu
        selected: false,
        expanded: false,
        order: 0
      }
    }
  },
];