
import React from "react";
import { IntlProvider } from 'react-intl';
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";
import localeDeMessages from "./locales/de";
import JobsList from "./components/jobsList";

export default function App() {
    const messages = navigator.language.startsWith('es') ? localeEsMessages :
    navigator.language.startsWith('de') ? localeDeMessages : localeEnMessages;

    return <IntlProvider
        locale={navigator.language ? navigator.language : "en-US"}
        messages={messages}
    >
        <JobsList />
    </IntlProvider>
}