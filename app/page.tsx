import type { Metadata } from 'next'
import { HeroSection } from '@/components/landing/HeroSection'
import { FeatureSection } from '@/components/landing/FeatureSection'
import { TestimonialSection } from '@/components/landing/TestimonialSection'
import { CTASection } from '@/components/landing/CTASection'
import { WaitlistForm } from '@/components/landing/WaitlistForm'
import { Button } from '@/components/ui/button'
import { Github, Star, Users, Zap } from 'lucide-react'
import { StructuredData } from '@/components/landing/StructuredData'

export const metadata: Metadata = {
  title: 'CodeGuide.dev - Modern Web Development Starter Kit',
  description: 'Start building faster with CodeGuide - a production-ready starter kit featuring authentication, database integration, payments, and more. Built with Next.js 14, Clerk, Supabase, and Stripe.',
  keywords: ['Next.js', 'React', 'Starter Kit', 'Web Development', 'Authentication', 'Database', 'Payments', 'Supabase', 'Clerk', 'Stripe'],
  authors: [{ name: 'CodeGuide.dev' }],
  creator: 'CodeGuide.dev',
  publisher: 'CodeGuide.dev',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://codeguide.dev',
    title: 'CodeGuide.dev - Modern Web Development Starter Kit',
    description: 'Start building faster with CodeGuide - a production-ready starter kit featuring authentication, database integration, payments, and more.',
    siteName: 'CodeGuide.dev',
    images: [
      {
        url: '/codeguide-logo.png',
        width: 1200,
        height: 630,
        alt: 'CodeGuide.dev Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CodeGuide.dev - Modern Web Development Starter Kit',
    description: 'Start building faster with CodeGuide - a production-ready starter kit featuring authentication, database integration, payments, and more.',
    images: ['/codeguide-logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function Home() {
  return (
    <>
      <StructuredData />
      
      {/* Skip link for accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded-md z-50"
      >
        Skip to main content
      </a>
      
      <main className="min-h-screen bg-background" id="main-content">
        <HeroSection />
        
        <section id="features" aria-labelledby="features-heading">
          <FeatureSection />
        </section>
        
        {/* Waitlist Section */}
        <section 
          id="waitlist" 
          className="py-20 lg:py-40 bg-muted/30"
          aria-labelledby="waitlist-heading"
        >
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-12">
                <h2 id="waitlist-heading" className="text-3xl font-bold tracking-tighter md:text-5xl mb-4">
                  Get Early Access
                </h2>
                <p className="text-xl text-muted-foreground">
                  Be the first to know when we launch new features and updates.
                </p>
              </div>
              <WaitlistForm className="max-w-md mx-auto" />
            </div>
          </div>
        </section>
        
        <section id="testimonials" aria-labelledby="testimonials-heading">
          <TestimonialSection />
        </section>
        
        <section aria-labelledby="cta-heading">
          <CTASection />
        </section>
      </main>
      
      {/* Footer */}
      <footer className="border-t py-12" role="contentinfo">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="font-bold text-lg mb-4">CodeGuide.dev</h3>
              <p className="text-muted-foreground mb-4 max-w-md">
                Modern web development starter kit that helps you build production-ready applications faster.
              </p>
              <div className="flex gap-4">
                <Button variant="outline" size="sm" asChild>
                  <a href="https://github.com/codeguide-dev/codeguide-starter" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    GitHub
                  </a>
                </Button>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#features" className="hover:text-foreground transition-colors">Features</a></li>
                <li><a href="#testimonials" className="hover:text-foreground transition-colors">Testimonials</a></li>
                <li><a href="#waitlist" className="hover:text-foreground transition-colors">Waitlist</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Support</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>&copy; 2024 CodeGuide.dev. All rights reserved.</p>
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span>4.9/5</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="h-4 w-4" />
                <span>10,000+ developers</span>
              </div>
              <div className="flex items-center gap-1">
                <Zap className="h-4 w-4" />
                <span>Built with Next.js 14</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
