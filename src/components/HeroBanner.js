import GradientBox from "./GradientBox"
import MainEye from "./MainEye"

export default function HeroBanner() {
  return (
    <section className="flex justify-between max-lg:flex-col lg:mt-24">
      <div className="xl:-mt-40 max-lg:mt-20 xl:w-5/12 lg:w-1/2 w-full grid content-center">
          <h1 
              className="font-serif xl:whitespace-nowrap max-w-fit xl:text-8xl lg:text-6xl text-5xl font-bold text-transparent bg-clip-text leading-snug bg-gradient-to-r from-orange-300 via-purple-500 to-cyan-300"
          >
              Hi. I'm Dovjay. <br/>
              A Developer.
          </h1>
          <p className="text-white xl:text-2xl text-xl tracking-wide leading-relaxed lg:mt-8 mt-4 mr-8">
              Enjoy working in Front-End with <span className="font-bold">React</span>, 
              prototyping many games with <span className="font-bold">Unity</span>, 
              and designing UI/UX with <span className="font-bold">Figma</span>.
          </p>
      </div>
      <div className="lg:w-6/12 max-xl:mt-12 w-full">
          <div className="flex justify-between">
              <GradientBox className="bg-gradient-to-b from-orange-300 to-pink-400" />
              <GradientBox className="bg-gradient-to-b from-purple-400 to-cyan-300" />
          </div>
          <div className="mx-auto xl:w-4/6 w-full max-lg:h-96 lg:aspect-square bg-slate-800/50 rounded-2xl overflow-hidden">
              <MainEye />
          </div>
          <div className="flex justify-between">
              <GradientBox className="bg-gradient-to-b from-pink-300 to-purple-400" />
              <GradientBox className="bg-gradient-to-b from-orange-300 to-pink-400" />
          </div>
          <div className="flex">
              <div className="opacity-0 w-1/6 aspect-square"></div>
              <GradientBox className="bg-gradient-to-b from-purple-400 to-cyan-300" />
          </div>
      </div>
  </section>
  )
}