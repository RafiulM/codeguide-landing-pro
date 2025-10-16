"use client"

import { Button } from '@/components/ui/button'
import { ArrowRight, Rocket, Github, Star } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

export function CTASection() {
  return (
    <section className="py-20 lg:py-40">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-4" variant="secondary">
            <Rocket className="h-3 w-3 mr-2" />
            Ready to get started?
          </Badge>
          
          <h2 id="cta-heading" className="text-3xl font-bold tracking-tighter md:text-5xl mb-6">
            Start Building Your Next Project Today
          </h2>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of developers who are shipping faster with CodeGuide. 
            No credit card required, instant access to the complete codebase.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="gap-2 text-base px-8">
              Get Started Now
              <ArrowRight className="h-4 w-4" />
            </Button>
            
            <Button size="lg" variant="outline" className="gap-2 text-base px-8">
              <Github className="h-4 w-4" />
              View on GitHub
            </Button>
          </div>
          
          <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span>4.9/5 rating</span>
            </div>
            <div className="h-4 w-px bg-border"></div>
            <span>10,000+ developers</span>
            <div className="h-4 w-px bg-border"></div>
            <span>MIT License</span>
          </div>
        </div>
        
        <div className="mt-16 max-w-2xl mx-auto">
          <div className="bg-muted/50 rounded-lg p-6 text-center">
            <h3 className="font-semibold mb-2">What's included?</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-muted-foreground">
              <div>✅ Complete Source Code</div>
              <div>✅ Lifetime Updates</div>
              <div>✅ Detailed Documentation</div>
              <div>✅ Community Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}