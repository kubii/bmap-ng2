import {Room, Floor} from '../model/model'

export class RoomService {
    private static instance: RoomService;
    private rooms1: Array<Room> = [{
        "name":"Room2",
        "points":[{"x":220,"y":344},{"x":228,"y":288},{"x":281,"y":296},{"x":273,"y":349},{"x":220,"y":344}],
        "people":[{"name":"pistike"},{"name":"béla"}]
    },{
        "name":"Room3",
        "points":[{"x":211,"y":404},{"x":266,"y":410},{"x":273,"y":349},{"x":220,"y":344},{"x":211,"y":404}],
        "people":[{"name":"szalmakalap"},{"name":"rozi"}]
    },{
        "name":"Room4",
        "points":[{"x":209,"y":433},{"x":229,"y":463},{"x":259,"y":465},{"x":266,"y":410},{"x":211,"y":404},{"x":209,"y":433}],
        "people":[{"name":"Barka Pali"},{"name":"Barka Mari"}]
    }];
    private rooms2: Array<Room> = [{
        "name":"Room5",
        "points":[{"x":281,"y":328},{"x":281,"y":281},{"x":329,"y":283},{"x":331,"y":329},{"x":281,"y":328}],
        "people":[]
    }];
    private rooms3: Array<Room> = [{
        "name":"Hello Kitty Online fun club office",
        "points":[{"x":112,"y":468},{"x":124,"y":359},{"x":195,"y":368},{"x":183,"y":477},{"x":112,"y":468}],
        "people":[{"name":"Sanyi"}]
    }];
    
    private floors: Array<Floor> = [{
            id: 0,
            name: 'Gound',
            rooms: this.rooms1,
            img: './resource/f0.png',
            width: 800,
            height: 600
        }, {
            id: 1,
            name: 'Floor 1',
            rooms: this.rooms2,
            img: './resource/f1.png',
            width: 800,
            height: 600
        }, {
            id: 2,
            name: 'Floor 2',
            rooms: this.rooms3,
            img: './resource/f2.png',
            width: 800,
            height: 600
        }
    ];
    
    public getFloors() {
        return new Promise(resolve => resolve(this.floors));
    }
    
    static getInstance() {
        if (!this.instance)
            this.instance = new RoomService();
        return this.instance;
    }
}