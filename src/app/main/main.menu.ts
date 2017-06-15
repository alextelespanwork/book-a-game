export const MAIN_MENU = [
  {
    path: 'main',
    children: [
      {
        path: 'football-pitches',  // path for our page
        data: { // custom menu declaration
          menu: {
            title: 'Football Pitches', // menu title
            icon: 'ion-android-home', // menu icon
            pathMatch: 'prefix', // use it if item children not displayed in menu
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },      
    ]
  }
];
