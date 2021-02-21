import React from 'react';
import { Paper, Modal, Box, Typography, Link, Button } from '@material-ui/core';

const TermsOfUse = (props) => {
  return (
    <Modal {...props} style={{ overflow: 'scroll' }}>
      <Box p={2}>
        <Paper>
          <Box p={2}>
            <Typography gutterBottom variant="h1">
              <b>Terms of Use</b>
            </Typography>
            <Typography gutterBottom>
              Welcome to Helpers Home Care (“Helpers”, “we”, “us”, or “our”) and the Helpers App. Please read the
              following terms and conditions (the “Terms of Use”) carefully and in their entirety before you use the
              App. Please be advised that your use of the App signifies that you agree to the Terms of Use. If you do
              not agree with the Terms of Use, please do not use the App.
            </Typography>
            <Typography gutterBottom variant="h2">
              <b>1. Definitions</b>
            </Typography>
            <Typography gutterBottom>
              <b>Service(s)</b> – the Helpers mobile application (App), which may be used to request home care services
            </Typography>
            <Typography gutterBottom>
              <b>Home Care Services</b> – Non-medical home care services provided by qualified care aides or other
              appropriately qualified persons.
            </Typography>
            <Typography gutterBottom variant="h2">
              <b>2. Acceptance</b>
            </Typography>
            <Typography gutterBottom>
              By using the App, you agree, without limitation or qualification, to be bound by, and to comply with,
              these Terms of Use, and you acknowledge that any information that you provide is truthful and that the
              disclosure of such information does not violate the legal rights of others.
            </Typography>
            <Typography gutterBottom variant="h2">
              <b>3. Services</b>
            </Typography>
            <Typography gutterBottom>
              The services comprise of the App, which enable users to request non-medical home care services, including
              with third party providers of such services under agreement with Helpers. You acknowledge that your
              ability to obtain non-medical home care services through the use of the App does not establish Helpers as
              a provider of non-medical home care services.
            </Typography>
            <Typography gutterBottom>
              The App contains information on the home care services, which are intended for use only in jurisdictions
              where they may be lawfully offered. Only Canadian laws apply to the App and the use of the App by any
              users, notwithstanding the place of residence and physical location of such users.
            </Typography>
            <Typography gutterBottom>
              Changes may be made at any time to the home care services (or any part thereof) listed on the App without
              prior notice to you. We shall not be liable to you or to any third party for any changes, suspensions, or
              discontinuances of the home care services (or any part thereof) on the App.
            </Typography>
            <Typography gutterBottom variant="h3">
              <b>Licence</b>
            </Typography>
            <Typography gutterBottom>
              Subject to your compliance with these Terms, Helpers grants you a limited, non-exclusive,
              non-sublicensable, revocable, non-transferable license to: (i) access and use the App on your personal
              device solely in connection with your use of home care services; and (ii) access and use any content,
              information and related materials that may be made available through the App, in each case solely for your
              personal, non-commercial use. Any rights not expressly granted herein are reserved by Helpers.
            </Typography>
            <Typography gutterBottom variant="h3">
              <b>Restrictions</b> 
            </Typography>
            <Typography gutterBottom>
              You may not: (i) remove any copyright, trademark or other proprietary notices from any portion of the App;
              (ii) reproduce, modify, prepare derivative works based upon, distribute, license, lease, sell, resell,
              transfer, publicly display, publicly perform, transmit, stream, broadcast or otherwise exploit the App
              except as expressly permitted by Helpers; (iii) decompile, reverse engineer or deconstruct the App except
              as may be permitted by applicable law; (iv) link to, mirror or frame any portion of the App; (v) cause or
              launch any programs or scripts for the purpose of scraping, indexing, surveying, or otherwise data mining
              any portion of the App or unduly burdening or hindering the operation and/or functionality of any aspect
              of the App; or (vi) attempt to gain unauthorized access to or impair any aspect of the App or its related
              systems or networks.
            </Typography>
            <Typography gutterBottom variant="h3">
              <b>Ownership</b>
            </Typography>
            <Typography gutterBottom>
              The App and all rights therein are and shall remain Helpers’ property. Neither these Terms nor your use of
              the App convey or grant to you any rights: (i) in or related to the App except for the limited license
              granted above; or (ii) to use or reference in any manner Helpers’ company names, logos, product and
              service names, trademarks or services marks.
            </Typography>
            <Typography gutterBottom variant="h2">
              <b>4. Fees and Payment Terms</b>
            </Typography>
            <Typography gutterBottom>
              Payments are processed using third-party payment services provided by Stripe. Helpers does not collect or
              store payment information. Payment information is provided directly to Stripe whose use of personal
              information is governed by their Privacy Policy. Please refer to Stripe’s Privacy Policy for full details
              about how payment information is collected, used, and protected. Please refer to the Stripe’s Services
              Agreement for information about such agreement.
            </Typography>
            <Typography gutterBottom>
              Stripe’s Privacy Policy can be viewed at{' '}
              <Link href="https://stripe.com/en-ca/privacy">https://stripe.com/en-ca/privacy</Link>
            </Typography>
            <Typography gutterBottom>
              Stripe’s Service Agreement can be viewed at{' '}
              <Link href="https://stripe.com/en-ca/legal ">https://stripe.com/en-ca/legal</Link>
            </Typography>
            <Typography gutterBottom variant="h2">
              <b>5. Privacy</b>
            </Typography>
            <Typography gutterBottom>
              By providing your information, you agree to your personal information being used in accordance with this
              policy as well as our Privacy Policy, revised from time to time as needed. Please refer to the Privacy
              Policy for full details about how personal information is collected, used, and protected.{' '}
            </Typography>
            <Typography gutterBottom>
              Our Privacy Policy can be viewed at{' '}
              <Link href="https://gethelpers.ca/privacy-policy">https://gethelpers.ca/privacy-policy</Link>
            </Typography>
            <Typography gutterBottom variant="h3">
              <b>No Representations and Warranties</b>
            </Typography>
            <Typography gutterBottom>
              The services are provided “as is” or “as available,” with all faults. While Helpers believes the
              information on the App to be correct, neither Helpers nor its directors, officers, employees, agents or
              consultants makes any representation or warranty, express or implied, as to the accuracy, completeness,
              quality or adequacy of the services or any home care services requested through the use of the services.
              Helpers does not guarantee the quality, suitability, safety, or ability of any third-party home care
              service providers.
            </Typography>
            <Typography gutterBottom variant="h2">
              <b>6. Limitations of Liability</b>
            </Typography>
            <Typography gutterBottom>
              Helpers expressly disclaims any obligation, responsibility or liability for any loss or damage, whether
              direct or indirect, special, or consequential, incurred by any user of the App. By accessing the App, each
              user releases Helpers and its respective directors, officers, employees, agents and consultants from all
              claims and proceedings for all such losses, damages, or consequences.
            </Typography>
            <Typography gutterBottom variant="h2">
              <b>7. Indemnity</b>
            </Typography>
            <Typography gutterBottom>
              You agree to indemnify and hold Helpers and its directors, officers, employees, agents and consultants
              harmless from any and all damages, costs, liabilities, and any claim or demand, including reasonable
              lawyers’ fees, made by any third party, due to or arising out of your use of the App, your connection to
              the service, or your violation of these Terms of Use in connection with your use of the App.
            </Typography>
            <Typography gutterBottom variant="h2">
              <b>8. Changes in the Terms of Use</b>
            </Typography>
            <Typography gutterBottom>
              We reserve the right to change these Terms of Use at any time without prior notice. Your continued access
              to the App shall be regarded as acceptance by you of the current Terms of Use, including any changes to
              these Terms of Use. We encourage frequent review of the Terms of Use to stay informed.
            </Typography>
            <Typography gutterBottom variant="h2">
              <b>9. Termination</b>
            </Typography>
            <Typography gutterBottom>
              We reserve the right to terminate access to the App or to any information made available on the App in our
              sole discretion at any time and without notice. Helpers shall not be liable to you or to any third party
              for the termination of access to the App.
            </Typography>
            <Typography gutterBottom variant="h2">
              <b>10. Governing Laws and Waiver</b>
            </Typography>
            <Typography gutterBottom>
              The laws of the Province of Ontario and federal laws of Canada shall govern these Terms of Use. You and
              Helpers agree to submit to the jurisdiction of the courts located within the Province of Ontario in
              relation to claims arising under or related to these Terms of Use. Helper’s failure to exercise or enforce
              any right or provision of these Terms of Use shall not constitute a waiver of such right or provision. If
              any provision of these Terms of Use is found by a court of competent jurisdiction to be invalid, the
              parties nevertheless agree that the court should endeavour to give effect to the parties’ intentions as
              reflected in the provision, and the other provisions of these Terms of Use remain in full force and
              effect. These Terms of Use constitute the entire agreement between you and Helpers with respect to the
              App, superseding any prior agreements between you and Helpers with respect to the App.
            </Typography>
            <Typography gutterBottom variant="h2">
              <b>Questions About The Terms of Use</b>
            </Typography>
            <Typography gutterBottom>
              You may contact Helpers with any question, concern, complaint, or compliment relating to Helpers’ Terms of
              Use.
            </Typography>
            <Typography gutterBottom>
              You may contact our team regarding such matters at support@gethelpers.ca or 289-768-9616
            </Typography>
            <Button fullWidth onClick={props.onClose}>
              Close
            </Button>
          </Box>
        </Paper>
      </Box>
    </Modal>
  );
};

export { TermsOfUse };
