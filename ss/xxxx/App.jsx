import { useState } from "react";

function App() {
    const [apiUrl, setApiUrl] = useState(import.meta.env.VITE_API_URL || 'error');

    return (
        <div>
            <h1>Environment Variable</h1>
            <p>API URL: {apiUrl}</p>
        </div>
    );
}

export default App;