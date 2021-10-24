import sitemap from '../../../data/sitemap/data.json'

describe('Check for broken links', () => {

    console.log(sitemap)

    const visit = ( root, children ) => {
      it(`should navigate to the '${root}' page`, () => {
        cy.request({url: root})
          .should((response) => {
            expect(response.status).to.eq(200)
          })        
      })

      if(!children) return;

      Object.keys( children ).forEach( path => {
        if( path.startsWith("____")) path = path.substring(4);          
        console.log(path)
        visit( `${root}${path}/`, children[path] )  
      })
      
    }


    visit( "/",  sitemap["home"] );
})
