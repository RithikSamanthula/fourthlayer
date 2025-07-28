import { Button } from "@/components/ui/neon-button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GlowingEffect } from "@/components/ui/glowing-effect"
import {
  Camera,
  Mic,
  Brain,
  Heart,
  Shield,
  Smartphone,
  Zap,
  Eye,
  Activity,
  CheckCircle,
  ArrowRight,
  Microscope,
  Users,
  Award,
  Globe,
} from "lucide-react"
import Link from "next/link"
import { HeroSection } from "@/components/ui/hero-section-1"
import { BackgroundBeams } from "@/components/ui/background-beams"
import { Input } from "@/components/ui/input"

export default function FourthLayerAI() {
  return (
    <div className="min-h-screen bg-black">
      <HeroSection />

      {/* How It Works - Layers */}
      <section id="how-it-works" className="py-20 bg-black grid-bg">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-blue-500/20 text-blue-300 hover:bg-blue-500/30 border border-blue-600/30 glow-blue">
              Four Layers of Analysis
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold tracking-tighter leading-tight py-2">
              <span className="bg-clip-text text-transparent bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)]">
                How FourthLayer AI{" "}
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Works</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Our revolutionary AI system analyzes your health through four distinct layers of biometric data, all
              captured seamlessly through your smartphone.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Layer 1: Visual Biometrics */}
            <div className="relative">
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
                borderWidth={2}
                variant="blue"
              />
              <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-slate-900/30 border border-blue-600/20 relative">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-sky-600 to-sky-700 rounded-xl flex items-center justify-center glow-blue">
                      <Camera className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-100">Layer 1: Visual Biometrics</h3>
                      <p className="text-slate-500">Camera-based analysis</p>
                    </div>
                  </div>
                  <p className="text-slate-400 mb-6">
                    Advanced computer vision analyzes your skin tone, facial features, eye patterns, and
                    micro-expressions to detect early signs of health changes and stress indicators.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-blue-400" />
                      <span className="text-sm text-slate-400">Skin tone and texture analysis</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-blue-400" />
                      <span className="text-sm text-slate-400">Facial feature mapping</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-blue-400" />
                      <span className="text-sm text-slate-400">Eye movement tracking</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Layer 2: Voice Analysis */}
            <div className="relative">
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
                borderWidth={2}
                variant="blue"
              />
              <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-slate-900/30 border border-blue-600/20 relative">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-700 rounded-xl flex items-center justify-center glow-blue">
                      <Mic className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-100">Layer 2: Voice Analysis</h3>
                      <p className="text-slate-500">Audio pattern recognition</p>
                    </div>
                  </div>
                  <p className="text-slate-400 mb-6">
                    Sophisticated audio processing examines your voice patterns, breathing rhythms, and speech
                    characteristics to identify respiratory health, stress levels, and emotional well-being.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-blue-400" />
                      <span className="text-sm text-slate-400">Breathing pattern analysis</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-blue-400" />
                      <span className="text-sm text-slate-400">Voice stress detection</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-blue-400" />
                      <span className="text-sm text-slate-400">Speech pattern monitoring</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Layer 3: AI Processing */}
            <div className="relative">
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
                borderWidth={2}
                variant="blue"
              />
              <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-slate-900/30 border border-blue-600/20 relative">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-xl flex items-center justify-center glow-blue">
                      <Brain className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-100">Layer 3: AI Processing</h3>
                      <p className="text-slate-500">Neural network analysis</p>
                    </div>
                  </div>
                  <p className="text-slate-400 mb-6">
                    Our proprietary AI models process millions of data points in real-time, cross-referencing patterns
                    with medical databases to identify correlations and potential health indicators.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-blue-400" />
                      <span className="text-sm text-slate-400">Real-time data processing</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-blue-400" />
                      <span className="text-sm text-slate-400">Pattern recognition</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-blue-400" />
                      <span className="text-sm text-slate-400">Medical correlation analysis</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Layer 4: Health Insights */}
            <div className="relative">
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
                borderWidth={2}
                variant="blue"
              />
              <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-slate-900/30 border border-blue-600/20 relative">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-700 rounded-xl flex items-center justify-center glow-blue">
                      <Activity className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-100">Layer 4: Health Insights</h3>
                      <p className="text-slate-500">Personalized recommendations</p>
                    </div>
                  </div>
                  <p className="text-slate-400 mb-6">
                    Receive personalized health insights, early warning alerts, and actionable recommendations tailored
                    to your unique biometric profile and health history.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-blue-400" />
                      <span className="text-sm text-slate-400">Personalized health scores</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-blue-400" />
                      <span className="text-sm text-slate-400">Early warning system</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-blue-400" />
                      <span className="text-sm text-slate-400">Actionable recommendations</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-slate-950/20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-blue-500/20 text-blue-300 hover:bg-blue-500/30 border border-blue-600/30 glow-blue">
              Powerful Features
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold tracking-tighter leading-tight py-2">
              <span className="bg-clip-text text-transparent bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)]">
                Everything You Need for{" "}
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                Better Health
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Smartphone className="w-6 h-6 text-white" />,
                title: "No Wearables Required",
                description:
                  "Use just your smartphone - no additional devices or sensors needed for comprehensive health monitoring.",
                gradient: "from-blue-600 to-cyan-700",
              },
              {
                icon: <Zap className="w-6 h-6 text-white" />,
                title: "Real-Time Analysis",
                description: "Get instant health insights with our lightning-fast AI processing in under 30 seconds.",
                gradient: "from-sky-600 to-sky-700",
              },
              {
                icon: <Eye className="w-6 h-6 text-white" />,
                title: "Early Detection",
                description:
                  "Identify potential health issues before symptoms appear with our advanced predictive algorithms.",
                gradient: "from-blue-600 to-cyan-700",
              },
              {
                icon: <Shield className="w-6 h-6 text-white" />,
                title: "Privacy First",
                description:
                  "Your health data is encrypted and processed locally on your device for maximum privacy and security.",
                gradient: "from-indigo-600 to-indigo-700",
              },
              {
                icon: <Heart className="w-6 h-6 text-white" />,
                title: "Personalized Care",
                description:
                  "Receive tailored health recommendations based on your unique biometric profile and lifestyle.",
                gradient: "from-slate-600 to-slate-700",
              },
              {
                icon: <Activity className="w-6 h-6 text-white" />,
                title: "Continuous Monitoring",
                description: "Track your health trends over time with daily check-ins and long-term pattern analysis.",
                gradient: "from-blue-500 to-blue-600",
              },
            ].map((feature, index) => (
              <div key={index} className="relative">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={2}
                  variant="blue"
                />
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-slate-900/30 border border-blue-600/20 relative">
                  <CardContent className="p-6 text-center">
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mx-auto mb-4 ${feature.gradient.includes("blue") ? "glow-blue" : "glow-blue"}`}
                    >
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-slate-100">{feature.title}</h3>
                    <p className="text-slate-400">{feature.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Science Section */}
      <section id="science" className="py-20 bg-black grid-bg">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-blue-500/20 text-blue-300 hover:bg-blue-500/30 border border-blue-600/30 glow-blue">
              Scientific Foundation
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold tracking-tighter leading-tight py-2">
              <span className="bg-clip-text text-transparent bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)]">
                Backed by{" "}
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Science</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Our AI models are trained on millions of data points and validated through rigorous clinical studies with
              leading medical institutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Microscope className="w-6 h-6 text-white" />,
                title: "Clinical Validation",
                description:
                  "Validated through peer-reviewed studies with 95% accuracy in early health indicator detection.",
                gradient: "from-blue-600 to-cyan-700",
              },
              {
                icon: <Brain className="w-6 h-6 text-white" />,
                title: "AI Research",
                description:
                  "Developed using cutting-edge machine learning algorithms and neural network architectures.",
                gradient: "from-indigo-600 to-indigo-700",
              },
              {
                icon: <Award className="w-6 h-6 text-white" />,
                title: "Medical Grade",
                description:
                  "Built to medical device standards for health monitoring and early detection applications.",
                gradient: "from-sky-600 to-sky-700",
              },
            ].map((item, index) => (
              <div key={index} className="relative">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={2}
                  variant="blue"
                />
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-slate-900/30 border border-blue-600/20 relative">
                  <CardContent className="p-6 text-center">
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center mx-auto mb-4 ${item.gradient.includes("blue") ? "glow-blue" : "glow-blue"}`}
                    >
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-slate-100">{item.title}</h3>
                    <p className="text-slate-400">{item.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-950/20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-blue-500/20 text-blue-300 hover:bg-blue-500/30 border border-blue-600/30 glow-blue">
              About FourthLayer AI
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold tracking-tighter leading-tight py-2">
              <span className="bg-clip-text text-transparent bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)]">
                Pioneering the{" "}
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Future</span>
              <span className="bg-clip-text text-transparent bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)]">
                {" "}
                of Healthcare
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Founded by a team of AI researchers, medical professionals, and healthcare innovators, FourthLayer AI is
              revolutionizing how we monitor and understand our health.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-100">Our Mission</h3>
              <p className="text-slate-400 leading-relaxed">
                We believe that everyone deserves access to advanced health monitoring technology. By leveraging the
                power of AI and the ubiquity of smartphones, we're making personalized healthcare accessible to billions
                of people worldwide.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative">
                  <GlowingEffect
                    spread={30}
                    glow={true}
                    disabled={false}
                    proximity={48}
                    inactiveZone={0.01}
                    borderWidth={1}
                    variant="blue"
                  />
                  <div className="text-center p-4 bg-slate-900/30 rounded-lg border border-blue-600/20 relative">
                    <div className="text-2xl font-bold text-blue-400">10M+</div>
                    <div className="text-sm text-slate-500">Health Scans</div>
                  </div>
                </div>
                <div className="relative">
                  <GlowingEffect
                    spread={30}
                    glow={true}
                    disabled={false}
                    proximity={48}
                    inactiveZone={0.01}
                    borderWidth={1}
                    variant="blue"
                  />
                  <div className="text-center p-4 bg-slate-900/30 rounded-lg border border-blue-600/20 relative">
                    <div className="text-2xl font-bold text-blue-400">95%</div>
                    <div className="text-sm text-slate-500">Accuracy Rate</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              {[
                {
                  icon: <Users className="w-6 h-6 text-white" />,
                  title: "Expert Team",
                  description: "Leading AI researchers and medical professionals",
                  gradient: "from-blue-600 to-cyan-700",
                },
                {
                  icon: <Globe className="w-6 h-6 text-white" />,
                  title: "Global Impact",
                  description: "Available in 50+ countries worldwide",
                  gradient: "from-indigo-600 to-indigo-700",
                },
                {
                  icon: <Shield className="w-6 h-6 text-white" />,
                  title: "Privacy Focused",
                  description: "End-to-end encryption and local processing",
                  gradient: "from-slate-600 to-slate-700",
                },
              ].map((item, index) => (
                <div key={index} className="relative">
                  <GlowingEffect
                    spread={30}
                    glow={true}
                    disabled={false}
                    proximity={48}
                    inactiveZone={0.01}
                    borderWidth={1}
                    variant="blue"
                  />
                  <div className="flex items-center space-x-4 p-4 bg-slate-900/30 rounded-lg border border-blue-600/20 relative">
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${item.gradient} rounded-xl flex items-center justify-center ${item.gradient.includes("blue") ? "glow-blue" : "glow-blue"}`}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-100">{item.title}</h4>
                      <p className="text-sm text-slate-400">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Join Waitlist Section - CLEAN VERSION WITH ONLY ONE NEON EFFECT */}
      <section id="early-access" className="py-20 bg-black">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="relative max-w-4xl mx-auto">
            <GlowingEffect
              spread={60}
              glow={true}
              disabled={false}
              proximity={80}
              inactiveZone={0.01}
              borderWidth={2}
              variant="blue"
            />
            <Card className="relative overflow-hidden bg-slate-900/40 backdrop-blur-sm border-0 shadow-2xl">
              <div className="absolute inset-0">
                <BackgroundBeams />
              </div>
              <CardContent className="relative z-10 p-12 text-center">
                <h2 className="text-3xl lg:text-5xl font-bold tracking-tighter leading-tight py-2 mb-6">
                  <span className="bg-clip-text text-transparent bg-[linear-gradient(180deg,_#FFF_0%,_rgba(255,_255,_255,_0.00)_202.08%)]">
                    Join the{" "}
                  </span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                    Waitlist
                  </span>
                </h2>
                <p className="text-slate-400 max-w-2xl mx-auto mb-8 text-lg leading-relaxed">
                  Be among the first to experience the future of personalized healthcare. Get exclusive early access to
                  FourthLayer AI and join thousands of early adopters revolutionizing health monitoring.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 items-center justify-center max-w-md mx-auto mb-6">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 bg-slate-900/60 border-blue-600/40 text-slate-100 placeholder:text-slate-500 focus:border-blue-500/60 focus:ring-blue-500/20 backdrop-blur-sm"
                  />
                  <Button
                    variant="solid"
                    size="lg"
                    className="text-base px-6 h-10 whitespace-nowrap flex items-center gap-2"
                  >
                    Join Waitlist
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
                <p className="text-sm text-slate-500">
                  No credit card required • Available on iOS and Android • Privacy Compliant
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-slate-400 py-12 border-t border-blue-600/20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <span className="text-xl font-bold text-slate-100">FourthLayer AI</span>
              <p className="text-slate-500">Revolutionary AI-powered health monitoring through your smartphone.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-slate-200">Product</h4>
              <div className="space-y-2 text-slate-500">
                <Link href="#" className="block hover:text-blue-400 transition-colors">
                  Features
                </Link>
                <Link href="#" className="block hover:text-blue-400 transition-colors">
                  How It Works
                </Link>
                <Link href="#" className="block hover:text-blue-400 transition-colors">
                  Pricing
                </Link>
                <Link href="#" className="block hover:text-blue-400 transition-colors">
                  FAQ
                </Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-slate-200">Company</h4>
              <div className="space-y-2 text-slate-500">
                <Link href="#" className="block hover:text-blue-400 transition-colors">
                  About
                </Link>
                <Link href="#" className="block hover:text-blue-400 transition-colors">
                  Careers
                </Link>
                <Link href="#" className="block hover:text-blue-400 transition-colors">
                  Press
                </Link>
                <Link href="#" className="block hover:text-blue-400 transition-colors">
                  Contact
                </Link>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-slate-200">Legal</h4>
              <div className="space-y-2 text-slate-500">
                <Link href="#" className="block hover:text-blue-400 transition-colors">
                  Privacy Policy
                </Link>
                <Link href="#" className="block hover:text-blue-400 transition-colors">
                  Terms of Service
                </Link>
                <Link href="#" className="block hover:text-blue-400 transition-colors">
                  Security
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t border-blue-600/20 mt-8 pt-8 text-center text-slate-500">
            <p>&copy; {new Date().getFullYear()} FourthLayer AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
