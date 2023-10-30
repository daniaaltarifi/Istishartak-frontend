import React,{useEffect,useState} from 'react'
// import Sidebar from './Sidebar'
import '../Style/PrivacyPolicy.css';
import Footer from './Footer';
import { Link } from 'react-router-dom';
function Sidebar({contentItems,setCurrentImageIndex}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  function toggleNav() {
    setIsSidebarOpen(!isSidebarOpen);
  }
  // function navigateToSection(id) {
  //   // Use the id to find the matching section in the texts array
  //   const sectionIndex = contentItems.findIndex((text) => text.id === id);

  //   // Update the currentImageIndex state in StayingHealth component
  //   setCurrentImageIndex(sectionIndex);
  // }
  return (
    <div className="container-fluid">
      <div id="mySidebar" className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
      <Link to="/" >HOME</Link>
        <Link to="/" >BOOKING</Link>
        <Link to="/" >OUR DOCTORS</Link>
        <Link to="/" >FOR DOCTORS</Link>
        <Link to="/" >SPECIALTIES</Link>
        <Link to="/" >DOWNLOAD</Link>
        <Link to="/" >CONTACT</Link>
        <Link to={'/privacypolicy'}> PRIVACY POLICY</Link>
        <Link to={'/termsandconditions'}>TERMS AND CONDITIONS</Link>

        <a href="#">LOGIN</a>
      </div>
      <div className="row">
        <div className="col-lg-2">
          <div id="main">
            <i
              className={`fa-solid fa-bars fa-xl toggle_menu ${isSidebarOpen ? 'active' : ''}`}
              style={{ color: "#048897" }}
              onClick={toggleNav}
            ></i>
          </div>
        </div>
        <div className="col-lg-10  ">
          <div >
            <img src={require("../Images/logo.png")} className='logo logo_privacy' />
          </div>
        </div>
      </div>
    </div>
  );
}
function TermsAndConditions() {
  useEffect(()=>{
    window.scrollTo(0,0)

  },[])
  return (
    <div>
 <Sidebar/>
 <div class="container-fluid cont_privacy">
  <div class="row">
  <div class="col-lg-12 col-sm-12 privacy " >
            <p className=' title_mobile'>Terms And Conditions</p>
          </div>
    
  </div>
  <div class="row">
    <div class="col-12 ">
    <p className='text_privacy'>
  <b> Effective date: October 20, 2023</b> <br/><br/>
We encourage you to read this document to understand the terms, policies, and more
that apply to you when you use our websites, products, or services, including how we
process your personal information and how you can update and manage that
information.
Please also note, for members of our Istishartak application, many features of the
Istishartak application have been integrated into the Istishartak application, with the
goal to provide you a seamless digital health experience. However, some features have
not yet been incorporated, and some Users may need to visit the Istishartak
application to access certain of these features.<br/><br/>

<b className='title_privacy'> Istishartak Terms of Service</b><br/><br/>
<b>Welcome and thank you for visiting Istishartak!</b><br/><br/>
<p>Istishartak LLC (“<b>Istishartak</b>”, “<b>Company</b>”, “<b>we</b>”, “<b>us</b>”, or “<b>our</b>”) operates the
              websites located at istishartak.com, and other websites, products, services, and
              mobile applications with links to this Privacy Policy, including without limitation the
              Istishartak webpages and secure applications (`collectively, the “<b>Sites</b>” or “<b>Websites</b>”,unless otherwise specified). Users of the Sites or Services are referred below as
              “<b>Users</b>”, “<b>Members</b>”, “<b>you</b>”, “<b>your</b>”, or “<b>yours</b>”.</p><br />
Please read these Terms carefully before using the Sites or Services. By visiting or
using any of the Sites or Services, you are accepting the practices and provisions
described in these Terms, as well as our Privacy Policy and other terms, agreements,
statements of rights, consent forms, and policies referenced above. If you do not agree
to these Terms, or any of the documents referenced above, please do not use our Sites
or Services.<br/>
Where visiting or using any of our Sites or Services, or any other website or mobile
application that reference or link to these Terms, your information will be processed by
Istishartak for the purposes stated in the Istishartak Privacy Policy, and in accordance
with the Istishartak Professionals Notice of Privacy Practices, where applicable and
legally permissible.<br/><br/>
<b className='title_privacy'>Update To These Terms and Conditions</b><br/>
Istishartak’s Sites are owned and operated by Istishartak LLC. Our Sites are continually
under development and changes to the Sites or Services may be made at any time. We
reserve the right to revise or remove any part of these Terms in our sole discretion at
any time and without prior notice to you, except where legally required. Thus, you 
should visit this page periodically for changes. Any changes to these Terms are
effective upon posting to the Sites, unless otherwise specified. If you disagree with
these Terms, your sole remedy is to discontinue your use of the Sites and Services.
Your continued use after a change has been posted constitutes your acceptance of the
changes.
<br/><br/>
<b className='title_privacy'>Health Services & Information</b><br/>
Istishartak does not engage in the practice of medicine. We do offer online telehealth
services enabling our Members to report their health history and engage independent
healthcare professionals (“<b>Healthcare Professionals</b>”) to obtain medical and
healthcare services (“<b>Clinical Services”</b>). For Clinical Services that require the practice
of medicine, we work with independent, physicians or physician-owned medical
groups (“<b>Providers</b>”), who provide telehealth services and medical advice via our Sites
(collectively, “<b>Istishartak Professionals</b>”). Such Providers are not employed by us, and
are solely responsible for the quality and appropriateness of the care and advice they
render to you. Neither we nor Istishartak Professionals are insurance providers. Please
refer to the Istishartak Professionals Notice of Privacy Practices to learn more about
these groups and how they’re organized.<br/><br/>
Istishartak does not practice medicine or any other licensed profession, and does not
interfere with the practice of medicine or any other licensed profession by Healthcare
Professionals, each of whom is responsible for his or her services and compliance with
the requirements applicable to his or her profession and license. Neither Istishartak nor
any third parties who promote the Services or provide you with a link to the Services
shall be liable for any professional advice you obtain from a Healthcare Professional via
the Services.<br/><br/>
While we work with the Istishartak Professionals for provision of certain virtual care
Services, not all of our Users receive such Services. Dial 911 if you are in an
emergency life-threatening situation or need emergency medical attention. General
health information that may be contained on one of our Sites is not a substitute for
professional health care.<br/><br/>
The personal information we receive or obtain through your use of the Services may be
subject to different state and federal privacy laws, including the Health Insurance
Portability and Accountability Act of 1996 and its implementing regulations (“HIPAA”).
Descriptions in the Terms and our Privacy Policy regarding our collection, use and
disclosure of personal information may be subject to or further restricted by the
requirements of these laws. In addition, where Istishartak collects, creates, maintains,
uses and discloses Protected Health Information (“PHI”), which is personally
identifiable health information protected by HIPAA, we may be and likely are subject to
certain agreements, including with health plans and health care providers. In those
cases, our collection, creation, maintenance, use and disclosure of PHI will be in
accordance with such agreements and your health plan’s Notice of Privacy Practices, 
where and as applicable. As such, references below to HIPAA, PHI, and related terms
are provided for informational purposes. For official notices concerning, or for more
information or questions about, the use and disclosure of your PHI, please refer to your
health plan’s Notice of Privacy Practices, where and as applicable.
<br/><br/>
<b className='title_privacy'>User Accounts</b><br/><br/>
You are not obligated to register with Istishartak in order to access our Sites.
However, in order to access Services you must register on the Sites. When you
register on the Sites, you are required to create an account (“<b>Account</b>”) by entering
your name, mobile telephone number, password and certain other information
collected by Istishartak (collectively “<b>Account Information</b>”). 
<br/><br/>

In order to use the Services, you must create an Account and agree to these Terms of
Service. In order to create an Account, you must be of the legal age to enter into a
contract. If you are under 18 you will not be able to create an account on the
Istishartak application. You agree that the Account Information that you provide to us
at all times, including during registration and in any information you upload to the Sites,
will be true, accurate, current, and complete. You may not transfer or share your
Account password with anyone, or create more than one Account (with the exception
of sub-accounts established for children of whom you are the parent or legal
guardian). 
<br/><br/>

You are responsible for maintaining the confidentiality of your Account password and
for all activities that occur under your Account. You also agree to promptly notify us of
any unauthorized use of your username, password or any other breach of security that
you become aware of involving or relating to the Sites by contacting us using the below
contact information. We reserve the right to take any and all action, as it deems
necessary or reasonable, regarding the security of the Sites and your Account
Information. In addition, you agree to exit from your Secure User account at the end of
each session.
In no event and under no circumstances shall we be held liable to you for any liabilities
or damages resulting from or arising out of your use of the Sites, your use of the
Account Information or your release of the Account Information to a third party. You
may not use anyone else’s account at any time.
<br/><br/>

<b >Non-Clinical Services</b><br/><br/>
Istishartak may provide Services that do not involve direct clinical care, such as
Resources, Articles, Symptom Checker, and Communities (“Non-clinical Services”).
Those Services provided through the Sites give physicians and their patients access to
additional information which they may or may not choose to utilize in planning medical
care. The Non-Clinical Services are not a substitute for primary care and no physicianpatient relationship is created by use of the Sites for those Services.
<br/><br/>
Non-clinical Services are also limited. In some cases the online nature of the NonClinical Service will make it difficult to verify a diagnosis (particularly with conditions
that rely heavily on direct physician-patient interaction for accurate diagnosis). In those
cases, the Non-Clinical Service provided through the Sites will focus on the
assessment or recommendation of treatment options. The decision to focus on
diagnosis, treatment recommendation(s), or both rests solely with the local treating
physician.<br/><br/>
Non-clinical Services provided through the Sites differ from the diagnostic services
typically provided by a physician. The medical professionals providing Non-clinical
Services through the Sites will not have the benefit of information that would be
obtained by examining you in person and observing your physical condition. Therefore,
the medical professional providing Non-Clinical Services through the Sites may not be
aware of facts or information that would affect their opinion of your diagnosis. To
reduce the risk to you of this limitation, the Company strongly encourages you to
discuss the information gained from the Non-Clinical Services with your treating
physician. 
<br/><br/>
By deciding to engage the Non-clinical Services through the Sites, you acknowledge
and agree that you are aware of the limitations discussed in this section, and agree to
assume the risk of these limitations. Furthermore, you agree and accept that: (i) the
information you will receive from the Sites and use of the Non-clinical Services is
limited and provisional; (ii) the Non-clinical Services are not intended to replace a full
medical evaluation or a visit with a physician or other treating health care provider; (iii)
the medical professionals providing Non-clinical Services through the Sites do not have
important information that is usually obtained through a physical examination; and (iv)
the absence of a physical examination may affect the medical professional’s ability to
fully understand your condition, disease or injury.<br/><br/>
You also agree that the Non-clinical Services discussed in this section will not be used
in any legal dispute including but not limited to litigation, arbitration, claim for disability
benefits, claim for worker’s compensation and/or malpractice claims without the prior
written consent of the Company.
<br/><br/>
<b className='title_privacy'>Fees & Purchase Terms</b><br/><br/>
Clinical Services incur a fee. You agree to pay all fees or charges to your Account in
accordance with the fees, charges, and billing terms in effect at the time a fee or
charge is due and payable. By providing Istishartak with your credit card number,
PayPal or other payment account and associated payment information, you agree that
we are authorized to immediately invoice your account for all fees and charges due and
payable to us hereunder and that no additional notice or consent is required. Please
check with your employer, health plan or agency to determine if any Services will be
reimbursed. You acknowledge and agree that you shall be personally responsible for all
incurred expenses. Istishartak offers no guarantee that you shall receive any such
reimbursement. We reserve the right to modify or implement a new pricing structure at 
any time prior to billing you for your initial payment or for future payments due pursuant
to these Terms. You understand and agree that for Services provided on an
appointment basis, you will be responsible for a missed appointment fee equal to all or
a portion of the fees you would have paid for the scheduled services if you do not
cancel a scheduled appointment at least 2 hours in advance, unless we notify you in
writing that a shorter cancellation window applies.<br/><br/>

<b className='title_privacy'>Privacy & Communications</b><br/><br/>
<b>Privacy</b><br/>
Please see Istishartak’s Privacy Policy for additional information. For more information
or questions about the collection, creation, maintenance, use and disclosure of any of
your data that may constitute PHI, as described above, please refer to Istishartak
Professionals’ Notice of Privacy Practices.<br/><br/>
<b>Short Message Service or SMS</b><br/>
Istishartak or its affiliates may contact you by short message service (“SMS”) text
message from time to time regarding your account or the Services to provide
appointment reminders, service announcements, privacy notices, administrative
messages and other communications about the Services (“SMS Communications”).
These SMS Communications are considered part of the Services and your account.
By agreeing to these Terms and providing your telephone number to us or our affiliates,
you: (i) consent to receive SMS Communications from or on behalf of us or any of its
affiliates at the telephone number you provide; and (ii) acknowledge and agree that
your information may be processed in accordance with, and you are to be bound by,
our Privacy Policy. 
<br/><br/>
<b>Other Communications</b><br/>
You agree that we may send to you additional communications through electronic
means including, but not limited to, (1) by email, using the address that you provided to
us during registration, (2) push notifications on your tablet or mobile device, or (3) by
posting communications on the Sites (collectively, “<b>Communications</b>”). In some
cases we may contact you by telephone. 

The delivery of any SMS or other Communications from us is effective when sent by
us, regardless of whether you read the SMS or other Communication. You can
withdraw your consent to receive Communications by deactivating your Account, or as
otherwise specified and provided. 

You acknowledge that text messages and emails are not always secure and there is a
risk that such messages and emails will be intercepted because they travel over
networks that we do not control. As such, we cannot guarantee the security or 
confidentiality of messages sent by text messages or email. By providing us with your
cell phone number and email address, you agree that we may communicate with you
by text message and email, despite these risks.<br/><br/>
<b className='title_privacy'>Termination</b><br/><br/>
You may deactivate your Account and end your registration at any time, for any reason
by sending an email to support@includedhealth.com. Istishartak may suspend or
terminate your use of the Sites, your Account and/or registration for any reason at any
time. Subject to applicable law, we reserve the right to maintain, delete or destroy all
communications and materials posted or uploaded to the Sites pursuant to its internal
record retention and/or content destruction policies. After such termination, we will
have no further obligation to provide the Services, except to the extent we are
obligated to provide you access to your health records or Healthcare Professionals are
required to provide you with continuing care under their applicable legal, ethical and
professional obligations to you.<br/><br/>
<b className='title_privacy'>Children</b><br/><br/>
Istishartak’s Sites are not intended for children under the age of 18. If you are under 18
years of age, please do not use or access our Sites at any time or in any manner. By
using our Sites, you affirm that you are over the age of 18. We do not seek through our
Sites to gather personal information from or about persons under the age of 18 without
the consent of a parent or guardian.
If you are a parent or guardian and discover that your child under the age of 18, or
equivalent minimum age depending on jurisdiction, has obtained an Istishartak
account, then you may alert us at the contact information below under “Contact Us”,
and request that we delete that child’s personal information from our systems. If we
learn that we have collected the personal information of a child under 18, or equivalent
minimum age depending on jurisdiction, outside the above circumstances we will take
steps to delete the information as soon as possible, except where prohibited by
applicable law.<br/><br/>
<b className='title_privacy'>Sites Security & Acceptable Use</b><br/><br/>
<b>Security</b><br/>
Istishartak’s Sites require users to create unique identifiers (such as a username and
password) in order to log into many areas of the Sites. We utilize these unique
identifiers to verify the user’s identity and eligibility, in order to protect our members
from the release of sensitive or personally identifiable information to unauthorized
users. To help protect the privacy of data you transmit through the Sites, where
personally identifiable information is requested, we also use technology designed to
encrypt the information that you input before it is sent to us using Secure Sockets
Layer (SSL) technology or similar encryption technology. In addition, we take steps to 
protect the user data we collect against unauthorized access. However, you should
keep in mind that the Sites and our Services are run on software, hardware and
networks, any component of which may, from time to time, require maintenance or
experience problems or breaches of security beyond our control.
You must exercise caution, good sense and sound judgment in using the Sites. You are
prohibited from violating, or attempting to violate, the security of the Sites. Any such
violations may result in criminal and/or civil penalties against you. We may investigate
any alleged or suspected violations and if a criminal violation is suspected, we will
cooperate with law enforcement agencies in their investigations.<br/><br/>
<b>Acceptable Use</b><br/>
In your use of our Sites or any Services, you agree not to:<br/>
<ul>
  <li>
  Send or otherwise transmit to or through our Sites any unlawful, infringing, harmful,
harassing, defamatory, threatening, hateful or otherwise objectionable material of any
kind, any material that can cause harm or delay to the Sites or computers of any
kind, and any unsolicited advertising, solicitation or promotional materials;
  </li>
  <li>
  Misrepresent your identity or affiliation in any way;
  </li>
  <li>
  Restrict or inhibit any person from using the Sites, disclose personal information
obtained from the Sites or collect information about users of the Sites;
  </li>
  <li>
  Reverse engineer, disassemble or decompile any section or technology on the Sites,
or attempt to do any of the foregoing;
  </li>
  <li>
    Gain unauthorized access to the Sites, to other users’ accounts, names, personally
identifiable information or other information, or to other computers or websites
connected or linked to the Sites;
  </li>
<li>
 Launch or use any automated system, including without limitation, “robots,”
“spiders,” or “offline readers,” that access the Sites in a manner that sends more
request messages to our servers in a given period of time than a human can
reasonably produce in the same period by using a conventional web browser;
</li>
<li>
Send or otherwise transmit to or through the Sites chain letters, unsolicited
messages, so-called “spamming” or “phishing” messages, or messages marketing or
advertising goods and services;
</li>
<li>
Post, transmit or otherwise make available any virus, worm, spyware or any other
computer code, file or program that may or is intended to damage or hijack the
operation of any hardware, software or telecommunications equipment;
</li>
<li>
 Violate any applicable laws or regulations or these Terms;
</li>
<li>
Use abusive, harassing or threatening language or make abusive, harassing, bullying
or threatening communications toward any staff member, any physician, or any other
user of the Sites;
</li>
<li>
Create a hostile environment for any staff member, any physician, or any other user of
the Sites based on such person’s race, age, national origin, disability, gender or
reassignment thereof, religion or belief, sex, sexual orientation, marriage/partnership
status, or pregnancy/maternity.
</li>
<li>
 Alter or modify any part of the materials or Services offered on the Sites; or
</li>
<li>
Assist or permit any persons in engaging in any of the activities described above.
</li>
</ul><br/>
Any of the foregoing may result in actions including but not limited to termination of
your access to the Sites or any of the Services.<br/><br/>
<b className='title_privacy'>Our Intellectual Property Rights</b><br/><br/>
The content on the Sites, including without limitation, any text, software, graphics,
photos, sounds, music, videos, audiovisual combinations, patents, interactive features,
any trademarks, service marks and logos contained therein and any other materials
you may view on, access through, or contribute to the Sites (collectively “Materials”)
are owned by or licensed to Istishartak, subject to copyright, trademark and other
intellectual property rights under United States and foreign laws and international
conventions.<br/><br/>
No Materials from the Sites may be copied, reproduced, republished, uploaded,
posted, transmitted, or distributed in any way without written permission of the rights
owner. You agree not to circumvent, disable, or otherwise interfere with security related
features of the Sites or features that prevent or restrict use or copying of any Materials
or content. These Terms permit you to use the Sites for your personal, non-commercial
use only.<br/><br/>
Modification of any Materials or use of any Materials for any other purpose is a
violation of the copyrights and other proprietary rights of Istishartak, or of other entities
or persons where so indicated, unless Istishartak or the owner has provided said
Material for such express purpose. Permission for all other uses of Materials contained
herein, including reproducing and distributing multiple copies or using Materials on any
other website or networked computer or linking to any secured or private page at the
Sites must be obtained from Istishartak or the appropriate rights owner in advance;
otherwise, such use is prohibited. Requests for such authorization from Istishartak
should be submitted via an email to support@istishartak.com. 
<br/><br/>
All design rights, databases and compilation and other intellectual property rights
associated with the Sites, in each case whether registered or unregistered, and related
goodwill, are proprietary to Istishartak.<br/><br/>
<b className='title_privacy'>Links to Other Sites</b><br/><br/>
As you view the Sites, you may see links to third-party websites. These links are for
convenience only. If you use these links, you will leave the Sites. Certain of these linked
websites may make use of Istishartak’s proprietary intellectual property rights (such as
copyrights, trademarks, service marks, logos and trade names) under license from us.
We are not responsible for the availability or content of these other websites or for any
viruses or other damaging elements encountered in linking to a third-party website. In
addition, providing links to these websites should not be interpreted as endorsement or 
approval by us of the organizations sponsoring such third-party websites or their
products or services. These Terms do not apply to any other websites.
<br/><br/>
<b className='title_privacy'>Third Party Interactions</b><br/><br/>

Your interactions with entities or individuals found on or through the Sites or the
Services provided through the Sites, including payment and delivery of goods or
services, and any other terms, conditions, warranties or representations associated
with such dealings, are solely between you and such entities or individuals. You should
make whatever investigation you feel necessary or appropriate before proceeding with
any online or offline transaction with any third party. You are solely responsible for, and
will exercise caution, discretion, common sense and judgment in, using the Sites and
disclosing personal information.<br/><br/>

You agree that Istishartak shall not be responsible or liable for any loss or damage of
any sort incurred as the result of any such dealings. If there is a dispute between you
and any third party, you understand and agree that we are under no obligation to
become involved.<br/><br/>

<b className='title_privacy'>Jurisdictional Issues</b><br/><br/>
Our Sites are controlled and operated by Istishartak from our offices within Deleware,
United States of America. Those who choose to access the Sites from other locations
do so on their own initiative and are responsible for compliance with local laws, if and
to the extent local laws are applicable. Access to the Sites from jurisdictions where the
contents of the Sites are illegal or penalized is prohibited.<br/><br/>
By submitting data to the Sites or Services, you affirmatively consent to its use and
processing in the United States as set forth in these Terms, the above referenced
service term and policy links, and Istishartak’s Privacy Policy.<br/><br/>
<b className='title_privacy'>Termination</b><br/><br/>
Istishartak may terminate your use of the Sites or any of our features or Services at any
time and for any reason without notice for conduct violating these Terms. We will
terminate a user’s access to the Sites and its features or any Services if, under
appropriate circumstances, the user is determined to be a repeat infringer of third party
rights or in breach of the applicable Terms. Upon any such termination, you must
destroy all Materials obtained from the Sites and all copies thereof. The provisions of
these Terms concerning Sites security, prohibited activities, copyrights, trademarks,
disclaimer, limitation of liability, indemnity and jurisdictional issues shall survive any
such termination. You agree that if your use of the Sites is terminated pursuant to these
Terms, you will not attempt to use the Sites under any name, real or assumed, and
further agree that if you violate this restriction after being terminated, you will indemnify
and hold us harmless from any and all liability that we may incur therefore.
<br/><br/>
<b className='title_privacy'>Disclaimer</b><br/><br/>

The materials in the Sites are provided “as is” and without warranties of any kind, either
express or implied. To the fullest extent permissible pursuant to applicable law,
Istishartak disclaims all warranties, express or implied, including, but not limited to,
implied warranties of merchantability and fitness for a particular purpose. We do not
warrant that the functions contained in the materials will be uninterrupted or error-free,
that defects will be corrected or that the Sites or the server that makes it available are
free of viruses or other harmful components. We do not make any representations or
warranties regarding the use or the results of the use of the materials in the Sites in
terms of their correctness, accuracy, reliability or otherwise. Applicable law may not
allow the exclusion of implied warranties, so the above exclusion may not apply to you.
<br/><br/>

<b className='title_privacy'>Limitation of Liability</b><br/><br/>

To the extent permitted under applicable law, under no circumstances, including, but
not limited to, negligence, shall Istishartak, any Provider or your be liable for any
compensatory, punitive, special or consequential damages that result from the use of,
or the inability to use, the Sites or the Materials on it, even if we, any Provider or an
authorized representative of us has been advised of the possibility of such damages.
Applicable law may not allow the limitation or exclusion of liability or incidental or
consequential damages, so the above exclusion may not apply to you.
<br/><br/>

<b className='title_privacy'>Indemnity</b><br/><br/>

You agree to indemnify, defend and hold Istishartak and Istishartak Professionals and
its and their directors, officers, employees, agents and contractors harmless from and
against any and all claims, damages, losses, costs (including without limitation
reasonable attorneys’ fees) or other expenses that arise directly or indirectly out of or
from (i) your breach of any provision of these Terms, or (ii) your activities in connection
with the Sites.
<br/><br/>

<b className='title_privacy'>Geographical Restrictions</b><br/><br/>

Istishartak makes no representation that all products, services and/or material
described on the Sites, or the Services available through the Sites, are appropriate or
available for use in locations outside the United States or all states and territories
within the United States.
<br/><br/>

<b className='title_privacy'>Disclosures</b><br/><br/>

All Providers performing licensed Clinical services on the Sites hold the professional
licenses issued by the professional licensing boards or agencies in the states or
countries where they practice. All physicians and psychologists hold advanced 

degrees in either medicine or psychology and have undergone postgraduate training.
You can report a complaint relating to the care provided by a Provider by contacting
the professional licensing board in the state where the care was received. 
<br/><br/>

Any clinical records created as a result of your use of the Clinical Services will be
securely maintained by Istishartak on behalf of Istishartak Professionals for a period
that is no less than the minimum number of years such records are required to be
maintained under state and federal law, which is typically at least six years.
<br/><br/>

<b className='title_privacy'>Owner and Data Controller</b><br/><br/>

Any services associated with Istishartak are all provided by, and you are thereby
contracting with:
Istishartak, LLC
16192 Coastal Highway
Lewes, Delaware 19958
USA
To contact us with questions or concerns about these Terms, please contact us using
the information provided below under “Contact Us”. 
<br/><br/>

<b className='title_privacy'>Credit Transactions</b><br/><br/>

Istishartak does not accept payment in the form of cash, check, money order or
insurance reimbursement. Major credit cards are the only accepted means of payment.
If you pay by credit card, you authorize us to bill and charge the credit card indicated in
your order for any fees and any other amounts provided for in your order as the same
become due and payable. In the event that your credit card expires or we are otherwise
unable to debit the applicable amounts from your credit card, we shall provide notice
to you, whereupon you shall immediately furnish us with a valid credit card account
number. Your request for services from the Sites will not be fulfilled until full payment
has been received and verified.
<br/><br/>

<b className='title_privacy'>Other</b><br/><br/>

By choosing to visit the Sites or otherwise provide information to Istishartak, you agree
that any dispute over your use of the Sites or these Terms will be governed by the laws
of the State of Delaware and the United States of America. You also consent to the
adjudication of any disputes arising in connection with our Sites in the Delaware Court
of Chancery. You also agree to attempt to mediate any such dispute and to abide by all
limitations of liability contained herein.
<br/><br/>

If any provision of these Terms is unlawful, void or for any reason unenforceable, then
that provision shall be deemed severable from these Terms and shall not affect the
validity and enforceability of any remaining provisions.
<br/><br/>

<b className='title_privacy'>Contact Us</b><br/><br/>

If you have questions or concerns about these Terms, or would like to report a
violation, see the below contact options:
<br/><br/>

You may contact us by mail at:
<br/><br/>

Istishartak, LLC
<br/>

16192 Coastal Highway
<br/>

Lewes, Delaware 19958
<br/>

USA
<br/><br/>

You may email us at support@istishartak.com. 
<br/><br/>

If you are registered, you may submit a message through the once logged-in.
<br/><br/>

Or you may call our general support line at (401) 263-1839
    </p>
    </div>
    
  </div>
  </div>
<Footer/>
    </div>
   
  )
}

export default TermsAndConditions;