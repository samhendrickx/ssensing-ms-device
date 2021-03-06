from data import Data
from numpy import mean, max, min, std


class TemperatureData(Data):

    name = "temperature"

    def getAnalyzed(self):
        data = self.extractData()
        if len(data) > 0:
            return {
                "avg": mean(data),
                "max": max(data),
                "min": min(data),
                "std": std(data)
            }

    def extractData(self):
        return [el[0] for el in self.data["temperature"]]
