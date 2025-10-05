import Card from "../../components/Card";
import Hero from "../../components/Hero";
import dataExports from "../../utils/dataBuilder";
function Home() {
  const jsonData = JSON.stringify(dataExports, null, 2);

  console.log(jsonData);
  return (
    <>
      <Hero />
      <section>
        <div className="content-container">
          <div className="card-container">
            {dataExports.map((user, index) => (
              <Card key={index} {...user} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
