
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
        showInMenu: false, 
        showInDrawer: true, 
        icon: 'insights', 
        name: 'Stories', 
        route: '/stories', 
      },
      {
        showInMenu: false, 
        showInDrawer: true, 
        icon: 'rss_feed', 
        name: 'Log', 
        route: '/about/project/log', 
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
        showInMenu: true, 
        showInDrawer: true, 
        name: 'TV Shows', 
        icon: 'tv', 
        route: '/tv-shows', 
      },
      {
        showInMenu: true, 
        showInDrawer: true, 
        name: 'Video Games', 
        icon: 'sports_esports', 
        route: '/video-games', 
      },
      {
        showInMenu: true, 
        showInDrawer: true, 
        name: 'Podcasts', 
        icon: 'podcasts', 
        route: '/podcasts', 
      },
      {
        showInMenu: true, 
        showInDrawer: true, 
        name: 'Movie Festivals', 
        icon: 'festival', 
        route: '/movies/festivals', 
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
        showInMenu: true, 
        showInDrawer: true, 
        separator: true,
      },
      {
        showInMenu: true, 
        showInDrawer: true, 
        name: 'Sitemap', 
        icon: 'account_tree', 
        route: '/about/project/sitemap', 
      },
      {
        showInMenu: true, 
        showInDrawer: true, 
        name: 'About', 
        icon: 'info', 
        route: '/about', 
      },
    ];
  }
}



const nav = new Navigation();
export default nav;