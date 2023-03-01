import BoardType from './BoardType';

export class BoardDTO {
    //
    id : string;
    type : BoardType | null = null;
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

    static findBoardListByType(
        id : string,
        type : BoardType,
        no : string,
        title : string,
        content : string,
        name : string,
        createDate : number,
    ) {
        const query = new BoardDTO(
            id,
            type,
            no,
            title,
            content,
            name,
            createDate,
        );
        return query;
    }

}

export default BoardDTO;