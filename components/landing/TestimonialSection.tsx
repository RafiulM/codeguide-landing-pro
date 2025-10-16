"use client"

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Full Stack Developer',
    company: 'TechStartup',
    content: 'CodeGuide saved me weeks of setup time. The authentication and payment integration worked out of the box. I could focus on building my actual features instead of boilerplate.',
    rating: 5,
    avatar: 'SC'
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Indie Hacker',
    company: 'Solo Projects',
    content: 'As an indie developer, I need to move fast. CodeGuide gave me everything I needed to launch my SaaS in record time. The documentation is excellent and the code quality is top-notch.',
    rating: 5,
    avatar: 'MR'
  },
  {
    name: 'Emily Johnson',
    role: 'CTO',
    company: 'Digital Agency',
    content: 'We use CodeGuide as our starting point for all client projects. It\'s reliable, secure, and saves us countless hours. Our team can deliver projects faster than ever before.',
    rating: 5,
    avatar: 'EJ'
  },
  {
    name: 'Alex Kim',
    role: 'Frontend Developer',
    company: 'Design Studio',
    content: 'The component library and TypeScript setup are fantastic. Everything just works and the code is so clean. Best starter kit I\'ve ever used.',
    rating: 5,
    avatar: 'AK'
  },
  {
    name: 'David Park',
    role: 'Backend Engineer',
    company: 'Enterprise Corp',
    content: 'Finally, a starter kit that understands enterprise needs. The security features, database setup, and API structure are exactly what we look for.',
    rating: 5,
    avatar: 'DP'
  },
  {
    name: 'Lisa Thompson',
    role: 'Product Manager',
    company: 'SaaS Company',
    content: 'Our team went from idea to MVP in 3 weeks instead of 3 months. CodeGuide\'s complete stack let us validate our concept without technical delays.',
    rating: 5,
    avatar: 'LT'
  }
]

export function TestimonialSection() {
  return (
    <section className="py-20 lg:py-40 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 id="testimonials-heading" className="text-3xl font-bold tracking-tighter md:text-5xl mb-4">
            Trusted by Developers Worldwide
          </h2>
          <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
            Join thousands of developers who are building amazing applications with CodeGuide.
          </p>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <Badge variant="secondary" className="text-sm">
              4.9/5 Average Rating
            </Badge>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-semibold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <blockquote className="text-muted-foreground leading-relaxed">
                  "{testimonial.content}"
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            Over 10,000+ developers have chosen CodeGuide for their projects
          </p>
        </div>
      </div>
    </section>
  )
}