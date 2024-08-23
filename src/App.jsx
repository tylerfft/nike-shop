import {
  CustomerReviews,
  Footer,
  Hero,
  PopularProducts,
  Services,
  Subscribe,
  SuperQuality,
  SpecialOffer,
} from "./sections";

import Nav from "./components/Nav";

const App = () => (
  <main className=" relative">
    <Nav />
    <section className=" xl:padding-l wide:padding-r padding-b">
      <Hero />
    </section>
    <section className="padding">
      <PopularProducts />
    </section>
    <section className="bg-pale-blue padding">
      <SuperQuality />
    </section>
    <section className="padding">
      <Services />
    </section>
    <section className=" bg-pale-blue padding">
      <SpecialOffer />
    </section>
    <section className="padding">
      <CustomerReviews />
    </section>
    <section className=" padding">
      <Subscribe />
    </section>
    <section className=" bg-black padding-x padding-t pb-8">
      <Footer />
    </section>
  </main>
);
export default App;
