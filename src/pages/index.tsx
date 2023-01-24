import { CardList } from "../components/Card";
import Hero from "../components/Hero";
import Layout from "../components/Layout";

const LandingPage = () => {
  return (
    <Layout>
      <div className="flex flex-col my-5 mx-5">
        <div className="my-3">
          <Hero />
        </div>
        <div className="my-3">
          <h3 className="font-bold m-3">Produk Toko Kami</h3>
          <CardList />
        </div>
      </div>
    </Layout>
  );
};

export default LandingPage;
