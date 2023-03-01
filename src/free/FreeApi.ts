import BoardDTO from "../shared/BoardDTO";
import BoardType from "../shared/BoardType";
import axios from "axios";

class FreeApi {
    //
    private static _instance: FreeApi;

    static get instance() {
        if(!FreeApi._instance) {
            FreeApi._instance = new FreeApi();
        }
        return FreeApi._instance;
    }

    // boardList 가져오기
    async findFreeBoardList(type:BoardType) : Promise<BoardDTO[]> {
        //
        const res = await axios.get('/board/board-list/Free')

        return res.data;
    }

    async findFreeBoard(id:string):Promise<BoardDTO> {
        //
        const res = await axios.get(`/board/board/${id}`)

        return res.data;
    }

    async deleteFreeBoard(id:string):Promise<string> {
        //
        const res = await axios.delete(`/board/delete-board/${id}`)

        return res.data;
    }

    async addFreeBoard(boardDTO:BoardDTO): Promise<BoardDTO> {
        //
        const res = await axios.post('/board/add-board')

        return res.data;
    }
}

export default FreeApi;