import I18n from "i18n-js";

I18n.translations.en = {
    login: {
        requestEduId: "No govID?",
        requestEduId2: "Request one!",
        loginEduId: "Login!",
        whatis: "What is govID?",
        header: "Sign in with govID",
        headerSubTitle: "to continue to ",
        header2: "Request your govID",
        trust: "Trust this computer",
        loginOptions: "Other sign-in options",
        loginOptionsToolTip: "Your different sign-in options<br/>can be managed in my govID.<br/><br/>Check your govID account<br/>creation mail for the URL.",
        email: "Your e-mail address",
        emailPlaceholder: "e.g. user@gmail.com",
        passwordPlaceholder: "Password",
        familyName: "Last name",
        givenName: "First name",
        familyNamePlaceholder: "e.g. Berners-Lee",
        givenNamePlaceholder: "e.g. Tim",
        sendMagicLink: "E-mail a magic link",
        loginWebAuthn: "Login with security key",
        usePassword: "type a password.",
        usePasswordNoWebAuthn: "Type a password.",
        useMagicLink: "E-mail a magic link",
        useMagicLinkNoWebAuthn: "E-mail a magic link.",
        useWebAuth: "Sign in with a security key",
        useOr: "or",
        requestEduIdButton: "Request your govID",
        rememberMe: "Stay logged in",
        password: "Your password",
        passwordForgotten: "Forgot your password or prefer a magic link? ",
        passwordForgottenLink: "Receive an e-mail to sign in instantly.",
        login: "Login",
        create: "Create",
        newTo: "New to govID?",
        createAccount: " Create an account.",
        useExistingAccount: "Use existing account",
        invalidEmail: "Invalid e-mail",
        requiredAttribute: "{{attr}} is required",
        emailInUse1: "This e-mail is already in use.",
        emailInUse2: "Try another, or ",
        emailInUse3: " login with this govID account.",
        emailNotFound1: "We could not find an govID with that e-mail.",
        emailNotFound2: "Try another, or ",
        emailNotFound3: "request a new govID account.",
        emailOrPasswordIncorrect: "E-mail or password are incorrect",
        institutionDomainNameWarning: "It looks like you entered an e-mail address related to a governmental organisation. Please note that when you no longer work for that organisation, you can no longer use that e-mail address.",
        institutionDomainNameWarning2: "...",
        allowedDomainNamesError: "Domain name {{domain}} not allowed.",
        allowedDomainNamesError2: "govID is restricted to be used only for allowed domains. Please contact your organisation contact person for govroam.",
        passwordDisclaimer: "Make sure it's at least 15 characters long OR at least 8 characters when including a number and an UpperCase letter.",
        alreadyGuestAccount: "Already have a govID?",
        usePasswordLink: "Type a password anyway",
        useWebAuthnLink: "Or use WebAuthn",
        agreeWithTerms: "<span>I agree with <a href='https://govroam.nl/aansluiten/voorwaarden/' target='_blank'>the terms of service.</a> I also understand <a href='https://govroam.nl/stichting-govroam/privacy/' target='_blank'>the privacy policy</a>.</span>"
    },
    magicLink: {
        header: "Check your e-mail!",
        info: "To sign in, click the link in the email we sent to <strong>{{email}}</strong>.",
        openGMail: "Open Gmail.com",
        openOutlook: "Open Outlook.com",
        spam: "Can't find it? Check your spam folder."
    },
    confirm: {
        header: "Success!",
        thanks: "Your govID account has been created. Proceed to your destination.",
    },
    confirmStepup: {
        header: "Thanks!",
        proceed: "Go to {{name}}",
        conditionMet: "All conditions are met."
    },
    stepup: {
        header: "One more thing...",
        info: "To proceed to <strong> {{name}} </strong>, you must meet the following condition(s).",
        link: "Verify this via SURFconext"
    },
    footer: {
        privacy: "Privacy policy",
        terms: "Terms of Use",
        help: "Help",
        poweredBy: "Powered by govroam, based on software by "
    },
    session: {
        title: "Your session was lost.",
        info: "You must open the magic link from the e-mail in the same browser session as where you requested the magic link. <br/><br/>  Please go back to the service you were heading to and request a new magic link."
    },
    expired: {
        title: "Expired magic link",
        info: "The magic link you have used is either expired or has already been used.",
        back: "Go to govid.nl"
    },
    notFound: {
        title: "Whoops...",
        title2: "Something went wrong (404)"
    },
    webAuthn: {
        info: "Enable Public Key Cryptography and Web Authentication (WebAuthn)",
        browserPrompt: "Your browser is prompting you to register one of your security keys or fingerprint with your account"
    },
    migration: {
        header: "Migrate to a <br/>govID guest account",
        info1: "govroam will phase out the use of Onegini. To retain access, you must migrate your Onegini account to a govID account.",
        info2: "You only need to click the button and log in with your existing Onegini account once. We will then migrate your account to govID and send you an e-mail after completion.",
        link: "Start migration"
    },
    affiliationMissing: {
        header: "Account linked, but...",
        info: "Your govID is successfully linked, however the organisation you choose did not provide the correct affiliation.",
        proceed: "You can try to link to another organisation or proceed to {{name}}",
        proceedLink: "Proceed",
        retryLink: "Retry"
    },
    validNameMissing: {
        header: "Account linked, but...",
        info: "Your govID is successfully linked, however the organisation you choose did not provide a valid name.",
        proceed: "You can try to link to another organisation or proceed to {{name}}",
        proceedLink: "Proceed",
        retryLink: "Retry"
    },
    stepUpExplanation: {
        linked_institution: "Your govID account must be linked to a trusted party.",
        validate_names: "Your first name and last name must be verified by a trusted party.",
        affiliation_student: "You must prove that you are following education by linking your govID account to a trusted party."
    },
    stepUpVerification: {
        linked_institution: "Your govID account is linked to a trusted party.",
        validate_names: "Your first name and last name are verified by a trusted party.",
        affiliation_student: "You have proven that you are affiliated by linking your govID account to a trusted party.."
    }

};
