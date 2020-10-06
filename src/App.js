import React from "react";

// import "@gooddata/react-components/styles/css/main.css";
import { AuthProvider } from "./context/auth";
import AppRouter from "./routes/AppRouter";
// import { ProjectListProvider } from "./contexts/ProjectList";

function App() {
    return (
        <AuthProvider>
            {/* <ProjectListProvider> */}
                <AppRouter />
            {/* </ProjectListProvider> */}
        </AuthProvider>
    );
}

export default App;
