import { BallCanvas } from "./canvas"
import { technologies } from "../constants"

const Tech = () => {
  return (
    <div className="flex flex-roow flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon}/>
        </div>
      ))}
    </div>
  )
}

export default Tech