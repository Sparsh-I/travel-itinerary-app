export default function StartPage() {
    // const [selected, setSelected] = useState<string | undefined>(undefined);
    //
    // const options = [
    //     {id: "goob", name: "Goob"},
    //     {id: "geeb", name: "Geeb"}
    // ]

    return (
        <div>
            <div id="header">
                <ul>
                    <li>Home</li>
                    <li>My Trips</li>
                    <li>Connections</li>
                    <li>My Map</li>
                </ul>
            </div>
            <div id="banner">
                <div className="white-label">
                    <h1 className="h1-text">Welcome back, Sanaa! Planning a trip?</h1>
                </div>
            </div>
        </div>
        // // <div className="min-h-screen bg-gray-100 p-6">
        // //     <button
        // //         onClick={() => navigate("/createNewItinerary")}
        // //         className="mt-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
        // //             + Create New Itinerary
        // //     </button>
        // // </div>
        //
        // <div className="p-8">
        //     <h1 className="text-2xl font-bold mb-4">Choose a Destination</h1>
        //
        //     <Dropdown
        //         id="destination"
        //         title="Select Destination"
        //         data={options}
        //         selectedId={selected}
        //         onSelect={(id) => setSelected(id)}
        //         hasImage={true}
        //         position="bottom-left"
        //     />
        //
        //     {selected && <p className="mt-4">You selected: {selected}</p>}
        // </div>
    );
}