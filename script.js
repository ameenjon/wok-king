// Keep all visitor-facing copy together here so both languages stay easy to edit.
const translations = {
    hu: {
    skip:'Ugrás a tartalomra',navAbout:'Rólunk',navMenu:'Étlap',navVisit:'Látogatás',navContact:'Kapcsolat',heroEyebrow:'KÍNAI ÉTTEREM · MISKOLC',heroTitle:'Jó ízek.<br><em>Jó társaság.</em>',heroIntro:'Találkozzunk a Wok Kingben — egy barátságos helyen, ahol a kínai konyha kerül az asztal közepére.',heroCta:'Tervezz látogatást',heroSecondary:'Fedezd fel az étlapot',ratingCopy:'· 290 Google-értékelés',photoLabel:'HELYED AZ ASZTALNÁL',heroLocation:'MISKOLC, BELVÁROS',heroCuisine:'KÍNAI KONYHA, JÓL ESŐ PILLANATOK',storyKicker:'A WOK KINGRŐL',storyTitle:'Egy hely, ahol<br>jó <em>megérkezni.</em>',storyText:'A Wok King Miskolc belvárosában, a Weidlich-házban vár. Ugorj be egy közös ebédre, egy nyugodt vacsorára vagy csak azért, mert megkívántál valami finomat.',storyLink:'Találj ide',statRating:'Google-értékelés',statReviews:'vendégvélemény',statPrice:'jelzett ár / fő',statNote:'A Google-ön megjelenített adatok alapján.',menuKicker:'AZ ASZTALHOZ',menuTitle:'A kínai konyha<br><em>öröme, együtt.</em>',menuIntro:'Nézd meg az étlapot, és válaszd ki, mi kerüljön ma az asztalra.',menuCardEyebrow:'ÉTLAP ÉS AKTUÁLIS AJÁNLATOK',menuCardTitle:'Kóstolj bele a Wok King kínálatába.',menuCardText:'Az aktuális fogásokról és árakról érdeklődj közvetlenül az étteremnél.',menuDisclaimer:'Az étlapot és az árakat az étterem változtathatja.',quote:'A legjobb étkezésekből közös emlékek lesznek.',quoteCaption:'VÁR A WOK KING',visitKicker:'TALÁLKOZZUNK',visitTitle:'Miskolc<br><em>szívében.</em>',visitIntro:'A Wok King a Weidlich-házban található, a belvárosban.',priceLabel:'Jelzett árkategória',perPerson:'/ fő',mapCta:'Útvonal a térképen',hoursNote:'Nyitvatartásért kérjük, ellenőrizd a Google Térképet.',contactKicker:'KAPCSOLAT',contactTitle:'Van egy<br><em>kérdésed?</em>',contactIntro:'Az étlapról, nyitvatartásról vagy látogatásodról érdeklődnél? Írj nekünk!',nameLabel:'Neved',namePlaceholder:'Hogy szólíthatunk?',emailLabel:'E-mail-címed',emailPlaceholder:'nev@email.com',messageLabel:'Üzeneted',messagePlaceholder:'Miben segíthetünk?',sendCta:'Üzenet ellenőrzése',footerAddress:'Miskolc · Széchenyi István út 21',footerMap:'Google Térkép ↗',errorName:'Kérjük, add meg a neved (legalább 2 karakter).',errorEmail:'Kérjük, adj meg egy érvényes e-mail-címet.',errorMessage:'Az üzenet legalább 10 karakter legyen.',success:'Köszönjük! Az űrlap ellenőrzése sikeres. Küldéshez kérjük, vedd fel velünk közvetlenül a kapcsolatot.'
  },
    en: {
    skip:'Skip to content',navAbout:'About',navMenu:'Menu',navVisit:'Visit',navContact:'Contact',heroEyebrow:'CHINESE RESTAURANT · MISKOLC',heroTitle:'Good food.<br><em>Good company.</em>',heroIntro:'Meet us at Wok King — a welcoming place to bring Chinese cuisine to the centre of the table.',heroCta:'Plan your visit',heroSecondary:'Explore the menu',ratingCopy:'· 290 Google reviews',photoLabel:'YOUR PLACE AT THE TABLE',heroLocation:'DOWNTOWN MISKOLC',heroCuisine:'CHINESE CUISINE, MOMENTS TO SAVOR',storyKicker:'ABOUT WOK KING',storyTitle:'A place to<br><em>feel welcome.</em>',storyText:'Wok King is waiting for you in the heart of Miskolc, inside Weidlich House. Stop by for lunch together, a relaxed dinner, or simply when you’re craving something delicious.',storyLink:'Find us',statRating:'Google rating',statReviews:'guest reviews',statPrice:'listed spend / person',statNote:'Based on information shown on Google.',menuKicker:'COME TO THE TABLE',menuTitle:'The joy of Chinese<br><em>cuisine, together.</em>',menuIntro:'Take a look at the menu and choose what you’d like to share today.',menuCardEyebrow:'MENU & CURRENT SPECIALS',menuCardTitle:'Get a taste of what Wok King has to offer.',menuCardText:'Please contact the restaurant for current dishes and prices.',menuDisclaimer:'The restaurant may change its menu and prices.',quote:'The best meals become memories we share.',quoteCaption:'WOK KING IS WAITING',visitKicker:'COME SAY HELLO',visitTitle:'In the heart<br>of <em>Miskolc.</em>',visitIntro:'Wok King is located in Weidlich House in the city centre.',priceLabel:'Listed price range',perPerson:'/ person',mapCta:'Get directions',hoursNote:'Please check Google Maps for current opening hours.',contactKicker:'CONTACT',contactTitle:'Have a<br><em>question?</em>',contactIntro:'Want to ask about the menu, opening hours or your visit? Send us a note!',nameLabel:'Your name',namePlaceholder:'What should we call you?',emailLabel:'Your email',emailPlaceholder:'name@email.com',messageLabel:'Your message',messagePlaceholder:'How can we help?',sendCta:'Check my message',footerAddress:'Miskolc · Széchenyi István út 21',footerMap:'Google Maps ↗',errorName:'Please enter your name (at least 2 characters).',errorEmail:'Please enter a valid email address.',errorMessage:'Your message must be at least 10 characters.',success:'Thanks! Your form looks good. To send it, please contact the restaurant directly.'
  }
};

