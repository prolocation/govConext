import I18n from "i18n-js";

I18n.translations.nl = {
  login: {
    requestEduId: "Geen govID?",
    requestEduId2: "Vraag het aan!",
    loginEduId: "Login",
    whatis: "Wat is govID?",
    header: "Login met govID",
    headerSubTitle: "om door te gaan naar ",
    header2: "Vraag een govID aan",
    trust: "Vertrouw deze computer",
    loginOptions: "Andere inlogmethodes",
    loginOptionsToolTip: "De verschillende manieren om in te<br/>loggen kunt u beheren in mijn govID.<br/><br/>Bekijk de govID account<br/>bevestigings e-mail voor de URL.",
    email: "Je e-mailadres",
    emailPlaceholder: "bijv. naam@mijnorganisatie.nl",
    passwordPlaceholder: "Wachtwoord",
    familyName: "Achternaam",
    givenName: "Voornaam",
    familyNamePlaceholder: "bijv. Berners-Lee",
    givenNamePlaceholder: "bijv. Tim",
    sendMagicLink: "Mail een magische link",
    loginWebAuthn: "Login in met een security key",
    usePassword: "type een wachtwoord",
    usePasswordNoWebAuthn: "Type een wachtwoord",
    useMagicLink: "Gebruik magische link",
    useMagicLinkNoWebAuthn: "Gebruik magische link.",
    useWebAuth: "Login in met een security key",
    useOr: " of ",
    requestEduIdButton: "Vraag een govID aan",
    rememberMe: "Ingelogd blijven",
    password: "Uw wachtwoord",
    passwordForgotten: "Wachtwoord vergeten of liever een magische link? ",
    passwordForgottenLink: "Ontvang een e-mail om direct in te loggen.",
    login: "Login",
    create: "Aanmaken",
    newTo: "Voor het eerst bij govID?",
    createAccount: "Maak een account aan.",
    useExistingAccount: "Gebruik een bestaand account",
    invalidEmail: "Ongeldig e-mailadres",
    requiredAttribute: "{{attr}} is verplicht",
    emailInUse1: "Dit e-mailadres is al in gebruik.",
    emailInUse2: "Probeer een andere, of ",
    emailInUse3: " login met dit govID account.",
    emailNotFound1: "We konden geen govID vinden met deze mail.",
    emailNotFound2: "Probeer een andere, of ",
    emailNotFound3: "vraag een nieuw govID account aan.",
    emailOrPasswordIncorrect: "E-mailadres of wachtwoord is niet juist",
    institutionDomainNameWarning: "Het lijkt erop dat u een e-mailadres van uw organisatie hebt ingevoerd. Houd er rekening mee dat u geen toegang meer hebt tot dat e-mail adres wanneer u niet meer werkt bij die organisatie.",
    institutionDomainNameWarning2: "...",
    allowedDomainNamesError: "Domeinnaam {{domain}} niet toegestaan.",
    allowedDomainNamesError2: "govID is beperkt tot gebruik voor toegestane domeinen. Neem contact op met de govroam beheerder van uw organisatie.",
    passwordDisclaimer: "Uw wachtwoord moet minimaal 15 karakters lang zijn, of minimaal 8 als het een hoofdletter en een getal bevat.",
    alreadyGuestAccount: "Heeft u al een govID?",
    usePasswordLink: "Gebruik toch een wachtwoord",
    useWebAuthnLink: "Of gebruik WebAuthn",
    agreeWithTerms: "<span>Ik ga akkoord met <a href='https://govroam.nl/aansluiten/voorwaarden/' target='_blank'>de voorwaarden.</a> En ik begrijp <a href='https://govroam.nl/stichting-govroam/privacy/' target='_blank'>de privacyverklaring</a>.</span>"
  },
  magicLink: {
    header: "Open uw mailbox!",
    info: "Om in te loggen, klik op de link in de e-mail die we hebben verstuurd naar <strong>{{email}}</strong>.",
    openGMail: "Open Gmail.com",
    openOutlook: "Open Outlook.com",
    spam: "Kunt u de mail niet vinden? Kijk in uw spam folder."
  },
  confirm: {
    header: "Gelukt!",
    thanks: "Uw govID is geactiveerd. Ga door naar uw bestemming."
  },
  confirmStepup: {
    header: "Gelukt!",
    proceed: "Ga naar {{name}}",
    conditionMet: "U heeft aan alle voorwaarden voldaan."
  },
  stepup: {
    header: "Nog één ding...",
    info: "Om door te gaan naar <strong> {{name}} </strong>, moet u nog aan de volgende voorwaarde(n) voldoen.",
    link: "Verifieer dit via govconext"
  },
  footer: {
    privacy: "Privacy",
    terms: "Voorwaarden",
    help: "Help",
    poweredBy: "Aangeboden door govroam, o.b.v. software van "
  },
  session: {
    title: "Je sessie is verlopen.",
    info: "U moet de magische link vanuit uw e-mail openen in dezelfde browsersessie als waar u de magische link hebt aangevraagd. <br/> <br/> Ga terug naar de service waar u naar toe ging en vraag een nieuwe magische link aan."
  },
  expired: {
    title: "Verlopen magische link",
    info: "De magische link die u heeft gebruikt, is verlopen of al een keer gebruikt",
    back: "Ga naar govid.nl"
  },
  notFound: {
    title: "Oeps...",
    title2: "Er is iets fout gegaan (404)."
  },
  webAuthn: {
    info: "Inschakelen Public Key Cryptography en Web Authentication (WebAuthn)",
    browserPrompt: "Uw browser vraagt u om een van uw beveiligingssleutels of vingerafdrukken te registreren bij je account."
  },
  migration: {
    header: "Migreer naar <br/>govID",
    info1: "govroam zal het gebruik van Onegini geleidelijk uitfaseren. Om toegang te behouden, moet u uw Onegini-account migreren naar govID.",
    info2: "U hoeft slechts op de knop te klikken en u één keer aan te melden met uw bestaande Onegini account. We maken vervolgens een nieuw govID aan en sturen u na voltooiing een e-mail.",
    link: "Start migratie"
  },
  affiliationMissing: {
    header: "Account is gekoppeld, maar...",
    info: "Uw govID is succesvol gekoppeld, maar de instelling die u hebt gekozen heeft niet de juiste attributen teruggegeven",
    proceed: "U kunt het nogmaals met een andere instelling proberen of doorgaan naar {{name}}",
    proceedLink: "Doorgaan",
    retryLink: "Opnieuw proberen"
  },
  validNameMissing: {
    header: "Account is gekoppeld, maar...",
    info: "Uw govID is succesvol gekoppeld, maar de organisatie die u heeft gekozen heeft niet de juiste attributen teruggegeven",
    proceed: "U kunt het nogmaals met een andere organisatie proberen of doorgaan naar {{name}}",
    proceedLink: "Doorgaan",
    retryLink: "Opnieuw proberen"
  },
  stepUpExplanation: {
    linked_institution: "Uw govID-account moet gekoppeld zijn aan een vertrouwde organisatie.",
    validate_names: "Uw voornaam en achternaam moeten worden geverifieerd door een vertrouwde organisatie.",
    affiliation_student: "U moet aantonen dat u gerelateerd bent aan de organisatie door uw govID-account te koppelen aan een vertrouwde organisatie."
  },
  stepUpVerification: {
    linked_institution: "Uw govID-account is gekoppeld aan een vertrouwde organisatie.",
    validate_names: "Uw voornaam en achternaam zijn geverifieerd door een vertrouwde organisatie.",
    affiliation_student: "U heeft aangetoont dat u gerelateerd bent aan een vertrouwde organisatie doordat uw govID-account is gekoppeld aan een vertrouwde organisatie."
  }

};
