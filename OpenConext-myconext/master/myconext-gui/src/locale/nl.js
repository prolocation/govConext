import I18n from "i18n-js";

I18n.translations.nl = {
  header: {
    title: "govID",
    logout: "Uitloggen"
  },
  landing: {
    logoutTitle: "U bent uitgelogd",
    logoutStatus: "Om het uitlogproces te voltooien, moet u de browser nu afsluiten.",
    deleteTitle: "Uw govID is verwijderd",
    deleteStatus: "Om het verwijderingsproces te voltooien, moet u uw browser nu afsluiten."
  },
  notFound: {
    title: "Oeps...",
    title2: "Er is iets fout gegaan (404)."
  },
  profile: {
    title: "Persoonlijke informatie",
    info: "Basisinformatie zoals uw naam en e-mailadres.",
    email: "E-mail",
    schacHomeOrganization: "organisatie ID",
    name: "Naam",
    profile: "Profiel"
  },
  edit: {
    title: "Aanpassen profielgegevens",
    info: "Voer uw volledige naam in.",
    givenName: "Uw voornaam",
    familyName: "Uw achternaam",
    update: "Opslaan",
    cancel: "Annuleren",
    updated: "Uw profiel is bijgewerkt.",
    back: "/profile"
  },
  security: {
    title: "Beveiliging",
    subTitle: "We bieden verschillende methoden om in te loggen met uw govID.",
    secondSubTitle: "Loginmethoden",
    usePassword: "Wachtwoord",
    usePublicKey: "WebAuthn",
    notSet: "Niet ingesteld",
    notSupported: "Niet ondersteund",
    useMagicLink: "Stuur magische link naar",
    rememberMe: "Ingelogd blijven",
    rememberMetrue: "Ja",
    rememberMefalse: "Nee",
  },
  home: {
    welcome: "Welkom {{name}}",
    profile: "Profiel",
    security: "Beveiliging",
    account: "Account",
    institutions: "Koppelingen",
    services: "Diensten",
    favorites: "Favorieten",
    settings: "Instellingen",
    links: {
      teams: "Teams",
      teamsHref: "https://teams.{{baseDomain}}",
    }
  },
  account: {
    title: "Uw govID account",
    deleteTitle: "Uw govID verwijderen",
    info1: "U kunt uw govID verwijderen wanneer u maar wilt.",
    info2: "Let op, u verliest het unieke govID-nummer dat momenteel aan uw e-mailadres is gekoppeld. Wanneer u zich opnieuw registreert voor govID met hetzelfde e-mailadres, krijgt u een nieuw govID-nummer. Sommige diensten gebruiken dit unieke nummer om je te identificeren, dus voor die diensten wordt u dan gezien als een nieuwe gebruiker. ",
    info3: "Houd er rekening mee dat het verwijderen van uw govID niet betekent dat alle diensten die u met uw govID hebt gebruikt, ook uw gegevens zullen verwijderen.",
    info4: "Om het verwijderen van uw govID volledig te voltooien, moet u nadat uw account is verwijderd uw browser afsluiten.",
    deleteAccount: "Verwijder mijn govID",
    deleteAccountConfirmation: "Weet u zeker dat u uw govID wilt verwijderen?"
  },
  institutions: {
    title: "Gekoppelde organisaties",
    explanation: "Door uw organisatie aan uw govID te koppelen, kunt u via govID bewijzen dat u aan een aangesloten organsisatie verbonden bent.",
    noInstitutions: "U heeft geen organisatie(s) gekoppeld. Klik op de onderstaande knop als u een organisatie wilt koppelen.",
    name: "Korte naam",
    add: "Nieuwe organisatie koppelen",
    addInstitutionConfirmation: "Als u doorgaat, wordt u gevraagd in te loggen via de organisatie die u wilt koppelen. Selecteer eerst welke organisatie u wilt koppelen en log daarna in.<br/> <br/>Nadat u succesvol bent ingelogd, komt u hier weer terug.",
    proceed: "Doorgaan",
    addInstitution: "Organisatie toevoegen"
  },
  institution: {
    title: "Gekoppelde organisatie",
    info: "Deze organisatie is op {{date}} om {{hours}}: {{minutes}} gekoppeld aan uw govID.",
    name: "Naam van de organisatie",
    eppn: "Identifier bij de organisatie",
    displayName: "Weergavenaam",
    affiliations: "Betrekking(en) bij de organisatie",
    expires: "Koppeling verloopt op",
    expiresValue: "{{date}}",
    delete: "Verwijder Koppeling",
    cancel: "Annuleren",
    deleted: "De koppeling met organisatie {{name}} is verwijderd",
    back: "/organisaties",
    deleteInstitution: "Verwijder koppeling",
    deleteInstitutionConfirmation: "Weet u zeker dat u de koppeling met deze organisatie wilt verwijderen?<br/> <br/>Sommige diensten vereisen dat u een koppeling heeft met een organisatie. U wordt mogelijk gevraagd een organisatie te koppelen als u één van die diensten gebruikt."
  },
  services: {
    title: "Gebruikte diensten",
    info: "Elke dienst waarvoor u govID gebruikt, ontvangt bepaalde gegevens (attributen) vanuit uw govID-account. Denk hierbij aan uw naam, e-mailadres of aan een pseudoniem waarmee de dienst u uniek kan identificeren.",
    explanation: "Hieronder vindt u het overzicht van alle diensten waarop u bent ingelogd met govID.",
    noServices: "U bent nog niet ingelogd geweest op een dienst via govID.",
    name: "Naam",
  },
  service: {
    title: "Dienst",
    info: "U bent voor de eerste keer ingelogd op deze dienst op {{date}} om {{hours}}: {{minutes}}",
    tokenInfo: "De dienst {{name}} heeft een API token met toegang tot uw account.",
    name: "Naam",
    govID: "govID",
    access: "Toegang",
    accounts: "Accounts",
    delete: "Verwijderen",
    cancel: "Annuleren",
    revoke: "Intrekken",
    deleted: "Uw govID voor dienst {{name}} is verwijderd",
    back: "/services",
    deleteService: "Verwijder dienst",
    deleteServiceConfirmation: "Weet u zeker dat u uw unieke gepseudonimiseerde govID voor {{name}} wilt verwijderen? <br/> <br/> Deze dienst herkent u wellicht niet meer de volgende keer dat u inlogt en uw persoonlijke gegevens bij deze dienst worden daardoor mogelijkerwijs verwijderd.",
    deleteTokenConfirmation: "Weet u zeker dat het API access token voor {{name}} wilt intrekken?",
    deleteToken: "Token intrekken",
  },
  credential: {
    title: "Public Key Credential",
    info: "U heeft deze key toegevoegd op {{date}} om {{hours}}: {{minutes}}",
    name: "Naam",
    delete: "Verwijderen",
    cancel: "Annuleren",
    deleted: "Uw key {{name}} is verwijderd",
    back: "/weauthn",
    deleteCredential: "Verwijder key",
    deleteCredentialConfirmation: "Weet u zeker dat u de key {{name}} wilt verwijderen? De key wordt verwijderd uit uw govID-account, maar wordt niet verwijderd uit uw browser en / of van uw YubiKey-apparaat."
  },
  password: {
    setTitle: "Wachtwoord instellen",
    updateTitle: "Wijzig wachtwoord",
    resetTitle: "Stel je wachtwoord opnieuw in",
    currentPassword: "Huidig wachtwoord",
    newPassword: "Nieuw wachtwoord",
    confirmPassword: "Bevestig nieuw wachtwoord",
    setUpdate: "Wachtwoord instellen",
    updateUpdate: "Opslaan",
    cancel: "Annuleren",
    set: "Je wachtwoord is ingesteld",
    reset: "Je wachtwoord is opnieuw ingesteld",
    updated: "Je wachtwoord is aangepast",
    back: "/security",
    passwordDisclaimer: "Kies een wachtwoord van tenminste 8 karakters lang met minimaal een hoofdletter en een cijfer. Een langer wachtwoord van minimaal 15 karakters mag ook.",
    invalidCurrentPassword: "Uw huidige wachtwoord is niet correct.",
    passwordResetHashExpired: "De link om uw wachtwoord opnieuw in te stellen is verlopen. ",
    forgotPassword: "Help! Ik ben mijn huidige wachtwoord vergeten",
    passwordResetSendAgain: "Stuur een e-mail om mijn wachtwoord opnieuw in te stellen.",
    forgotPasswordConfirmation: "Wachtwoord vergeten? Druk hieronder op 'Bevestigen' om direct een e-mail te ontvangen waarmee u uw huidige wachtwoord opnieuw kunt instellen.",
    flash: {
      passwordLink: "Een e-mail is verstuurd naar {{name}} om uw wachtwoord opnieuw in te stellen."
    }

  },
  webauthn: {
    setTitle: "WebAuthn instellen",
    updateTitle: "WebAuthn instellen",
    publicKeys: "Uw publieke keys",
    noPublicKeys: "U heeft nog geen keys toegevoegd.",
    nameRequired: "Voordat u een key kan toevoegen, moet u deze eerst een naam geven.",
    revoke: "Revoke",
    addDevice: "Voeg dit apparaat toe",
    info: "Public Key Cryptography and Web Authentication (ook bekend als WebAuthn) stelt govID in staat om u te authenticeren met behulp van public key cryptografie in plaats van een magische link of wachtwoord.",
    info2: "Wanneer u op {{action}} klikt, wordt u doorgestuurd naar de govID-identiteitsserver en vraagt uw browser u om uw identiteit te bevestigen.",
    back: "/security",
    setUpdate: "Start",
    updateUpdate: "Voeg dit apparaat toe",
    credentialName: "Device naam",
    credentialNamePlaceholder: "e.g. mijn gele YubiKey",
    test: "Test",
    testInfo: "Druk op de <strong>test</strong>knop om een 1 van je WebAuthn-sleutels te testen. U wordt doorgestuurd naar de govID-identiteitsserver.",
    testFlash: "U heeft met succes uw WebAuthn-sleutel getest voor authenticatie"
  },
  rememberMe: {
    updated: "Dit apparaat wordt niet langer onthouden",
    forgetMeTitle: "Onthoud dit apparaat",
    info: "Dit apparaat wordt onthouden. U beeft hierdoor automatisch ingelogd met govID.",
    cancel: "Annuleren",
    update: "Vergeet dit apparaat",
    forgetMeConfirmation: "Weet u zeker dat u dit apparaat niet langer wilt onthouden?",
    forgetMe: "Vergeet dit apparaat"
  },
  footer: {
    privacy: "Privacybeleid",
    terms: "Voorwaarden",
    help: "Help",
    poweredBy: "Aangeboden door govroam, o.b.v. software van "
  },
  modal: {
    cancel: "Annuleren",
    confirm: "Bevestigen"
  },
  migration: {
    header: "Uw govID is aangemaakt!",
    info: "Uw Onegini-account is succesvol gemigreerd.",
    info2: "Vanaf nu moet u govID gebruiken om in te loggen bij diensten waar u voorheen Onegini gebruikte.",
    info3: "Tip! Uw govID heeft standaard geen wachtwoord nodig (we sturen een magische link naar uw e-mail om in te loggen), maar als u wilt, kunt u toch een wachtwoord instellen op het ",
    securityLink: " tabblad Beveiliging.",
    link: "Naar mijn account gegevens"
  },
  migrationError: {
    header: "Let op: een govID met hetzelfde e-mailadres bestaat al",
    info: "U heeft al een govID met hetzelfde e-mailadres als uw Onegini-account. U heeft daarom nu twee keuzes:",
    sub1: "Doorgaan met migreren van uw bestaande Onegini-account naar een nieuw govID. Dit betekent:",
    sub1Inner1: "Teamlidmaatschappen in govconext Teams en autorisaties binnen diensten van uw bestaande Onegini-account gaan mee naar uw nieuwe govID.",
    sub1Inner2: "Teamlidmaatschappen en autorisaties voor diensten van uw bestaande govID gaan verloren.",
    sub2: "Migratie afbreken en doorgaan met je bestaande govID. Dit betekent:",
    sub2Inner1: "U blijft je bestaande govID gebruiken.",
    sub2Inner2: "Uw bestaande Onegini-account kunt u per 1 juli 2020 niet meer gebruiken. Teamlidmaatschappen in govconext Teams en autorisaties binnen diensten van dit Onegini-account gaan verloren.",
    abortMigration: "Migratie afbreken ",
    continueMigration: "Doorgaan met migreren",
    abort: "afbreken",
    continue: "doorgaan",
    help: "Hulp nodig? Stuur een e-mail naar <a href=\"mailto:tech@govroam.nl\">tech@govroam.nl</a>."
  },
  format: {
    creationDate: "Je govID is aangemaakt op {{date}} om {{hours}}:{{minutes}}"
  }
};
