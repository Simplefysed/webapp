import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Simplefysed Solutions',
  description: 'Privacy Policy of Simplefysed Solutions - Information about how we handle your personal data according to GDPR.',
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl text-primary-100">
            Information about how we handle your personal data
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-secondary-900 mb-6">1. Data Controller</h2>
            <div className="bg-secondary-50 p-6 rounded-lg">
              <p className="mb-2"><strong>Simplefysed Solutions</strong></p>
              <p className="mb-2">Thuringia, Germany</p>
              <p className="mb-2">Email: info@simplefysed.com</p>
              <p>Phone: Available on request</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-secondary-900 mb-6">2. General Information</h2>
            <p className="text-secondary-700 mb-4">
              The following information provides a simple overview of what happens to your personal data when 
              you visit this website. Personal data is any data that can be used to personally identify you. 
              Detailed information on data protection can be found in our privacy policy listed below this text.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-secondary-900 mb-6">3. Data Collection on This Website</h2>
            
            <h3 className="text-xl font-semibold text-secondary-800 mb-4">Who is responsible for data collection on this website?</h3>
            <p className="text-secondary-700 mb-6">
              Data processing on this website is carried out by the website operator. You can find the contact 
              details in the "Data Controller" section of this privacy policy.
            </p>

            <h3 className="text-xl font-semibold text-secondary-800 mb-4">How do we collect your data?</h3>
            <p className="text-secondary-700 mb-4">
              Your data is collected when you provide it to us. This could be data you enter into a contact form, 
              for example.
            </p>
            <p className="text-secondary-700 mb-6">
              Other data is collected automatically or with your consent when you visit the website through our 
              IT systems. This is primarily technical data (e.g. internet browser, operating system, or time 
              of page access).
            </p>

            <h3 className="text-xl font-semibold text-secondary-800 mb-4">What do we use your data for?</h3>
            <p className="text-secondary-700 mb-6">
              Some data is collected to ensure error-free provision of the website. Other data may be used 
              to analyze your user behavior.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-secondary-900 mb-6">4. Contact Form</h2>
            <p className="text-secondary-700 mb-4">
              When you send us inquiries via the contact form, your details from the inquiry form, 
              including the contact data you provide, will be stored by us for the purpose of processing 
              the inquiry and in case of follow-up questions.
            </p>
            <p className="text-secondary-700 mb-4">
              The processing of this data is based on Art. 6 (1) lit. b GDPR, provided your inquiry is 
              related to the fulfillment of a contract or is necessary for the implementation of 
              pre-contractual measures.
            </p>
            <p className="text-secondary-700 mb-6">
              We do not share this data without your consent.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-secondary-900 mb-6">5. Server Log Files</h2>
            <p className="text-secondary-700 mb-4">
              The provider of the pages automatically collects and stores information in so-called 
              server log files, which your browser automatically transmits to us. These are:
            </p>
            <ul className="list-disc ml-6 text-secondary-700 mb-4">
              <li>Browser type and browser version</li>
              <li>Operating system used</li>
              <li>Referrer URL</li>
              <li>Hostname of the accessing computer</li>
              <li>Time of the server request</li>
              <li>IP address</li>
            </ul>
            <p className="text-secondary-700 mb-6">
              This data is not combined with other data sources. The collection of this data is based 
              on Art. 6 (1) lit. f GDPR.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-secondary-900 mb-6">6. Your Rights</h2>
            <p className="text-secondary-700 mb-4">
              You have the right at any time to receive information free of charge about the origin, 
              recipients and purpose of your stored personal data. You also have the right to request 
              the correction or deletion of this data.
            </p>
            <p className="text-secondary-700 mb-4">
              For this and other questions on the subject of data protection, you can contact us at any 
              time using the contact details provided in this privacy policy.
            </p>
            <div className="bg-primary-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-secondary-800 mb-3">Your Rights in Detail:</h3>
              <ul className="list-disc ml-6 text-secondary-700 space-y-1">
                <li>Right to information (Art. 15 GDPR)</li>
                <li>Right to rectification (Art. 16 GDPR)</li>
                <li>Right to erasure (Art. 17 GDPR)</li>
                <li>Right to restriction of processing (Art. 18 GDPR)</li>
                <li>Right to data portability (Art. 20 GDPR)</li>
                <li>Right to object (Art. 21 GDPR)</li>
                <li>Right to lodge a complaint with a supervisory authority (Art. 77 GDPR)</li>
              </ul>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-secondary-900 mb-6">7. Hosting</h2>
            <p className="text-secondary-700 mb-4">
              We host the content of our website with an external service provider. The personal data 
              collected on this website is stored on the host's servers.
            </p>
            <p className="text-secondary-700 mb-4">
              The use of the host is for the purpose of contract fulfillment towards our potential and 
              existing customers (Art. 6 (1) lit. b GDPR) and in the interest of secure, fast and 
              efficient provision of our online offering by a professional provider (Art. 6 (1) lit. f GDPR).
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-secondary-900 mb-6">8. External Tools and Services</h2>
            
            <h3 className="text-xl font-semibold text-secondary-800 mb-4">Make.com (formerly Integromat)</h3>
            <p className="text-secondary-700 mb-4">
              We use the Make.com service to process contact inquiries. When you use our contact form, 
              your data is transmitted to Make.com and processed there.
            </p>
            <p className="text-secondary-700 mb-4">
              Make.com is GDPR-compliant and processes your data exclusively for the purpose of 
              processing contact inquiries. The legal basis is Art. 6 (1) lit. b GDPR.
            </p>
            <p className="text-secondary-700 mb-6">
              For more information, see Make.com's privacy policy: 
              <a href="https://www.make.com/en/privacy-policy" target="_blank" rel="noopener noreferrer" 
                 className="text-primary-600 hover:text-primary-700 underline ml-1">
                https://www.make.com/en/privacy-policy
              </a>
            </p>

            <h3 className="text-xl font-semibold text-secondary-800 mb-4">Cal.com</h3>
            <p className="text-secondary-700 mb-4">
              We use the Cal.com service for appointment booking. When using this service, personal data 
              such as name, email address and appointment preferences are transmitted to Cal.com.
            </p>
            <p className="text-secondary-700 mb-6">
              For more information, see Cal.com's privacy policy: 
              <a href="https://cal.com/privacy" target="_blank" rel="noopener noreferrer" 
                 className="text-primary-600 hover:text-primary-700 underline ml-1">
                https://cal.com/privacy
              </a>
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-secondary-900 mb-6">9. Changes to This Privacy Policy</h2>
            <p className="text-secondary-700 mb-4">
              We reserve the right to adapt this privacy policy so that it always complies with current 
              legal requirements or to implement changes to our services in the privacy policy.
            </p>
            <p className="text-secondary-700">
              The new privacy policy will then apply to your next visit.
            </p>
          </section>

          <section className="mb-12">
            <div className="bg-secondary-100 p-6 rounded-lg">
              <p className="text-sm text-secondary-600 mb-2">
                <strong>Status of this Privacy Policy:</strong> January 2025
              </p>
              <p className="text-sm text-secondary-600">
                This privacy policy was created in accordance with the General Data Protection 
                Regulation (GDPR) and the Federal Data Protection Act (BDSG).
              </p>
            </div>
          </section>

        </div>
      </div>
    </div>
  )
}

