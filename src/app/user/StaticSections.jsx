import Image from "next/image";

const BackgroundSection = () => (
  <div
    className="relative h-72 bg-cover bg-center bg-no-repeat my-20 bg-fixed rounded-xl"
    // style={{ backgroundImage: "url(/images/bg-img.jpg)" }}
  >
    <div className=" opacity-60 h-full w-full bg-blue-900 rounded-xl"></div>
    {/* <div className="absolute top-0 left-0 opacity-60 h-full w-full bg-blue-900 rounded-xl"></div> */}
    <div className="text-white absolute inset-0 flex flex-col items-center justify-center text-center">
      <h2 className="text-4xl font-bold">Your Future Starts Now</h2>
      <p className="text-lg">Let Us Help You To build a Build Good One.</p>
    </div>
  </div>
);

const CardGridSection = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 container">
    {Array.from({ length: 3 }).map((_, index) => (
      <div key={index} className="cards w-full">
        <Image
          src={`/images/card-${index + 1}.jpg`}
          className="border rounded-xl w-full"
          alt="Card"
          width={300}
          height={300}
          loading="lazy"
        />
        <h2 className="font-bold mt-2">Static Word</h2>
        <p className="max-w-80">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque quo
        </p>
      </div>
    ))}
  </div>
);

export { BackgroundSection, CardGridSection };
