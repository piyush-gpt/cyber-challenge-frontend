// import React, { useState,useEffect } from 'react';
// import { AlertTriangle, BookOpen, MessageSquare, TrendingUp, Shield } from 'lucide-react';

// export default function AwarenessHub() {
//   const [chatMessage, setChatMessage] = useState('');
//   const [chatHistory, setChatHistory] = useState<{ type: 'user' | 'bot'; message: string }[]>([]);

//   const handleChatSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!chatMessage.trim()) return;

//     // Add user message
//     setChatHistory(prev => [...prev, { type: 'user', message: chatMessage }]);

//     try{
//       console.log('going message');
//       const res = await fetch('http://localhost:5000/api/chat', { 
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ chatMessage }),
//       });
  
//       const data = await res.json();
  
//       // Simulate bot response
//       setTimeout(() => {
//         setChatHistory(prev => [...prev, {
//           type: 'bot',
//           message: data.response
//         }]);
//       }, 1000);
//     }catch (error) {
//       console.error('Error:', error);
//       setChatMessage('Error getting response.'); 
//     }finally {
//       setChatMessage(''); 
//     }
//   };

//   const latestScams = [
//     {
//       title: "Digital Arrest Scam",
//       description: "Scammers impersonate law enforcement officials, accusing victims of serious crimes like money laundering or tax evasion. They send fake legal documents and demand immediate payments to avoid arrest."
//     },
//     {
//       title: "Illegal Parcel Scam",
//       description: "Fraudsters pose as courier services or law enforcement officials, claiming that a package addressed to the victim contains illegal items. They demand payments to 'clear' the parcel or avoid legal trouble."
//     },
//     {
//       title: "KYC Scam",
//       description: "Scammers pretend to be bank or telecom representatives and request victims to update their KYC details. They use malicious links or remote access apps to steal banking credentials and OTPs."
//     },
//     {
//       title: "Work-from-Home Scam",
//       description: "Victims are lured with high-paying remote jobs requiring simple tasks. They are asked to pay registration fees and deposits, but scammers eventually disappear with their money."
//     },
//     {
//       title: "Emergency Call Scam",
//       description: "Fraudsters pose as relatives or acquaintances in distress, claiming urgent medical or legal trouble. They emotionally manipulate victims into transferring money quickly through untraceable digital wallets."
//     },
//     {
//       title: "Stock Market Investment Scam",
//       description: "Scammers pose as financial advisors, offering guaranteed high returns. They lure victims into fake trading groups or apps, then manipulate the system to show losses or disappear with the invested money."
//     },
//     {
//       title: "Video Call Impersonation Scam",
//       // date: "March 15, 2024",
//       description: "Scammers are using deepfake technology to impersonate police officers in video calls."
//     },
//     {
//       title: "Fake Court Notice Scam",
//       // date: "March 12, 2024",
//       description: "Fraudsters sending fake court notices via WhatsApp demanding immediate payment."
//     },
//     {
//       title: "Police Station Spoofing",
//       // date: "March 10, 2024",
//       description: "Scammers using spoofed phone numbers that appear to be from legitimate police stations."
//     }
//   ];

//   const preventionTips = [
//     "Never share OTPs or banking credentials",
//     "Verify caller's identity through official channels",
//     "Be wary of urgent payment demands",
//     "Don't click on suspicious links",
//     "Report suspicious activities immediately"
//   ];

//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//       <div className="text-center mb-12">
//         <h1 className="text-4xl font-bold text-gray-900 mb-4">Awareness Hub</h1>
//         <p className="text-xl text-gray-600">Stay informed about the latest scams and protection measures</p>
//       </div>

//       <div className="grid md:grid-cols-2 gap-8">
//         {/* Latest Scams Section */}
//         <div>
//           <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
//             <div className="flex items-center mb-6">
//               <TrendingUp className="h-6 w-6 text-red-500 mr-3" />
//               <h2 className="text-2xl font-semibold text-gray-900">Latest Scam Alerts</h2>
//             </div>
//             <div className="space-y-6">
//               {latestScams.map((scam, index) => (
//                 <div key={index} className="border-b border-gray-100 last:border-0 pb-6 last:pb-0">
//                   <div className="flex items-start">
//                     <AlertTriangle className="h-5 w-5 text-red-500 mt-1 mr-3 flex-shrink-0" />
//                     <div>
//                       <h3 className="font-semibold text-gray-900 mb-1">{scam.title}</h3>
//                       <p className="text-gray-600">{scam.description}</p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="bg-white rounded-xl shadow-sm p-8">
//             <div className="flex items-center mb-6">
//               <Shield className="h-6 w-6 text-green-500 mr-3" />
//               <h2 className="text-2xl font-semibold text-gray-900">Prevention Tips</h2>
//             </div>
//             <ul className="space-y-4">
//               {preventionTips.map((tip, index) => (
//                 <li key={index} className="flex items-center">
//                   <div className="bg-green-50 w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
//                     <span className="text-green-600 font-semibold">{index + 1}</span>
//                   </div>
//                   <span className="text-gray-700">{tip}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         {/* AI Chatbot Section */}
//         <div className="bg-white rounded-xl shadow-sm p-8">
//           <div className="flex items-center mb-6">
//             <MessageSquare className="h-6 w-6 text-blue-500 mr-3" />
//             <h2 className="text-2xl font-semibold text-gray-900">AI Assistant</h2>
//           </div>

