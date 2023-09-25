import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import '../css/parcelDetails.css';
import { useNavigate } from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css';

function ParcelDetails() {
    const navigate = useNavigate();
    const [scheduledDate, setScheduledDate] = useState(null);
    const [trackingId, setTrackingId] = useState('');

    const handleDateChange = (date) => {
        setScheduledDate(date);
    };

    const handleButtonClick = () => {
        
        navigate('/track-parcel', { state: { scheduledDate } });
    };

    const generateTrackingId = () => {
        const newTrackingId = Math.floor(Math.random() * 1000000).toString();
        setTrackingId(newTrackingId);
    };

    return (
        <section className="div">
            <div className='container'>

                <div>
                    <button onClick={generateTrackingId}>Generate Tracking ID</button>
                </div>
                {trackingId && (
                    <div>
                        <p>Tracking ID: {trackingId}</p>
                    </div>
                )}

                <div>
                    <label>Scheduled Delivery Date:</label>
                    <DatePicker
                        selected={scheduledDate}
                        onChange={handleDateChange}
                        dateFormat="yyyy-MM-dd"
                    />
                </div>

                <button onClick={handleButtonClick}>Track Parcel</button>
            </div>
        </section>
    );
}

export default ParcelDetails;
