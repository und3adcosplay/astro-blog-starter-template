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
        intro: 'Fan art inspired by Silent Hill.',
        items: [
          { image: '/folder.png', title: 'Fan art 1' },
          { image: '/folder.png', title: 'Fan art 2' },
          { image: '/folder.png', title: 'Fan art 3' },
        ],
      },
      cosplays: {
        title: 'Cosplays',
        intro: 'My Silent Hill cosplays.',
        items: [
          { image: '/folder.png', title: 'Cosplay 1' },
          { image: '/folder.png', title: 'Cosplay 2' },
          { image: '/folder.png', title: 'Cosplay 3' },
        ],
      },
      merch: {
        title: 'Merch',
        intro: 'My Silent Hill collection.',
        items: [
          { image: '/folder.png', title: 'Merch 1' },
          { image: '/folder.png', title: 'Merch 2' },
          { image: '/folder.png', title: 'Merch 3' },
        ],
      },
      props: {
        title: 'Props',
        intro: 'Props I have made for my Silent Hill cosplays.',
        items: [
          { image: '/folder.png', title: 'Prop 1' },
          { image: '/folder.png', title: 'Prop 2' },
          { image: '/folder.png', title: 'Prop 3' },
        ],
      },
    },
  },
};
