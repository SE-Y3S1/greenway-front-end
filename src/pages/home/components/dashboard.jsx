import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Link } from "react-router-dom";

function Dashboard() {
    return (
        <div>
            <div className="grid grid-cols-2 gap-5 md:grid-cols-2 w-full mx-auto">
                <Link to="/scheduling">
                    <Card className="justify-center h-36 w-full py-5 shadow-lg transform transition duration-300 hover:scale-95 bg-lime-600">
                        <CardHeader>
                            <CardTitle className="text-3xl text-center">Schedule Management</CardTitle>
                        </CardHeader>
                    </Card>
                </Link>
                <Link to="/waste-prediction">
                    <Card className="justify-center h-36 w-full py-5 shadow-lg transform transition duration-300 hover:scale-95 bg-lime-600">
                        <CardHeader>
                            <CardTitle className="text-3xl text-center">Predictive Model</CardTitle>
                        </CardHeader>
                    </Card>
                </Link>
                <Link to="/waste-prediction">
                    <Card className="justify-center h-36 w-full py-2 shadow-lg transform transition duration-300 hover:scale-95 bg-lime-600">
                        <CardHeader>
                            <CardTitle className="text-3xl text-center">Environmental Education and Awareness Management</CardTitle>
                        </CardHeader>
                    </Card>
                </Link>
                <Link to="/waste-prediction">
                    <Card className="justify-center h-36 w-full py-5 shadow-lg transform transition duration-300 hover:scale-95 bg-lime-600">
                        <CardHeader>
                            <CardTitle className="text-3xl text-center">Feedback and Reporting Management.</CardTitle>
                        </CardHeader>
                    </Card>
                </Link>
            </div>
        </div>
    );
}

export default Dashboard;