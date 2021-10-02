
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
        exact: true,
        component: `pages/home`
      },
      {
        showInMenu: true, 
        showInDrawer: true, 
        separator: true,
      },
      {
        showInMenu: true, 
        showInDrawer: true, 
        name: 'TV', 
        icon: 'tv', 
        route: '/tv', 
        exact: true,
        component: 'pages/stories/tv'
      },
      {
        showInMenu: true, 
        showInDrawer: true, 
        name: 'Movies', 
        icon: 'movie', 
        route: '/movies', 
        exact: true,
        component: 'pages/stories/movies'
      },
        {
          showInMenu: false, 
          showInDrawer: false, 
          name: 'Movie', 
          icon: 'movie', 
          route: '/movie/:id/:name', 
          exact: false,
          component: 'pages/movie'
        },
      {
        showInMenu: true, 
        showInDrawer: true, 
        name: 'Podcasts', 
        icon: 'podcasts', 
        route: '/podcasts', 
        exact: true,
        component: 'pages/stories/podcasts'
      },
        {
          showInMenu: false, 
          showInDrawer: false, 
          name: 'Podcast', 
          icon: 'podcast', 
          route: '/podcast/:id/:name', 
          exact: false,
          component: 'pages/podcast'
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
        exact: true,
        component: 'pages/stories/people'
      },
        {
          showInMenu: false, 
          showInDrawer: false, 
          name: 'Person', 
          icon: 'person', 
          route: '/person/:id/:name', 
          exact: false,
          component: 'pages/person'
        },
      {
        showInMenu: false, 
        showInDrawer: false, 
        name: 'Awards', 
        route: '/stories/awards/:entity?/:year?/:page?', 
        exact: true,
        component: 'pages/stories/awards'
      },
      {
        showInMenu: false, 
        showInDrawer: false, 
        name: 'Stories', 
        route: '/stories', 
        exact: true,
        component: 'pages/stories/_'
      },
      {
        showInMenu: false, 
        showInDrawer: false, 
        name: 'PodcastMusic', 
        route: '/podcasts/stories/music', 
        exact: true,
        component: 'pages/stories/podcast-music'
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
        exact: true,
        component: 'pages/about'
      },
      {
        showInMenu: false, 
        showInDrawer: false, 
        name: 'Search', 
        icon: 'search', 
        route: '/search/:qry/:page?', 
        exact: false,
        component: 'pages/search'
      },
    ];
  }
}



window.__nav = new Navigation();
export default Navigation;