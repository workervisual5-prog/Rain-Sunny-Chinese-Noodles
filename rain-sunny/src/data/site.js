// EDIT HERE: every business detail, link and piece of content lives in this file.
const img = (n) => `/images/${n}`
export const site = {
  name: 'Rain & Sunny Chinese Noodles',
  cn: '雨晴面馆',
  tagline: 'Hand-pulled noodles. Slow-braised beef. Northern China, in downtown London.',
  phone: '+15196601881',
  phoneDisplay: '(519) 660-1881',
  email: 'info@rainandsunnynoodles.ca', // TODO: replace with the client's real email
  address: '186 King St, London, ON N6A 1C7',
  rating: '4.4',
  mapsLink: 'https://maps.app.goo.gl/8gMnBzhLeZBdv7my5',
  mapsEmbed: 'https://www.google.com/maps?q=186+King+St,+London,+ON+N6A+1C7&output=embed',
  reviewLink: 'https://maps.app.goo.gl/8gMnBzhLeZBdv7my5', // swap for the direct "write a review" link
  orderLinks: [
    { label: 'Order on Uber Eats', url: 'https://www.ubereats.com/ca/store/%E9%9B%A8%E6%99%B4%E9%9D%A2%E9%A6%86-rain-%26-sunny-chinese-noodles/4oZQJ0jWWuKApLS9_K2lSA' },
  ],
  social: { facebook: '', instagram: '' }, // add URLs to show icons
  hours: [
    ['Monday', '11 AM – 7 PM'], ['Tuesday', '11 AM – 8 PM'], ['Wednesday', '11 AM – 8 PM'],
    ['Thursday', '11 AM – 8 PM'], ['Friday', '11 AM – 8 PM'], ['Saturday', '11 AM – 8 PM'], ['Sunday', '11 AM – 8 PM'],
  ],
}
export const nav = [
  ['Home', '#home'], ['About', '#about'], ['Menu', '#menu'], ['Reservations', '#reservations'],
  ['Order Online', '#order'], ['Gallery', '#gallery'], ['Location', '#location'],
  ['Reviews', '#reviews'], ['Catering', '#catering'], ['Contact', '#contact'],
]
export const hero = img('hero.png')
// Menu from reviews + Wheree/Uber Eats dish names. Prices are intentionally omitted — add `price: '$14.99'` to any item to show it.
export const menu = [
  { title: 'Noodle Soups', cn: '汤面', items: [
    { name: 'Spicy Beef Noodle Soup', desc: 'Fiery red broth, melt-in-your-mouth braised beef, chewy noodles.', image: img('beef-noodle.png') },
    { name: 'Spicy Chicken Noodle Soup', desc: 'A generous bowl with bold, layered chilli flavour.', image: img('soup-skewers.png') },
    { name: 'Braised Beef Knife-Shaved Noodles', desc: 'Broad, springy hand-sliced noodles in a savoury braise.', image: img('marble-feast.png') },
  ]},
  { title: 'Noodles & Chilli Oil', cn: '拌面', items: [
    { name: 'Hand-Pulled Noodles', desc: 'Pulled to order for a satisfying chew, tossed with house chilli oil.', image: img('cold-noodles.png') },
    { name: 'Crispy Pork Noodles', desc: 'Crisp-fried pork over silky noodles in a spiced sauce.', image: img('crispy-noodles.png') },
  ]},
  { title: 'Street Snacks', cn: '小吃', items: [
    { name: 'Beef Roll (Jianbing-style)', desc: 'Freshly made flaky bread rolled around tender beef.', image: img('beef-roll.png') },
    { name: 'Lamb & Chicken Skewers', desc: 'Grilled with cumin, chilli and sesame.', image: img('skewers.png') },
    { name: 'Crushed Cucumber Pickle', desc: 'Cool, crunchy and dressed in sesame sauce.', image: null },
  ]},
  { title: 'Dumplings & Wonton', cn: '饺子', items: [
    { name: 'Wonton Soup', desc: 'Tender wontons in a rich, comforting broth.', image: null },
    { name: 'Pan-Folded Dumplings', desc: 'Hand-folded and served with chilli dip.', image: img('dumplings.png') },
  ]},
]
export const gallery = ['hero.png','interior-dark.png','beef-noodle.png','dumplings.png','interior-classic.png','skewers.png','marble-feast.png','crispy-noodles.png','cold-noodles.png','beef-roll.png','interior-3.png','interior-4.png'].map(img)
export const reviews = [
  { name: 'Autumn Irene', text: 'The food was so good and packed with so much flavour! I definitely recommend the spicy chicken and spicy beef noodle soup — huge portions for the price!' },
  { name: 'David Lee', text: 'Great knife-shaved noodle here, everything seems freshly made in house including the beef roll. The crushed pickle was great too, seasoned with sesame sauce.' },
  { name: 'Janet Hyatt', text: 'I had the beef noodles and WOW. The noodles are chewy, the broth so savoury, and the beef melted in my mouth. Even better than what I get back home in Toronto.' },
  { name: 'Jessica W', text: 'Delicious traditional Chinese noodle. Hand pulled and hand sliced, both super fresh. Their home-made chilli oil is amazing too! Will definitely come back.' },
]
