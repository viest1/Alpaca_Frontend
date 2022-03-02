import React from 'react';
import styled from 'styled-components';

const ImpressumBody = styled.div`
  text-align: center;
`;

const ImpressumItself = styled.p`
  font-size: 60px;
  font-weight: bold;
`;

const ImpressumHeadline = styled.p`
  font-size: 30px;
  font-weight: bold;
`;

const PatryksParagraph = styled.p`
  font-weight: bold;
`;
function Impressum() {
  return (
    <ImpressumBody>
      <ImpressumItself>Impressum</ImpressumItself>
      <br />
      <ImpressumHeadline>Angaben gem&auml;&szlig; &sect; 5 TMG</ImpressumHeadline>
      <br />
      <p>
        <PatryksParagraph> Patryk&acute;s Company</PatryksParagraph>
        Musterstra&szlig;e 111
        <br />
        Geb&auml;ude 44
        <br />
        90210 Musterstadt
      </p>

      <p>
        Handelsregister: HRB 999999
        <br />
        Registergericht: Amtsgericht Musterstadt
      </p>
      <br />
      <p>
        <strong>Vertreten durch:</strong>
        <br />
        Beispiel Komplement&auml;r GmbH
        <br />
        Musterweg 1<br />
        90210 Musterstadt
      </p>

      <p>
        Diese vertreten durch:
        <br />
        Helga Musterfrau
        <br />
        Robert X. Ample
      </p>

      <p>
        Handelsregister: HRB 7777777
        <br />
        Registergericht: Amtsgericht Musterstadt
      </p>

      <ImpressumHeadline>Kontakt</ImpressumHeadline>
      <p>
        Telefon: +49 (0) 123 44 55 66
        <br />
        Telefax: +49 (0) 123 44 55 99
        <br />
        E-Mail: mustermann@musterfirma.de
      </p>

      <ImpressumHeadline>Umsatzsteuer-ID</ImpressumHeadline>
      <p>
        Umsatzsteuer-Identifikationsnummer gem&auml;&szlig; &sect; 27 a Umsatzsteuergesetz:
        <br />
        DE999999999
      </p>

      <ImpressumHeadline>Berufsbezeichnung und berufsrechtliche Regelungen</ImpressumHeadline>
      <p>
        Berufsbezeichnung:
        <br />
        anderer Beruf
      </p>
    </ImpressumBody>
  );
}

export default Impressum;
