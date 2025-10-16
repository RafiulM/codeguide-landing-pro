import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { MoveRight, PhoneCall } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0)
  const titles = useMemo(() => ['Modern', 'Full-stack', 'Secure', 'Scalable', 'Powerful'], [])

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0)
      } else {
        setTitleNumber(titleNumber + 1)
      }
    }, 2000)
    return () => clearTimeout(timeoutId)
  }, [titleNumber, titles])

  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center gap-8 py-20 lg:py-40">
          <header>
            <a
              href="https://codeguide.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center gap-2"
              aria-label="Visit CodeGuide.dev website"
            >
              <Image 
                src="/codeguide-logo.png" 
                alt="CodeGuide.dev Logo" 
                width={42} 
                height={42}
                priority
                sizes="42px"
              />
              <span className="logo-text text-3xl font-bold">CodeGuide</span>
            </a>
          </header>
          <div className="flex flex-col gap-4">
            <h1 className="font-regular max-w-2xl text-center text-5xl tracking-tighter md:text-7xl">
              <span className="relative flex w-full justify-center overflow-hidden text-center md:mb-1">
                <span className="sr-only" aria-live="polite" aria-atomic="true">
                  {titles[titleNumber]} Starter Kit
                </span>
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold"
                    initial={{ opacity: 0, y: '-100' }}
                    transition={{ type: 'spring', stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                    aria-hidden={titleNumber !== index}
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
              <span className="text-spektr-cyan-50">Starter Kit</span>
            </h1>

            <p className="max-w-2xl text-center text-lg leading-relaxed tracking-tight text-muted-foreground md:mt-8 md:text-xl">
              Start building with a modern web application template featuring authentication,
              database integration, and payment processing. Built with Next.js 14, Clerk, Supabase,
              and Stripe to accelerate your development process.
            </p>
          </div>
          <div className="flex flex-row gap-3">
            <Button size="lg" className="gap-4">
              Get Started <MoveRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Hero }
