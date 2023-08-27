class Video {
    constructor(title, uploader, time) {
        this.title = title;
        this.uploader = uploader;
        this.time = time;
    }

    watch() {
        console.log(`${this.uploader} watched all ${this.time} sec. of '${this.title}'!`);
    }
}

firstVideo = new Video('Dog is playing with cats', 'John', 430);
firstVideo.watch();
secondVideo = new Video('A Child is eating a lemon', 'Chris', 40);
secondVideo.watch();


const videoData = [
    { title: "Video 1", uploader: "Uploader 1", time: 300 },
    { title: "Video 2", uploader: "Uploader 2", time: 122 },
    { title: "Video 3", uploader: "Uploader 3", time: 50 },
    { title: "Video 4", uploader: "Uploader 4", time: 440 },
    { title: "Video 5", uploader: "Uploader 5", time: 33 }
];

const videoInstances = [];
for (const data of videoData) {
    const videoInstance = new Video(data.title, data.uploader, data.time);
    videoInstances.push(videoInstance);
}

for (const videoInstance of videoInstances) {
    videoInstance.watch();
}

console.log(videoInstances);