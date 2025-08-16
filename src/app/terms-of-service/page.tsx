import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | Simplefysed Solutions',
  description: 'Terms of Service of Simplefysed Solutions - Legal terms and conditions for using our services.',
}

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Terms of Service
          </h1>
          <p className="text-xl text-primary-100">
            Legal terms and conditions for using our services
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-secondary-900 mb-6">1. Service Provider</h2>
            <div className="bg-secondary-50 p-6 rounded-lg">
              <p className="mb-2"><strong>Simplefysed Solutions</strong></p>
              <p className="mb-2">Thuringia, Germany</p>
              <p className="mb-2">Email: info@simplefysed.com</p>
              <p>Phone: Available on request</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-secondary-900 mb-6">2. Scope of Application</h2>
            <p className="text-secondary-700 mb-4">
              These Terms of Service govern the use of our website and all services provided by 
              Simplefysed Solutions. By accessing our website or using our services, you agree to 
              be bound by these terms.
            </p>
            <p className="text-secondary-700 mb-4">
              These terms apply to all users, clients, and visitors of our website and services, 
              including but not limited to web application development, automation solutions, 
              and digital transformation consulting.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-secondary-900 mb-6">3. Services</h2>
            
            <h3 className="text-xl font-semibold text-secondary-800 mb-4">3.1 Service Description</h3>
            <p className="text-secondary-700 mb-4">
              Simplefysed Solutions provides the following services:
            </p>
            <ul className="list-disc ml-6 text-secondary-700 mb-6">
              <li>Custom web application development</li>
              <li>Process automation and optimization</li>
              <li>Digital transformation consulting</li>
              <li>AI and machine learning solutions</li>
              <li>System integration services</li>
              <li>Technical consulting and support</li>
            </ul>

            <h3 className="text-xl font-semibold text-secondary-800 mb-4">3.2 Service Delivery</h3>
            <p className="text-secondary-700 mb-4">
              All services are provided based on individual agreements and specifications. 
              Detailed project scope, timelines, and deliverables will be outlined in separate 
              service agreements or contracts.
            </p>
            <p className="text-secondary-700 mb-6">
              We reserve the right to modify or discontinue services with appropriate notice 
              to affected clients.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-secondary-900 mb-6">4. Client Obligations</h2>
            
            <h3 className="text-xl font-semibold text-secondary-800 mb-4">4.1 Cooperation</h3>
            <p className="text-secondary-700 mb-4">
              Clients are obligated to provide necessary cooperation, including but not limited to:
            </p>
            <ul className="list-disc ml-6 text-secondary-700 mb-6">
              <li>Providing accurate and complete information</li>
              <li>Timely feedback and approvals</li>
              <li>Access to necessary systems and data</li>
              <li>Designation of competent contact persons</li>
            </ul>

            <h3 className="text-xl font-semibold text-secondary-800 mb-4">4.2 Acceptable Use</h3>
            <p className="text-secondary-700 mb-6">
              Clients must use our services in compliance with applicable laws and regulations. 
              Any illegal, harmful, or unethical use of our services is strictly prohibited.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-secondary-900 mb-6">5. Intellectual Property</h2>
            
            <h3 className="text-xl font-semibold text-secondary-800 mb-4">5.1 Ownership</h3>
            <p className="text-secondary-700 mb-4">
              Unless otherwise agreed in writing, all intellectual property rights in work products 
              created by Simplefysed Solutions remain with the company until full payment is received.
            </p>
            <p className="text-secondary-700 mb-6">
              Upon full payment, clients receive the agreed-upon license or ownership rights 
              as specified in the individual service agreement.
            </p>

            <h3 className="text-xl font-semibold text-secondary-800 mb-4">5.2 Third-Party Rights</h3>
            <p className="text-secondary-700 mb-6">
              We respect third-party intellectual property rights and expect clients to do the same. 
              Clients are responsible for ensuring they have the right to use any materials, 
              content, or systems they provide to us.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-secondary-900 mb-6">6. Payment Terms</h2>
            
            <h3 className="text-xl font-semibold text-secondary-800 mb-4">6.1 Fees and Payment</h3>
            <p className="text-secondary-700 mb-4">
              All fees and payment terms are specified in individual service agreements. 
              Unless otherwise agreed, invoices are due within 30 days of issuance.
            </p>
            <p className="text-secondary-700 mb-6">
              Late payments may incur interest charges as permitted by applicable law.
            </p>

            <h3 className="text-xl font-semibold text-secondary-800 mb-4">6.2 Taxes</h3>
            <p className="text-secondary-700 mb-6">
              All prices are exclusive of applicable taxes, which will be added as required by law.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-secondary-900 mb-6">7. Liability and Warranties</h2>
            
            <h3 className="text-xl font-semibold text-secondary-800 mb-4">7.1 Limitation of Liability</h3>
            <p className="text-secondary-700 mb-4">
              Our liability is limited to the extent permitted by German law. In no event shall 
              our liability exceed the total amount paid by the client for the specific service 
              giving rise to the claim.
            </p>
            <p className="text-secondary-700 mb-6">
              We shall not be liable for indirect, consequential, or incidental damages, 
              including but not limited to loss of profits or business interruption.
            </p>

            <h3 className="text-xl font-semibold text-secondary-800 mb-4">7.2 Force Majeure</h3>
            <p className="text-secondary-700 mb-6">
              We shall not be liable for any failure or delay in performance due to circumstances 
              beyond our reasonable control, including but not limited to natural disasters, 
              government actions, or technical failures.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-secondary-900 mb-6">8. Confidentiality</h2>
            <p className="text-secondary-700 mb-4">
              We treat all client information as confidential and will not disclose it to third 
              parties without explicit consent, except as required by law or court order.
            </p>
            <p className="text-secondary-700 mb-6">
              This confidentiality obligation survives the termination of our business relationship.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-secondary-900 mb-6">9. Termination</h2>
            
            <h3 className="text-xl font-semibold text-secondary-800 mb-4">9.1 Termination Rights</h3>
            <p className="text-secondary-700 mb-4">
              Either party may terminate ongoing services with appropriate notice as specified 
              in the individual service agreement.
            </p>
            <p className="text-secondary-700 mb-6">
              We reserve the right to terminate services immediately in case of breach of these 
              terms or non-payment.
            </p>

            <h3 className="text-xl font-semibold text-secondary-800 mb-4">9.2 Effect of Termination</h3>
            <p className="text-secondary-700 mb-6">
              Upon termination, all outstanding payments become immediately due, and we will 
              provide completed work products as agreed upon.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-secondary-900 mb-6">10. Data Protection</h2>
            <p className="text-secondary-700 mb-4">
              We process personal data in accordance with the General Data Protection Regulation (GDPR) 
              and applicable German data protection laws.
            </p>
            <p className="text-secondary-700 mb-6">
              For detailed information about our data handling practices, please refer to our 
              <a href="/privacy-policy" className="text-primary-600 hover:text-primary-700 underline ml-1">
                Privacy Policy
              </a>.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-secondary-900 mb-6">11. Governing Law</h2>
            <p className="text-secondary-700 mb-4">
              These Terms of Service are governed by German law. Any disputes arising from or 
              in connection with these terms shall be resolved by German courts.
            </p>
            <p className="text-secondary-700 mb-6">
              The place of jurisdiction is Thuringia, Germany, unless mandatory consumer protection 
              laws provide otherwise.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-secondary-900 mb-6">12. Changes to Terms</h2>
            <p className="text-secondary-700 mb-4">
              We reserve the right to modify these Terms of Service at any time. Changes will be 
              communicated through our website or direct notification to clients.
            </p>
            <p className="text-secondary-700 mb-6">
              Continued use of our services after changes constitutes acceptance of the modified terms.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-secondary-900 mb-6">13. Contact Information</h2>
            <p className="text-secondary-700 mb-4">
              For questions regarding these Terms of Service, please contact us:
            </p>
            <div className="bg-primary-50 p-6 rounded-lg">
              <p className="text-secondary-700 mb-2">
                <strong>Email:</strong> info@simplefysed.com
              </p>
              <p className="text-secondary-700 mb-2">
                <strong>Address:</strong> Thuringia, Germany
              </p>
              <p className="text-secondary-700">
                <strong>Phone:</strong> Available on request
              </p>
            </div>
          </section>

          <section className="mb-12">
            <div className="bg-secondary-100 p-6 rounded-lg">
              <p className="text-sm text-secondary-600 mb-2">
                <strong>Effective Date:</strong> January 2025
              </p>
              <p className="text-sm text-secondary-600">
                These Terms of Service were created in accordance with German commercial 
                law and consumer protection regulations.
              </p>
            </div>
          </section>

        </div>
      </div>
    </div>
  )
}