Object.assign(translations.hu, {
  navWok:'A wok története',reviewsKicker:'VENDÉGEINK MONDTÁK',reviewsTitle:'Valódi visszajelzések.<br><em>Valódi vendégektől.</em>',reviewsSummary:'Google · 290 értékelés*',reviewOne:'Étel: 5/5 · Kiszolgálás: 5/5 · Hangulat: 4/5',reviewOneMeta:'Helyben fogyasztás · Ebéd · 4 000–6 000 Ft / fő',reviewTwo:'Étel: 5/5 · Kiszolgálás: 5/5 · Hangulat: 5/5',reviewTwoMeta:'Google-értékelés · A közölt részpontszámok alapján',reviewsCtaTitle:'Olvasd el a legfrissebb véleményeket.',reviewsCta:'Google-értékelések',reviewsNote:'*A Google-adat a megadott adatlapképből származik. A részpontszámok nyilvánosan megjelenített Google-visszajelzésekből, külső megjelenítés alapján származnak; az aktuális értékelésekért nyisd meg a Google Térképet.',phoneLabel:'Telefonálj nekünk'
});
Object.assign(translations.en, {
  navWok:'Wok history',reviewsKicker:'GUEST REVIEWS',reviewsTitle:'Real feedback.<br><em>From real guests.</em>',reviewsSummary:'Google · 290 reviews*',reviewOne:'Food: 5/5 · Service: 5/5 · Atmosphere: 4/5',reviewOneMeta:'Dine-in · Lunch · HUF 4,000–6,000 per person',reviewTwo:'Food: 5/5 · Service: 5/5 · Atmosphere: 5/5',reviewTwoMeta:'Google review · Based on published category ratings',reviewsCtaTitle:'Read the latest guest feedback.',reviewsCta:'Google reviews',reviewsNote:'*The Google rating comes from the listing screenshot you provided. Category scores are from publicly displayed Google reviews via a third-party listing; open Google Maps for current reviews.',phoneLabel:'Call the restaurant'
});
Object.assign(translations.hu, {
  wokEyebrow:'KONYHAI KULTÚRA · RÖVIDEN',wokTitle:'A wok<br><em>története.</em>',wokLead:'Egy egyszerű, sokoldalú edény, amely generációk óta formálja a kínai konyhát. Nézd meg, hogyan lett a magas falú serpenyőből világszerte ismert konyhai eszköz.',wokExplore:'Fedezd fel a történetet',timelineKicker:'IDŐVONAL',eraRoots:'Régi gyökerek',eraMetal:'Fém wokok',eraWorld:'Út a világba',rootsDate:'ÉVSZÁZADOKKAL EZELŐTT',rootsTitle:'Egy forma, sokféle étel.',rootsText:'A wok kínai eredetű főzőedény. A pontos kialakulásáról kevés biztos adatunk van; a Smithsonian egyik összefoglalója szerint a széles főzőfelület és a kisebb alap kevés olajjal is praktikus lehetett, miközben a magas falak többféle főzési módot tettek lehetővé.',metalDate:'A MING-KORTÓL',metalTitle:'A fém edény elterjedése.',metalText:'A wok alakja jól alkalmazkodik a különféle tűzhelyekhez és főzési módokhoz. A Smithsonian gyűjteményében őrzött 19. századi darab is megmutatja, hogy a wok már a kínai közösségekkel együtt utazott az Egyesült Államokba.',worldDate:'AZ 1800-AS ÉVEKTŐL',worldTitle:'A wok új konyhákba érkezik.',worldText:'A Smithsonian egy Kaliforniába került, 1800-as évekbeli wok történetét a kínai bevándorlókhoz és a korabeli aranylázhoz kapcsolja. Az edény a közösségi étkezés és az otthonról hozott főzési tudás része volt.',historySource:'Forrás: Smithsonian Asian Pacific American Center, “What’s in Your Wok?”; Smithsonian National Museum of American History.',factsKicker:'MIÉRT KÜLÖNLEGES?',factsTitle:'Egy edény.<br><em>Sok lehetőség.</em>',factOneTitle:'Magas falak',factOneText:'A magas, ívelt oldalak segítenek a hozzávalókat keverés közben az edényben tartani.',factTwoTitle:'Gyors hő',factTwoText:'A tűz fölött közvetlenül melegedő forma gyors, erős hővel dolgozó pirításhoz is alkalmas.',factThreeTitle:'Több technika',factThreeText:'Piríthatsz, párolhatsz, süthetsz vagy főzhetsz benne – az edény formája sokféle feladatot kiszolgál.',selectorEyebrow:'VÁLASSZ TECHNIKÁT',selectorTitle:'Mit készítenél a wokban?',cookStir:'Gyors pirítás',cookSteam:'Párolás',cookFry:'Sütés',cookStirText:'Keverd előre ki a hozzávalókat: a pirítás gyorsan halad!',cookSteamText:'Tegyél a wokba párolóbetétet vagy bambuszkosarat, és fedd le.',cookFryText:'A wok mély formája segít, hogy az olaj a serpenyő alján összegyűljön.',quizKicker:'PRÓBÁLD KI',quizEyebrow:'MINI KVÍZ',quizTitle:'Mire jó a wok<br><em>kisebb alapja?</em>',quizWrongOne:'Csak dísznek',quizCorrect:'Kevesebb olajjal is lehet főzni',quizWrongTwo:'Hogy ne lehessen keverni',quizHint:'Válassz egy választ!',quizRight:'Így van! A keskenyebb alj segíthet kevés olajjal főzni.',quizTryAgain:'Nem egészen — próbáld újra!',sourcesLabel:'TOVÁBBI OLVASNIVALÓ',backToRestaurant:'Vissza az étterem oldalára ↗'
});
Object.assign(translations.en, {
  wokEyebrow:'FOOD CULTURE · A SHORT READ',wokTitle:'The story<br><em>of the wok.</em>',wokLead:'A simple, versatile pan that has shaped Chinese cooking for generations. Explore how a deep-sided vessel became a familiar kitchen tool around the world.',wokExplore:'Explore the story',timelineKicker:'TIMELINE',eraRoots:'Early roots',eraMetal:'Metal woks',eraWorld:'A journey abroad',rootsDate:'CENTURIES AGO',rootsTitle:'One shape, many dishes.',rootsText:'The wok is a Chinese cooking vessel, though its precise beginnings are not well documented. A Smithsonian overview notes that a broad cooking surface and smaller base could make cooking practical with less oil, while the high sides support different cooking methods.',metalDate:'BY THE MING PERIOD',metalTitle:'Metal woks spread.',metalText:'The wok’s shape adapts to different heat sources and cooking techniques. A 19th-century wok in the Smithsonian collection shows how woks travelled to the United States with Chinese communities.',worldDate:'FROM THE 1800s',worldTitle:'The wok enters new kitchens.',worldText:'The Smithsonian connects the story of a 19th-century wok in California with Chinese immigrants during the Gold Rush era. The pan was part of shared meals and cooking knowledge carried from home.',historySource:'Sources: Smithsonian Asian Pacific American Center, “What’s in Your Wok?”; Smithsonian National Museum of American History.',factsKicker:'WHAT MAKES IT SPECIAL?',factsTitle:'One pan.<br><em>Many possibilities.</em>',factOneTitle:'High sides',factOneText:'The high, curved sides help keep ingredients in the pan as you toss and stir.',factTwoTitle:'Fast heat',factTwoText:'Its shape works well for quick stir-frying over direct, high heat.',factThreeTitle:'Many techniques',factThreeText:'Stir-fry, steam, fry or simmer — the wok’s shape supports a range of cooking methods.',selectorEyebrow:'CHOOSE A TECHNIQUE',selectorTitle:'What would you cook in a wok?',cookStir:'Stir-fry',cookSteam:'Steam',cookFry:'Fry',cookStirText:'Prep your ingredients first: stir-frying moves quickly!',cookSteamText:'Add a steaming rack or basket, then cover the wok.',cookFryText:'The wok’s deep shape helps oil pool at the bottom.',quizKicker:'YOUR TURN',quizEyebrow:'QUICK QUIZ',quizTitle:'Why is a wok’s<br><em>base smaller?</em>',quizWrongOne:'For decoration',quizCorrect:'It can cook with less oil',quizWrongTwo:'So you can’t stir the food',quizHint:'Choose an answer!',quizRight:'That’s right! A narrower base can help you cook with less oil.',quizTryAgain:'Not quite — try again!',sourcesLabel:'READ MORE',backToRestaurant:'Back to the restaurant ↗'
});
Object.assign(translations.hu, {eraMetal:'Történelmi wokok',metalDate:'A SMITHSONIAN GYŰJTEMÉNYÉBEN',metalTitle:'Egy 19. századi wok nyomában.',metalText:'A Smithsonian National Museum of American History leírása szerint egy, az 1800-as évekből származó, Kínában készült wok kínai bevándorlókkal került Kaliforniába, ahol használták is.',worldDate:'AZ 1800-AS ÉVEKBEN',worldText:'A Smithsonian egy Kaliforniába került wokot a kínai bevándorlók történetéhez kapcsol. Az edény a közösségi étkezés és az otthonról hozott főzési tudás része volt.'});
Object.assign(translations.en, {eraMetal:'A historic wok',metalDate:'IN THE SMITHSONIAN COLLECTION',metalTitle:'Following a 19th-century wok.',metalText:'The Smithsonian National Museum of American History describes a wok made in China in the 1800s that was brought to California by Chinese immigrants and used there.',worldDate:'IN THE 1800s',worldText:'The Smithsonian connects a wok brought to California with the story of Chinese immigrants. The pan was part of shared meals and cooking knowledge carried from home.'});
Object.assign(translations.hu, {reviewSourceLink:'A véleményadatok forrása ↗'});
Object.assign(translations.en, {reviewSourceLink:'Review listing source ↗'});

