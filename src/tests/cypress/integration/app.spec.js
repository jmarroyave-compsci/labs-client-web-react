import sitemap from '../../../data/sitemap/data.json'
import { ERROR_HEADER_TEXT } from '../../../components/core/ui/error'


const BASE_PATH = Cypress.env('BASE_PATH')
const SERVER_URL = Cypress.env('SERVER_URL')
const SITE_URL = Cypress.env('SITE_URL')
const WAIT_FOR = 5 * 1000

describe('Check for render', () => {

    const visit = ( root, children ) => {

      context(`${root}`, () => {
        before(() => {

          /*
          cy.intercept({
            method: "+(GET|POST)",
            url: `${SERVER_URL}/2.0/graphql`,
          }).as('XHR_DATA');
          */

          cy.visit(`${BASE_PATH}${root}`)
          //cy.wait('@XHR_DATA').its('response.statusCode').should('equal', 200)
          cy.wait(WAIT_FOR)
        })      

        it(`should not contain errors in the page`, () => {
          cy.get("body").should('not.contain', ERROR_HEADER_TEXT)
        })

        it(`checking for broken links`, () => {
          cy.get('a')
           .each( a => {
              const href = a.attr('href') 
              console.log(a, a.href)
              if(href.startsWith("mailto")) return;
              if(href.includes("linkedin")) return;
              cy.request(href)

           })        
        });

      })


      if(!children) return;

      Object.keys( children ).forEach( path => {
        if( path.startsWith("____")) path = path.substring(4);          
        console.log(path)
        visit( `${(root == "/") ? "" : root}/${path}`, children[path] )  
      })
      
    }

    visit( "/",  sitemap["home"] );
    //visit( "/movies/stories",  null );
    //visit( "/movies/stories/actors",  null );
    //visit( "/movies/stories/decades",  null );
})