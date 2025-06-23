import { useState } from "react";
import "./App.css";

type ItineraryItem = {
  title: string;
  content?: string;
  url?: string;
};

type ItineraryDay = {
  date: string;
  items: ItineraryItem[];
};

function App() {
  const [itinerary, setItinerary] = useState<ItineraryDay[]>([]);

  const addDay = () => {
    const today = new Date().toISOString().slice(0, 10);
    setItinerary([...itinerary, {date: today, items: []}])
  }

  const addItemToDay = (dayIndex: number) => {
    const newItinerary = [...itinerary];
    newItinerary[dayIndex].items.push({title: "", content: "", url: ""});
    setItinerary(newItinerary);
  }

  const handleItemChange = (dayIndex: number, itemIndex: number, field: "title" | "content" | "url", value: string) => {
    const newItinerary = [...itinerary];
    newItinerary[dayIndex].items[itemIndex][field] = value;
    setItinerary(newItinerary);
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="w-full max-w-3x1">
        <h1 className="text-3x1 font-bold mb-6 text-blue-700">Plan a New Trip</h1>

        {itinerary.map((day, dayIndex) => 
          <div key={dayIndex} className="bg-white p-4 mb-6 shadow rounded">
            <h2 className="text-x1 font-semibold mb-2">Day {dayIndex + 1} - {day.date}</h2>

            {day.items.map((item, itemIndex) =>
              <div key={itemIndex} className="mb-2 flex flex-col md:flex-row gap-2">
                <input
                  type="text"
                  placeholder="Item title"
                  value={item.title}
                  onChange={(e) => 
                    handleItemChange(dayIndex, itemIndex, "title", e.target.value)
                  }
                    className="flex-1 px-3 py-2 border rounded text-lg"
                />
                <input
                  type="text"
                  placeholder="Optional Description"
                  value={item.url}
                  onChange={(e) =>
                    handleItemChange(dayIndex, itemIndex, "content", e.target.value)
                  }
                  className="flex-1 px-3 py-2 border rounded text-lg"
                />
                <input
                  type="text"
                  placeholder="Optional URL"
                  value={item.url}
                  onChange={(e) =>
                    handleItemChange(dayIndex, itemIndex, "url", e.target.value)
                  }
                  className="flex-1 px-3 py-2 border rounded text-lg"
                />
              </div>
            )}

            <button
              onClick={() => addItemToDay(dayIndex)}
              className="mt-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              + Add Itinerary Item
            </button>
          </div>
        )}

        <button
          onClick={() => addDay()}
          className="mt-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          + Add Day
        </button>
      </div>
    </div>
  );
}

export default App;