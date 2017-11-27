document.getElementById('toggle-terms').addEventListener('click', function () {
  document.getElementById('popup').style.display = 'block';
  setTimeout(function() {
    document.getElementById('popup').style.opacity = 1;
  }, 1);
});
document.getElementById('popup').addEventListener('click', function (e) {
  if (e.target != this) return;
  document.getElementById('popup').style.opacity = 0;
  setTimeout(function() {
    document.getElementById('popup').style.display = 'none';
  }, 200);
});
document.getElementById('close-terms').addEventListener('click', function (e) {
  document.getElementById('popup').style.opacity = 0;
  setTimeout(function() {
    document.getElementById('popup').style.display = 'none';
  }, 200);
});

document.getElementById('scroll-to-accordion-toggle').addEventListener('click', function() {
  document.querySelector('#accordion-instructions').scrollIntoView({ 
    behavior: 'smooth',
    block: "start",
    inline: "nearest"
  });
});

accordion = new Accordion({
  targetId: 'accordion',
  pathToThumbnails: './img/accordion/',
  data: [
    {
      tab_title: 'Pingelised sündmused',
      tab_selections: [
        {
          item_title: 'Aaretejaht',
          item_description: '1820: Hispaanlased lastivad laeva aaretega, kuid see röövitakse ja aare peidetakse väikesele saarele. Tänapäeva aaretejahtija läheb seda otsima.',
          item_img: '1.jpg'
        },
        {
          item_title: 'Purustav orkaan',
          item_description: '1900: Orkaan purustab Galvestoni linna. Katastroofis hukkub 8000 inimest ning see USA linn kaotab igaveseks oma jõukuse ja sära.',
          item_img: '2.jpg'
        },
        {
          item_title: 'Hirmsaim lennukatastroof',
          item_description: '1977: Gran Canaria lennuväljal plahvatanud pommi tõttu suunatakse paljud lennud Tenerifele. Tekkinud segaduses juhtub ajaloo suurim lennuõnnetus.',
          item_img: '3.jpg'
        },
        {
          item_title: 'Samuraide kättemaks',
          item_description: '1703: Noor mees sunnitakse enesetapule ning tema klanni samuraid peavad perekonna au taastama.',
          item_img: '4.jpg'
        },
        {
          item_title: 'Project Azorian',
          item_description: '1968: Ootamatult upub nõukogude allveelaev K-129 tuumarakettidega pardal. Mõne aasta pärast alustab CIA vaenlase allveelaeva koopia ehitamist - algab projekt Azorian.',
          item_img: '5.jpg'
        },
        {
          item_title: 'Viis ööpäeva põrgus',
          item_description: '1977: Palestiina terroristid kaaperdavad reisilennuki. Tund-tunnilt kustub reisijate lootus eluga pääseda. Lääne-Saksamaa saadab Somaaliasse teel olevale lennukile vastu eriüksuse.',
          item_img: '6.jpg'
        },
        {
          item_title: 'Tuumakatastroof Tšernobõlis',
          item_description: '1986: Suur osa Nõukogude Liidu elektrist tuleb tuumajaamadest, kuid nende ehitamisel on tehtud mitmeid vigu. 26. aprillil toimub Tšernobõli tuumajaamas plahvatus ning ajaloo suurim tuumakatastroof saab tõeks.',
          item_img: '7.jpg'
        }
      ]
    },
    {
      tab_title: 'Kuulsad teod',
      tab_selections: [
        {
          item_title: 'In quis nulla',
          item_description: 'In aliquip laborum id nisi in incididunt veniam enim voluptate id est magna enim exercitation. Voluptate velit sint sed aliqua pariatur veniam qui exercitation aute id fugiat.',
          item_img: '5.jpg'
        },
        {
          item_title: 'Duis qui irure',
          item_description: 'Dolore reprehenderit irure proident pariatur incididunt nulla sit mollit sit. Incididunt ut id nisi id nostrud est culpa sunt incididunt.',
          item_img: '1.jpg'
        },
        {
          item_title: 'Lorem ipsum',
          item_description: 'Dolore excepteur dolor occaecat laboris laboris labore adipisicing sint dolore ut mollit in laboris dolore ex aliqua enim elit.',
          item_img: '7.jpg'
        },
        {
          item_title: 'Lorem ipsum consectetur',
          item_description: 'Irure consequat laborum laboris ea exercitation fugiat dolore occaecat. Nulla sunt ut ut eu culpa eu sed ut tempor nulla officia nulla.',
          item_img: '6.jpg'
        },
        {
          item_title: 'Commodo consequat',
          item_description: 'Velit dolor ut magna non ut ad veniam dolor adipisicing nulla aliquip nisi labore. Tempor ut sunt culpa nostrud amet consectetur magna occaecat veniam officia esse enim laboris commodo mollit est magna ut.',
          item_img: '2.jpg'
        },
        {
          item_title: 'Esse in pariatur',
          item_description: 'Lorem ipsum veniam non sed qui aliqua anim do officia deserunt ut aliqua tempor duis qui consequat. In ex est in deserunt in cillum reprehenderit fugiat voluptate.',
          item_img: '3.jpg'
        },
        {
          item_title: 'Proident in exercitation',
          item_description: 'Deserunt duis labore irure nisi in ut nulla quis ut minim. Culpa cupidatat id tempor consectetur ut elit do in adipisicing occaecat officia dolore dolore nulla dolor proident sit deserunt.',
          item_img: '4.jpg'
        }
      ]
    },
    {
      tab_title: 'Igapäevane elu',
      tab_selections: [
        {
          item_title: 'Sunt reprehenderit',
          item_description: 'Esse fugiat fugiat ex mollit in dolore aliquip qui officia nisi. Aute duis duis ullamco adipisicing sit voluptate ullamco aliqua in officia nisi ex.',
          item_img: '7.jpg'
        },
        {
          item_title: 'Aute dolore',
          item_description: 'Lorem ipsum sint qui nisi ut amet velit dolor dolor sint exercitation et dolor aliquip. Nulla ullamco consequat eu dolor ut ea minim ex id eu incididunt velit.',
          item_img: '6.jpg'
        },
        {
          item_title: 'Ut labore',
          item_description: 'Aliqua dolor sint officia sed dolor et nisi anim reprehenderit pariatur voluptate esse ad ullamco. Lorem ipsum anim in qui dolore dolor magna nostrud excepteur in qui reprehenderit consequat dolor consequat reprehenderit non in sunt ad.',
          item_img: '5.jpg'
        },
        {
          item_title: 'In non reprehenderit',
          item_description: 'Laboris dolor in eu quis in velit sint ex in quis nulla cillum. Quis qui mollit sed mollit sunt dolore veniam voluptate ut amet.',
          item_img: '4.jpg'
        },
        {
          item_title: 'Ullamco tempor',
          item_description: 'Sint elit fugiat velit laborum commodo eu pariatur id adipisicing exercitation amet officia dolor commodo ex laborum in voluptate. Aliqua aliquip veniam mollit dolore laborum incididunt laborum laborum dolor in et nostrud anim adipisicing qui do enim occaecat.',
          item_img: '3.jpg'
        }
      ]
    },
    {
      tab_title: 'Suured konfliktid',
      tab_selections: [
        {
          item_title: 'Lorem ipsum ut ut',
          item_description: 'Lorem ipsum officia ex laborum laboris ad nostrud proident ut ut in ad ut enim. Esse occaecat qui fugiat cupidatat labore culpa dolore aute sit quis nisi aute commodo mollit laborum.',
          item_img: '5.jpg'
        },
        {
          item_title: 'Fugiat elit',
          item_description: 'Sint pariatur enim do officia officia amet dolor fugiat. Ad in eu duis ullamco enim in ut cupidatat eu velit adipisicing consequat.',
          item_img: '1.jpg'
        },
        {
          item_title: 'In consectetur',
          item_description: 'Eiusmod commodo enim sed dolor ut voluptate mollit non ea sint. Lorem ipsum aliqua velit tempor id esse est aliqua ut dolor aliquip sunt dolore sint velit excepteur ea. Sint adipisicing est est consequat enim est in veniam magna sed veniam non excepteur.',
          item_img: '7.jpg'
        },
        {
          item_title: 'Excepteur deserunt',
          item_description: 'Lorem ipsum quis laborum officia cupidatat elit voluptate minim quis officia pariatur. Lorem ipsum voluptate sunt velit deserunt aliqua in duis veniam occaecat tempor sit.',
          item_img: '2.jpg'
        },
        {
          item_title: 'Est id commodo',
          item_description: 'Voluptate non magna qui tempor non in quis consequat dolore ullamco ut ut. Consectetur culpa velit eiusmod excepteur dolor reprehenderit deserunt ullamco minim reprehenderit ex ullamco veniam excepteur. Lorem ipsum ullamco ut est irure excepteur ullamco dolor magna et mollit nisi qui in mollit aliquip nisi dolor occaecat.',
          item_img: '3.jpg'
        },
        {
          item_title: 'Elit non ut',
          item_description: 'Consequat eu sint nostrud in enim occaecat in adipisicing cupidatat labore. Duis nisi sed labore laborum do mollit nostrud anim ut do dolor. Nulla et in nisi elit elit enim sint magna pariatur minim in cillum reprehenderit ut quis. Dolor ut reprehenderit magna et laboris aute pariatur nisi sunt ut sit pariatur reprehenderit fugiat ut tempor cupidatat.',
          item_img: '4.jpg'
        }
      ]
    }
  ]
});

accordion.initialize();