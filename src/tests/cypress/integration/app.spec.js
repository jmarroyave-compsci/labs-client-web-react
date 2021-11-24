import sitemap from '../../../data/sitemap/data.json'
import { ERROR_HEADER_TEXT } from '../../../components/core/ui/error'

describe('Check for render', () => {

    console.log(sitemap)

    const visit = ( root, children ) => {
      it(`should navigate to the '${root}' page`, () => {
        cy.visit(root)
        cy.get("body").should('not.contain', ERROR_HEADER_TEXT)
      })


      if(!children) return;

      Object.keys( children ).forEach( path => {
        if( path.startsWith("____")) path = path.substring(4);          
        console.log(path)
        visit( `${(root == "/") ? "" : root}/${path}`, children[path] )  
      })
      
    }


    visit( "/",  sitemap["home"] );
})
