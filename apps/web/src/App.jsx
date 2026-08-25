import React from 'react';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfUsePage from './pages/TermsOfUsePage';
import SeguroAutoPage from './pages/SeguroAutoPage';

function App() {
    const hashPath = window.location.hash.replace(/^#/, '');
    const path = hashPath || window.location.pathname.replace(/\/$/, '') || '/';
    if (path === '/politica-de-privacidade') return <PrivacyPolicyPage />;
    if (path === '/termos-de-uso') return <TermsOfUsePage />;
    return <SeguroAutoPage />;
}

export default App;
