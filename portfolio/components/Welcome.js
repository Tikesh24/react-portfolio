import LightAnimation from './P5Components/LightAnimation';

const Welcome = () => {

    return (
        
        <div className="flex flex-col w-full md:w-max relative">
            <div>
                {/* Background with p5 animation */}
                <LightAnimation />
            </div>
            <div className="absolute p-16 font-audiowide">
                {/* Text with Hi I'am Tikesh, Developer | Front End | Backend */}
                <div className="p-16 text-8xl font-bold">
                    <strong className="flex">
                        <p className="hover:animate-bounce">H</p>
                        <p className="hover:animate-bounce">i</p>
                    </strong>
                    <strong className="flex">
                        <p className="hover:animate-bounce">I'</p>
                        <p className="hover:animate-bounce">m</p>
                        <p className="hover:animate-bounce">&nbsp;</p>
                        <p className="hover:animate-bounce text-purple-800">T</p>
                        <p className="hover:animate-bounce">i</p>
                        <p className="hover:animate-bounce">k</p>
                        <p className="hover:animate-bounce">e</p>
                        <p className="hover:animate-bounce">s</p>
                        <p className="hover:animate-bounce">h</p>
                    </strong>
                    <strong className="flex">
                        <p className="hover:animate-bounce">d</p>
                        <p className="hover:animate-bounce">e</p>
                        <p className="hover:animate-bounce">v</p>
                        <p className="hover:animate-bounce">e</p>
                        <p className="hover:animate-bounce">l</p>
                        <p className="hover:animate-bounce">o</p>
                        <p className="hover:animate-bounce">p</p>
                        <p className="hover:animate-bounce">e</p>
                        <p className="hover:animate-bounce">r</p>
                    </strong>
                    <div className="pt-10 text-gray-600 text-2xl tracking-widest">Frontend | Backend</div>
                </div>
               
            </div>
        </div>
    )
}

export default Welcome
