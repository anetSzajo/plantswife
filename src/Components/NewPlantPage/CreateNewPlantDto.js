export default class CreateNewPlantDto {
    static fromNewPlantForm(plant) {
        const intervalsMap = new Map([
            ['everyday', 86400],
            ['onceAWeek', 604800],
            ['twiceAWeek', 345600],
            ['threeTimesAWeek', 172800],
            ['onceAMonth', 18748800]
        ])

        return {
            "name": plant.name,
            "notes": plant.notes,
            "place": plant.place,
            "watering": {
                "interval": intervalsMap.get(plant.wateringInterval),
                "lastTimeProcessed": plant.lastWatering
            },
            "spraing": {
                "interval": intervalsMap.get(plant.spraingInterval),
                "lastTimeProcessed": plant.lastSpraing
            },
            "feeding": {
                "interval": intervalsMap.get(plant.feedingInterval),
                "lastTimeProcessed": plant.lastFeeding
            }
        }
    }
}
