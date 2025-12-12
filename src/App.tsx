import pfp from "./images/pfp2.jpeg";

const links = [
  {
    title: "LinkedIn",
    subtitle: "My professional experiences, projects and skills",
    link: "https://www.linkedin.com/in/luca1s/"
  },
  {
    title: "CrossCheck",
    subtitle: "Next-generation checklists for pilots",
    link: "https://flycrosscheck.com"
  },
  {
    title: "StudyState",
    subtitle: "Study tools used by 3,600+ students",
    link: "https://studystate.net/set/cC1gQU9c4LDisBpTeLtK"
  },
];

const overflowLinks = [
  {
    title: "GitHub",
    link: "https://github.com/luca1s"
  },
  {
    title: "Email",
    link: "mailto:luc@luca1s.tech"
  }
]


export default function App() {
  return (
    <div className="min-h-screen bg-black flex flex-col md:flex-row items-center justify-center text-center gap-4 px-6">
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center gap-3">
        <img
          src={pfp}
          alt="Luc Francis"
          className="w-52 h-52 rounded-full border-4 border-blue-500 object-cover object-right"
        />
        <div className="flex flex-col justify-center gap-1.5">
          <h1 className="text-3xl font-bold text-white">Luc Francis</h1>
          <p className="text-gray-200">Software Engineer & Pilot</p>
          <p className="text-gray-400 text-xs font-light">Portland, ME</p>
        </div>
      </div>
      <div className="w-full md:w-1/2 flex flex-col gap-3 mb-3 max-w-sm mx-auto">
        {links.map((item, index) => <a
          key={index}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block border border-gray-800 text-white rounded-lg p-4 hover:bg-blue-600 transition"
        >
          <h2 className="text-lg font-semibold">{item.title}</h2>
          <p className="text-sm text-gray-300">{item.subtitle}</p>
        </a>)}
        <div className="flex flex-row gap-2 items-center">
          {overflowLinks.map((item, index) => <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 block border border-gray-800 text-white rounded-lg p-2 hover:bg-blue-600 transition"
          >
            <h2 className="font-semibold">{item.title}</h2>
          </a>)}
        </div>
      </div>
    </div>
  );
}