// Everything for the fandom mini galleries lives in this one file.
//
// To add a picture to a gallery, add one line to its "items" list:
//   image = a file in the public folder (a roughly square one looks best)
//   title = the little label under the picture
//   href  = where it goes when clicked. Leave this out to open the full-size picture.
//           Use a page on your site like '/blog/first-post', or a full web address.
//
// Text goes inside quote marks. If it has an apostrophe, wrap it in double quotes,
// like "Heather's cosplay".

// The scrolling picture strip for the Silent Hill pages.
// Paste your Silent Hill gif list in here, one file per line, like:  '/sh-eileen.gif',
// (If it stays empty, these pages use your normal strip instead.)
export const silentHillGifs = [
  '/sh-eileen.gif',
  '/sh-hanging.gif',
  '/sh-maria.gif',
  '/sh-rabbit.gif',
  '/sh-thegoat.gif',
  '/sh-rpt.gif',
  '/sh-heather.gif',
  '/sh-lisa.gif',
  '/sh-theroom.gif',
  '/sh-down.gif',
  '/sh-moa.gif',
  '/sh-james.gif',
];

export const galleryFandoms = {
  'silent-hill': {
    name: 'Silent Hill',
    theme: 'silent-hill',
    gifs: silentHillGifs,
    // The order here is the order of the buttons at the top of each gallery.
    // Each name (art, cosplays, ...) becomes part of the web address:
    // /fandom/silent-hill/art, /fandom/silent-hill/cosplays, and so on.
    galleries: {
      art: {
        title: 'Art',
        layout: 'grid',
        intro: 'Fan art inspired by Silent Hill.',
        items: [
          { image: '/folder.png', title: 'Lisa animation' },
          { image: '/folder.png', title: 'Heather and Memory of Alessa animation' },
          { image: '/folder.png', title: 'Mary animation' },
        ],
      },
      cosplays: {
        title: 'Cosplays',
        intro: 'My Silent Hill cosplays.',
        items: [
          {
            title: 'Heather Mason',
            photos: [
              { image: '/folder.png', title: '1' },
              { image: '/folder.png', title: '2' },
              { image: '/folder.png', title: '3' },
            ],
          },
          {
            title: 'Lisa Garland',
            photos: [
              { image: '/folder.png', title: '1' },
              { image: '/folder.png', title: '2' },
              { image: '/folder.png', title: '3' },
            ],
          },
        ],
      },
      merch: {
        title: 'Merch',
        layout: 'grid',
        intro: 'My Silent Hill collection.',
        items: [
          { image: '/folder.png', title: 'Pyramid Head Nindroid' },
          { image: '/folder.png', title: 'Pyramid Head figure by bloodandteeth.com' },
          { image: '/folder.png', title: 'Silent Hill LEGO minifigures' },
          { image: '/folder.png', title: 'Pyramid Head original art piece by ChrisOzFulton' },
          { image: '/folder.png', title: 'Autograph from Elizabeth Mary Mcglynn' },
          { image: '/folder.png', title: 'Silent Hill Mementos art print by AstralTigerArt' },
          { image: '/folder.png', title: 'Room 302 enamel pin from fangamer.com' },
          { image: '/folder.png', title: 'Bloody Lisa lenticular enamel in from fangamer.com' },
          { image: '/folder.png', title: 'Bobblehead Nurse enamel in from fangamer.com' },
          { image: '/folder.png', title: 'Robbie the Rabbit enamel in from fangamer.com' },
        ],
      },
      props: {
        title: 'Props',
        intro: 'Props I have made for my Silent Hill cosplays.',
        items: [
          {
            title: 'Seal of Metatron',
            photos: [
              { image: '/folder.png', title: 'Front' },
              { image: '/folder.png', title: 'Back' },
              { image: '/folder.png', title: 'Making of' },
            ],
          },
          {
            title: 'Heather’s Pendant',
            photos: [
              { image: '/folder.png', title: 'Front' },
              { image: '/folder.png', title: 'Back' },
              { image: '/folder.png', title: 'Making of' },
            ],
          },
          {
            title: 'Silent Light',
            photos: [
              { image: '/folder.png', title: 'Front' },
              { image: '/folder.png', title: 'Back' },
              { image: '/folder.png', title: 'Making of' },
            ],
          },
        ],
      },
    },
  },
};
