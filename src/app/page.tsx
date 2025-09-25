"use client";

import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <section className="flex flex-col h-screen text-center md:text-left items-center  justify-center px-4 md:px-16">
          <div className="flex flex-col-reverse md:flex-row items-center justify-between md:px-32 md:gap-32 mt-8">
            <div>
               <h1 className="text-7xl md:text-9xl pb-4 text-amber-500 font-bold">$TALENT</h1>
              <p className="text-3xl md:text-4xl pb-2 font-bold">BACKBONE OF THE FUTURE MEGA CITY </p>
              <p className="md:text-lg">The flagship crypto project powering a 200,000-citizen mega city and its metaverse twin. From meme culture
                to real-world finance, $TALENT is more than currency; it&apos;s a movement of creativity, innovation,
                and community governance.</p>
              <div className="mt-4 flex flex-col items-center md:flex-row gap-4">
                <Link className="bg-gradient-to-b from-amber-500 to-amber-600 px-8 py-3 rounded-md" href="" >Buy $TALENT</Link>
                <Link className="border-t border-l border-b-2 border-r-2 border-amber-500  px-8 py-3 rounded-md" href="">Read Whitepaper</Link>
              </div>
            </div>
            <Image src="/images/logo.png" alt="token logo" width={300} height={300} className="w-auto h-96 md:h-148" />
          </div>
        </section>

        <section className="bg-gradient-to-b from-amber-950 to-transparent flex flex-col md:flex-row md:items-center md:justify-center gap-8 px-6 md:px-32 py-16 md:py-24" >
          <div className="flex justify-center">
            <Image src="/images/art-02.png" alt="image check" width={300} height={300} className="w-auto h-96 md:h-148" />
          </div>
          <div className="relative flex justify-center">
            <Image
              src="/images/art-01.png"
              alt="roadmap"
              width={500}
              height={500}
              className="w-full h-auto max-w-md"
            />
            <div className="absolute inset-0 flex flex-col justify-center px-8 text-black">
              <h1 className="text-5xl font-bold pb-4">About us</h1>
              <p className="md:text-lg">Talent Token ($TAL) is a blockchain ecosystem designed to evolve over a decade — beginning as a viral meme coin and maturing into the official currency of a smart mega city and its metaverse twin.

                We are creating the world&apos;s first cryptocurrency that evolves organically from meme hype into a global utility coin, deeply integrated into real-world economies and metaverse experiences.</p>
            </div>
          </div>
        </section>

        <section className="bg-amber-100 flex flex-col px-6 md:px-16 py-32 items-center ">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-amber-700">OUR TOKENOMICS</h1>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16 max-w-4xl text-black">
            <div className="rounded-xl p-4  md:px-16 md:py-8  bg-neutral-100 border-t-2 border-l-2 border-b-5 border-r-5 border-red-500">
              <h1 className="flex flex-col">
                <span className="font-bold text-3xl">700B</span>
                <span className="text-lg">TOTAL SUPPLY</span>
              </h1>
            </div>

            <div className="rounded-xl p-4  md:px-16 md:py-8  bg-neutral-100 border-t-2 border-l-2 border-b-5 border-r-5 border-red-500">
              <h1 className="flex flex-col">
                <span className="font-bold text-3xl">20%</span>
                <span className="text-lg">LIQUIDITY POOL</span>
              </h1>
            </div>

            <div className="rounded-xl p-4  md:px-16 md:py-8  bg-neutral-100 border-t-2 border-l-2 border-b-5 border-r-5 border-red-500">
              <h1 className="flex flex-col">
                <span className="font-bold text-3xl">10%</span>
                <span className="text-lg">FOUNDATION</span>
              </h1>
            </div>

            <div className="rounded-xl p-4  md:px-16 md:py-8  bg-neutral-100 border-t-2 border-l-2 border-b-5 border-r-5 border-red-500">
              <h1 className="flex flex-col">
                <span className="font-bold text-3xl">40%</span>
                <span className="text-lg">COMMUNITY</span>
              </h1>
            </div>

            <div className="rounded-xl p-4  md:px-16 md:py-8  bg-neutral-100 border-t-2 border-l-2 border-b-5 border-r-5 border-red-500">
              <h1 className="flex flex-col">
                <span className="font-bold text-3xl">10%</span>
                <span className="text-lg">STAKING REWARDS</span>
              </h1>
            </div>

            <div className="rounded-xl p-4  md:px-16 md:py-8  bg-neutral-100 border-t-2 border-l-2 border-b-5 border-r-5 border-red-500">
              <h1 className="flex flex-col">
                <span className="font-bold text-3xl">3%</span>
                <span className="text-lg">MARKETING</span>
              </h1>
            </div>

            <div className="rounded-xl p-4  md:px-16 md:py-8  bg-neutral-100 border-t-2 border-l-2 border-b-5 border-r-5 border-red-500">
              <h1 className="flex flex-col">
                <span className="font-bold text-3xl">15%</span>
                <span className="text-lg">TEAM</span>
              </h1>
            </div>

            <div className="rounded-xl p-4  md:px-16 md:py-8  bg-neutral-100 border-t-2 border-l-2 border-b-5 border-r-5 border-red-500">
              <h1 className="flex flex-col">
                <span className="font-bold text-3xl">7%</span>
                <span className="text-lg">DAO</span>
              </h1>
            </div>

            <div className="rounded-xl p-4  md:px-16 md:py-8  bg-neutral-100 border-t-2 border-l-2 border-b-5 border-r-5 border-red-500">
              <h1 className="flex flex-col">
                <span className="font-bold text-3xl">5%</span>
                <span className="text-lg">RESERVE</span>
              </h1>
            </div>

          </div>

          <div className="bg-amber-800 p-4 mt-8 rounded-2xl flex flex-col items-center w-full max-w-5xl">
            <h1 className="text-5xl md:text-6xl text-amber-200 font-bold mb-4">TAX SLIPPAGES</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 space-x-16 space-y-4 ">
              <div className="flex flex-col">
                <h1 className="font-semibold text-2xl">5%</h1>
                <p className="text-lg md:text-xl">BUY/SELL</p>
              </div>

              <div className="flex flex-col">
                <h1 className="font-semibold text-2xl">BNB</h1>
                <p className="text-lg md:text-xl">REWARDS</p>
              </div>

              <div className="flex flex-col">
                <h1 className="font-semibold text-2xl">BURN</h1>
                <p className="text-lg md:text-xl">AUTO MECHANISM</p>
              </div>

            </div>
          </div>

        </section>

        <section className="py-24 md:py-32 px-4 md:px-16">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-center mb-16">ROADMAP</h1>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-0.5 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-600 to-amber-700"></div>
              
              {/* Phase 1 */}
              <div className="relative flex flex-col md:flex-row md:items-center mb-16 group">
                <div className="md:w-1/2 md:pr-8 md:text-right">
                  <div className="bg-gradient-to-r from-amber-500 to-amber-600 p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl ml-12 md:ml-0">
                    <h3 className="text-2xl font-bold mb-3">Phase 1: Meme Genesis</h3>
                    <p className="text-sm opacity-90 mb-4">Q1 2024</p>
                    <ul className="text-left space-y-2">
                      <li>• Token Launch & Community Building</li>
                      <li>• Social Media Campaigns</li>
                      <li>• Initial Exchange Listings</li>
                      <li>• Viral Marketing Push</li>
                    </ul>
                  </div>
                </div>
                <div className="absolute left-2 md:left-1/2 md:transform md:-translate-x-1/2 w-6 h-6 bg-red-500 rounded-full border-4 border-white shadow-lg"></div>
              </div>

              {/* Phase 2 */}
              <div className="relative flex flex-col md:flex-row-reverse md:items-center mb-16 group">
                <div className="md:w-1/2 md:pl-8">
                  <div className="bg-gradient-to-r from-amber-500 to-amber-600 p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl ml-12 md:ml-0">
                    <h3 className="text-2xl font-bold mb-3">Phase 2: Utility Development</h3>
                    <p className="text-sm opacity-90 mb-4">Q2-Q3 2024</p>
                    <ul className="space-y-2">
                      <li>• DeFi Integration</li>
                      <li>• NFT Marketplace Launch</li>
                      <li>• Staking Rewards Program</li>
                      <li>• Partnership Announcements</li>
                    </ul>
                  </div>
                </div>
                <div className="absolute left-2 md:left-1/2 md:transform md:-translate-x-1/2 w-6 h-6 bg-red-500 rounded-full border-4 border-white shadow-lg"></div>
              </div>

              {/* Phase 3 */}
              <div className="relative flex flex-col md:flex-row md:items-center mb-16 group">
                <div className="md:w-1/2 md:pr-8 md:text-right">
                  <div className="bg-gradient-to-r from-amber-500 to-amber-600 p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl ml-12 md:ml-0">
                    <h3 className="text-2xl font-bold mb-3">Phase 3: Metaverse Foundation</h3>
                    <p className="text-sm opacity-90 mb-4">Q4 2024 - Q1 2025</p>
                    <ul className="text-left space-y-2">
                      <li>• Virtual Land Development</li>
                      <li>• Metaverse Beta Launch</li>
                      <li>• Gaming Integration</li>
                      <li>• Virtual Economy Setup</li>
                    </ul>
                  </div>
                </div>
                <div className="absolute left-2 md:left-1/2 md:transform md:-translate-x-1/2 w-6 h-6 bg-red-500 rounded-full border-4 border-white shadow-lg"></div>
              </div>

              {/* Phase 4 */}
              <div className="relative flex flex-col md:flex-row-reverse md:items-center mb-16 group">
                <div className="md:w-1/2 md:pl-8">
                  <div className="bg-gradient-to-r from-amber-500 to-amber-600 p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl ml-12 md:ml-0">
                    <h3 className="text-2xl font-bold mb-3">Phase 4: Smart City Integration</h3>
                    <p className="text-sm opacity-90 mb-4">Q2-Q4 2025</p>
                    <ul className="space-y-2">
                      <li>• Real Estate Partnerships</li>
                      <li>• City Infrastructure Planning</li>
                      <li>• Government Collaborations</li>
                      <li>• Regulatory Compliance</li>
                    </ul>
                  </div>
                </div>
                <div className="absolute left-2 md:left-1/2 md:transform md:-translate-x-1/2 w-6 h-6 bg-red-500 rounded-full border-4 border-white shadow-lg"></div>
              </div>

              {/* Phase 5 */}
              <div className="relative flex flex-col md:flex-row md:items-center group">
                <div className="md:w-1/2 md:pr-8 md:text-right">
                  <div className="bg-gradient-to-r from-amber-500 to-amber-600 p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl ml-12 md:ml-0">
                    <h3 className="text-2xl font-bold mb-3">Phase 5: Mega City Launch</h3>
                    <p className="text-sm opacity-90 mb-4">2026+</p>
                    <ul className="text-left space-y-2">
                      <li>• 200,000 Citizen Onboarding</li>
                      <li>• Full Metaverse Integration</li>
                      <li>• Global Economic Impact</li>
                      <li>• Sustainable Future Vision</li>
                    </ul>
                  </div>
                </div>
                <div className="absolute left-2 md:left-1/2 md:transform md:-translate-x-1/2 w-6 h-6 bg-red-500 rounded-full border-4 border-white shadow-lg animate-pulse"></div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 md:py-32 px-4 md:px-16 border-t-3 border-b-3 border-amber-200 bg-cover bg-center bg-no-repeat bg-fixed" style={{backgroundImage: 'url("/images/bg-01.png")', minHeight: '600px'}}>
          <div className="max-w-6xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-center mb-4 text-amber-500">HOW TO BUY</h1>
            <p className="text-center text-lg md:text-xl mb-16 text-gray-300">Get your $TALENT tokens in 4 simple steps</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Step 1 */}
              <div className="group">
                <div className="bg-gradient-to-b from-amber-500 to-amber-600 p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl text-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-amber-600">1</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Create Wallet</h3>
                  <p className="text-sm opacity-90">Download MetaMask or your preferred crypto wallet</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="group">
                <div className="bg-gradient-to-b from-amber-500 to-amber-600 p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl text-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-amber-600">2</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Get BNB</h3>
                  <p className="text-sm opacity-90">Purchase BNB from an exchange and transfer to your wallet</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="group">
                <div className="bg-gradient-to-b from-amber-500 to-amber-600 p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl text-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-amber-600">3</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Connect Wallet</h3>
                  <p className="text-sm opacity-90">Connect your wallet to PancakeSwap DEX</p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="group">
                <div className="bg-gradient-to-b from-amber-500 to-amber-600 p-8 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl text-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-amber-600">4</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Swap for $TALENT</h3>
                  <p className="text-sm opacity-90">Exchange your BNB for $TALENT tokens</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-12">
              <button className="bg-gradient-to-r from-amber-500 to-amber-600 px-8 py-4 rounded-lg font-bold text-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                Buy on PancakeSwap
              </button>
              <button 
                onClick={() => {
                  navigator.clipboard.writeText('0x38Aec84f305564cB2625430A294382Cf33e3c317');
                  alert('Contract address copied to clipboard!');
                }}
                className="border-2 border-amber-500 px-8 py-4 rounded-lg font-bold text-lg hover:bg-amber-500 transition-all duration-300"
              >
                Copy Contract
              </button>
            </div>

          </div>
        </section>

        <section className="py-16 px-4 md:px-16 bg-amber-200">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-center text-amber-700 mb-16 ">FAQs</h1>
            
            <FAQSection />
          </div>
        </section>

        <section>

        </section>
      </main>

      <footer className="text-white py-4 px-4 md:px-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center mb-4 md:mb-0">
            <img
              src="/images/logo.png"
              alt="Talent Token Logo"
              className="w-15 h-15 mr-2"
            />
            <span className="text-lg font-bold">$TALENT</span>
          </div>

          {/* Copyright */}
          <div className="text-center mb-4 md:mb-0">
            <p className="text-sm opacity-90">2025 © talenttoken</p>
          </div>

          {/* Social Links */}
          <div className="flex gap-2">
            <a 
              href="https://twitter.com/talenttoken" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white text-amber-500 rounded flex items-center justify-center hover:bg-gray-100 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
            <a 
              href="https://t.me/talenttoken" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white text-amber-500 rounded flex items-center justify-center hover:bg-gray-100 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "What makes Talent Token different from other meme coins?",
      answer: "It begins as meme-driven but evolves into a full-fledged utility token, powering a mega city and its digital twin."
    },
    {
      question: "How will Talent Token create real-world impact?",
      answer: "Through CSR initiatives — food banks, education grants, and citizen benefits funded by tokenomics and DAO governance."
 
   },
    {
      question: "When will the Mega City launch?",
      answer: "Phase 3 (Years 5–8) will see the launch of the blockchain-powered mega city and its metaverse twin."
    },
    {
      question: "Is $TAL deflationary?",
      answer: "Yes, auto-burn and reflections create long-term scarcity."
    },
    {
      question: "How do I participate in governance?",
      answer: "NFT holders gain DAO voting rights and can help decide city services, CSR projects, and treasury management."
    }
  ];

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div key={index} className="group">
          <div className="bg-black text-white rounded-lg overflow-hidden">
            <button 
              onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
              className="w-full p-6 text-left flex justify-between items-center"
            >
              <h3 className="text-lg font-bold text-white">{faq.question}</h3>
              <div className="w-8 h-8 bg-amber-200 rounded flex items-center justify-center text-black font-bold">
                {openFAQ === index ? '−' : '+'}
              </div>
            </button>
            {openFAQ === index && (
              <div className="px-6 pb-6 text-white">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}






