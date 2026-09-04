/** Service catalogue. Prices are orientation ranges, not quotes. */

export interface ServiceFaq {
  question: string
  answer: string
}

export interface Service {
  slug: string
  index: string
  title: string
  summary: string
  /** What the client actually receives. */
  deliverables: string[]
  priceRange: string
  idealFor: string
  cta: string
  faq: ServiceFaq[]
}

/** Compact three-column grouping used on the homepage. */
export interface ServiceGroup {
  index: string
  title: string
  items: string[]
}

export const serviceGroups: ServiceGroup[] = [
  {
    index: '01',
    title: 'Ueb-faqe & sisteme',
    items: [
      'Website prezantuese',
      'Dyqane online',
      'Sisteme rezervimesh',
      'Integrime',
      'Automatizime',
    ],
  },
  {
    index: '02',
    title: 'Brand & dizajn',
    items: ['Identitet vizual', 'Logo', 'UI/UX', 'Art direction', 'Materiale për rrjete sociale'],
  },
  {
    index: '03',
    title: 'Marketing & rritje',
    items: ['SEO bazë', 'Landing pages', 'Optimizim performance', 'Analytics', 'Mirëmbajtje'],
  },
]

export const services: Service[] = [
  {
    slug: 'website-prezantues',
    index: '01',
    title: 'Website prezantues',
    summary:
      'Faqja që tregon çfarë bën biznesi, për kë e bën dhe pse duhet t’i besohet. E shpejtë, e qartë dhe e ndërtuar për kontakt.',
    deliverables: [
      'Strukturë përmbajtjeje dhe tekst i redaktuar',
      'Dizajn i personalizuar, jo shabllon',
      'Zhvillim me Next.js dhe hosting në Vercel',
      'Formular kontakti me validim',
      'SEO teknike dhe Analytics',
    ],
    priceRange: '700€ – 1.500€',
    idealFor: 'Biznese që kanë klientë por nuk kanë ende një prezencë serioze online.',
    cta: 'Fillo projektin',
    faq: [
      {
        question: 'Sa zgjat një website prezantues?',
        answer:
          'Zakonisht 2 deri në 4 javë, varësisht sa shpejt vjen përmbajtja. Nëse tekstet dhe fotot janë gati, koha shkurtohet.',
      },
      {
        question: 'A mund t’i ndryshoj vetë tekstet më vonë?',
        answer:
          'Po. Aty ku përmbajtja ndryshon shpesh, vendosim një panel të thjeshtë administrimi dhe ju tregojmë si përdoret.',
      },
      {
        question: 'A përfshihet hostingu?',
        answer:
          'Konfigurimin e bëjmë ne. Kostoja e hostingut dhe e domenit paguhet direkt te ofruesi dhe mbetet në pronësinë tuaj.',
      },
    ],
  },
  {
    slug: 'dyqane-online',
    index: '02',
    title: 'Dyqane online',
    summary:
      'Shitje online pa fërkim: katalog i qartë, faqe produkti bindëse dhe një checkout që nuk i humb klientët në rrugë.',
    deliverables: [
      'Katalog dhe strukturë kategorish',
      'Faqe produkti të optimizuara për konvertim',
      'Checkout i shkurtër dhe pagesa',
      'Menaxhim stoku dhe porosish',
      'Njoftime automatike me email',
    ],
    priceRange: '1.500€ – 4.000€',
    idealFor: 'Marka që shesin tashmë përmes mesazheve dhe duan ta bëjnë procesin të përsëritshëm.',
    cta: 'Fillo dyqanin',
    faq: [
      {
        question: 'Cilat mënyra pagese mbështeten?',
        answer:
          'Pagesa me kartë përmes ofruesve ndërkombëtarë, pagesa në dorëzim, dhe transfer bankar. Zgjedhja varet nga tregu ku shisni.',
      },
      {
        question: 'A mund të shes edhe jashtë Kosovës?',
        answer:
          'Po. Konfigurojmë monedhat, zonat e transportit dhe gjuhët sipas tregjeve që synoni.',
      },
    ],
  },
  {
    slug: 'sisteme-rezervimesh',
    index: '03',
    title: 'Sisteme rezervimesh',
    summary:
      'Rezervime online për restorante, klinika, hotele dhe shërbime me orar. Më pak telefonata, më pak gabime.',
    deliverables: [
      'Kalendar dhe disponueshmëri',
      'Formular rezervimi me hapa minimalë',
      'Konfirmim dhe kujtesë automatike',
      'Panel për ekipin',
      'Integrim me kalendarët ekzistues',
    ],
    priceRange: '1.200€ – 3.500€',
    idealFor: 'Biznese ku koha e stafit humbet duke marrë rezervime me telefon.',
    cta: 'Diskuto sistemin',
    faq: [
      {
        question: 'A integrohet me sistemin që përdorim tani?',
        answer:
          'Në shumicën e rasteve po. Nëse sistemi juaj ka API, e lidhim; nëse jo, propozojmë alternativën më të thjeshtë pa e ndërprerë punën.',
      },
      {
        question: 'Çfarë ndodh me rezervimet e dyfishta?',
        answer:
          'Disponueshmëria kontrollohet në kohë reale dhe termini bllokohet sapo konfirmohet, kështu që dyfishimi nuk ndodh.',
      },
    ],
  },
  {
    slug: 'brand-identitet',
    index: '04',
    title: 'Brand & identitet vizual',
    summary:
      'Një sistem vizual që funksionon njësoj në ueb, në print dhe në rrjete sociale — jo vetëm një logo.',
    deliverables: [
      'Drejtim vizual dhe territor konceptual',
      'Logo dhe variantet e saj',
      'Paletë ngjyrash dhe sistem tipografik',
      'Rregulla përdorimi',
      'Shabllone për rrjete sociale',
    ],
    priceRange: '900€ – 2.500€',
    idealFor: 'Biznese të reja, ose marka që kanë dalë nga forma e vet gjatë viteve.',
    cta: 'Ndërto markën',
    faq: [
      {
        question: 'A më duhet brand i ri para se të bëj website?',
        answer:
          'Jo detyrimisht. Nëse identiteti aktual funksionon, e përdorim atë. Nëse pengon, e themi hapur dhe propozojmë çfarë duhet rregulluar.',
      },
      {
        question: 'Çfarë dorëzohet në fund?',
        answer:
          'Skedarët burimorë, versionet e eksportuara për ueb dhe print, dhe një dokument i shkurtër me rregullat e përdorimit.',
      },
    ],
  },
  {
    slug: 'ui-ux-design',
    index: '05',
    title: 'UI/UX Design',
    summary:
      'Dizajn ndërfaqesh për produkte dhe platforma, ku qartësia dhe rrjedha e përdoruesit janë kriteri i parë.',
    deliverables: [
      'Hulumtim i shkurtër dhe harta e rrjedhave',
      'Wireframe dhe strukturë ekranesh',
      'Dizajn i plotë vizual',
      'Sistem komponentësh i ripërdorshëm',
      'Dorëzim i gatshëm për zhvillim',
    ],
    priceRange: '1.000€ – 3.000€',
    idealFor: 'Ekipe që kanë produkt ose platformë dhe duan ta bëjnë të përdorshme e të qëndrueshme.',
    cta: 'Diskuto produktin',
    faq: [
      {
        question: 'A punoni me ekipin tonë të zhvillimit?',
        answer:
          'Po. Dorëzojmë sistem komponentësh dhe specifikime që zhvilluesit tuaj mund t’i zbatojnë direkt.',
      },
    ],
  },
  {
    slug: 'marketing-seo',
    index: '06',
    title: 'Marketing & SEO bazë',
    summary:
      'Themelet që bëjnë të gjendeni: strukturë e drejtë, shpejtësi, përmbajtje e qartë dhe matje reale.',
    deliverables: [
      'SEO teknike dhe strukturë faqesh',
      'Optimizim shpejtësie dhe Core Web Vitals',
      'Landing pages për fushata',
      'Konfigurim Analytics dhe qëllimesh',
      'Raport i thjeshtë mujor',
    ],
    priceRange: '400€ – 1.200€',
    idealFor: 'Biznese me faqe ekzistuese që nuk sjell kërkesa.',
    cta: 'Kërko analizë',
    faq: [
      {
        question: 'A garantoni pozitën e parë në Google?',
        answer:
          'Jo, dhe askush nuk mund ta garantojë. Punojmë mbi atë që ndikon realisht: strukturë, shpejtësi, përmbajtje dhe matje.',
      },
      {
        question: 'Sa shpejt shihen rezultatet?',
        answer:
          'Përmirësimet teknike duken brenda javësh. Pozicionimi organik kërkon muaj dhe përmbajtje të vazhdueshme.',
      },
    ],
  },
  {
    slug: 'mirembajtje',
    index: '07',
    title: 'Mirëmbajtje mujore',
    summary:
      'Faqja mbetet e shpejtë, e sigurt dhe në përditësim — pa pasur nevojë ta kërkoni ju çdo herë.',
    deliverables: [
      'Përditësime teknike dhe siguri',
      'Ndryshime përmbajtjeje',
      'Monitorim performance',
      'Kopje rezervë',
      'Përparësi në përgjigje',
    ],
    priceRange: '150€ – 900€ / muaj',
    idealFor: 'Biznese që e trajtojnë ueb-faqen si mjet pune, jo si projekt të mbaruar.',
    cta: 'Shiko paketat',
    faq: [
      {
        question: 'A lidhem me kontratë afatgjatë?',
        answer:
          'Jo. Mirëmbajtja është mujore dhe mund të ndërpritet me njoftim një muaj përpara.',
      },
      {
        question: 'Çfarë nëse më duhet një faqe e re gjatë muajit?',
        answer:
          'Punët e vogla hyjnë brenda paketës. Për punë më të mëdha japim një vlerësim të veçantë para se të fillojmë.',
      },
    ],
  },
]
