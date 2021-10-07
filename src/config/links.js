class Links {
  constructor(){
    this.app = 'https://jmarroyave.herokuapp.com';
    this.blog = `${this.app}/blog`;
    this.labs_trends = `${this.app}/labs/labs-trends`;
    this.labs_search = `${this.app}/labs/labs-search`;
    this.labs_mlb = `${this.app}/labs/labs-mlb`;
    this.kb_android = `${this.app}/kb/android`;

    this.trends_proto = 'https://jmarroyave-apps-stackoverflow.herokuapp.com';

    this.cv_pdf = '/res/files/cv-jmarroyave.pdf';	
  }
}

const inst = new Links();
export default inst;