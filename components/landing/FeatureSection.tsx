"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle, Zap, Shield, Database, CreditCard, Users } from 'lucide-react'

const features = [
  {
    icon: CheckCircle,
    title: 'Modern Authentication',
    description: 'Built-in user authentication with Clerk, supporting social logins, email/password, and multi-factor authentication.',
    badge: 'Security',
    color: 'text-blue-600'
  },
  {
    icon: Database,
    title: 'Database Integration',
    description: 'Pre-configured Supabase integration with PostgreSQL database, real-time subscriptions, and file storage.',
    badge: 'Backend',
    color: 'text-green-600'
  },
  {
    icon: CreditCard,
    title: 'Payment Processing',
    description: 'Complete Stripe integration for subscriptions, one-time payments, and webhooks with proper error handling.',
    badge: 'Monetization',
    color: 'text-purple-600'
  },
  {
    icon: Zap,
    title: 'Performance Optimized',
    description: 'Built with Next.js 14 App Router, Server Components, and optimized for Core Web Vitals.',
    badge: 'Performance',
    color: 'text-yellow-600'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Security best practices, middleware protection, environment variable management, and secure API routes.',
    badge: 'Security',
    color: 'text-red-600'
  },
  {
    icon: Users,
    title: 'Developer Experience',
    description: 'TypeScript, ESLint, Prettier, comprehensive UI components, and detailed documentation.',
    badge: 'DX',
    color: 'text-indigo-600'
  }
]

export function FeatureSection() {
  return (
    <section className="py-20 lg:py-40">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 id="features-heading" className="text-3xl font-bold tracking-tighter md:text-5xl mb-4">
            Everything You Need to Build Fast
          </h2>
          <p className="text-xl text-muted-foreground max-w-[800px] mx-auto">
            Start with a production-ready foundation that includes authentication, database, payments, and more.
            No more boilerplate setup - just build your features.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <feature.icon className={`h-8 w-8 ${feature.color}`} />
                  <Badge variant="secondary" className="text-xs">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}