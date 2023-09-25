import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function TrackParcel() {
    const [trackingId, setTrackingId] = useState('');
    const [scheduledDate, setScheduledDate] = useState(null);
    const [viewingDeliveryDate, setViewingDeliveryDate] = useState(false);

    const handleInputTrackingId = (event) => {
        setTrackingId(event.target.value);
    };

    const viewDeliveryDate = () => {
        const data = localStorage.getItem(trackingId);
        if (data) {
            const { scheduledDate } = JSON.parse(data);
            setScheduledDate(new Date(scheduledDate));
            setViewingDeliveryDate(true);
        }
    };

    return (
        <section className="div">
            <div className='container'>
                {viewingDeliveryDate ? (
                    <>
                        <h2>Find your delivery date below</h2>
                        <p>Delivery Date: {scheduledDate ? scheduledDate.toLocaleDateString() : 'N/A'}</p>
                        <Link to="/">Back to Homepage</Link>
                    </>
                ) : (
                    <>
                        <input
                            type="text"
                            placeholder="Input Tracking ID"
                            value={trackingId}
                            onChange={handleInputTrackingId}
                        />
                        <button onClick={viewDeliveryDate}>View Delivery Date</button>
                    </>
                )}
            </div>
        </section>
    );
}

export default TrackParcel;
