import React, { useEffect } from 'react';

const LeagueTables = () => {
    useEffect(() => {
        // Function to load the widget script
        const loadWidgetScript = () => {
            const script = document.createElement('script');
            script.src = 'https://widgets.api-sports.io/2.0.3/widgets.js';
            script.type = 'module';
            script.async = true;

            // Append the script to the body
            document.body.appendChild(script);

            // Clean up the script when the component unmounts
            return () => {
                document.body.removeChild(script);
            };
        };

        // Load the script when the component mounts
        loadWidgetScript();
    }, []); 

    return (
        <div>
            <h1>League Standings</h1>
            <div id="wg-api-football-standings"
                data-host="REACT_APP_API_FOOTBALL_HOST"
                data-key="REACT_APP_API_FOOTBALL_KEY"  
                data-league="39"              // Premier League ID
                data-season="2023"            // Specific season year
                data-theme="dark"             // Optional theme
                data-show-errors="true"       // Enable to show errors
                data-show-logos="true"
                className="wg_loader">
            </div>
        </div>
    );
};

export default LeagueTables;
