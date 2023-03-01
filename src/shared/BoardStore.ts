import {makeAutoObservable} from 'mobx';
import FreeApi from '../free/FreeApi';
import BoardType from "./BoardType";
import BoardDTO from "./BoardDTO";

class BoardStore {
    static _instance : BoardStore;

    private readonly freeApi : FreeApi;
    // private readonly boardDTO : BoardDTO | null = null;

    static get instance() {
        if (!BoardStore._instance) {
            BoardStore._instance = new BoardStore();
        }
        return BoardStore._instance;
    }

    constructor(
        freeApi : FreeApi = FreeApi.instance,
    ) {
        this.freeApi = freeApi;
        makeAutoObservable(this, {}, {autoBind:true});
    }

    async findFreeBoardList(type:BoardType) {
        //
        const result = await this.freeApi.findFreeBoardList(type);
        return result;

    }

    async findFreeBoard(id:string) {
        //
        const result = await this.freeApi.findFreeBoard(id);
        return result;
    }

    async deleteFreeBoard(id:string) {
        //
        const result = await this.freeApi.deleteFreeBoard(id);
        return result;
    }

    async addFreeBoard(boardDTO:BoardDTO) {
        //
        const result = await this.freeApi.addFreeBoard(boardDTO);
        return result;
    }

}

export default BoardStore;