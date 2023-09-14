
module.exports.workoutdata = (workout, sets) => {
    let workoutList = [];
    if (!workout) {
        return null
    }
    let videos = [
        "https://www.youtube.com/embed/MNL_DAI19_I",
        "https://www.youtube.com/embed/zeWg73GzVbc",
        "https://www.youtube.com/embed/fybi42dJHD4",
        "https://www.youtube.com/embed/36OSS_kv2zg",
        "https://www.youtube.com/embed/KHrtXxjoOrI",
        "https://www.youtube.com/embed/sFtgjAUe7P4",
        "https://www.youtube.com/embed/fz9fsvhx4PY",
        "https://www.youtube.com/embed/10SK7fGMhnw"
    ]

    randomVideo = Math.floor(Math.random() * videos.length);

    let randomNums = getRandomNums(sets * 2);

    switch (workout) {
        case 'arms':
            workout = arms();
            break;
        case 'back':
            workout = back();
            break;
        case 'chest':
            workout = chest();
            break;
        case 'legs':
            workout = legs();
            break;
        case 'shoulders':
            workout = shoulders();
            break;
        default:
            break;
    }

    let i = 0;
    let j = 1;
    while (j <= sets) {
        workoutList[i] = {
            workoutName: workout.core[randomNums[i]],
            columnId: `${j}a`,
            type: 'core'
        }
        i++;
        workoutList[i] = {
            workoutName: workout.superset[randomNums[i]],
            columnId: `${j}b`,
            type: 'superset'
        }
        i++;
        j++;

    }

    return data = {
        video: videos[randomVideo],
        workouts: workoutList,
        selectedWorkout: workout
    }

}

const getRandomNums = (exercises) => {
    let randomNums = [];
    while (randomNums.length < exercises) {
        var r = Math.floor(Math.random() * 10);
        if (randomNums.indexOf(r) === -1) randomNums.push(r);
    }
    return randomNums;
}

const arms = () => {
    let coreBiceps = [
        "DB Hammer Curl",
        "DB Curl",
        "EZ Curl",
        "BB Curl",
        "Preacher Curl",
        "Lying rope curl",
        "Lying cable curl",
        "Close Grip EZ Curl",
        "Wide Grip EZ Curl",
        "Incline Cable Curl"
    ]

    let superBiceps = [
        "DB Hammer Curl",
        "EZ Reverse Curl",
        "DB Iso Curl",
        "Rope Curl",
        "Cable Single arm Curl",
        "Reverse Grip DB Iso Curl",
        "Lying cable curl",
        "Chin up",
        "Rope Face Pulls",
        "Incline DB Curl"
    ]

    let coreTriceps = [
        "DB Skull Crusher",
        "Single Arm Pulldown",
        "Single Arm Kickbacks",
        "Diamond Pushups",
        "Skull Crusher",
        "Rope Skull Crusher",
        "Rope Pulldown",
        "Wide Grip Pulldown",
        "Overhead DB Extension",
        "Dip"
    ]

    let superTriceps = [
        "DB Skull Crusher",
        "Single Arm Pulldown",
        "Single Arm Kickbacks",
        "Diamond Pushups",
        "Skull Crusher",
        "Rope Skull Crusher",
        "Rope Pulldown",
        "Wide Grip Pulldown",
        "Overhead DB Extension",
        "Dip"
    ]
    return { coreBiceps, superBiceps, coreTriceps, superTriceps };
}

const back = () => {
    let core = [
        "Bent Over Row",
        "DB Row",
        "Rack Pull",
        "Lat Pull Down",
        "Incline DB row",
        "Kettlebell swings",
        "Seated Cable Row",
        "Trap Bar Deadlift",
        "T-bar Row",
        "Straight Arm Pulldown"
    ]

    let superset = [
        "Alternating DB Row",
        "DB Row",
        "High Rope Row",
        "Inverted Row",
        "Pull Ups",
        "Single Arm Pulldown",
        "Seated Cable Row",
        "Renegade Row",
        "Landmine Single Arm Row",
        "Straight Arm Pulldown"
    ]
    return { core, superset };
}

const chest = () => {
    let core = [
        "Bench",
        "DB Bench",
        "Incline Bench",
        "DB Incline Bench",
        "Hex Press",
        "Svend Press",
        "Incline Cable Flies",
        "Cable Chest Press",
        "Cable Cross Over",
        "DB Floor Press"
    ]

    let superset = [
        "Dip",
        "Pushups",
        "Wide Pushups",
        "Single Arm Cross over",
        "Cable Iron Cross",
        "DB Pullovers",
        "DB Flies",
        "DB Incline Flies",
        "Cable Cross Over",
        "High Cable Cross Over"
    ]
    return { core, superset };
}

const legs = () => {
    let core = [
        "Squat",
        "Calf Raises",
        "Lunges",
        "Box squat",
        "Romanian Deadlift",
        "Sumo Deadlift",
        "Leg Press",
        "Deadlift",
        "Leg Curl",
        "Leg Extension"
    ]

    let superset = [
        "Hip Thrust",
        "Calf Raises",
        "Body Weight Squat",
        "Side Lunges",
        "Good Mornings",
        "DB Goblet Squat",
        "Single Leg Press",
        "Step Ups",
        "Leg Curl",
        "Leg Extension"
    ]
    return { core, superset };
}

const shoulders = () => {
    let core = [
        "Delt Side raise",
        "Delt Front raise",
        "Delt Y raise",
        "Shoulder Press",
        "DB Shoulder Press",
        "Arnold Press",
        "Upright Row",
        "Rear Delt Fly",
        "Shrugs",
        "Reverse Fly"
    ]

    let superset = [
        "Delt Side raise",
        "Delt Front raise",
        "Delt Y raise",
        "T-bar Landmine Press",
        "T-bar Half Moons",
        "Rope Pronated Face Pulls",
        "Upright Row",
        "Rear Delt Fly",
        "Shrugs",
        "Reverse Fly"
    ]
    return { core, superset };
}