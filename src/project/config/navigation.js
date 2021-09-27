
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
        name: 'Movies', 
        icon: 'movie', 
        route: '/movies', 
        exact: true,
        component: 'pages/movies'
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
        name: 'People', 
        icon: 'people', 
        route: '/people', 
        exact: true,
        component: 'pages/people'
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
        showInMenu: true, 
        showInDrawer: true, 
        name: 'Podcasts', 
        icon: 'podcasts', 
        route: '/podcasts', 
        exact: true,
        component: 'pages/podcasts'
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
        group: "Awards",
      },
      {
        showInMenu: false, 
        showInDrawer: true, 
        name: 'Awards', 
        nameOpen: 'Dashboard',         
        icon: 'emoji_events', 
        route: '/awards', 
        exact: true,
        component: 'pages/awards'
      },
      {
        showInMenu: false, 
        showInDrawer: true, 
        onMini: false,
        icon: 'emoji_events', 
        name: 'Oscar', 
        route: '/awards/oscar', 
        exact: true,
        component: 'pages/stories/awards-oscar'
      },
      {
        showInMenu: false, 
        showInDrawer: false, 
        icon: 'emoji_events', 
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
        route: '/search/:qry', 
        exact: false,
        component: 'pages/search'
      },
    ];
  }
}



window.__nav = new Navigation();
export default Navigation;