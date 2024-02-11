import { Routes, Route } from "react-router-dom";
import AdminDashboard from "../pages/admin/dashboard";

const PanelLayout = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<AdminDashboard />} />
            </Routes>
        </>
    )
}

export default PanelLayout