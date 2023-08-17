export class Tag {
    id: number;
    tagName: string;
    description: string;
    ioAddress: string;
    isDeleted: boolean;
    currentValue: number;

    constructor(
        id: number,
        tagName: string,
        description: string,
        ioAddress: string,
        isDeleted: boolean,
        currentValue: number
    ) {
        this.id = id;
        this.tagName = tagName;
        this.description = description;
        this.ioAddress = ioAddress;
        this.isDeleted = isDeleted;
        this.currentValue = currentValue;
    }
}
