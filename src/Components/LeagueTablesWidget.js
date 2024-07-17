import React, { useEffect } from 'react';

const LeagueTablesWidget = () => {
    useEffect(() => {
        // Dynamically load the API sports widget script
        const script = document.createElement('script');
        script.src = "https://widgets.api-sports.io/2.0.3/widgets.js";
        script.type = "module";
        script.async = true;

        document.body.appendChild(script);

        return () => {
            // Cleanup the script when the component unmounts
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div>
            <div id="wg-api-football-standings"
                data-host="REACT_APP_API_FOOTBALL_HOST"
                data-key="REACT_APP_API_FOOTBALL_KEY" 
                data-league="39" // Example league ID for the Premier League
                data-season="2023" // Example season year
                data-theme="dark" // Theme can be 'dark' or 'light'
                data-show-errors="true"
                data-show-logos="true"
                className="wg_loader">
            </div>
        </div>
    );
};

export default LeagueTablesWidget;

