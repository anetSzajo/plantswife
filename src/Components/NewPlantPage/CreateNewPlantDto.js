export const intervalsMap = new Map([
    ['everyday', [1, 'd']],
    ['onceAWeek', [1, 'w']],
    ['twiceAWeek', [3, 'd']],
    ['threeTimesAWeek', [2, 'd']],
    ['onceAMonth', [1, 'M']]
]);

export default class CreateNewPlantDto {
    static fromNewPlantForm(plant) {
        return {
            "name": plant.name,
            "notes": plant.notes,
            "place": plant.place,
            "watering": {
                "interval": plant.wateringInterval,
                "lastTimeProcessed": plant.lastWatering,
                "nextTimeProcessed": plant.nextWatering
            },
            "spraing": {
                "interval": plant.spraingInterval,
                "lastTimeProcessed": plant.lastSpraing,
                "nextTimeProcessed": plant.nextSpraing
            },
            "feeding": {
                "interval": plant.feedingInterval,
                "lastTimeProcessed": plant.lastFeeding,
                "nextTimeProcessed": plant.nextFeeding
            }
        }
    }
}
