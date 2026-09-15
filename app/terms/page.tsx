import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Shield, FileText, Scale, Lock, AlertCircle, CheckCircle, UserCheck, Globe } from 'lucide-react';

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl mb-6 shadow-lg">
              <Scale className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Terms of Service
            </h1>
            <p className="text-xl text-slate-600">
              Please read these terms carefully before using AssetMaster
            </p>
          </div>

          {/* Content Sections */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 space-y-8">
            {/* Introduction */}
            <section>
              <p className="text-slate-700 leading-relaxed">
                AssetMaster ("Provider") maintains the AssetMaster website and mobile application, including related features, products, and services (collectively, the "Service"). You should read these Terms of Service (this "Agreement") carefully before using the Service. Access to and use of the Service is subject to the terms and conditions set forth below, and your use of the Service signifies and constitutes your acceptance of this Agreement. If you do not agree to this Agreement, you should not use the Service. Provider may revise this Agreement from time to time. Although Provider may include a notice on the home page of the Service that the Agreement has been modified, such notice may not remain in place for any extended period of time. Accordingly, you should review the Agreement as posted on the Service from time to time. Using the Service after any revised Agreement has been posted will constitute your acceptance of the revised terms.
              </p>
            </section>

            {/* Purpose of Service */}
            <section>
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileText className="w-5 h-5 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 pt-1">1. Purpose of the Service</h2>
              </div>
              <p className="text-slate-700 leading-relaxed ml-13">
                The Service provides a number of different features, products, and services to assist you in creating and maintaining an inventory of records, including information regarding business assets, IT equipment, facilities, maintenance schedules, and warranty information. The service is not intended to provide legal, tax or financial advice. NEITHER PROVIDER NOR THE SERVICE IS INTENDED TO PROVIDE LEGAL, TAX OR FINANCIAL ADVICE. PROVIDER IS NOT A FINANCIAL PLANNER, BROKER OR TAX ADVISOR AND DOES NOT OFFER PROOF OF OWNERSHIP OR POSSESSION OF RECORDS. The Service is intended only to assist you in maintaining inventories of records and is broad in scope. Your personal situation is unique, and any information and advice obtained through the Service may not be appropriate for your situation. Accordingly, before making any final decisions or implementing any record management, insurance, or financial strategy, you should consider obtaining advice from your accountant or other financial advisers who are fully aware of your individual circumstances.
              </p>
            </section>

            {/* Use of Service */}
            <section>
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <UserCheck className="w-5 h-5 text-indigo-600" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 pt-1">2. Use of the Service</h2>
              </div>
              <div className="ml-13 space-y-4">
                <p className="text-slate-700 leading-relaxed">
                  Use of the Service may be available through a compatible Internet browser or mobile device and may require network connections and software. You agree that you are solely responsible for these requirements, including any applicable changes, updates and fees as well as the terms of your agreement with your mobile device and telecommunications provider. Your right to access and use the Service is personal to you and is not transferable by you to any other person or entity. You are only entitled to access and use the Service for lawful purposes.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  Accurate records enable Provider to provide the Service to you. You must provide true, accurate, current and complete information about your accounts and you may not misrepresent your registration information. In order for the Service to function effectively, you must also keep your registration information up to date and accurate. If you do not do this, the accuracy and effectiveness of the Service to you will be affected.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  You agree that Provider may use your feedback, suggestions, or ideas in any way, including in future modifications of the Service, other products or services, advertising or marketing materials. You grant Provider a perpetual, worldwide, fully-transferable, sub-licensable, irrevocable, fully paid-up, royalty-free license to use the feedback you provide to Provider in any way.
                </p>
              </div>
            </section>

            {/* Lawful Use */}
            <section>
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 pt-1">3. Lawful Use; Use by Minors</h2>
              </div>
              <p className="text-slate-700 leading-relaxed ml-13">
                Your access to and use of the Service is subject to all applicable international, federal, state and local laws and regulations. You represent and warrant that you will not use the Service in any manner or for any purposes that are unlawful or prohibited by this Agreement. The Service is not targeted towards, nor intended for use by, anyone under the age of 18. By using the Service, you represent and warrant that you are 18 years of age or older. If you are not at least 18 years of age, do not use, access, or register for the Service. Provider reserves the right to terminate your membership in the event that Provider becomes aware you are under 18.
              </p>
            </section>

            {/* User Accounts */}
            <section>
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Lock className="w-5 h-5 text-purple-600" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 pt-1">4. User Accounts</h2>
              </div>
              <div className="ml-13 space-y-4">
                <p className="text-slate-700 leading-relaxed">
                  To use the Service, you must first register by creating a User Account. User Account registration requires you to submit to Provider certain personal information, such as your name, address, email, and other information. If you choose to set up your User Account to electronically pay for certain fee-based Services, you will also be required to provide a valid payment method.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  You are responsible for safeguarding the password that you use to access your User Account, and it is recommended that you choose a strong password. You should take measures to maintain and preserve the confidentiality of the username and password associated with your User Account, and you must notify Provider promptly of any unauthorized use or suspected breach of security of your User Account. Provider shall not be liable for any losses that may result from any unauthorized use of your User Account or failure to maintain appropriate confidentiality measures.
                </p>
              </div>
            </section>

            {/* User Content */}
            <section>
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-amber-600" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 pt-1">5. User Content</h2>
              </div>
              <p className="text-slate-700 leading-relaxed ml-13">
                By using the Service, you may choose to submit information, data, asset records, photographs, and other materials and content relating thereto (collectively, the "User Content"). You expressly agree that you shall not post any User Content: (i) that infringes or misappropriates any third party's copyright, patent, trademark, trade secret or other proprietary rights or rights of publicity or privacy; (ii) that violates any law, statute, ordinance or regulation; (iii) that is or may reasonably be considered to be defamatory, libelous, hateful, racially or religiously biased or offensive, unlawfully threatening or unlawfully harassing; (iv) that contains any computer viruses, worms or other potentially damaging computer programs or files.
              </p>
            </section>

            {/* Intellectual Property */}
            <section>
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 bg-rose-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileText className="w-5 h-5 text-rose-600" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 pt-1">6. Intellectual Property Rights</h2>
              </div>
              <p className="text-slate-700 leading-relaxed ml-13">
                Unless otherwise noted, all text, images, graphics, photographs, video clips, designs, icons, sounds, information, data, and other materials appearing on the Service which are not User Content (the "Provider Content") and all methods, methodologies, procedures, processes, know-how, software, algorithms, techniques, and other technology (the "Technology") displayed, used, or incorporated on the Service by Provider are copyrights, trademarks, service marks, trade secrets, or other intellectual property or proprietary content owned or licensed by Provider. You may use the available Provider Content and Technology only for your own personal use and internal business purposes, but you may not reverse-engineer or decompile any of the Technology.
              </p>
            </section>

            {/* Third Party Links */}
            <section>
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Globe className="w-5 h-5 text-cyan-600" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 pt-1">7. Links to and from Other Websites</h2>
              </div>
              <p className="text-slate-700 leading-relaxed ml-13">
                Portions of the Service may include links to third-party websites. Such links are provided or permitted to exist as a convenience measure, and Provider is not responsible for the information, advertising, products, services, content, or other material of any third-party website. The inclusion and use of links does not imply sponsorship or endorsement by Provider of any third-party website.
              </p>
            </section>

            {/* Disclaimer */}
            <section>
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <AlertCircle className="w-5 h-5 text-red-600" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 pt-1">8. Disclaimer of Warranties</h2>
              </div>
              <div className="ml-13 bg-slate-50 rounded-lg p-6 border-l-4 border-red-500">
                <p className="text-slate-700 leading-relaxed font-medium">
                  Provider does not warrant that the Service will be available. Your access and use of the Service may be interrupted from time to time for any of several reasons, including, without limitation, the malfunction of equipment, periodic updating, maintenance or repair of the Service or other actions that Provider, in its sole discretion, may elect to take. ALL PRODUCTS, SERVICES, INFORMATION, DATA, USER CONTENT, PROVIDER CONTENT, TECHNOLOGY, AND RELATED GRAPHICS CONTAINED WITHIN OR AVAILABLE THROUGH THE SERVICE ARE PROVIDED TO YOU ON AN "AS IS" AND "AS AVAILABLE" BASIS. PROVIDER MAKES NO REPRESENTATIONS OR WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, AS TO THE OPERATION OF THE SERVICE.
                </p>
              </div>
            </section>

            {/* Limitations on Liability */}
            <section>
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Scale className="w-5 h-5 text-orange-600" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 pt-1">9. Limitations on Liability</h2>
              </div>
              <p className="text-slate-700 leading-relaxed ml-13">
                In no event shall Provider, its agents, licensors, or service providers, or any other person or entity involved in creating, promoting, maintaining, hosting, or otherwise making available any User Content, Provider Content, Technology, or other aspect of the Service, be liable to you or any other person or entity for any direct, indirect, incidental, special, consequential, punitive, or other such damages, including but not limited to any damages associated with loss of goodwill, profits, business interruption, or data.
              </p>
            </section>

            {/* Governing Law */}
            <section>
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FileText className="w-5 h-5 text-slate-600" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 pt-1">10. Governing Law; Disputes</h2>
              </div>
              <p className="text-slate-700 leading-relaxed ml-13">
                These Terms and the relationship between you and Provider will be governed by applicable laws, without regard to conflict of law provisions. You agree to submit to the personal jurisdiction of the appropriate courts, and waive any objections thereto. If any provision of this Agreement shall be determined to be void or unenforceable in whole or in part, the remaining provisions of this Agreement shall not be affected thereby and shall remain in force and effect.
              </p>
            </section>

            {/* Contact Information */}
            <section className="pt-6 border-t border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Questions? Contact Us</h2>
              <p className="text-slate-700 leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <p className="text-blue-900 font-medium">support@assetmaster.com</p>
              </div>
            </section>

            {/* Last Updated */}
            <div className="pt-6 border-t border-slate-200 text-center">
              <p className="text-sm text-slate-500">
                Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
