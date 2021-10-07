
class Navigation {
  constructor(){
    this.drawer = {
      show: false,
    };

    this.options = [
      {
        showInMenu: true, 
        showInDrawer: true, 
        name: 'Home', 
        icon: 'home', 
        route: '/', 
      },
      {
        showInMenu: true, 
        showInDrawer: true, 
        separator: true,
      },
      {
        showInMenu: true, 
        showInDrawer: true, 
        name: 'Movies', 
        icon: 'movie', 
        route: '/movies', 
      },
        {
          showInMenu: false, 
          showInDrawer: false, 
          name: 'Movie', 
          icon: 'movie', 
          route: '/movie/:id/:name', 
        },
      {
        showInMenu: true, 
        showInDrawer: true, 
        name: 'Podcasts', 
        icon: 'podcasts', 
        route: '/podcasts', 
      },
        {
          showInMenu: false, 
          showInDrawer: false, 
          name: 'Podcast', 
          icon: 'podcast', 
          route: '/podcast/:id/:name', 
        },
      {
        showInMenu: true, 
        showInDrawer: true, 
        separator: true,
      },
      {
        showInMenu: true, 
        showInDrawer: true, 
        name: 'People', 
        icon: 'people', 
        route: '/people', 
      },
        {
          showInMenu: false, 
          showInDrawer: false, 
          name: 'Person', 
          icon: 'person', 
          route: '/person/:id/:name', 
        },
      {
        showInMenu: false, 
        showInDrawer: false, 
        name: 'Awards', 
        route: '/stories/awards/:entity?/:year?/:page?', 
      },
      {
        showInMenu: false, 
        showInDrawer: false, 
        name: 'Stories', 
        route: '/stories', 
      },
      {
        showInMenu: false, 
        showInDrawer: false, 
        name: 'PodcastMusic', 
        route: '/podcasts/stories/music/:page?', 
      },
      {
        showInMenu: true, 
        showInDrawer: true, 
        separator: true,
      },
      {
        showInMenu: true, 
        showInDrawer: true, 
        name: 'About', 
        icon: 'info', 
        route: '/about', 
      },
      {
        showInMenu: false, 
        showInDrawer: false, 
        name: 'Search', 
        icon: 'search', 
        route: '/search/:qry/:page?', 
      },
    ];
  }
}



const nav = new Navigation();
export default nav;