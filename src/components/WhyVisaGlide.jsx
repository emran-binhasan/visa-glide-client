// WhyVisaGlide.js
import React from 'react';


const WhyVisaGlide = () => {
  return (
    <Section className="py-12 bg-gray-100">
      <Container>
        <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Visa Navigator?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="p-6 shadow-lg">
            <h3 className="text-xl font-bold mb-4">Easy Application Process</h3>
            <p>Streamline your visa application with our simple and intuitive process.</p>
          </Card>
          <Card className="p-6 shadow-lg">
            <h3 className="text-xl font-bold mb-4">Comprehensive Information</h3>
            <p>Access up-to-date visa requirements, fees, and timelines all in one place.</p>
          </Card>
          <Card className="p-6 shadow-lg">
            <h3 className="text-xl font-bold mb-4">24/7 Support</h3>
            <p>Get assistance whenever you need it, with expert support available at all times.</p>
          </Card>
        </div>
      </Container>
    </Section>
  );
};

export default WhyVisaGlide;
