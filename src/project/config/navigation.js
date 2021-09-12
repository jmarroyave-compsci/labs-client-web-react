class Navigation {
  constructor(){
    this.drawer = {
      show: false,
    };

    this.options = [
      {
        showInMenu: false, 
        showInDrawer: false, 
        name: 'Home', 
        icon: 'home', 
        route: '/', 
        exact: true,
        component: 'components/pages/home'
      },
    ];
  }
}



window.__nav = new Navigation();
export default Navigation;