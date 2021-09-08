import Movies, { QRY_MOVIES } from './Movies'

export default {
  title: 'Movies story',
};


// New story using controls
const Template = args => <Movies {...args} />;

export const Controls = Template.bind({});

Controls.args = {
  loading: false,
};


Controls.parameters = {
  apolloClient: {
    mocks: [
      {
        request: {
          query: QRY_MOVIES,
        },
        result: {
          "data": {
            "movies": [
              {
                "title": "Candy Jar",
                "description": "Dueling high school debate champs who are at odds on just about everything forge ahead with ambitious plans to get into the colleges of their dreams.",
                "country": [
                  "United States"
                ],
                "genre": [
                  "Children & Family Movies",
                  "Dramas",
                  "Romantic Movies"
                ]
              },
              {
                "title": "Candy Online",
                "description": "When a wardrobe malfunction goes viral, a bubbly live streamer struggles to navigate her classmates' cruel judgment and the small town she lives in.",
                "country": [
                  "Taiwan"
                ],
                "genre": [
                  "International TV Shows",
                  "TV Dramas",
                  "Teen TV Shows"
                ]
              },
              {
                "title": "Candyflip",
                "description": "On the incandescent shores of Goa, a young man tumbles down a mind-bending – and soon dangerous – series of trips after taking hallucinatory drugs.",
                "country": [
                  "India"
                ],
                "genre": [
                  "Dramas",
                  "Independent Movies",
                  "International Movies"
                ]
              }
            ]
          }
        },
      },
      {
        delay: 1e21,
        request: {
          query: QRY_MOVIES,
        },
        result: {
          data: {
            movies: []
          },
        },
      },
      {
        request: {
          query: QRY_MOVIES,
        },
        error: new Error('This is a mock network error'),
      },    
    ],
  },
};