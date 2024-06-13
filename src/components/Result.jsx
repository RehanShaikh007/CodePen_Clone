

function Result({srcCode}) {
    return (
        <div>
            <div className="bg-gray-800 p-4 shadow mt-4 rounded-lg">
                <h2
                    className="font-semibold mb-2 text-white text-2xl">
                    Result
                </h2>
                <iframe
                    className="w-full h-60 border border-gray-700 rounded-md"
                    srcDoc={srcCode}
                    title="output"
                    sandbox="allow-scripts"
                    width="100%"
                    height="100%"
                >
                </iframe>
            </div>
        </div>
    )
}

export default Result