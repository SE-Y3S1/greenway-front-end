import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

function CityRank({ predictionData }) {
    return (
        <div>
            <h2 className="text-3xl font-bold text-center mt-10 mb-8">Projected Weekly City Waste Generation Rankings</h2>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-4 w-full mx-auto">
            {predictionData.map((city, index) => (
              <Card key={index} className="justify-center h-auto w-full px-14 shadow-lg transform transition duration-300 hover:scale-105">
                <CardHeader>
                  <CardTitle>{city.Rank}. {city.City}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xl">{city.Predicted_Disposed_Amount.toFixed(2)} tons</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      );
}

export default CityRank;