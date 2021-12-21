

const SkillChart = (props) => {
    const skills = props.skills;
    return (
        <div className="w-full">
            <div className="font-light text-base mb-2">
                {skills.skill.map((val, index) => (
                    <div key={index} className="relative pt-4">
                        <p>{val.name}</p>
                        <div className="overflow-hidden h-0.5 text-xs flex rounded bg-purple-200">
                            <div className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center`} style={{background:`${val.color}`, width:`${val.value}%`}}>
                            </div>
                        </div>
                    </div>
                ))}

            </div>

            <div className="relative pt-4 pb-4 grid grid-cols-1 gap-3">
                {skills.experience.map((val) => (
                    <div className="rounded overflow-hidden shadow-lg bg-black">
                        <div className="px-4 py-4">
                            <div className="text-2xl font-semibold">{val.designation}</div>
                            <div className="text-sm mb-2 font-extralight">{val.company}</div>
                            <p className="text-gray-600 text-base">
                                {val.discription}
                            </p>
                        </div>
                    </div>
                ))}
                
            </div>
        </div>
    )
}

export default SkillChart
