import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Separator } from "@radix-ui/react-separator";

function CityRank() {
    return (
        <div>
          <Separator/> 
            <Card className="h-auto mt-4">
                <CardHeader>
                    <CardTitle>City Rank</CardTitle>
                    <CardDescription>Weekly waste genaration of cities in Sri Lanka</CardDescription>
                </CardHeader>
                <CardContent>
                    <h3>1. Colombo</h3>
                    <h3>2. Maharagama</h3>
                    <h3>3. Nugegoda</h3>
                    <h3>4. Kauwela</h3>
                    <h3>5. Malabe</h3>
                    <h3>6. Dehiwala</h3>
                    <h3>7. Moratuwa</h3>
                    <h3>8. Kottawa</h3>
                    <h3>9. Homagama</h3>
                    <h3>10. Avissawella</h3>
                </CardContent>
            </Card>

        </div>
    )
}

export default CityRank;