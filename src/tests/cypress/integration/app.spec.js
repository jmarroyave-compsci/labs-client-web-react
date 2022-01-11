import sitemap from '../../../data/sitemap/data.json'
import { ERROR_HEADER_TEXT } from '../../../components/core/ui/error'

const BASE_PATH = Cypress.env('BASE_PATH')
const SERVER_URL = Cypress.env('SERVER_URL')
const SITE_URL = Cypress.env('SITE_URL')
const SERVERLESS = !Cypress.env('LOCAL')
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

        it(`should not contain component errors`, () => {

          if(root == "/"){
            cy.log("wait a little while for the home page")
            cy.wait(WAIT_FOR)
            cy.wait(WAIT_FOR)
          }

          cy.get("body").should('not.contain', ERROR_HEADER_TEXT)
        })

        it(`should not have broken links`, () => {
          const done = [];
          if (Cypress.$('a').length == 0) return
          cy.get('a')
           .each( a => {
              const href = a.attr('href') 

              if( done.includes(href) ) return;

              done.push(href)

              if(href.startsWith("mailto")) return;
              if(href.includes("linkedin")) return;

              if(SERVERLESS){
                if(href.includes("movies/tt")) return;
                if(href.includes("tv-shows/tt")) return;
                if(href.includes("podcasts/pc")) return;
                if(href.includes("people/nm")) return;
                if(href.includes("awards/mf")) return;
                if(href.includes("festivals/mf")) return;
              }

              cy.request({
                url: href,
                followRedirect: true,
              })

           })        
        });

        it(`should not have broken images`, () => {
          const done = []
          if (Cypress.$('img').length == 0) return

          cy.get('img')
           .each( img => {
              const src = img.attr('src') 
              if( done.includes(src) ) return;

              done.push(src)
              console.log("img src", src)

              if (!src) return;

              cy.request({
                url: src,
                followRedirect: true,
              })

           })        
        });
      })

      if(!children) return;

      Object.keys( children ).forEach( path => {
        if( path.startsWith("____")) path = path.substring(4);          
        visit( `${(root == "/") ? "" : root}/${path}`, children[path] )  
      })
      
    }

    visit( "/",  sitemap["home"] );
    //visit( "/",  null );
    //visit( "/movies/stories",  null );
    //visit( "/movies/stories/actors",  null );
    //visit( "/movies/stories/decades",  null );
})