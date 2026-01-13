import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Deep Dive Netrani - PADI Certified Scuba Diving Center',
  description: 'Learn about Deep Dive Netrani, Karnataka\'s premier scuba diving center. PADI certified instructors, professional equipment, and unforgettable underwater experiences at Netrani Island.',
}

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-teal-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">About Deep Dive Netrani</h1>
          
          <div className="prose prose-lg text-blue-100">
            <p>Deep Dive Netrani is Karnataka's premier scuba diving center, located in the beautiful coastal town of Murudeshwar. We specialize in providing world-class underwater experiences at Netrani Island, one of India's most pristine diving destinations.</p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
            <p>To provide safe, professional, and unforgettable scuba diving experiences while promoting marine conservation and underwater education.</p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">PADI Certified Excellence</h2>
            <p>Our team consists of PADI certified dive masters and instructors with years of experience in the diving industry. We maintain the highest safety standards and provide comprehensive training for divers of all levels.</p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Why Choose Deep Dive Netrani?</h2>
            <ul>
              <li>PADI certified instructors</li>
              <li>Professional diving equipment</li>
              <li>Small group sizes for personalized attention</li>
              <li>Underwater photography services</li>
              <li>Comprehensive safety protocols</li>
              <li>Local expertise of Netrani Island waters</li>
            </ul>
          </div>
          
          <div className="mt-12">
            <Link href="/" className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg transition-colors">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}