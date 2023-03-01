import BoardType from './BoardType';

export class Board {
    //
    id : string;
    type : BoardType;
    no : string;
    title : string;
    content : string;
    name : string;
    createDate : number;

    constructor(
        id : string,
        type : BoardType,
        no : string,
        title : string,
        content : string,
        name : string,
        createDate : number,
    ) {
        this.id = id;
        this.type = type;
        this.no = no;
        this.title = title;
        this.content = content;
        this.name = name;
        this.createDate = createDate;
    }
}

export default Board;