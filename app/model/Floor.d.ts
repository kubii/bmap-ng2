import {Room} from './model';

export interface Floor {
    id: number;
    name: string;
    rooms: Array<Room>;
    img: string;
    width: number;
    height: number;
    
    selectedRoom?: Room;
    hoveredRoom?: Room;
}