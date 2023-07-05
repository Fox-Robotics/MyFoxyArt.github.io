import Header from "../components/header";
import Footer from "../components/footer";
import UserPreview from "../components/userResume";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen justify-between bg-fox-pattern">
      <Header />

      <main className="flex flex-col w-full items-center">
        <section className="flex flex-col items-center justify-center my-28">
          <div className="relative">
            <h1 className="font-bold text-3xl mb-9 circle-decoration">
              About Us
            </h1>
          </div>
          <p className="max-w-3xl text-lg md:text-2xl px-2 text-center">
            Foxcoding is a subdivision of FoxRobotics, a representative team at
            CETYS Universidad for engineering-related competitions, primarily
            for robotics and programming matters.
            <br />
            <br />
            FoxRobotics, with a trajectory of more than 10 years, this team has
            represented CETYS Universidad in countless regional, national and
            international competitions, with new members being added each year.
          </p>
        </section>
        <section className="mt-6 flex flex-col items-center w-full max-w-5xl px-5">
          <h2 className="text-2xl font-bold">Members</h2>
          <UserPreview
            name="Alberto Munguia"
            tag="beto_munguia"
            role="Developer"
          />
          <UserPreview
            name="Diego Villalobos"
            tag="diego_villalobos"
            role="Developer"
            reverse={true}
          />
          <UserPreview
            name="Elizabeth Lopez"
            tag="elizabeth_lopez"
            role="Researcher"
          />
          <UserPreview
            name="Francisco Millan"
            tag="francisco_millan"
            role="Developer"
            reverse={true}
          />
          <UserPreview
            name="Gael Hurtado"
            tag="gael_hurtado"
            role="Developer"
          />
        </section>
      </main>

      <Footer />
    </div>
  );
}
