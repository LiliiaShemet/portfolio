import iceCreamImg from '../../assets/images/previewProjects/IceCream.png';
import filmotekaImg from '../../assets/images/previewProjects/filmoteka.png';
import webStudioImg from '../../assets/images/previewProjects/webStudio.png';


export const ownProjects = [

  {
    id: 'id-1',
    label: 'Web Studio',
    link: 'https://liliiashemet.github.io/goit-markup-hw-08/',
    repo: 'https://github.com/LiliiaShemet/goit-markup-hw-08',
    preview: webStudioImg,
    info:
      'Responsive web page layout Web Studio - effective solutions for your business.',
    tech: [
      { id: 'id-1', name: 'HTML5' },
      { id: 'id-2', name: 'SCSS' },
    ],
  }
];

export const commandProjects = [
 
  {
    id: 'id-2',
    label: 'Filmoteka',
    repo: 'https://github.com/LiliiaShemet/code_club-filmoteka',
    preview: filmotekaImg,
    info: 'Team project Filmoteka - help yourself with choosing a movie.',
    link: 'https://prykhodko-pasha.github.io/code_club-filmoteka/',
    tech: [
      { id: 'id-1', name: 'HTML5' },
      { id: 'id-2', name: 'SCSS' },
      { id: 'id-3', name: 'JavaScript' },
      { id: 'id-4', name: 'Handlebars' },
      { id: 'id-5', name: 'REST API' },
      { id: 'id-6', name: 'AJAX' },
    ],
  },
  {
    id: 'id-1',
    label: 'IceCream',
    link: 'https://prykhodko-pasha.github.io/code_club-project/',
    repo: 'https://github.com/LiliiaShemet/code_club-project',
    preview: iceCreamImg,
    info:
      'Responsive web page layout for IceCream',
    tech: [
      { id: 'id-1', name: 'HTML5' },
      { id: 'id-2', name: 'SCSS' },
      { id: 'id-3', name: 'JavaScript' },
      { id: 'id-4', name: 'Parcel' },
    ],
  },
];
