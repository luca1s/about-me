import pfp from '@/images/pfp2.jpeg';

export default function Info({ reference }) {
    const diff = new Date() - new Date("2006-03-13");
    const age = Math.floor(diff / 31536000000);

    / * 3.5 rem is navbar height * /

    return (
        <div className="h-screen dark:bg-gray-900" ref={reference} style={{ scrollMargin: "3.5rem" }}>
            <div className="flex justify-center items-center flex-col gap-4 h-full">
                <img src={pfp} alt="pfp" className="rounded-md h-1/3 mt-2" />
                <div className="text-center flex items-center gap-2">
                    <h1 className="text-4xl text-white">Hi,</h1>
                    <p className="text-4xl text-gray-400">
                        I'm{' '}
                        <span className="text-blue-700">
                            Luc Francis
                        </span>
                    </p>
                </div>
                <p className="text-lg text-white max-w-screen-md pl-4 pr-4">
                    I'm a {age}-year old frontend web developer most proficient in React.
                    I've been programming in JavaScript since the age of 10, and
                    have created many passion projects since then. I
                    am always looking to improve as a developer, and I am constantly
                    picking up new frameworks and technologies.
                </p>
            </div>
        </div>
    )
}