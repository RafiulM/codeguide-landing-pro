flowchart TD
  Start[App Start]
  Start --> Init[Initialize App]
  Init --> Landing[Display Landing Page]
  Landing --> AuthCheck{Is User Authenticated}
  AuthCheck -->|No| Auth[Show Login and Signup]
  AuthCheck -->|Yes| Dashboard[Show Dashboard]
  Auth --> SignUp[Clerk SignUp]
  Auth --> SignIn[Clerk SignIn]
  SignUp --> Dashboard
  SignIn --> Dashboard
  Dashboard --> Feature[Browse Features]
  Dashboard --> Billing[Go to Billing Page]
  Billing --> Checkout[Initiate Stripe Checkout]
  Checkout --> Webhook[Receive Stripe Webhook]
  Webhook --> UpdateSub[Update Subscription in Supabase]
  UpdateSub --> Dashboard
  Dashboard --> Realtime[RealTime Updates via Supabase]
  Realtime --> Dashboard
  Dashboard --> AI[AI Features via OpenAI API]
  AI --> Dashboard