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
        component: 'components/pages/home'
      },
      {
        showInMenu: true, 
        showInDrawer: true, 
        name: 'Movie', 
        icon: 'movie', 
        route: '/movie', 
        exact: true,
        component: 'components/pages/movie'
      },
      {
        showInMenu: true, 
        showInDrawer: true, 
        name: 'Uploads', 
        icon: 'upload', 
        route: '/uploads', 
        exact: true,
        component: 'components/pages/uploads'
      },
      {
        showInMenu: true, 
        showInDrawer: true, 
        name: 'Person', 
        icon: 'person', 
        route: '/person', 
        exact: true,
        component: 'components/pages/person'
      },
      {
        showInMenu: true, 
        showInDrawer: true, 
        name: 'Streaming', 
        icon: 'streaming', 
        route: '/streaming', 
        exact: true,
        component: 'components/pages/streaming'
      },
    ];
  }
}



window.__nav = new Navigation();
export default Navigation;