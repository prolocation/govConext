import I18n from "i18n-js";

I18n.translations.en = {
  header: {
    title: "govID",
    logout: "Logout"
  },
  landing: {
    logoutTitle: "You have been logged out",
    logoutStatus: "To finalise the logout process you must now close this browser.",
    deleteTitle: "Your govID account has been deleted",
    deleteStatus: "To finalise the removal process you must now close this browser."
  },
  notFound: {
    title: "Whoops...",
    title2: "Something went wrong (404)."
  },
  profile: {
    title: "Personal information",
    info: "Basic information like your name and e-mail address.",
    email: "E-mail address",
    schacHomeOrganization: "Organisation ID",
    name: "Name",
    profile: "Profile"
  },
  edit: {
    title: "Name",
    info: "Please provide your full name",
    givenName: "Your first name",
    familyName: "Your last name",
    update: "Update",
    cancel: "Cancel",
    updated: "Your profile has been updated",
    back: "/profile"
  },
  security: {
    title: "Security settings",
    subTitle: "We provide different methods to sign in to your govID account.",
    secondSubTitle: "Sign-in methods",
    usePassword: "Password",
    usePublicKey: "WebAuthn",
    notSet: "Not set",
    notSupported: "Not supported",
    useMagicLink: "Send magic link to",
    rememberMe: "Stay logged in",
    rememberMetrue: "Yes",
    rememberMefalse: "No",
  },
  home: {
    welcome: "Welcome {{name}}",
    profile: "Personal info",
    security: "Security",
    account: "Account",
    institutions: "Connections",
    services: "Services",
    favorites: "Favorites",
    settings: "Settings",
    links: {
      teams: "Teams",
      teamsHref: "https://teams.{{baseDomain}}",
    }
  },
  account: {
    title: "Your govID account",
    deleteTitle: "Deleting your govID account",
    info1: "You can delete your govID whenever you want.",
    info2: "Proceed with care, as you will lose the unique govID number currently associated with your e-mail address. When you re-register for a new govID with that same e-mail address, you will receive a new govID number. Some services use this unique number to identify you, so for those services you will be treated as a new user.",
    info3: "Please note that deleting your govID account does not mean all services you accessed with that govID account will also have your data removed.",
    info4: "To fully complete the process of deleting your govID account you must close your browser after your account has been removed.",
    deleteAccount: "Delete my account",
    deleteAccountConfirmation: "Are you sure you want to delete your govID account?"
  },
  institutions: {
    title: "Connected organisations",
    explanation: "By connecting your organisation to your govID, you will be able to prove through govID that you work at one of these organisations.",
    noInstitutions: "You currently have not connected any organisations to your govID. Click the button below to connect an organisation.",
    name: "Short name",
    add: "Connect new organisation",
    addInstitutionConfirmation: "When you proceed you will be asked to login at the organisation you want to connect to your govID. First, select which organisation you want to connect; then, login at that organisation.<br/><br/>After a successful login you will come back here.",
    proceed: "Proceed",
    addInstitution: "Add organisation"
  },
  institution: {
    title: "Connected organisation",
    info: "This organisation was connected to your govID account on {{date}} at {{hours}}:{{minutes}}",
    name: "Organisation name",
    eppn: "Identifier at organisation",
    displayName: "Display name",
    affiliations: "Affiliation(s) at organisation",
    expires: "This connection expires at",
    expiresValue: "{{date}}",
    delete: "Remove connection",
    cancel: "Cancel",
    deleted: "The connection with your organisation {{name}} has been removed",
    back: "/organisations",
    deleteInstitution: "Delete organisation",
    deleteInstitutionConfirmation: "Are you sure you want to delete the connection with this organisation?<br/><br/>Some services require that you your govID is connected to an organisation. You might be prompted to connect an organisation if you access one of those services."
  },
  services: {
    title: "Used services",
    info: "Each service you accessed through govID receives certain personal data (attributes) from your govID account. For example, your name, your e-mail address or a pseudonym which the service can use to uniquely identify you.",
    explanation: "The overview below shows you all services you have logged in to using govID.",
    noServices: "You did not yet use govID to login to any service.",
    name: "Name",
  },
  service: {
    title: "Service",
    info: "You first logged in to this service on {{date}} at {{hours}}:{{minutes}}",
    tokenInfo: "The service {{name}} has an API token to access your account.",
    name: "Name",
    govID: "govID",
    access: "Access",
    accounts: "Accounts",
    delete: "Delete",
    cancel: "Cancel",
    revoke: "Revoke",
    deleted: "Your service govID for {{name}} has been deleted",
    back: "/services",
    deleteService: "Delete service",
    deleteServiceConfirmation: "Are you sure you want to delete your unique pseudonymized govID for {{name}} and revoke access to your linked accounts?<br/><br/>This service might not recognize you the next time you login and all your personal data with this Service could be deleted.",
    deleteTokenConfirmation: "Are you sure you want to revoke the API access token for {{name}}?",
    deleteToken: "Revoke token",
  },
  credential: {
    title: "Public Key Credential",
    info: "You added this key on {{date}} at {{hours}}:{{minutes}}",
    name: "Name",
    delete: "Delete",
    cancel: "Cancel",
    deleted: "Your key {{name}} has been deleted",
    back: "/weauthn",
    deleteCredential: "Delete key",
    deleteCredentialConfirmation: "Are you sure you want to delete your public key credential {{name}}? The key will be deleted from your govID account, but will not be removed from your browser and / or YubiKey device."
  },
  password: {
    setTitle: "Set password",
    updateTitle: "Change password",
    resetTitle: "Reset forgotten password",
    currentPassword: "Current password",
    newPassword: "New password",
    confirmPassword: "Confirm new password",
    setUpdate: "Set password",
    updateUpdate: "Update password",
    cancel: "Cancel",
    set: "Your password has been set",
    reset: "Your password has been reset to a new password",
    updated: "Your password has been updated",
    back: "/security",
    passwordDisclaimer: "Make sure it's at least 15 characters OR at least 8 characters including a number and a uppercase letter.",
    invalidCurrentPassword: "Your current password is invalid.",
    passwordResetHashExpired: "Your password reset link has expired. ",
    forgotPassword: "Help! I forgot my current password",
    passwordResetSendAgain: "Send an e-mail to reset my password.",
    forgotPasswordConfirmation: "Forgot your password? Press 'Confirm' below to instantly receive an email with a link to reset your current password.",
    flash: {
      passwordLink: "An e-mail has been sent to {{name}} with a link to reset your password"
    }
  },
  webauthn: {
    setTitle: "Enable WebAuthn",
    updateTitle: "Configure WebAuthn",
    publicKeys: "Your public keys",
    noPublicKeys: "You have not added any keys. ",
    nameRequired: "Before you can add a new key you will need to give it a name.",
    revoke: "Revoke",
    addDevice: "Add device",
    info: "Public Key Cryptography and Web Authentication (a.k.a. WebAuthn) allows govID to authenticate you using public key cryptography instead of a magic link or password.",
    info2: "When your click on {{action}} you will be redirected to the govID identity server and your browser will prompt you for your identity.",
    back: "/security",
    setUpdate: "Start",
    updateUpdate: "Add device",
    credentialName: "Device name",
    credentialNamePlaceholder: "e.g. my red YubiKey",
    test: "Test",
    testInfo: "Hit the <strong>test</strong> button to test one of your WebAuthn keys. You will be redirected to the govID identity server.",
    testFlash: "You successfully tested your WebAuthn key to authenticate"
  },
  rememberMe: {
    updated: "Your device is no longer remembered",
    forgetMeTitle: "Remember this device.",
    info: "Your device is currently remembered. You will be automatically logged in on the govID.",
    cancel: "Cancel",
    update: "Forget me",
    forgetMeConfirmation: "Are you sure you no longer want this device remembered?",
    forgetMe: "Forget this device"
  },
  footer: {
    privacy: "Privacy policy",
    terms: "Terms of Use",
    help: "Help",
    poweredBy: "Powered by govroam, based on software by "
  },
  modal: {
    cancel: "Cancel",
    confirm: "Confirm"
  },
  migration: {
    header: "Your govID has been created!",
    info: "Your Onegini account is succesfully migrated.",
    info2: "From now on you must use your govID guest account to logon to services where you previously used Onegini.",
    info3: "Tip! Your govID account by default doesn’t need a password (we will send a magic link to your email to sign you in), but if you want to, you can set one right now under the",
    securityLink: " Security tab.",
    link: "Show my account details"
  },
  migrationError: {
    header: "Warning: e-mail address already used for govID",
    info: "You already have an {{email}} govID with the same e-mail address as your Onegini account. You must therefore choose how you wish to proceed:",
    sub1: "Continue with migrating your existing Onegini account to a new govID. This means:",
    sub1Inner1: "Existing govconext Teams memberships and authorisations within services belonging to your current Onegini account will be transferred to your new govID.",
    sub1Inner2: "Team memberships and authorisations linked to your current govID will be lost.",
    sub2: "Abort migration and continue with your existing govID. This means:",
    sub2Inner1: "You will continue to use your current govID.",
    sub2Inner2: "You can no longer use your existing Onegini account per 1 July 2020. Existing govconext Teams memberships and authorisations within services belonging to your current Onegini account will be lost.",
    abortMigration: "Abort migration",
    continueMigration: "Continue migration",
    abort: "abort",
    continue: "continue",
    help: "Need help? Send an e-mail to <a href=\"mailto:tech@govroam.nl\">tech@govroam.nl</a>."
  },
  format: {
    creationDate: "Your govID account was created on {{date}} at {{hours}}:{{minutes}}"
  }
};
