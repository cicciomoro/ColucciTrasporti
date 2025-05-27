import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Clock, Package, Truck, MapPin, Phone } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Toaster } from '@/components/ui/toaster';

const App = () => {
  const fadeInAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: 'easeInOut',
      },
    }),
  };

  const services = [
    {
      icon: <Truck className="h-10 w-10 text-primary" />,
      title: 'Spedizioni Private',
      description: 'Servizi di spedizione nazionali e internazionali per privati e aziende.',
    },
    {
      icon: <Package className="h-10 w-10 text-primary" />,
      title: 'Punto InPost',
      description: 'Ritira e spedisci i tuoi pacchi InPost comodamente presso il nostro negozio.',
    },
    {
      icon: <Package className="h-10 w-10 text-primary" />,
      title: 'Punto BRT',
      description: 'Siamo un punto di ritiro e spedizione autorizzato per i servizi BRT (Bartolini).',
    },
  ];

  const storeAddress = "Via Padre Vito Buonsanto 9, 72017 Ostuni (BR)";
  const storePhoneNumber = "+39 346 132 6321";
  const storeEmail = "autotrasp.colucci@libero.it";
  
  const mapEmbedUrl = "https://www.openstreetmap.org/export/embed.html?bbox=17.5780,40.7300,17.5820,40.7320&layer=mapnik&marker=40.73100,17.58000";


  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-white flex flex-col">
      <header className="bg-primary shadow-lg sticky top-0 z-50">
        <div className="container mx-auto py-6 px-4 md:px-6">
          <motion.h1 
            className="text-4xl md:text-5xl font-extrabold text-primary-foreground text-center tracking-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Colucci Trasporti
          </motion.h1>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 md:px-6 py-12">
        <motion.section 
          className="text-center mb-16"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Il Tuo Partner Affidabile per le Spedizioni
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Da Colucci Trasporti, offriamo soluzioni di spedizione rapide e sicure per tutte le tue esigenze. Siamo anche un comodo punto di ritiro per i tuoi pacchi InPost e BRT.
          </p>
        </motion.section>

        <motion.section 
          id="services" 
          className="mb-16"
          variants={fadeInAnimation}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">I Nostri Servizi</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.custom
                key={service.title}
                custom={index}
                variants={fadeInAnimation}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.3 }}
              >
                <Card className="h-full hover:shadow-xl transition-shadow duration-300 border-primary border-2 bg-white">
                  <CardHeader className="items-center text-center">
                    {service.icon}
                    <CardTitle className="mt-4 text-2xl text-primary">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.custom>
            ))}
          </div>
        </motion.section>

        <motion.section 
          id="hours" 
          className="mb-16 bg-gray-50 p-8 rounded-xl shadow-lg"
          variants={fadeInAnimation}
          custom={services.length} 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Orari di Apertura</h2>
          <div className="flex flex-col items-center text-center text-gray-700">
            <div className="flex items-center mb-4 text-xl">
              <Clock className="h-8 w-8 mr-3 text-primary" />
              <span className="font-semibold">Lunedì - Sabato:</span>
            </div>
            <p className="text-lg mb-1">Mattina: 9:00 – 12:45</p>
            <p className="text-lg">Pomeriggio: 17:30 – 19:45</p>
            <p className="text-md mt-4 text-gray-500">Domenica: Chiuso</p>
          </div>
        </motion.section>

        <motion.section 
          id="contact" 
          className="mb-16"
          variants={fadeInAnimation}
          custom={services.length + 1}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Contattaci</h2>
          <Card className="max-w-lg mx-auto bg-white shadow-xl border-primary border-t-4">
            <CardContent className="p-8 text-center">
              <div className="flex flex-col items-center space-y-6">
                <div className="flex items-center text-lg text-gray-700">
                  <Mail className="h-7 w-7 mr-3 text-primary" />
                  <a href={`mailto:${storeEmail}`} className="hover:text-primary transition-colors">
                    {storeEmail}
                  </a>
                </div>
                <div className="flex items-center text-lg text-gray-700">
                  <Phone className="h-7 w-7 mr-3 text-primary" />
                  <a href={`tel:${storePhoneNumber}`} className="hover:text-primary transition-colors">
                    {storePhoneNumber}
                  </a>
                </div>
                <div className="flex items-center text-lg text-gray-700">
                  <MapPin className="h-7 w-7 mr-3 text-primary" />
                  <span>{storeAddress}</span>
                </div>
                 <p className="text-sm text-gray-500 pt-4">
                  Per informazioni urgenti o assistenza immediata, non esitare a contattarci via email, telefono o a visitare il nostro punto vendita durante gli orari di apertura.
                </p>
                <Button 
                  onClick={() => window.location.href = `mailto:${storeEmail}`}
                  className="bg-primary hover:bg-red-700 text-primary-foreground font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  <Mail className="mr-2 h-5 w-5" /> Invia una Email
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.section>
        
        <section className="text-center my-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Dove Siamo</h2>
          <p className="text-lg text-gray-600 mb-8">
            Ci trovi in {storeAddress}. Utilizza la mappa qui sotto per raggiungerci.
          </p>
          <div className="aspect-w-16 aspect-h-9 rounded-lg shadow-xl overflow-hidden border-2 border-primary">
            <iframe
              src={mapEmbedUrl}
              width="100%"
              height="450"
              style={{ border:0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mappa Colucci Trasporti"
            ></iframe>
          </div>
        </section>

      </main>

      <footer className="bg-gray-800 text-gray-300 py-8">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Colucci Trasporti. Tutti i diritti riservati.
          </p>
          <p className="text-xs mt-2">
            {storeAddress} | Tel: {storePhoneNumber} | Email: {storeEmail}
          </p>
          <p className="text-xs mt-2">
            Sito web realizzato con passione da Hostinger Horizons.
          </p>
        </div>
      </footer>
      <Toaster />
    </div>
  );
};

export default App;