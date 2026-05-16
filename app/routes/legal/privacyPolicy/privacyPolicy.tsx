import { Nav } from "~/components/nav/nav";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="flex flex-col gap-2">
      <h2 className="text-xl font-semibold">{title}</h2>
      {children}
    </section>
  );
}

export default function PrivacyPolicy() {
  return (
    <div className="relative flex flex-col flex-1 overflow-hidden bg-neutral-100">
      <header className="relative z-10 flex flex-col items-center pt-6 gap-4 pb-4">
        <Nav />
      </header>
      <div className="relative z-10 flex flex-col items-center overflow-y-auto px-6 pb-16 pt-8">
        <div className="max-w-2xl w-full flex flex-col gap-8 text-neutral-800">
          <div className="flex flex-col items-center gap-2 pb-4">
            <h1 className="text-5xl text-center text-black" style={{ fontFamily: "'Inria Serif', serif" }}>Privacy Policy</h1>
            <p className="text-sm text-neutral-500">Last updated: May 16, 2026</p>
          </div>

          <Section title="Overview">
            <p className="text-sm leading-relaxed">
              Duck Organization ("we", "us", or "our") is committed to protecting your privacy. This policy explains what information we collect, how we use it, and your rights around it. By using our services, you agree to the practices described here.
            </p>
          </Section>

          <Section title="Information We Collect">
            <p className="text-sm leading-relaxed">We may collect the following types of information:</p>
            <ul className="text-sm leading-relaxed list-disc list-inside flex flex-col gap-1 pl-2">
              <li><span className="font-medium">Usage data</span> pages visited, features used, and time spent on the site.</li>
              <li><span className="font-medium">Discord data</span> if you interact with QuestBot, we may store your Discord user ID and activity within the bot.</li>
              <li><span className="font-medium">Feedback</span> any information you voluntarily submit through our feedback forms.</li>
            </ul>
            <p className="text-sm leading-relaxed">We do not collect sensitive personal data such as payment information, addresses, or government IDs.</p>
          </Section>

          <Section title="Cookies">
            <p className="text-sm leading-relaxed">
              We use cookies to remember your preferences and improve your experience. You can accept or decline non-essential cookies via the cookie banner when you first visit the site. Essential cookies required for the site to function cannot be disabled.
            </p>
          </Section>

          <Section title="How We Use Your Information">
            <ul className="text-sm leading-relaxed list-disc list-inside flex flex-col gap-1 pl-2">
              <li>To operate and improve our services</li>
              <li>To respond to feedback and support requests</li>
              <li>To understand how our services are being used</li>
            </ul>
            <p className="text-sm leading-relaxed">We do not sell your data to third parties.</p>
          </Section>

          <Section title="Third-Party Services">
            <p className="text-sm leading-relaxed">
              Our services may link to or integrate with third-party platforms such as Discord. These services have their own privacy policies, and we encourage you to review them. We are not responsible for the practices of third-party services.
            </p>
          </Section>

          <Section title="Data Retention">
            <p className="text-sm leading-relaxed">
              We retain data only as long as necessary to provide our services or as required by law. You can request deletion of your data at any time by contacting us.
            </p>
          </Section>

          <Section title="Your Rights">
            <p className="text-sm leading-relaxed">
              Depending on your location, you may have the right to access, correct, or delete the personal data we hold about you. To exercise any of these rights, please reach out to us directly.
            </p>
          </Section>

          <Section title="Contact">
            <p className="text-sm leading-relaxed">
              If you have any questions about this privacy policy, you can contact us at{" "}
              <a href="mailto:privacy@duckorg.net" className="underline hover:text-black transition-colors">
                privacy@duckorg.net
              </a>.
            </p>
          </Section>
        </div>
      </div>
    </div>
  );
}
