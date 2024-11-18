import { Header } from "../../components/index.js"

export default function Privacy() {
  return (
    <div className="w-full  mx-auto max-w-[1200px] px-2 ">
      <Header />
      <div class="max-w-5xl mx-auto px-4 py-8">
        <h1 class="text-3xl font-bold text-gray-800 mb-6">
          Privacy Policy for CASA
        </h1>
        <p class="text-gray-600 mb-4">
          At CASA, we are committed to protecting your privacy. This Privacy
          Policy outlines how we collect, use, store, and protect your personal
          information when you use our platform.
        </p>

        <div class="mb-6">
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">
            1. Information We Collect
          </h2>
          <p class="text-gray-600 mb-2">
            We may collect the following types of information:
          </p>
          <ul class="list-disc pl-5 space-y-2 text-gray-600">
            <li>
              <strong>Personal Information:</strong> Name, phone number,
              shipping address, payment details, and other contact information.
            </li>
            <li>
              <strong>Browsing Data:</strong> Your interactions on the platform,
              such as products viewed, pages visited, and time spent on the app
              or website.
            </li>
            <li>
              <strong>Device Information:</strong> IP address, browser type,
              device type, and operating system.
            </li>
            <li>
              <strong>Cookies and Tracking Technologies:</strong> We use cookies
              to improve your experience and analyze platform performance.
            </li>
          </ul>
        </div>

        <div class="mb-6">
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">
            2. How We Use Your Information
          </h2>
          <ul class="list-disc pl-5 space-y-2 text-gray-600">
            <li>
              To provide, personalize, and improve your shopping experience.
            </li>
            <li>
              To process transactions, send order confirmations, and handle
              deliveries.
            </li>
            <li>To offer product recommendations based on your behavior.</li>
            <li>
              To communicate promotional offers, updates, and news (only with
              your consent).
            </li>
            <li>To prevent fraud and ensure platform security.</li>
          </ul>
        </div>

        <div class="mb-6">
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">
            3. How We Share Your Information
          </h2>
          <p class="text-gray-600 mb-2">
            We do not sell your personal data to third parties. However, we may
            share your information with:
          </p>
          <ul class="list-disc pl-5 space-y-2 text-gray-600">
            <li>
              <strong>Service Providers:</strong> For payment processing,
              delivery, and marketing services.
            </li>
            <li>
              <strong>Legal Authorities:</strong> When required by law or to
              protect CASA’s rights and safety.
            </li>
            <li>
              <strong>Business Partners:</strong> If you engage with third-party
              brands or products showcased on CASA.
            </li>
          </ul>
        </div>

        <div class="mb-6">
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">
            4. Your Data Rights
          </h2>
          <p class="text-gray-600 mb-2">
            Depending on your location, you may have the following rights:
          </p>
          <ul class="list-disc pl-5 space-y-2 text-gray-600">
            <li>
              <strong>Access:</strong> Request a copy of the data we hold about
              you.
            </li>
            <li>
              <strong>Correction:</strong> Request corrections to inaccurate or
              incomplete information.
            </li>
            <li>
              <strong>Deletion:</strong> Request the deletion of your data,
              subject to legal obligations.
            </li>
            <li>
              <strong>Opt-Out:</strong> Unsubscribe from marketing emails and
              opt out of data tracking.
            </li>
          </ul>
          <p class="text-gray-600">
            To exercise these rights, please reach out to us through the contact
            options available on our platform.
          </p>
        </div>

        <div class="mb-6">
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">
            5. Data Storage and Security
          </h2>
          <p class="text-gray-600 mb-2">
            We take appropriate technical and organizational measures to secure
            your data. However, no system is completely secure, and we cannot
            guarantee absolute data protection.
          </p>
          <p class="text-gray-600">
            Data Retention: We retain personal information as long as necessary
            for the purposes outlined in this policy or as required by law.
          </p>
        </div>

        <div class="mb-6">
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">
            6. Cookies and Tracking Technologies
          </h2>
          <ul class="list-disc pl-5 space-y-2 text-gray-600">
            <li>Improve your user experience.</li>
            <li>Analyze website traffic and usage patterns.</li>
            <li>
              Show personalized recommendations and advertisements (if
              applicable).
            </li>
          </ul>
          <p class="text-gray-600">
            You can manage your cookie preferences through your browser
            settings.
          </p>
        </div>

        <div class="mb-6">
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">
            7. Third-Party Links
          </h2>
          <p class="text-gray-600">
            Our platform may contain links to third-party websites. We are not
            responsible for their privacy practices, so we encourage you to
            review their policies when visiting external sites.
          </p>
        </div>

        <div class="mb-6">
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">
            8. Children’s Privacy
          </h2>
          <p class="text-gray-600">
            CASA is not intended for children under the age of 13. We do not
            knowingly collect personal information from children. If we discover
            that we have received information from a child, we will delete it
            promptly.
          </p>
        </div>

        <div class="mb-6">
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">
            9. Changes to This Privacy Policy
          </h2>
          <p class="text-gray-600">
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page, and we will notify you if the changes
            are significant.
          </p>
        </div>

        <div>
          <h2 class="text-2xl font-semibold text-gray-800 mb-4">
            10. Contact Us
          </h2>
          <p class="text-gray-600">
            For any questions or concerns about our privacy practices, please
            use the contact options available on our platform.
          </p>
        </div>
      </div>
    </div>
  );
}
