import React from "react";
import bus from "../../public/bus bg.jpg";
import movie from "../../public/movie2.jpg";
import currency from "../../public/currency.png";
import rock from "../../public/rock.jpg";

function PortFolio() {
  const cardItem = [
    {
      id: 1,
      logo: bus,
      name: "Bus Pass System",
      description: "A system to manage bus pass services for students",
      githubLink: "https://github.com/SarthakSP18/Bus-Pass-Management-System-Project",
    },
    {
      id: 2,
      logo: movie,
      name: "Movie Ticket Booking",
      description: "A web application to book movie tickets with seat selection.",
      githubLink: "https://github.com/SarthakSP18/MovieTicketBookingSystem-OMTBS",
    },
    {
      id: 3,
      logo: currency,
      name: "Currency Convertor",
      description: "Currency Convertor with api.",
      githubLink: "https://github.com/SarthakSP18/currency-convertor",
    },
    {
      id: 4,
      logo: rock,
      name: "Stone Paper Scissor Game",
      description: "A funny Stone Paper Scissor Game  where users can enjoy.",
      githubLink: "https://github.com/SarthakSP18/Rock-paper-scissor-game",
    },
  ];

  return (
    <div
      name="Projects"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
          {cardItem.map(({ id, logo, name, description, githubLink }) => (
            <div
              className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img
                src={logo}
                className="w-[120px] h-[120px] p-1 rounded-full border-[2px]"
                alt={name}
              />
              <div>
                <div className="px-2 font-bold text-xl mb-2">{name}</div>
                <p className="px-2 text-gray-700">{description}</p>
              </div>
              <div className="px-6 py-4 space-x-3 justify-around">
                <button
                  className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded"
                  onClick={() => window.open(githubLink, "_blank")}
                >
                  Source code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortFolio;
