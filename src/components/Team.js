import '../styles/main.css';
import stacksnation from '../images/stacksnation.png'

const Team = () => {
  return (
    <>
        <section id="team">
            <div className="max-w-6xl px-5 mx-auto mt-32 text-center">
                <h2 className="text-4xl font-bold text-center">
                    See what's being built
                </h2>
                <div className="flex flex-col mt-24 md:flex-row md:space-x-6">
                    <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
                        <img src={stacksnation} class="w-32 rounded-lg" alt="Stacksnation" />
                        <a href="https://discord.com/channels/902571489528774697/1038237875466141726" className="text-lg font-bold">Stacksnation</a>
                        <p className="text-sm text-darkGrayishBlue"></p>
                    </div>
                </div>
                <div className="my-16">
                    <a href="https://discord.gg/yFJXxaNp" className="p-2 px-6 pt-2 text-white bg-black rounded-full baseline hover:bg-white hover:text-black">Get Started</a>
                </div>
            </div>
        </section>
    </>
  )
}

export default Team