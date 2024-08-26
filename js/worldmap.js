// Function to create SVG data URL with specified color
function createMarkerIcon(color) {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 24 24">
                    <path fill="${color}" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>`;
    return `data:image/svg+xml;base64,${btoa(svg)}`;
}

var map = new jsVectorMap({
    selector: "#map",
    map: "world",
    markers: [
        { name: "Australia", coords: [-25.2744, 133.7751], style: { image: createMarkerIcon('#f44336') } },
        { name: "China", coords: [35.8617, 104.1954], style: { image: createMarkerIcon('#4caf50') } },
        { name: "India", coords: [20.5937, 78.9629], style: { image: createMarkerIcon('#3f51b5') } },
        { name: "France", coords: [46.6034, 1.8883], style: { image: createMarkerIcon('#ff9800') } },
        { name: "Brazil", coords: [-14.2350, -51.9253], style: { image: createMarkerIcon('#e91e63') } },
        { name: "New York", coords: [40.7128, -74.0060], style: { image: createMarkerIcon('#673ab7') } }
    ],
    markerStyle: {
        initial: {
            stroke: '#000000',
            "stroke-width": 2,
            "stroke-opacity": 0.4
        }
    }
});