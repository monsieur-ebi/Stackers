import '../styles/main.css';

const Features = () => {
  return (
    <>
        <div className="container flex flex-col px-4 mx-auto space-y-12 md:space-y-0 md:flex-row">
            <div className="flex flex-col space-y-12 md:w-1/2">
                <h2 className="max-w-md text-4xl font-bold text-center md:text-left">Community Driven</h2>
                <p className="max-w-sm text-center md:text-left">
                    The stackers pool is a service providing community anchord on the stacks blockchain. The community is creating several solutoins and leveraging opputunites for people who want to learn ,build and earn with STX blockchain. with supporters and partners from several other countries all over the globe.
                </p>
            </div>

            <div className="flex flex-col space-y-8 md:w-1/2">
                <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6">
                    <div className="rounded-l-full md:bg-transparent">
                        <div className="flex items-center space-x-2">
                            <div className="px-4 py-2 text-white rounded-full md:py-1 bg-black">
                                01
                            </div>
                            <h3 className="text-base font-bold md:mb-4 md:hidden">Teaching</h3>
                        </div>
                    </div>
                    <div className="">
                        <h3 className="hidden mb-4 text-lg font-bold md:block">Development of projects  </h3>
                    </div>
                </div>

            </div>
        </div>
    </>
  )
}

export default Features