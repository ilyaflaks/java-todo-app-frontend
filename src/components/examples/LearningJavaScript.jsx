const person = {
  name: "Ranga",
  address: {
    line1: "Baker Street",
    city: "London",
    country: "UK",
  },
  profiles: ["twitter", "linkedin", "instagramma"],
  prointProfile: () => {
    person.profiles.map((profile) => {
      console.log(profile);
    });
    //console.log(person.profiles[0]);
  },
};

export default function LearningJavaScript() {
  return (
    <>
      <div>{person.name}</div>
      <div>{person.address.line1}</div>
      <div>{person.profiles[0]}</div>
      <div>{person.prointProfile()}</div>
    </>
  );
}