//           <div className="bg-gray-50 rounded-lg p-4 mb-4 h-[400px] overflow-y-auto">
//             <div className="space-y-4">
//               {/* Welcome message */}
//               <div className="flex items-start">
//                 <div className="bg-blue-100 rounded-lg p-3 ml-auto max-w-[80%]">
//                   <p className="text-gray-800">
//                     Hello! I'm your AI assistant. I can help you understand digital arrest scams and provide guidance on staying safe. What would you like to know?
//                   </p>
//                 </div>
//               </div>

//               {/* Chat history */}
//               {chatHistory.map((chat, index) => (
//                 <div key={index} className="flex items-start">
//                   {chat.type === 'user' ? (
//                     <div className="bg-blue-600 text-white rounded-lg p-3 ml-auto max-w-[80%]">
//                       <p>{chat.message}</p>
//                     </div>
//                   ) : (
//                     <div className="bg-gray-100 rounded-lg p-3 mr-auto max-w-[80%]">
//                       <p className="text-gray-800">{chat.message}</p>
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </div>

//           <form onSubmit={handleChatSubmit} className="flex gap-2">
//             <input
//               type="text"
//               value={chatMessage}
//               onChange={(e) => setChatMessage(e.target.value)}
//               placeholder="Type your message here..."
//               className="flex-1 rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
//             />
//             <button
//               type="submit"
//               className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
//             >
//               Send
//             </button>
//           </form>
//         </div>
//       </div>

//       {/* Educational Resources */}
//       <div className="mt-12">
//         <div className="bg-white rounded-xl shadow-sm p-8">
//           <div className="flex items-center mb-6">
//             <BookOpen className="h-6 w-6 text-purple-500 mr-3" />
//             <h2 className="text-2xl font-semibold text-gray-900">Educational Resources</h2>
//           </div>

//           <div className="grid md:grid-cols-3 gap-6">
//             {[
//               {
//                 title: "Understanding Digital Arrest Scams",
//                 description: "A comprehensive guide to identifying and avoiding digital arrest scams.",
//                 link: "#"
//               },
//               {
//                 title: "Legal Rights & Procedures",
//                 description: "Learn about your legal rights and actual law enforcement procedures.",
//                 link: "#"
//               },
//               {
//                 title: "Recovery & Reporting Guide",
//                 description: "Step-by-step guide for scam victims on recovery and reporting procedures.",
//                 link: "#"
//               }
//             ].map((resource, index) => (
//               <div key={index} className="bg-purple-50 rounded-lg p-6">
//                 <h3 className="font-semibold text-gray-900 mb-2">{resource.title}</h3>
//                 <p className="text-gray-600 mb-4">{resource.description}</p>
//                 <a
//                   href={resource.link}
//                   className="text-purple-600 hover:text-purple-700 font-medium"
//                 >
//                   Learn More →
//                 </a>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect } from 'react';
import { AlertTriangle, BookOpen, MessageSquare, TrendingUp, Shield } from 'lucide-react';

