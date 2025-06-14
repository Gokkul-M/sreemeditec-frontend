
import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CheckCircle } from 'lucide-react';

const ServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
              <p className="text-lg text-gray-600 mb-8">
              We offer a range of high-quality medical equipment solutions tailored to healthcare providers' needs. Discover how we can support your facility's success.<br/><br/>Are You Need Equipment Service Support?</p>
              <Button size="lg">Get a Service Support</Button>
            </div>
          </div>
        </section>

        {/* Services Categories */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="residential" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList>
                  <TabsTrigger value="residential">Equipment </TabsTrigger>
                  <TabsTrigger value="commercial">Furniture</TabsTrigger>
                  <TabsTrigger value="renovation">Pipeline</TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="residential" className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-3xl font-semibold mb-4">Equipment</h2>
                    <p className="text-gray-600 mb-6">
                    We provide reliable and advanced hospital equipment designed to improve patient care and enhance operational efficiency. Our solutions are tailored to meet the highest standards of the healthcare industry.                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        <span>Patient monitoring systems and diagnostic tools</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        <span>Surgical and ICU equipment</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        <span>Hospital beds and mobility solutions</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        <span>Lot more... (500+ Products)</span>
                      </li>
                    </ul>
                  </div>
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <img src="public\op1.jpg" alt="Residential Service" className="w-full h-full object-cover" />
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="commercial" className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="rounded-lg overflow-hidden shadow-lg order-2 md:order-1">
                    <img src="hospital.jpg" alt="Commercial Service" className="w-full h-full object-cover" />
                  </div>
                  <div className="order-1 md:order-2">
                    <h2 className="text-3xl font-semibold mb-4">Hospital Furniture</h2>
                    <p className="text-gray-600 mb-6">
                    We supply high-quality, durable hospital furniture designed to ensure comfort, safety, and functionality for both patients and medical staff. Our range supports efficient workflows and enhances the overall healthcare environment.                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        <span>Adjustable hospital beds and mattresses</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        <span>Overbed tables and bedside cabinets</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        <span>Examination and treatment tables</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        <span>Medical chairs, trolleys, stools and lot more...</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="renovation" className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-3xl font-semibold mb-4">Medical Gas Pipeline</h2>
                    <p className="text-gray-600 mb-6">
                    We provide advanced medical gas pipeline systems (MGPS) that ensure safe, efficient, and continuous delivery of essential medical gases throughout healthcare facilities. Our systems are designed to meet international standards and hospital-specific needs                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        <span>Centralized medical gas supply systems</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        <span>Oxygen, nitrous oxide, and vacuum pipelines</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        <span>Bedhead panels and gas outlets</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        <span>Installation, testing, and maintenance services</span>
                      </li>
                    </ul>
                  </div>
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <img src="pipeline.jpeg" alt="Medical Gas Pipeline" className="w-full h-full object-cover" />
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Service Process */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-semibold mb-4">Our Process</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                We follow a structured approach to ensure your project is completed on time, within budget, and exceeds your expectations.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: "01",
                  title: "Medical Equipment Supply",
                  description: "We offer a broad selection of advanced medical equipment for hospitals, clinics, and diagnostic centers to meet modern healthcare demands."
                },
                {
                  step: "02",
                  title: "Installation & Maintenance",
                  description: "Our trained technicians ensure proper installation and provide ongoing maintenance to keep your equipment functioning at peak performance."
                },
                {
                  step: "03",
                  title: "Consultation & Procurement",
                  description: "We help healthcare providers make informed decisions with expert consultation and hassle-free procurement of medical technologies."
                },
                {
                  step: "04",
                  title: "After-Sales Support",
                  description: "We provide reliable after-sales service, including training, troubleshooting, and quick replacement to ensure uninterrupted operations."
                }
              ].map((process, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <span className="inline-block text-2l font-bold text-primary border-2 border-primary rounded-full w-12 h-12 flex items-center justify-center mb-2">
                      {process.step}
                    </span>
                    <CardTitle>{process.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{process.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-semibold mb-4">Ready to Start Hospital Project?</h2>
            <p className="max-w-2xl mx-auto mb-8">
              Contact us today for a free consultation and estimate. Let's bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
  <a 
    href="https://mail.google.com/mail/?view=cm&fs=1&to=sreemeditec@gmail.com" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <Button variant="secondary" size="lg">Contact Us</Button>
  </a>
</div>


          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
