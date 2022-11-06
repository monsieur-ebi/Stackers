import '../styles/main.css';

const Features = () => {
  return (
    <>
        <div className="container flex flex-col px-4 mx-auto space-y-12 md:space-y-0 md:flex-row">
            <div className="flex flex-col space-y-12 md:w-1/2">
                <h2 className="max-w-md text-4xl font-bold text-center md:text-left">Community Driven</h2>
                <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
                    The stackers pool is a service providing community anchord on the stacks blockchain. The community is creating several solutoins and leveraging opputunites for people who want to learn ,build and earn with STX blockchain. with supporters and partners from several other countries all over the globe.
                </p>
            </div>

            <div className="flex flex-col space-y-8 md:w-1/2">
                <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                    <div className="rounded-l-full md:bg-transparent">
                        <div className="flex items-center space-x-2">
                            <div className="px-4 py-2 text-white rounded-full md:py-1 bg-black">
                                01
                            </div>
                            <h3 className="text-base font-bold md:mb-4 md:hidden">Teaching</h3>
                        </div>
                    </div>
                    <div>
                        <h3 className="hidden mb-4 text-lg font-bold md:block">Teaching/Educating</h3>
                        <p className="text-darkGrayishBlue">
                            We undergo physical, online class sessions on RUST and CLARITY programming languages for folks who want to learn and build on the stacks blockchain, we have physical classes in the Bayelsa Tech hub, and our active discord servers online where classes and meetings are held.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                    <div className="rounded-l-full md:bg-transparent">
                        <div className="flex items-center space-x-2">
                            <div className="px-4 py-2 text-white rounded-full md:py-1 bg-black">
                                02
                            </div>
                            <h3 className="text-base font-bold md:mb-4 md:hidden">Development</h3>
                        </div>
                    </div>
                    <div>
                        <h3 className="hidden mb-4 text-lg font-bold md:block">Development of projects</h3>
                        <p className="text-darkGrayishBlue">
                            Our Development team is divided into two, RUST and CLARITY development teams. (RUST for appchains and hyperchains development), (CLARITY: For smart contracts and dapps on stacks) As a team of Devs we accept and help peopole build projects on the Stacks blockchain.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                    <div className="rounded-l-full md:bg-transparent">
                        <div className="flex items-center space-x-2">
                            <div className="px-4 py-2 text-white rounded-full md:py-1 bg-black">
                                03
                            </div>
                            <h3 className="text-base font-bold md:mb-4 md:hidden">EARN</h3>
                        </div>
                    </div>
                    <div>
                        <h3 className="hidden mb-4 text-lg font-bold md:block">EARN WITH STX</h3>
                        <p className="text-darkGrayishBlue">
                            Because of the unique layer Stacks shares with bitcoin and with it's ability to generate positive and secure Web 3.0 projects We offer several services of financial benfits such as, guiding folks to stacking STX , MIA ,NYC etc.... plus other earning offers like trading STX, NFT's on stacks, Stacking pools.
                        </p>
                    </div>
                </div>
                
                <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
                    <div className="rounded-l-full md:bg-transparent">
                        <div className="flex items-center space-x-2">
                            <div className="px-4 py-2 text-white rounded-full md:py-1 bg-black">
                                04
                            </div>
                            <h3 className="text-base font-bold md:mb-4 md:hidden">NFTs</h3>
                        </div>
                    </div>
                    <div>
                        <h3 className="hidden mb-4 text-lg font-bold md:block">NFTs</h3>
                        <p className="text-darkGrayishBlue">
                            The stackers pool supports on boarding artists who want to learn, buy and sell NFTs on the stackers blockchain, and we are building our own NFT market ecosystem.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Features