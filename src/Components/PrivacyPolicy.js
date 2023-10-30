import React, { useEffect ,useState} from 'react'
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
function PrivacyPolicy() {
  useEffect(()=>{
    window.scrollTo(0,0)

  },[])
  return (
    <div>
      <Sidebar />
      <div class="container-fluid cont_privacy">
        <div class="row">
          <div class="col-lg-12 col-sm-12 privacy " >
            <p className='title '>Privacy Policy</p>
          </div>

        </div>
        <div class="row">
          <div class="col-lg-12 col-sm-12 text_privacy">
            {/* <p className='text_privacy'>A Privacy Policy is a statement or a legal document that states how a company or website collects, handles and processes data of its customers and visitors. It explicitly describes whether that information is kept confidential, or is shared with or sold to third parties.
    A Privacy Policy is a statement or a legal document that states how a company or website collects, handles and processes data of its customers and visitors. It explicitly describes whether that information is kept confidential, or is shared with or sold to third parties.
    </p> */}
            <p><b>Effective Date: October 20, 2023 </b></p>
            <p>We encourage you to read this document to understand the terms, policies, and more
              that apply to you when you use our websites, products, or services, including how we
              process your personal information and how you can update and manage that
              information.</p><br />
            <p><b>Istishartak Privacy Policy </b></p><br />
            <p>Istishartak LLC (“<b>Istishartak</b>”, “<b>Company</b>”, “<b>we</b>”, “<b>us</b>”, or “<b>our</b>”) operates the
              websites located at istishartak.com, and other websites, products, services, and
              mobile applications with links to this Privacy Policy, including without limitation the
              Istishartak webpages and secure applications (`collectively, the “<b>Sites</b>” or “<b>Websites</b>”,unless otherwise specified). Users of the Sites or Services are referred below as
              “<b>Users</b>”, “<b>Members</b>”, “<b>you</b>”, “<b>your</b>”, or “<b>yours</b>”.</p><br />
            <p>We offer online telehealth services enabling our Members to report their health history
              and engage independent healthcare professionals (“<b>Healthcare Professionals</b>”) to
              obtain medical and healthcare services. The Healthcare Professionals who deliver
              Services through Istishartak are independent professionals or groups of independently
              owned professional practices (collectively, “<b>Istishartak Professionals</b>”). Please refer to
              the Istishartak Professionals Notice of Privacy Practices to learn more about these
              groups and how they’re organized.
            </p><br />
            <p>Please note that Users in different regions may be subject to different data protection
              laws, regulations, and standards. As such, this document has a section dedicated to
              California consumers, as well as a section dedicated to consumers subject to
              European Union jurisdiction.</p><br />
            <p>Please read this Privacy Policy carefully before using the Sites or Services. By visiting
              or using any of the Sites or Services, you are accepting the practices described in this
              Privacy Policy, as well as the Istishartak Terms of Service and other terms, agreements,
              statements of rights, consent forms, and policies referenced above, as applicable. If
              you do not agree to this Privacy Policy, or any of the documents referenced above,
              please do not use the Sites or Services.</p><br />
            <p>When visiting or using any of the Sites or Services, including Istishartak (“<b>Istishartak</b>”),
              or any other website or mobile application that reference or link to this Privacy Policy,
              your information will be processed by Istishartak for the purposes stated below, and in
              accordance with the Istishartak Notice of Privacy Practices, where applicable and
              legally permissible.
            </p><br />
            <p className='title_privacy'>
              <b>What is the purpose of this Privacy Policy? </b>
            </p>
            <p>This Privacy Policy discloses Istishartak’s personal information gathering and
              dissemination practices with respect to the Sites, as well as any other websites, mobile
              applications, or other products and services provided by us that link to this Privacy
              Policy. When we use the term “<b>personal information</b>” in this Privacy Policy, we mean
              information that on its own, or in combination with other information, could reasonably
              identify you.
              <br /><br />
              We have also created this Privacy Policy to demonstrate our commitment to privacy.
              We recognize that when you provide us with information about yourself that you trust
              us to act in a responsible manner with that information. We are committed to making
              sure we earn that trust.
              <br /><br />
              The personal information we receive or obtain through your use of the Services may be
              subject to different state and federal privacy laws, including the Health Insurance
              Portability and Accountability Act of 1996 and its implementing regulations (“<b>HIPAA</b>”).
              Descriptions in this Privacy Policy regarding our collection, use and disclosure of
              personal information may be subject to or further restricted by the requirements of
              these laws. In addition, where Istishartak collects, creates, maintains, uses and
              discloses Protected Health Information (“<b>PHI</b>”), which is personally identifiable health
              information protected by HIPAA, we may be and likely are subject to certain
              agreements, including with health plans and health care providers. In those cases, our
              collection, creation, maintenance, use and disclosure of PHI will be in accordance with
              such agreements and your health plan’s (“<b>Plan</b>”) Notice of Privacy Practices, where
              applicable. As such, references below to HIPAA, PHI, and related are provided for
              informational purposes. For official notices concerning, or for more information or
              questions about, the use and disclosure of your PHI, please refer to your Plan’s Notice
              of Privacy Practices, as applicable.
              <br /><br />
            </p>
            <p className='title_privacy'><b>What information do we collect from users and how is it used? </b></p>
            <p>
              The following describes the types of personal and other information Istishartak may
              collect about you, and how we may use and maintain that information, including, but
              not limited to:
            </p>
            <ul>
              <li>Registration. Before you can utilize certain services that we offer on the Sites or
                otherwise, we may ask that you register with the Sites and provide us with your email
                address, phone number, a password, your first and last name and other contact
                information and personal details. We request this information for identification
                purposes, to communicate with you regarding your account, and to facilitate the
                functioning of certain services.
              </li>
              <li>Forms. To fully utilize the services we offer, you may be required to fill out forms that
                will contain personal information such as your name, address, telephone number,
                account information, health status and other personal information relevant to your
                diagnosis and treatment.
              </li>
              <li>
                Surveys. At various points in your Member experience with us, you may be presented
                with optional surveys intended to measure your Service experience in some way.
              </li>
              <li> Medical Records. To support the medical professionals giving second opinions
                regarding your health, you may be required to provide us with past and current
                medical records, description of symptoms, a medical history and life-style
                descriptions.
              </li>
              <li>
                Correspondence. If you correspond with us, including postal, email, in-app chat or
                messaging, phone, or video, we may retain those records.
              </li>
              <li>
                Technical information and usage information. Like many other websites, we collect
                information about users’ devices (such as browser and device types, device
                identification numbers, or other online identifiers) and users’ utilization and navigation
                of our Sites. This information helps us to design our Sites to better suit our users’
                needs. For example, our Sites will track the URL that you visited before you came to
                our Sites, the URL to which you next go and your Internet Protocol (IP) address. We
                use your IP address to help diagnose problems with our server and to administer our
                Sites. Your IP address also is used to help identify you and to gather broad
                demographic information.
              </li>
              <li>
                Information Collected With Cookies. Like most major websites, we use cookies on
                certain pages of our Sites. Cookies make using the Internet easier by, among other
                things, saving your preferences for you. For example, a cookie lets the Sites
                remember that you’ve registered, which allows us to speed up your future activities at
                our Sites, and which allows you to enter your registration information less frequently
                while visiting our Sites. We may also use cookies to deliver content tailored to your
                interests. Our cookies may enable us to relate your use of our Sites to personally
                identifying information that you previously submitted, such as calling you by name
                when you return to our Sites. If your browser is set to reject cookies, or if your
                browser notifies you that you are about to receive a cookie and you reject it, then
                your use of the Sites may not be as efficient or as enjoyable as it would be if the
                cookie were enabled. The information that we collect with cookies allows us to
                improve our marketing and promotional efforts, to statistically analyze Sites’ usage,
                to improve our content and product offerings and to customize our Sites’ content,
                layout and services. You may learn more about specific cookies later in this
                document.
              </li>
            </ul><br />
            <p className='title_privacy'><b>To whom does Istishartak disclose information about you that we
              collect?</b></p>
            <p>
              Istishartak will not share, rent, sell or otherwise disclose any of the personally
              identifiable information that we collect about you, except when we have your
              permission or in any of the following situations:

            </p>
            <ul>
              <li>If you have requested a Service, we may use information about you to fulfill such
                requests (including providing that information to third parties). We may also at any
                time review your case, your medical records from prior to and after your interaction
                with the Sites, and any records created as a result of Services received. We may
                request courtesy notices from your treating physician(s) and/or request additional
                medical records from them, including records pertaining to care you received after
                receiving the services. We may review these records for, among other purposes,
                reviewing the quality of service you received, reviewing the quality of service provided
                by the physicians and medical professionals treating you (including the physicians
                and medical professionals to whom you may have received a referral), to better
                understand the course of treatment for your condition(s) including information
                regarding outcomes and costs, and to improve treatments and recommendations for
                people with similar or different conditions. We will take care to minimize personally
                identifying information in this process. We may also use anonymous information
                gathered, including information from your medical records, to generate conclusions
                about the healthcare process, particular conditions, and other matters. We and our
                affiliated physicians and researchers may publish this anonymous information in
                journals, websites and other locations. However, we will not publish your name or
                any identifying information about you without your permission; we will use only
                anonymous data for any public purpose.</li>
              <li>We may disclose information that we collect about you to our third-party contractors
                who perform services for us in order to provide certain services or to complete or
                confirm a transaction that you conduct with us.</li>
              <li>
                We may use information we know about you to contact you to inform you about
                relevant services, including by telephone, text message, email, or direct mail.
              </li>
              <li>
                We may disclose the results of anonymized aggregated data about you for marketing
                or promotional purposes (for instance, that a certain percentage of our Sites’ users
                are living in a particular country or city). In these situations, we do not disclose to
                these entities any information that could be used to personally identify you. Certain
                information, such as your password, is not disclosed to marketing advertisers at all,
                even in aggregate form.
              </li>
              <li>
                We may disclose information about you as part of a merger, acquisition or other sale
                or transfer of its assets or business. We do not guarantee that any entity receiving
                such information in connection with one of these transactions will comply with all
                terms of this Privacy Policy.
              </li>
              <li>
                We may disclose information about you for purposes such as to provide services
                available on the Sites; to enforce our Members’ rights; to protect against actual or
                potential fraud; to resolve Member inquiries or disputes; to receive payments; to
                carry out our business; to protect the confidentiality or security of our records; to
                administer preventive health and case management programs; to perform auditing
                and ratemaking functions; to enable our service providers to perform marketing
                services on our behalf and inform Users about our own products or services; to
                comply with federal or state laws and other applicable legal requirements.
              </li>
              <li>
                We may disclose your information, to the extent permitted by law, in court or in the
                stages leading to possible legal action arising from improper use of this website,
                application or services, or due to a dispute you initiate in connection with the related
                services.
              </li>
              <li>
                Moreover, we may be legally obligated to disclose information about you to the
                government or to third parties under certain circumstances, such as in connection
                with illegal activity on our Sites or to respond to a subpoena, court order or other
                legal process. We reserve the right to release information that we collect to law
                enforcement or other government officials, as we, in our sole and absolute discretion,
                deem necessary, appropriate or as required under law, such as your statement to
                hurt yourself or others
              </li>
              <li>
                If you use our Sites or Services outside of the United States, information that we
                collect about you will be transferred to servers inside the United States, which may
                involve the transfer of information out of countries located in the European Economic
                Area. By allowing us to collect information about you, you consent to such transfer
                and processing of your data.
              </li>
            </ul><br />
            <p className='title_privacy'><b>Your Rights Under HIPAA Regarding Protected Health Information </b></p>
            <p>
              This section excludes Services performed by or associated with the Istishartak
              Professionals. For more information, please see the Istishartak Notice of Privacy
              Practices.
              <br /><br />
              You have certain rights regarding your protected health information under HIPAA that
              may be available to you. For official notice concerning these rights, you should refer to
              your Plan’s Notice of Privacy Practices.

            </p><br />
            <p className='title_privacy'><b>What security measures do the Sites employ? </b></p>
            <p>To help protect the privacy of data you transmit through the Sites, where personally
              identifiable information is requested, Istishartak also uses technology designed to
              encrypt the information that you input before it is sent to us using Secure Sockets
              Layer (SSL) technology or similar encryption technology. In addition, we take steps to
              protect the user data we collect against unauthorized access. However, you should
              keep in mind that the Sites and our services are run on software, hardware and
              networks, any component of which may, from time to time, require maintenance or
              experience problems or breaches of security beyond our control.
              Please also be aware that despite our best intentions and the guidelines outlined in this
              Privacy Policy, no data transmission over the Internet or encryption method can be
              guaranteed to be 100% secure.</p><br />
            <p className='title_privacy'><b>How can you correct or update information that we collect about you? </b></p>
            <p>You may correct or update information collected about you by managing your account
              profile, contacting us via the contact information below, or submitting a privacy request
              as laid out below under “How to exercise your privacy rights”. We will respond in
              accordance with our agreements and legal requirements. If necessary, we may retain
              original and updated information for reasons such as technical constraints, dispute
              resolution, troubleshooting and agreement enforcement.</p><br />
            <p className='title_privacy'><b>What are the policies of linked Sites and other third parties? </b></p>
            <p>This Privacy Policy only addresses the use and disclosure of certain information
              Istishartak collects from or about you. You should be aware that when you are on the
              Sites, you may be directed to other websites that are beyond our control, and we are
              not responsible for the privacy practices of third parties or the content of linked
              websites. We encourage you to read the posted privacy policy whenever interacting
              with any website.</p><br />
            <p className='title_privacy'><b>How will I know about changes in the Privacy Policy? </b></p>
            <p>
              Istishartak’s Sites are owned and operated by Istishartak. Our Sites are continually
              under development and changes to the Sites or Services may be made at any time. We
              reserve the right to revise or remove any part of this Policy in our sole discretion at any
              time and without prior notice to you, unless where legally required. Thus, you should
              visit this page periodically for changes. Any changes to this Policy are effective upon
              posting to the Sites, unless otherwise specified. If you disagree with this Policy, your
              sole remedy is to discontinue your use of the Sites and Services. Your continued use
              after a change has been posted constitutes your acceptance of the changes.
            </p><br />
            <p className='title_privacy'><b>What is our policy on children users of our Sites? </b></p>
            <p>Istishartak does not knowingly collect or maintain personally identifiable information
              from persons under 18 years old, and no part of our Sites is directed to persons under
              18. IF YOU ARE UNDER 18 YEARS OF AGE, PLEASE DO NOT USE OR ACCESS
              OUR SITES AT ANY TIME OR IN ANY MANNER, except where allowed in
              accordance with our Terms of Service. Where permitted, any personal information
              relating to those children will be health information governed by this Privacy Policy or
              the applicable Notice of Privacy Practices.
              <br />
              If you are a parent or guardian and discover that your child under the age of 18, or
              equivalent minimum age depending on jurisdiction, has obtained an Istishartak
              account, then you may alert us using the contact information below under “Contact
              Us” and request that we delete that child’s personal information from our systems. If
              we learn that we have collected the personal information of a child under 18, or
              equivalent minimum age depending on jurisdiction, outside the above circumstances
              we will take steps to delete the information as soon as possible, except where
              prohibited by applicable law.</p><br />
            <p className='title_privacy'><b>What law governs my use of the Sites and Istishartak’s services? </b></p>
            <p>By choosing to visit Istishartak’s Sites, use our Services, or otherwise provide
              information to us, you agree that any dispute over privacy or the terms contained in
              this Privacy Policy will be governed by the law of the State of Delaware. You also agree
              to abide by any limitation on damages contained in our Terms of Service or other
              agreement that we have with you.</p><br />
            <p className='title_privacy'>
              <b>Additional Information About This Privacy Statement </b>
            </p>
            <p>Our Sites are owned and operated by Istishartak. The terms indicated in this Privacy
              Policy will remain effective, even if the Member’s coverage is terminated, to the extent
              we retain information about a Member.
            </p><br />
            <p className='title_privacy'><b>Information about Particular Services </b></p>
            <p>Please note that the descriptions below concerning particular services may not apply
              to all services, sites, or mobile applications provided by Istishartak.</p>
            <br />
            <h3>
              <b>Analytics </b>
            </h3>
            <p>
              The services contained in this section enable us to monitor and analyze web traffic and
              can be used to keep track of User behavior.
              Google Analytics (Google Inc.)
              Google Analytics is a web analysis service provided by Google Inc. (“<b>Google</b>”). Google
              utilizes the Data collected to track and examine the use of this Application, to prepare
              reports on its activities and share them with other Google services.
              Google may use the Data collected to contextualize and personalize the ads of its own
              advertising network.
              Personal Data collected: Cookies and Usage data.
              Place of processing: US – Google Privacy Policy – Google Opt Out
            </p><br />
            <h3><b>Analytics collected directly (This Website)</b> </h3>
            <p>
              This Website uses an internal analytics system that does not involve third parties.
              Personal Data collected: Cookies and Usage Data.
              Google Tag Manager (Google Inc.)
              Google Tag Manager is an analytics service provided by Google Inc.
              Personal Data collected: Cookies and Usage data.
              Place of processing: US – Google Tag Manager Privacy Policy
            </p><br />
            <h3><b>Infrastructure monitoring </b></h3>
            <p>
              This type of service allows this Website to monitor the use and behavior of its
              components so its performance, operation, maintenance and troubleshooting can be
              improved.
              Which Personal Data are processed depends on the characteristics and mode of
              implementation of these services, whose function is to filter the activities of this
              Website
            </p>
            <p><b>Managing contacts and sending messages  </b></p>
            <p>
              This type of service makes it possible to manage a database of email contacts, phone
              contacts or any other contact information to communicate with the User.
              These services may also collect data concerning the date and time when the message
              was viewed by the User, as well as when the User interacted with it, such as by clicking
              on links included in the message.
            </p><br />
            <p><b> Interaction with external social networks and platforms </b></p>
            <p>
              This type of service allows interaction with social networks or other external platforms
              directly from the pages of this Application.
              The interaction and information obtained through this Application are always subject to
              the User’s privacy settings for each social network.
              This type of service might still collect traffic data for the pages where the service is
              installed, even when Users do not use it.
            </p><br />
            <p><b>User database management  </b></p>
            <p>This type of services allows Istishartak to build user profiles by starting from an email
              address, a personal name, or other information that the User provides to this
              Application, as well as to track User activities through analytics features. This Personal
              Data may also be matched with publicly available information about the User (such as
              social networks’ profiles) and used to build private profiles that Istishartak can display
              and use for improving this Application.
              Some of these services may also enable the sending of timed messages to the User,
              such as emails based on specific actions performed on this Application.
              Personal Data collected: email address and various types of Data as specified in the
              privacy policy of the service.
              Place of processing: US</p>
            <br />
            <p><b>Heat mapping and session recording  </b></p>
            <p>Heat Mapping services are used to display the areas of a page where Users most
              frequently move the mouse or click. This shows where the points of interest are. These
              services make it possible to monitor and analyze web traffic and keep track of User
              behavior.
              Some of these services may record sessions and make them available for later visual
              playback</p><br />
            <p><b> Contacting the User </b></p><br />
            <p><b>Contact form (this Website) </b></p>
            <p>
              By filling in any contact form with their Data, the User authorizes this Website to use
              these details to reply to requests for information, quotes or any other kind of request as
              indicated by the form’s header.
              Personal Data collected: various types of Data.
            </p>
            <p><b>   System logs and maintenance </b></p>
            <p>
              For operation and maintenance purposes, this Website and any third-party services
              may collect files that record interaction with this Website (System logs) use other
              Personal Data (such as the IP Address) for this purpose. Logging data may be
              collected in order to assist with troubleshooting crashes and other issues.
            </p><br />
            <p><b>  Web Beacons </b></p>
            <p>
              A web beacon (also referred to as clear gif, pixel tag or single-pixel gif) is a transparent
              graphic image used in tandem with cookies that enables us to record a user’s actions.
              Istishartak uses web beacons to count users who have visited certain pages, verify
              system and server integrity and for similar statistical measures. Istishartak may also
              use pixel tags in HTML-based emails sent to its users to track which emails are opened
              by recipients.
            </p><br />
            <p><b>  Data Retention  </b></p>
            <p>
              Istishartak retains personal information, subject to this Policy, only for as long as
              necessary for the purposes for which the data was collected and processed.

              Data collected for the provision of Services is retained for the longer of as needed to
              provide Services; as specified in a relevant agreement (e.g., with your Plan); or as
              otherwise required, including by applicable law or regulation.
            </p><br />
            <p className='title_privacy'><b>  Additional Information for EU / EEC Users  </b></p>
            <p>
              The disclosures in this section are only applicable to individuals in the European
              Economic Area, Switzerland, and the United Kingdom. This part of the document
              integrates with and supplements the information contained in the rest of the Privacy
              Policy
            </p><br />
            <p><b>  Data Is required to provide services  </b></p>
            <p>
              Unless otherwise specified, all Personal Data (as defined under the GDPR) requested is
              mandatory and your choice to not provide such Personal Data may make it impossible
              to provide services to you. In cases where we have made clear that some Personal
              Data is not mandatory, you are free not to communicate this Personal Data without any
              consequences on the availability or the functioning of the service. If you are uncertain
              about which Personal Data is mandatory then you are welcome to contact Istishartak
              at the contact details below under “Contact Us”.
            </p><nr />
            <p><b> Additional information about your Personal Data   </b></p>
            <p>
              In addition to the information contained in this privacy policy, upon your request we
              may provide you with additional and contextual information concerning particular
              services or the collection and processing of Personal Data
            </p><br />
            <p><b> Your GDPR rights   </b></p>
            <p>
              Solely to the extent applicable to us, if you are subject to the GDPR, you may have
              certain rights and protections about the collection, sharing, and use of your Personal
              Data including as follows:
            </p><br />
            <ul>
              <li>
             Right to Access Your Personal Data: You can ask us for a copy of the Personal Data
                we have about you.
              </li>
              <li>
                Right to Rectification/Correction: You can also ask us to change, correct, or update
                your Personal Data in certain cases, especially if it is inaccurate.
              </li>
              <li>
                Right to Erasure/Right to be Forgotten: You can ask us to stop using or erase all or
                some of your Personal Data (if we have no legal right to keep using it).
              </li>
              <li>
               Right to Data Portability: You can ask us for a copy of the Personal Data you
                provided to us in a commonly used and machine-readable format.
              </li>
              <li>

                Right to Object or Restrict Processing: You can object to or ask us to restrict
                processing under certain circumstances.
              </li>
            </ul>
            <p>
              Requests should be sent to the Data Controller via the contact details below under
              “Contact Us”
            </p><br/>
            <p><b> Additional information regarding methods of processing   </b></p>
<p>
We take security measures to prevent unauthorized access, disclosure, modification, or
unauthorized destruction of the Personal Data. The Personal Data processing is carried
out using computers and/or IT enabled tools, following organizational procedures and
modes strictly related to the purposes indicated. In addition to us, in some cases, the
Personal Data may be accessible to certain types of persons in charge, involved with 
the operation of this Website (administration, sales, marketing, legal, system
administration) or external parties (such as third-party technical service providers, mail
carriers, hosting providers, IT companies, communications agencies) appointed, if
necessary, as Data Processors by us. If applicable, this list may be requested and by a
GDPR-covered Person from us at any time.
</p><br/>
<p><b>    Legal basis for processing </b></p>
<p>
We may process Personal Data relating to Users if one of the following applies:
</p><br/>
<ul>
  <li>
  Users or their agents (including group sponsors and employers) have given their
consent for one or more specific purposes. Note: Under some legislations we may be
allowed to process Personal Data until the User objects to such processing (“optout”), without having to rely on consent or any other of the following legal bases;
  </li>
  <li>
  provision of Personal Data is necessary for the performance of an agreement with the
User or an authorized agent of the User (such as a group sponsor or employer) and/
or for any pre contractual obligations thereof;
  </li>
  <li>
  processing is necessary for compliance with a legal obligation to which we are
subject;
  </li>
  <li>
  • processing is related to a task that is carried out in the public interest or in the
exercise of official authority vested in us;
  </li>
  <li>
  processing is necessary for the purposes of the legitimate interests pursued by us or
by a third party.
  </li>
</ul>
<p>
In any case, we will gladly help to clarify the specific legal basis that applies to the
processing, and in particular whether the provision of Personal Data is a statutory or
contractual requirement, or a requirement necessary to enter into a contract.
</p><br/>
<p><b> Place of processing   </b></p>
<p>
Personal Data is processed at our operating offices, in data centers located in the
United States and in any other places where the parties involved in the processing are
located. The United States has different (and sometimes lesser) privacy protections
than other jurisdictions. By providing Personal Data, using this website, using mobile
applications provided by us, or requesting services, you consent to the transfer of your
Personal Data to the United States and the processing of such Personal Data in the
United States.
</p><br/>
<p><b>   Retention time </b></p>
<p>
Personal Data shall be processed and stored as noted above under Data Retention.
Where Personal Data is processed subject to the General Data Protection Regulation,
such Personal Data collected for the purposes of our legitimate interests shall be
retained as long as needed to fulfill such purposes, including but not limited to
retention of records of completed services as required by law, regulation and
healthcare practice and for the other reasons described in this policy. 

Users may find specific information regarding the legitimate interests pursued by us
within the relevant sections of this document or by contacting us at the contact details
below under “Contact Us”. 

Furthermore, we may be obliged to retain Personal Data for a longer period whenever
required to do so for the performance of a legal obligation (including but not limited to
retention of records of healthcare services performed or recommended) or upon order
of an authority.
</p><br/>
<p><b>Purposes of processing</b><br/>
Personal Data about you is collected to allow us to provide services to you, as well as
for the following purposes: Analytics, Remarketing and behavioral targeting, Interaction
with external social networks and platforms, Managing contacts and sending
messages, User database management, Heat mapping session recording, Content
commenting, Displaying content from external platforms, Content performance and
features testing (A/B testing), Generation models of medical and clinical conditions,
Generation models of physician and clinical performance, Infrastructure monitoring and
Contacting the User.
<b>Information not contained in this policy</b><br/>
More details concerning the collection or processing of Personal Data may be
requested from the Data Controller at any time. Please see the contact information
below under “Contact Us”.<br/><br/>
<b>Data Protection Officer</b><br/>
The Data Protection Officer shall be the HIPAA Privacy Officer.
<b>Legal Basis</b><br/>
This privacy statement has been prepared based on provisions of multiple legislations,
including Art. 13/14 of Regulation (EU) 2016/679 (General Data Protection Regulation
or “GDPR”).<br/><br/>
<b>Additional Information for California Consumers</b>
This part of the document integrates with and supplements the information contained
in the rest of the Privacy Policy, and applies to any personal information processed by
Istishartak of Users who are consumers, residing in the state of California, United
States of America, and subject to The California Consumer Privacy Act of 2018. For
such consumers, these provisions supersede any other possibly divergent or
conflicting provisions contained in the Privacy Policy.</p>



<p>
This section of the Policy uses the term “<b>personal information</b>“ as it is defined in
CCPA.<br/><br/>
<b>Categories of personal information collected, disclosed or sold</b><br/>
Please refer to the list above under “What information do we collect from users and
how is it used?”<br/><br/>
<b>How we use the information we collect: sharing and disclosing of your personal</b><br/>
information with third parties for a business purpose
We may disclose the personal information we collect about you to a third party for
business purposes. In this case, we enter a written agreement with such third party
that requires the recipient to both keep the personal information confidential and not
use it for any purpose(s) other than those necessary for the performance of the
agreement.
We may also disclose your personal information to third parties when you explicitly ask
or authorize us to do so, in order to provide you with our Service.
To find out more about the purposes of processing, please refer to the relevant section
of this document.<br/><br/>
<b>Your right to opt out of the sale of personal information</b><br/>
We do not sell Member information, including lists of Members or any personal
information of Members otherwise.
To the extent our website uses third party cookies and these cookies collect personal
information, such collection may in some cases be considered a “sale” of personal
information for purposes of the CCPA. 

You have the right to opt out of the sale of your personal information. This means that
whenever you request us to stop selling your data, we will abide by your request. 

You can opt out of such sales. Such requests can be made freely, at any time, without
submitting any verifiable request by following the below instructions.<br/><br/>
<b>Instructions to opt out of the sale of personal information</b><br/>
On our Sites are cookie banners with a button labeled “Do not sell my data.” This
button was added in order to comply with the CCPA, and it offers information about
our use of these third-party cookies, and provides consumers an opportunity to optout of certain of these cookies. 

</p>
<p> 
Should you wish to opt-out of these cookies, please click on the “Do not sell my data”
button on the banner that pops up. This will result in the placement of an opt-out
cookie on your device browser. 

If you’d like to know more, you can contact us at the contact details below under
“Contact Us”.<br/><br/>
<b>What are the purposes for which we use your personal information?</b><br/>
We may use your personal information to allow us to render services to you, the
operational functioning of the Sites and features thereof (all together, “business
purposes”). 

We may also use your personal information for other reasons such as for commercial
purposes as well as for complying with the law and defending our rights before the
competent authorities where our rights and interests are threatened or we suffer an
actual damage.
<b>Your California privacy rights</b><br/><br/>

<b>The right to know and to portability </b><br/>
</p>
<p><b> You have the right to request that we disclose to you:   </b></p>
<ul>
  <li>
the categories and sources of the personal information that we collect about you, the
purposes for which we use your information and with whom such information is
shared;
  </li>
  <li>
  in case of sale of personal information or disclosure for a business purpose, two
separate lists where we disclose:
  </li>
  <li>
  for sales, the personal information categories purchased by each category of
recipient; and
  </li>
  <li>
  for disclosures for a business purpose, the personal information categories
obtained by each category of recipient.
  </li>
  <li>
  The disclosure described above will be limited to the personal information collected
or used over the past 12 months.
  </li>
</ul>
<p>
If we deliver our response electronically, the information enclosed will be “portable”, i.e.
delivered in an easily usable format to enable you to transmit the information to another
entity without hindrance – provided that this is technically feasible.
</p><br/>
<p><b>The right to request the deletion of your personal information</b><br/>
You have the right to request that we delete any of your personal information, subject
to exceptions set forth by the law (such as, including but not limited to, where the
information is used to identify and repair errors on this Website, to detect security
incidents and protect against fraudulent or illegal activities, to exercise certain rights 
etc.). For example, we cannot delete information that explains medical treatment
decisions, as we are legally obligated to keep such information.
If no legal exception applies, as a result of exercising your right, we will delete your
personal information and direct any of our service providers to do so.<br/><br/>
<b>How to exercise your privacy rights </b></p>
<p>
<b>How to make a request</b><br/>
At Istishartak, member and consumer privacy are very important to us. As a result,
before we process any requests we first must verify your identity and ensure we have
enough information. To exercise rights described throughout the Privacy Policy, you
must submit to us a “verifiable request by:
</p>
<ul>
  <li>
  providing sufficient information that allows us to reasonably verify you are the person
about whom we collected personal information or an authorized representative; and
  </li>
  <li>
  describing your request with sufficient detail that allows us to properly understand,
evaluate, and respond to it.
  </li>
  <p>
  With that in mind, at this time:
  </p>
  <li>
  Requests from Members are considered verified if submitted using our Services. If
you are an existing Member, please submit your request either by calling us and
confirming your identity, or by submitting via the application (e.g., using the chat
service, or via an open case). If, however, there is indication or suspicion of fraud or
other malicious activity on the Member’s account, we may suspend reliance on these
verification methods and defer to other methods to confirm authenticity. 

  </li>
  <li>
 You may alternatively contact us via the information provided below under “Contact
Us”. However, please note that emailed requests are not considered verified, and we
may request additional information from you (that we would already have in our
records) in order to confirm your identity. 

  </li>
  <li>
 We may also recognize verified requests submitted on an individual’s behalf by
“Authorized Agents”. To be valid, we must receive from the Agent a signed
authorization from the individual on whose behalf the Agent is acting. We will also
need to verify the authorization with the consumer.
  </li>
  <li>
For “household” requests subject to the CCPA, we will need to verify each household
Member’s individual identity and current status as household members
  </li>
  <li>
  And we will not process any requests of children under 18 years of age without
verifiable consents from their parents or legal guardians. 

  </li>
  <li>
  We will not respond to or process any unverified request. This is all done to protect
your confidentiality and ensure, to the best of our ability, that we only process such
requests for the right persons. 

  </li>
  <p>
  You can submit a maximum number of 2 requests over a period of 12 months.
If you choose to exercise your privacy rights, you will not receive discriminatory
treatment or a lesser degree of service from us.
  </p>
</ul>
<p>
<b>How and when we are expected to handle your request</b><br/>
Unless otherwise specified in this Policy, the following applies for timing and
expectations around how and when we will respond to your requests. If our response
to a privacy request is restricted by an agreement between us and your Employer, we
will process your requests in accordance with that agreement and related
authorization. Otherwise, the following applies. 

To the best of our ability, we will confirm receipt of your verifiable request within 10
days and provide information about how we will process your request.
For CCPA-related requests, we will respond to your request within 45 days of its
receipt, and for all other requests within 30 days of receipt. Should we need more time,
we will explain to you the reasons why, and how much more time we need. In this
regard, please note that we may take up to 90 days to fulfill your request.
Our CCPA disclosures will cover the preceding 12 month period.
Should we deny your request, we will explain to you the reasons behind our denial.
We do not charge a fee to process or respond to your verifiable request unless such
request is manifestly unfounded or excessive. In such cases, we may charge a
reasonable fee, or refuse to act on the request. In either case, we will communicate our
choices and explain the reasons behind it.<br/><br/>
<b>Contact Us</b><br/>
If you have questions, want to submit a request, have concerns about this Policy or
Istishartak’s Privacy Practices, or would like to report a violation, see the below contact
options:
You may contact us by mail at:
<br/>
Istishartak LLC
<br/>
c/o Privacy Officer
<br/>
16192 Coastal Highway
<br/>
Lewes, Delaware 19958
<br/>
USA
<br/>
You may email us at privacy@istishartak.com
 <br/><br/>

If you are registered, you may submit a message through the once logged-in.<br/><br/>
Or you may call our general support line at (401) 263-1839
</p>
          </div>

        </div>
      </div>
      <Footer />
    </div>

  )
}

export default PrivacyPolicy