const langButtons = document.querySelectorAll('[data-lang]');
function setLanguage(lang) {
  const chosen = translations[lang] ? lang : 'hu';
  document.documentElement.lang = chosen;
  document.title = chosen === 'hu' ? 'Wok King | Kínai étterem Miskolcon' : 'Wok King | Chinese restaurant in Miskolc';
  document.querySelector('meta[name="description"]').content = chosen === 'hu'
    ? 'Wok King – kínai étterem Miskolc szívében. Fedezd fel az éttermet, nézd meg az étlapot, és tervezz látogatást!'
    : 'Wok King – Chinese restaurant in the heart of Miskolc. Discover the restaurant, explore the menu and plan your visit!';
  document.querySelectorAll('[data-i18n]').forEach(el => { el.innerHTML = translations[chosen][el.dataset.i18n]; });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => { el.placeholder = translations[chosen][el.dataset.i18nPlaceholder]; });
  langButtons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.lang === chosen)));
  try { localStorage.setItem('wokking-language', chosen); } catch (_) { /* Storage may be disabled; the page still works. */ }
  document.dispatchEvent(new Event('site-language-change'));
}

let savedLanguage = 'hu';
try { savedLanguage = localStorage.getItem('wokking-language') || new URLSearchParams(location.search).get('lang') || 'hu'; } catch (_) { savedLanguage = new URLSearchParams(location.search).get('lang') || 'hu'; }
setLanguage(savedLanguage);
langButtons.forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.lang)));

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menuToggle.addEventListener('click', () => {
  const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!expanded));
  menuToggle.setAttribute('aria-label', expanded ? 'Menü megnyitása' : 'Menü bezárása');
  nav.classList.toggle('open', !expanded);
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { nav.classList.remove('open'); menuToggle.setAttribute('aria-expanded','false'); }));