export default function AwarenessHub() {
  const [chatMessage, setChatMessage] = useState('');
  const [chatHistory, setChatHistory] = useState<{ type: 'user' | 'bot'; message: string }[]>([]);

  const handleChatSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatMessage.trim()) return;

    // Add user message
    setChatHistory(prev => [...prev, { type: 'user', message: chatMessage }]);

    try {
      console.log('going message');
      const res = await fetch('http://localhost:5000/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ chatMessage }),
      });

      const data = await res.json();

      // Simulate bot response
      setTimeout(() => {
        setChatHistory(prev => [
          ...prev,
          {
            type: 'bot',
            message: data.response,
          },
        ]);
      }, 1000);
    } catch (error) {
      console.error('Error:', error);
      setChatMessage('Error getting response.');
    } finally {
      setChatMessage('');
    }
  };

  // Updated scam objects with image property
  // const latestScams = [
  //   {
  //     title: "Digital Arrest Scam",
  //     description:
  //       "Scammers impersonate law enforcement officials, accusing victims of serious crimes like money laundering or tax evasion. They send fake legal documents and demand immediate payments to avoid arrest.",
  //     image: "/images/digital-arrest.jpg",
  //   },
  //   {
  //     title: "Illegal Parcel Scam",
  //     description:
  //       "Fraudsters pose as courier services or law enforcement officials, claiming that a package addressed to the victim contains illegal items. They demand payments to 'clear' the parcel or avoid legal trouble.",
  //     image: "/images/illegal-parcel.jpg",
  //   },
  //   {
  //     title: "KYC Scam",
  //     description:
  //       "Scammers pretend to be bank or telecom representatives and request victims to update their KYC details. They use malicious links or remote access apps to steal banking credentials and OTPs.",
  //     image: "/images/kyc-scam.jpg",
  //   },
  //   {
  //     title: "Work-from-Home Scam",
  //     description:
  //       "Victims are lured with high-paying remote jobs requiring simple tasks. They are asked to pay registration fees and deposits, but scammers eventually disappear with their money.",
  //     image: "/images/work-from-home.jpg",
  //   },
  //   {
  //     title: "Emergency Call Scam",
  //     description:
  //       "Fraudsters pose as relatives or acquaintances in distress, claiming urgent medical or legal trouble. They emotionally manipulate victims into transferring money quickly through untraceable digital wallets.",
  //     image: "/images/emergency-call.jpg",
  //   },
  //   {
  //     title: "Stock Market Investment Scam",
  //     description:
  //       "Scammers pose as financial advisors, offering guaranteed high returns. They lure victims into fake trading groups or apps, then manipulate the system to show losses or disappear with the invested money.",
  //     image: "/images/stock-market.jpg",
  //   },
  //   {
  //     title: "Video Call Impersonation Scam",
  //     description:
  //       "Scammers are using deepfake technology to impersonate police officers in video calls.",
  //     image: "/images/video-call.jpg",
  //   },
  //   {
  //     title: "Fake Court Notice Scam",
  //     description:
  //       "Fraudsters sending fake court notices via WhatsApp demanding immediate payment.",
  //     image: "/images/fake-court.jpg",
  //   },
  //   {
  //     title: "Police Station Spoofing",
  //     description:
  //       "Scammers using spoofed phone numbers that appear to be from legitimate police stations.",
  //     image: "/images/police-spoof.jpg",
  //   },
  // ];

  const latestScams = [
    {
      title: "Digital Arrest Scam - Impersonation Tactic",
      description:
        "Scammers impersonate law enforcement officials via phone calls and emails, accusing victims of crimes like money laundering or tax evasion. They use forged legal documents and demand immediate payment to 'settle' the charges and avoid arrest.",
      image: "data:image/jpeg;base64,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"
    },
    {
      title: "Digital Arrest Scam - Video Call Fraud",
      description:
        "Fraudsters use deepfake technology in video calls to simulate police arrest scenarios. They intimidate victims by showing fake evidence and demanding bribes to prevent a wrongful arrest.",
      image: "https://img.etimg.com/thumb/width-1200,height-900,imgsize-652285,resizemode-75,msid-115356729/news/new-updates/viral-video-scammer-posing-as-mumbai-police-calls-real-cop-by-mistake-gets-a-shocking-surprise-on-zoom.jpg"
    },
    {
      title: "Digital Arrest Scam - Email & SMS Scheme",
      description:
        "In this variant, scammers send official-looking emails and SMS messages claiming that the victim is under investigation for serious financial crimes. The messages include links to fake payment portals where victims are coerced into making rapid payments.",
      image: "https://nicobartimes.com/wp-content/uploads/2024/03/andaman-police-fake-emails.jpg"
    },
    {
      title: "KYC Scam",
      description:
        "Scammers pretend to be bank or telecom representatives and request victims to update their KYC details. They use malicious links or remote access apps to steal banking credentials and OTPs.",
      image: "https://staysafeonline.in/index.php?img=KYC2647",
    },
    {
      title: "Emergency Call Scam",
      description:
        "Fraudsters pose as relatives or acquaintances in distress, claiming urgent medical or legal trouble. They emotionally manipulate victims into transferring money quickly through untraceable digital wallets.",
      image: "https://www.vmcdn.ca/f/files/deltaoptimist/images/police/emergency-scam.png",
    },
  ];
  

  // Auto-rotate scam alerts every 5 seconds
  const [currentScamIndex, setCurrentScamIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentScamIndex(prev => (prev + 1) % latestScams.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const preventionTips = [
    "Never share OTPs or banking credentials",
    "Verify caller's identity through official channels",
    "Be wary of urgent payment demands",
    "Don't click on suspicious links",
    "Report suspicious activities immediately",
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Awareness Hub</h1>
        <p className="text-xl text-gray-600">Stay informed about the latest scams and protection measures</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Latest Scams Section */}
        <div>
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg p-10 mb-8 h-[450px] flex flex-col justify-center overflow-hidden relative">
            <div className="flex items-center mb-6">
              <TrendingUp className="h-6 w-6 text-red-500 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Latest Scam Alerts</h2>
            </div>
            <div className="flex flex-col items-center transition-all duration-500 ease-in-out">
              <img
                src={latestScams[currentScamIndex].image}
                alt={latestScams[currentScamIndex].title}
                className="w-full h-40 object-cover rounded-lg mb-4 shadow-md"
              />
              <h3 className="font-bold text-xl text-gray-800 mb-2">{latestScams[currentScamIndex].title}</h3>
              <p className="text-gray-600 text-center px-4">{latestScams[currentScamIndex].description}</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-8">
            <div className="flex items-center mb-6">
              <Shield className="h-6 w-6 text-green-500 mr-3" />
              <h2 className="text-2xl font-semibold text-gray-900">Prevention Tips</h2>
            </div>
            <ul className="space-y-4">
              {preventionTips.map((tip, index) => (
                <li key={index} className="flex items-center">
                  <div className="bg-green-50 w-8 h-8 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-green-600 font-semibold">{index + 1}</span>
                  </div>
                  <span className="text-gray-700">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* AI Chatbot Section */}
        <div className="bg-white rounded-xl shadow-sm p-8">
          <div className="flex items-center mb-6">
            <MessageSquare className="h-6 w-6 text-blue-500 mr-3" />
            <h2 className="text-2xl font-semibold text-gray-900">AI Assistant</h2>
          </div>

          <div id="chat-container" className="bg-gray-50 rounded-lg p-4 mb-4 h-[400px] overflow-y-auto">
            <div className="space-y-4">
              {/* Welcome message */}
              <div className="flex items-start">
                <div className="bg-blue-100 rounded-lg p-3 ml-auto max-w-[80%]">
                  <p className="text-gray-800">
                    Hello! I'm your AI assistant. I can help you understand digital arrest scams and provide guidance on staying safe. What would you like to know?
                  </p>
                </div>
              </div>

              {/* Chat history */}
              {chatHistory.map((chat, index) => (
                <div key={index} className="flex items-start">
                  {chat.type === 'user' ? (
                    <div className="bg-blue-600 text-white rounded-lg p-3 ml-auto max-w-[80%]">
                      <p>{chat.message}</p>
                    </div>
                  ) : (
                    <div className="bg-gray-100 rounded-lg p-3 mr-auto max-w-[80%]">
                      <p className="text-gray-800">{chat.message}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <form onSubmit={handleChatSubmit} className="flex gap-2">
            <input
              type="text"
              value={chatMessage}
              onChange={(e) => setChatMessage(e.target.value)}
              placeholder="Type your message here..."
              className="flex-1 rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Send
            </button>
          </form>
        </div>
      </div>

      {/* Educational Resources */}
      <div className="mt-12">
        <div className="bg-white rounded-xl shadow-sm p-8">
          <div className="flex items-center mb-6">
            <BookOpen className="h-6 w-6 text-purple-500 mr-3" />
            <h2 className="text-2xl font-semibold text-gray-900">Educational Resources</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Understanding Digital Arrest Scams",
                description: "A comprehensive guide to identifying and avoiding digital arrest scams.",
                link: "#",
              },
              {
                title: "Legal Rights & Procedures",
                description: "Learn about your legal rights and actual law enforcement procedures.",
                link: "#",
              },
              {
                title: "Recovery & Reporting Guide",
                description: "Step-by-step guide for scam victims on recovery and reporting procedures.",
                link: "#",
              },
            ].map((resource, index) => (
              <div key={index} className="bg-purple-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">{resource.title}</h3>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                <a
                  href={resource.link}
                  className="text-purple-600 hover:text-purple-700 font-medium"
                >
                  Learn More →
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
