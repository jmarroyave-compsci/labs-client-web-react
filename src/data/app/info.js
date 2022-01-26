import _package_ from 'package.json';

const basics = {
  TITLE: "Entertainment Analysis" ,
  DESCRIPTION: "How the entertainment content changed through time and how its been influenced by historical events",
}


const info = {
  PAGE_TITLE: basics.TITLE,
  TITLE: basics.TITLE,
  DESCRIPTION: basics.DESCRIPTION,
  VERSION: `v.${_package_.version}`,
}

export default info;