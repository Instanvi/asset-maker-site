"use client"

import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Shield, Lock, Database, Eye, FileText, Scale, Mail } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[var(--foreground)]">
      <Header onBookDemo={() => {}} />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative pt-28 pb-12 lg:pt-36 lg:pb-16 bg-[var(--surface)] border-b border-[var(--border-custom)]">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--brand-primary-light)] text-[var(--brand-primary)] text-xs font-bold mb-2">
                <Shield className="h-3.5 w-3.5" />
                <span>Privacy & Data Protection</span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[var(--foreground)]">
                Privacy Policy
              </h1>
              
              <p className="text-base text-[var(--foreground-muted)] max-w-2xl mx-auto">
                Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 lg:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="prose prose-slate max-w-none">
              {/* Introduction */}
              <div className="mb-12">
                <p className="text-lg text-[var(--foreground)] leading-relaxed">
                  AssetMaster ("Provider," "we," "us," or "our") is committed to respecting the privacy rights and concerns of all users of our Service. This Privacy Policy explains our practices regarding the collection, use, storage, and disclosure of information about visitors to the Service.
                </p>
                <p className="text-base text-[var(--foreground-muted)] leading-relaxed mt-4">
                  The Service provides asset management solutions to help you create and maintain an inventory of assets, including information regarding business assets, equipment tracking, maintenance schedules, and compliance records. By using the Service, you consent to our collection, use, storage, and disclosure of information relating to you as set forth in this Privacy Policy.
                </p>
                <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                  <p className="text-sm text-amber-900">
                    <strong>Important:</strong> This Privacy Policy applies only to the Service and not to any other website or service that you may access from the Service, which may have their own data collection and use practices.
                  </p>
                </div>
              </div>

              {/* Section 1: Information We Collect */}
              <div className="mb-12 pb-8 border-b border-[var(--border-custom)]">
                <div className="flex items-start gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-[var(--brand-primary-light)] text-[var(--brand-primary)] shrink-0">
                    <Database className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-[var(--foreground)] mb-2">1. Information We Collect</h2>
                    <p className="text-sm text-[var(--foreground-muted)]">What data we gather and how</p>
                  </div>
                </div>

                <p className="text-base text-[var(--foreground)] mb-4">
                  AssetMaster does not collect personal information unless you voluntarily provide it to us. We collect certain types of information and ask for personal information in specific circumstances, such as when you create a user account.
                </p>

                <h3 className="text-lg font-bold text-[var(--foreground)] mt-6 mb-3">Information You Provide to Us</h3>
                <p className="text-base text-[var(--foreground-muted)] mb-3">
                  You may visit public areas of the Service without disclosing any personal information. However, to use certain features, you may provide personally identifiable information (PII) including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-base text-[var(--foreground-muted)] mb-4">
                  <li>Name, email address, mailing address, and phone number</li>
                  <li>Company information and job title</li>
                  <li>Asset inventory data and maintenance records</li>
                  <li>Payment and billing information</li>
                  <li>Account credentials and security preferences</li>
                </ul>

                <h3 className="text-lg font-bold text-[var(--foreground)] mt-6 mb-3">Cookies and Tracking Technologies</h3>
                <p className="text-base text-[var(--foreground-muted)] mb-3">
                  We use cookies to provide targeted information and make your experience more convenient. Cookies are small data files stored on your device that help us:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-base text-[var(--foreground-muted)] mb-4">
                  <li>Remember your login credentials and preferences</li>
                  <li>Analyze site usage and improve our services</li>
                  <li>Customize content based on your interests</li>
                </ul>
                <p className="text-sm text-[var(--foreground-muted)] italic">
                  You can configure your browser to block cookies or notify you when cookies are sent. Most cookies are session cookies that are automatically deleted after your session ends. You can still use the Service if you disable cookies, though some features may be limited.
                </p>

                <h3 className="text-lg font-bold text-[var(--foreground)] mt-6 mb-3">Log Information</h3>
                <p className="text-base text-[var(--foreground-muted)] mb-3">
                  Our servers automatically track certain information, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-base text-[var(--foreground-muted)]">
                  <li>URLs you visit before and after using our Service</li>
                  <li>Browser type and IP address</li>
                  <li>Number of visits and page views</li>
                  <li>Device information and operating system</li>
                </ul>
                <p className="text-sm text-[var(--foreground-muted)] mt-3">
                  This information is used for internal purposes to provide better services and does not contain personal information that can identify you individually.
                </p>

                <h3 className="text-lg font-bold text-[var(--foreground)] mt-6 mb-3">Usage Activity</h3>
                <p className="text-base text-[var(--foreground-muted)]">
                  We track your usage history, including search queries and content viewed, to personalize your experience and provide easy access to past searches and relevant content.
                </p>
              </div>

              {/* Section 2: How We Use Your Information */}
              <div className="mb-12 pb-8 border-b border-[var(--border-custom)]">
                <div className="flex items-start gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-[var(--brand-primary-light)] text-[var(--brand-primary)] shrink-0">
                    <Eye className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-[var(--foreground)] mb-2">2. How We Use Your Information</h2>
                    <p className="text-sm text-[var(--foreground-muted)]">Our data usage practices</p>
                  </div>
                </div>

                <p className="text-base text-[var(--foreground-muted)] mb-4">
                  We use the personal information you provide to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-base text-[var(--foreground-muted)]">
                  <li>Create and maintain your user account and profile</li>
                  <li>Provide, customize, and improve the Service</li>
                  <li>Process transactions and send billing notifications</li>
                  <li>Send important service updates and security alerts</li>
                  <li>Enable communication between you and our support team</li>
                  <li>Respond to your inquiries and support requests</li>
                  <li>Conduct research and analytics to improve our platform</li>
                </ul>
              </div>

              {/* Section 3: Sharing of Information */}
              <div className="mb-12 pb-8 border-b border-[var(--border-custom)]">
                <div className="flex items-start gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-[var(--brand-primary-light)] text-[var(--brand-primary)] shrink-0">
                    <FileText className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-[var(--foreground)] mb-2">3. Sharing of Information</h2>
                    <p className="text-sm text-[var(--foreground-muted)]">When and how we share your data</p>
                  </div>
                </div>

                <p className="text-base text-[var(--foreground)] mb-4">
                  We will share your personal information under the following circumstances:
                </p>

                <h3 className="text-lg font-bold text-[var(--foreground)] mt-6 mb-3">Protection of Rights</h3>
                <p className="text-base text-[var(--foreground-muted)] mb-3">
                  We will share personal information if we have a good faith belief that:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-base text-[var(--foreground-muted)] mb-4">
                  <li>Access or disclosure is reasonably necessary to comply with applicable law, regulation, legal process, court order, subpoena, or governmental request</li>
                  <li>Such action is appropriate to enforce our Terms of Use, including investigation of potential violations</li>
                  <li>Such action is necessary to detect, prevent, or address fraud, security, or technical issues</li>
                  <li>Such action is appropriate to protect the rights, property, or safety of AssetMaster, our users, or others</li>
                </ul>

                <h3 className="text-lg font-bold text-[var(--foreground)] mt-6 mb-3">Business Transfers</h3>
                <p className="text-base text-[var(--foreground-muted)] mb-4">
                  If we become involved in a merger, acquisition, or other transaction involving the sale of some or all of our assets, user information, including personal information, could be included in the transferred assets. We will notify users via a prominent notice on the Service for 30 days before any change of ownership or control of user information.
                </p>

                <h3 className="text-lg font-bold text-[var(--foreground)] mt-6 mb-3">Service Providers</h3>
                <p className="text-base text-[var(--foreground-muted)] mb-4">
                  We may share your personal information with third-party service providers that process information on our behalf. These entities are required to comply with this Privacy Policy and appropriate confidentiality and security measures.
                </p>

                <h3 className="text-lg font-bold text-[var(--foreground)] mt-6 mb-3">Aggregated Non-Personal Information</h3>
                <p className="text-base text-[var(--foreground-muted)]">
                  We may share aggregated, non-identifying information with third parties. This includes patterns, trends, preferences, and collective characteristics of our users. This disclosure helps us and our partners evaluate communications, services, and business practices.
                </p>
              </div>

              {/* Section 4: Control of Your Information */}
              <div className="mb-12 pb-8 border-b border-[var(--border-custom)]">
                <div className="flex items-start gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-[var(--brand-primary-light)] text-[var(--brand-primary)] shrink-0">
                    <Lock className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-[var(--foreground)] mb-2">4. Your Data Rights</h2>
                    <p className="text-sm text-[var(--foreground-muted)]">How to manage your information</p>
                  </div>
                </div>

                <p className="text-base text-[var(--foreground-muted)] mb-4">
                  You have the right to request us to correct, update, or delete any information we have collected from you. To exercise these rights, send an email to <a href="mailto:privacy@assetmaster.com" className="text-[var(--brand-primary)] hover:underline font-semibold">privacy@assetmaster.com</a>.
                </p>
                <p className="text-sm text-[var(--foreground-muted)] italic">
                  We will make reasonable efforts to fulfill your request. However, we may decline requests that are unreasonable, unduly burdensome, impractical, or that constitute a threat to the privacy or rights of others.
                </p>
              </div>

              {/* Section 5: Security */}
              <div className="mb-12 pb-8 border-b border-[var(--border-custom)]">
                <div className="flex items-start gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-[var(--brand-primary-light)] text-[var(--brand-primary)] shrink-0">
                    <Shield className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-[var(--foreground)] mb-2">5. Security Measures</h2>
                    <p className="text-sm text-[var(--foreground-muted)]">How we protect your data</p>
                  </div>
                </div>

                <p className="text-base text-[var(--foreground-muted)] mb-4">
                  Personal information you provide is stored on secure servers located in restricted-access facilities and protected by industry-standard protocols and procedures. We restrict access to personal information to AssetMaster employees, contractors, and agents who need this information to operate, develop, and maintain the Service.
                </p>
                <p className="text-base text-[var(--foreground-muted)] mb-4">
                  All personnel with access to this information are trained in security and privacy maintenance practices. However, no server, computer, communications network, or data transmission over the Internet can be guaranteed to be 100% secure.
                </p>
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg">
                  <p className="text-sm text-slate-700">
                    <strong>Disclaimer:</strong> While we strive to protect user information, we cannot ensure or warrant the security of any information you transmit through the Service. You acknowledge that you provide information and engage in transmissions at your own risk. Once we receive your transmission, we make reasonable efforts to maintain its security on our systems.
                  </p>
                </div>
              </div>

              {/* Section 6: Children's Privacy */}
              <div className="mb-12 pb-8 border-b border-[var(--border-custom)]">
                <div className="flex items-start gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-[var(--brand-primary-light)] text-[var(--brand-primary)] shrink-0">
                    <Shield className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-[var(--foreground)] mb-2">6. Children's Privacy</h2>
                    <p className="text-sm text-[var(--foreground-muted)]">Age restrictions and protections</p>
                  </div>
                </div>

                <p className="text-base text-[var(--foreground-muted)]">
                  The Service is not targeted towards, nor intended for use by, anyone under the age of 18. We do not knowingly collect personally identifiable information from any person we actually know is a minor under the age of 18.
                </p>
              </div>

              {/* Section 7: International Users */}
              <div className="mb-12 pb-8 border-b border-[var(--border-custom)]">
                <div className="flex items-start gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-[var(--brand-primary-light)] text-[var(--brand-primary)] shrink-0">
                    <Database className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-[var(--foreground)] mb-2">7. International Data Transfers</h2>
                    <p className="text-sm text-[var(--foreground-muted)]">Cross-border data handling</p>
                  </div>
                </div>

                <p className="text-base text-[var(--foreground-muted)]">
                  AssetMaster operates globally. By using the Service, you consent to the transfer of your information to our facilities and to the facilities of third parties with whom we share information as described in this Privacy Policy. These locations may be outside your country of residence and may have different data protection standards.
                </p>
              </div>

              {/* Section 8: Changes to Privacy Policy */}
              <div className="mb-12 pb-8 border-b border-[var(--border-custom)]">
                <div className="flex items-start gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-[var(--brand-primary-light)] text-[var(--brand-primary)] shrink-0">
                    <FileText className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-[var(--foreground)] mb-2">8. Policy Updates</h2>
                    <p className="text-sm text-[var(--foreground-muted)]">How we notify you of changes</p>
                  </div>
                </div>

                <p className="text-base text-[var(--foreground-muted)]">
                  This Privacy Policy may change from time to time. We will post all changes on this page and update the "Last Updated" date at the top. We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information.
                </p>
              </div>

              {/* Section 9: Dispute Resolution */}
              <div className="mb-12 pb-8 border-b border-[var(--border-custom)]">
                <div className="flex items-start gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-[var(--brand-primary-light)] text-[var(--brand-primary)] shrink-0">
                    <Scale className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-[var(--foreground)] mb-2">9. Dispute Resolution</h2>
                    <p className="text-sm text-[var(--foreground-muted)]">Resolving privacy concerns</p>
                  </div>
                </div>

                <p className="text-base text-[var(--foreground-muted)] mb-4">
                  If any dispute or claim arises out of or relating to your use of the Service or this Privacy Policy, you and AssetMaster agree to attempt in good faith to negotiate a written resolution directly between the parties.
                </p>
                <p className="text-base text-[var(--foreground-muted)]">
                  If the matter remains unresolved for 45 days after notification (via certified mail or personal delivery) that a dispute exists, all parties shall join in mediation with a mutually agreed mediator in an attempt to resolve the dispute. Should you file any arbitration claims or legal actions without first attempting to resolve the matter through mediation, you agree that you will not be entitled to recover legal fees, even if you would otherwise be entitled to them.
                </p>
              </div>

              {/* Section 10: Contact Us */}
              <div className="mb-12">
                <div className="flex items-start gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-[var(--brand-primary-light)] text-[var(--brand-primary)] shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-[var(--foreground)] mb-2">10. Contact Information</h2>
                    <p className="text-sm text-[var(--foreground-muted)]">Get in touch with us</p>
                  </div>
                </div>

                <p className="text-base text-[var(--foreground-muted)] mb-4">
                  If you have any questions about our privacy practices or this Privacy Policy, please contact us:
                </p>
                <div className="p-6 bg-[var(--surface)] border border-[var(--border-custom)] rounded-xl">
                  <div className="space-y-3">
                    <div>
                      <div className="text-sm font-bold text-[var(--foreground)] mb-1">Email</div>
                      <a href="mailto:privacy@assetmaster.com" className="text-base text-[var(--brand-primary)] hover:underline">
                        privacy@assetmaster.com
                      </a>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[var(--foreground)] mb-1">General Inquiries</div>
                      <a href="mailto:info@assetmaster.com" className="text-base text-[var(--brand-primary)] hover:underline">
                        info@assetmaster.com
                      </a>
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[var(--foreground)] mb-1">Mailing Address</div>
                      <p className="text-base text-[var(--foreground-muted)]">
                        AssetMaster<br />
                        Douala, Cameroon
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Terms of Service Link */}
              <div className="mt-12 p-6 bg-blue-50 border border-blue-200 rounded-xl text-center">
                <p className="text-base text-blue-900">
                  Please also read our <a href="/terms" className="font-bold text-[var(--brand-primary)] hover:underline">Terms of Service</a> governing the use of the Service.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
