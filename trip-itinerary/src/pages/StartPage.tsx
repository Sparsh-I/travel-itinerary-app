import { useState } from 'react';
import DatePicker from '../components/DatePicker';
import type {DateRange} from "react-day-picker";

export default function StartPage() {
    const [range, setRange] = useState<DateRange | undefined>(undefined);

    return (
        <div>
            <div className="navbar">
                <h1 className="logo">TripSitter</h1>
                <ul>
                    <li><h3 className="h3-text">Home</h3></li>
                    <li><h3 className="h3-text">My Trips</h3></li>
                    <li><h3 className="h3-text">Connections</h3></li>
                    <li><h3 className="h3-text">My Map</h3></li>
                </ul>
                <div className="navbar-profile">
                    <div className="profile-icon"/>
                </div>
            </div>
            <div id="banner">
                <div className="white-label">
                    <h1 className="h1-text">Welcome back, User! Planning a trip?</h1>
                </div>
                <div className="new-trip">
                    <input className="title-input" type="text" placeholder="What are we calling this?"/>
                    <DatePicker selected={range} onSelect={setRange}/>
                </div>
            </div>
        </div>
    );
}