// Reveal sections as they enter the viewport. Reduced-motion users see them immediately.
const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
  }), { threshold: 0.12 });
  revealItems.forEach(item => observer.observe(item));
} else revealItems.forEach(item => item.classList.add('is-visible'));

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
const form = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');
if (form) form.addEventListener('submit', event => {
  event.preventDefault();
  const lang = document.documentElement.lang;
  const name = form.elements.name.value.trim();
  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  let error = '';
  if (name.length < 2) error = translations[lang].errorName;
  else if (!emailOk) error = translations[lang].errorEmail;
  else if (message.length < 10) error = translations[lang].errorMessage;
  formMessage.textContent = error || translations[lang].success;
  formMessage.classList.toggle('error', Boolean(error));
});

// Interactive history controls on the wok page.
const storyContent = {
  roots: ['rootsDate','rootsTitle','rootsText'],
  metal: ['metalDate','metalTitle','metalText'],
  world: ['worldDate','worldTitle','worldText']
};
document.querySelectorAll('.timeline-tab').forEach(tab => tab.addEventListener('click', () => {
  const lang = document.documentElement.lang;
  const panel = document.getElementById('timeline-panel');
  document.querySelectorAll('.timeline-tab').forEach(item => {
    const active = item === tab;
    item.classList.toggle('active', active);
    item.setAttribute('aria-selected', String(active));
  });
  panel.setAttribute('aria-labelledby', tab.id);
  const [date,title,text] = storyContent[tab.dataset.story].map(key => translations[lang][key]);
  panel.querySelector('.timeline-date').textContent = date;
  panel.querySelector('h2').textContent = title;
  panel.querySelector('p').textContent = text;
}));
document.addEventListener('site-language-change', () => {
  const selectedTab = document.querySelector('.timeline-tab.active');
  if (selectedTab) selectedTab.click();
  const selectedCook = document.querySelector('.cook-button.active');
  if (selectedCook) document.getElementById('cook-result').textContent = translations[document.documentElement.lang][cookingCopy[selectedCook.dataset.cook]];
});
const cookingCopy = {stir:'cookStirText',steam:'cookSteamText',fry:'cookFryText'};
document.querySelectorAll('.cook-button').forEach(button => button.addEventListener('click', () => {
  document.querySelectorAll('.cook-button').forEach(item => item.classList.toggle('active', item === button));
  document.getElementById('cook-result').textContent = translations[document.documentElement.lang][cookingCopy[button.dataset.cook]];
}));
document.querySelectorAll('.quiz-options button').forEach(button => button.addEventListener('click', () => {
  const result = document.getElementById('quiz-result');
  result.textContent = translations[document.documentElement.lang][button.dataset.answer === 'correct' ? 'quizRight' : 'quizTryAgain'];
  result.classList.toggle('correct', button.dataset.answer === 'correct');
}));
