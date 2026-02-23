import politicsImg from "@/assets/politics.jpeg";

const PoliticsSection = () => (
  <section className="py-24 gradient-navy">
    <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
      <div className="flex justify-center">
        <img
          src={politicsImg}
          alt="OAU in traditional attire"
          className="rounded-lg shadow-2xl w-72 md:w-80 object-cover"
        />
      </div>
      <div className="space-y-6 text-center md:text-left">
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-gold-light">Politics</h2>
        <p className="text-gold-light/70 font-body text-lg leading-relaxed">
          In politics, OAU was a 2023 gubernatorial candidate in Abia State under the umbrella of Action Alliance (AA) party, advocating for a leadership that's transparent, developmental, and accountable to the people of his state.
        </p>
      </div>
    </div>
  </section>
);

export default PoliticsSection;
