import React from 'react';
import { Award, MapPin, Truck, Users2 } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users2, number: '5000+', label: 'Happy Customers' },
    { icon: Truck, number: '50+', label: 'Moving Trucks' },
    { icon: Award, number: '10+', label: 'Years Experience' },
    { icon: MapPin, number: '100+', label: 'Cities Covered' }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-oswald font-bold text-navy mb-6">
              About Arun Packers & Movers Bengaluru
            </h2>
            
            <p className="text-charcoal font-opensans text-lg mb-6 leading-relaxed">
              With over a decade of experience in the moving industry, we have established 
              ourselves as Bengaluru's most trusted packers and movers. Our commitment to 
              excellence and customer satisfaction has made us the preferred choice for 
              thousands of families and businesses.
            </p>

            <p className="text-charcoal font-opensans text-lg mb-8 leading-relaxed">
              We understand that moving can be stressful, which is why we offer comprehensive 
              services designed to make your relocation as smooth as possible. From careful 
              packing to secure transportation and timely delivery, we handle every aspect 
              of your move with professional expertise.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-orange/20 rounded-full p-2">
                  <Award className="text-orange" size={20} />
                </div>
                <div>
                  <h4 className="font-opensans font-semibold text-navy mb-1">Licensed & Insured</h4>
                  <p className="text-charcoal font-opensans">Fully licensed and insured for your peace of mind</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-orange/20 rounded-full p-2">
                  <Users2 className="text-orange" size={20} />
                </div>
                <div>
                  <h4 className="font-opensans font-semibold text-navy mb-1">Expert Team</h4>
                  <p className="text-charcoal font-opensans">Skilled professionals trained in safe handling</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-orange/20 rounded-full p-2">
                  <Truck className="text-orange" size={20} />
                </div>
                <div>
                  <h4 className="font-opensans font-semibold text-navy mb-1">Modern Fleet</h4>
                  <p className="text-charcoal font-opensans">Well-maintained trucks equipped for safe transport</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg" 
              alt="Professional moving team"
              className="rounded-lg shadow-xl w-full"
            />
            
            <div className="absolute -bottom-6 -left-6 bg-orange text-white p-6 rounded-lg shadow-lg">
              <h3 className="font-oswald font-bold text-2xl">10+</h3>
              <p className="font-opensans">Years of Excellence</p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-orange/20 rounded-full p-6 mx-auto w-20 h-20 flex items-center justify-center mb-4">
                <stat.icon className="text-orange" size={32} />
              </div>
              <h3 className="text-3xl font-oswald font-bold text-navy mb-2">{stat.number}</h3>
              <p className="text-charcoal font-opensans font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;