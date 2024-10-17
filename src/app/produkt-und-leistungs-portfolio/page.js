import Image from "next/image";
import productBG from "../../../public/img/portfolio-bg.jpeg";
import product1 from "../../../public/img/portfolio-bg2.jpeg";

const page = () => {
  return (
    <>
      <section className="hero-banner">
        <div className="hero-wrapper">
          <div className="hero-img">
            <Image src={productBG} alt="hero" />
          </div>
        </div>
      </section>

      <section className="section product-dec py ">
        <div className="container">
          <div className="product-dec-wrapper">
            <div className="com-title">
              <span> At a glance</span>
              <h2>
                REIG is a premier real estate Investment firm dedicated to
                providing exceptional Investment opportunities in the real
                estate sector. Our team consists of seasoned professionals with
                extensive experience in real estate acquisition, management and
                development.
              </h2>
            </div>
            <div className="product-img">
              <Image src={product1} alt="product image" />
            </div>
            <div className="product-title">
              <h2>Our Mission</h2>
              <div className="dami-text">
                <p>
                  Our mission is to deliver superior returns for our investors
                  while maintaining the highest standards of integrity and
                  transparency. We believe in building long-term relationships
                  based on trust and performance.
                </p>
                <p>
                  Insgesamt zeigt die Vision von KI-Agenten, die kooperativ und
                  intelligent agieren, um komplexe Aufgaben zu bewältigen,
                  großes Potenzial. Die Verbindung von KI und neuronalen
                  Netzwerken verspricht eine aufregende Zukunft für EAS Lösung.
                </p>
              </div>
            </div>
            <div className="product-img">
              <Image src={product1} alt="product image" />
            </div>
            <div className="product-title">
              <h2>Our Vision</h2>
              <div className="dami-text">
                <p>
                  To be recognized as a leader in the real estate investment
                  space, known for our innovative strategies, deep market
                  insights, and commitment to sustainable practices. We aim to
                  create value not just for our investors, but for the
                  communities we serve.
                </p>
              </div>
            </div>
            <div className="product-line vision-line">
              <div className="com-title">
                <span> Exploring Our Opportunities</span>
              </div>
              <div className="pr-blog-boxs">
                <div className="pr-blog-box">
                  <div className="pr-title">
                    <p>Ersetzen Nr. 1</p>
                  </div>
                  <div className="pr-dec">
                    <p>
                      Diversified investments across residential, commercial,
                      and industrial sectors
                    </p>
                  </div>
                </div>

                <div className="pr-blog-box">
                  <div className="pr-title">
                    <p>Ersetzen Nr. 2</p>
                  </div>
                  <div className="pr-dec">
                    <p>
                      In-depth market research to identify high-growth potential
                      locations
                    </p>
                  </div>
                </div>

                <div className="pr-blog-box">
                  <div className="pr-title">
                    <p>Ersetzen Nr. 3</p>
                  </div>
                  <div className="pr-dec">
                    <p>
                      Expertise in value-add and redevelopment projects for
                      maximizing returns
                    </p>
                  </div>
                </div>

                <div className="pr-blog-box">
                  <div className="pr-title">
                    <p>Ersetzen Nr. 4</p>
                  </div>
                  <div className="pr-dec">
                    <p>
                      Strong partnerships with industry leaders to ensure
                      seamless transactions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
