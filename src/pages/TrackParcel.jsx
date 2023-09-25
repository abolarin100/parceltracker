import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../css/parcelDetails.css';


function TrackParcel() {
    const location = useLocation();
    const scheduledDateFromState = location.state ? location.state.scheduledDate : null;
    const [trackingId, setTrackingId] = useState('');
    const [viewingDeliveryDate, setViewingDeliveryDate] = useState(false);


    const handleInputTrackingId = (event) => {
        setTrackingId(event.target.value);
    };

    const viewDeliveryDate = () => {
       
        setViewingDeliveryDate(true);
    };

    useEffect(() => {
        
    }, [location.state]);

    return (
        <section className="div">
            <div className='container'>
                <h1>Delivery Tracking</h1>
                {viewingDeliveryDate ? (
                    <>
                        <h2>Delivery Date View</h2>
                        <p>Delivery Date: {scheduledDateFromState ? scheduledDateFromState.toLocaleDateString() : 'N/A'}</p>
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
