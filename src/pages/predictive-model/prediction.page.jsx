import HeroPrediction from "./components/hero-prediction";
import CityRank from "./components/city-rank";
import CityChart from "./components/city-chart";
import { DatePickerDemo } from "@/components/ui/date-picker";

function PredictionPage(){
    return (
        <main>
        <div>
          <HeroPrediction/>
          <div className="mt-6">
          <DatePickerDemo/>
          </div>
          <div className="flex justify-between">
          <div className="w-1/2 mr-6">
          <CityRank/></div>
            <CityChart/>
            
            </div>
        </div>
      </main>
    )
}

export default PredictionPage;