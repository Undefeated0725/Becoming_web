'use client'

import Layout from './layout'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Calendar, Globe, Lightbulb } from 'lucide-react'
import Image from 'next/image'

export function HomePageComponent() {
  return (
    <Layout>
      <section className="bg-gradient-to-r from-sky-600 to-sky-400 text-white py-20">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Becoming</h1>
            <p className="text-xl md:text-2xl mb-8">Empowering students through curiosity, exploration, and co-creation.</p>
            <Button size="lg" variant="secondary">Join Us Today</Button>
          </div>
          <Image 
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WechatIMG54-4xPytXOdMbMrZIURwUPaYiViqZUSDK.jpg" 
            alt="Becoming Logo" 
            width={200} 
            height={200} 
            className="hidden md:block"
          />
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-sky-800">Our Key Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-sky-600">Global Leaders Camp</CardTitle>
                <CardDescription>Developing tomorrow&apos;s global leaders</CardDescription>
              </CardHeader>
              <CardContent>
                <p>An intensive program designed to nurture leadership skills in an international context.</p>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-sky-600">Innovators Forum</CardTitle>
                <CardDescription>Fostering innovation across borders</CardDescription>
              </CardHeader>
              <CardContent>
                <p>A platform for students to share and develop innovative ideas with global impact.</p>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-sky-600">AI Week</CardTitle>
                <CardDescription>Exploring the future of artificial intelligence</CardDescription>
              </CardHeader>
              <CardContent>
                <p>A week-long event focusing on the latest developments and ethical considerations in AI.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-sky-200 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-sky-800">Upcoming Events & News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-sky-600">Global Leaders Camp 2024</CardTitle>
                <CardDescription>July 15-22, 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Applications now open for our annual leadership program. Join students from around the world!</p>
                <Button className="mt-4" variant="outline">Learn More</Button>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-sky-600">AI Ethics Symposium</CardTitle>
                <CardDescription>September 5, 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Join us for a day of discussions on the ethical implications of AI in society.</p>
                <Button className="mt-4" variant="outline">Register</Button>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-sky-600">New Partnership Announcement</CardTitle>
                <CardDescription>June 1, 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Exciting news! We&apos;re partnering with Stanford University for our next Innovation Challenge.</p>
                <Button className="mt-4" variant="outline">Read More</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 text-sky-800">Why Join Becoming?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Globe className="mx-auto h-12 w-12 text-sky-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-sky-700">Global Network</h3>
              <p>Connect with students and leaders from around the world.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Lightbulb className="mx-auto h-12 w-12 text-sky-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-sky-700">Innovative Projects</h3>
              <p>Work on cutting-edge initiatives that make a real impact.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Calendar className="mx-auto h-12 w-12 text-sky-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-sky-700">Exclusive Events</h3>
              <p>Participate in unique events and workshops with industry leaders.</p>
            </div>
          </div>
          <Button size="lg" className="mt-12 bg-sky-600 hover:bg-sky-700">Become a Member</Button>
        </div>
      </section>
    </Layout>
  )
}