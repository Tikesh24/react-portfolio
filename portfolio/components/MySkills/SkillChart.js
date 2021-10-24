

const SkillChart = () => {
    return (
        <div className="w-full">
            <div className="font-light text-base mb-2">
                <div className="relative pt-4">
                    <p>Front-End</p>
                    <div className="overflow-hidden h-0.5 text-xs flex rounded bg-purple-200">
                        <div className="w-80 shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-400">
                        </div>
                    </div>
                </div>
                <div className="relative pt-4">
                    <p>Back-End</p>
                    <div className="overflow-hidden h-0.5 text-xs flex rounded bg-purple-200">
                        <div className="w-60 shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-400">
                        </div>
                    </div>
                </div>
                <div className="relative pt-4">
                    <p>Java | Spring boot</p>
                    <div className="overflow-hidden h-0.5 text-xs flex rounded bg-purple-200">
                        <div className="w-20 shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-700">
                        </div>
                    </div>
                </div>
                <div className="relative pt-4">
                    <p>AngularJS | ReactJS</p>
                    <div className="overflow-hidden h-0.5 text-xs flex rounded bg-purple-200">
                        <div className="w-20 shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-400">
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative pt-4 pb-4 grid grid-cols-1 gap-3">
                <div className="rounded overflow-hidden shadow-lg bg-black">
                    <div className ="px-4 py-4">
                        <div className ="text-2xl font-semibold">Frontend Developer</div>
                        <div className ="text-sm mb-2 font-extralight">Freelance</div>
                        <p className ="text-gray-600 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.Voluptatibus quia, nulla!Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                    </div>
                </div>
                <div className="rounded overflow-hidden shadow-lg bg-black">
                    <div className ="px-4 py-4">
                        <div className ="text-2xl font-semibold">Backend Developer</div>
                        <div className ="text-sm mb-2 font-extralight">Tata Consultancy Services</div>
                        <p className ="text-gray-600 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.Voluptatibus quia, nulla!Maiores et perferendis eaque, exercitationem praesentium nihil.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SkillChart
