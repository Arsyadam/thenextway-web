import Image from 'next/image'

export default function Vision() {
  const features = [
    {
      title: "Sustainable Cities and Communities",
      description:
        "Sustainable cities and communities refer to urban areas and regions that are designed, developed, and managed in ways that prioritize environmental, social, and economic sustainability",
      icon: "emoji_transportation",
    },
    {
      title: "Climate Action",
      description:
        "Climate action refers to efforts to combat climate change by reducing emissions and promoting sustainability.",
      icon: "potted_plant",
    },
    {
      title: "Industry, Innovation and Infrastructure",
      description:
        "The goal aims to promote inclusive and sustainable industrialization, encourage innovation, and develop resilient and sustainable infrastructure, particularly in developing countries, to foster economic growth and improve the well-being of societies ",
      icon: "factory",
    }
  ];
  return (
    <>
      

    <div id="vision" className="mt-16 md:mt-0">
        <h2 className="text-4xl lg:text-5xl font-bold lg:tracking-tight">
            Our Vision
        </h2>
        <p className="text-lg mt-4 text-slate-600">
            Following 17 Sustainable Development Goals, TheNextWay also take a role:
        </p>
    </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 mt-16 gap-16">
        {
            features.map((item) => (
            <div key={item.title} className="flex gap-4 items-start">
                <div className="mt-1 bg-black rounded-full  p-2 w-8 h-8 shrink-0">
                       
                </div>
                <div>
                    <h3 className="font-semibold text-lg">{item.title}</h3>{" "}
                    <p className="text-slate-500 mt-2 leading-relaxed">{item.description}</p>
                </div>
            </div>
            ))
        }
        </div>
    </>
  )
}


