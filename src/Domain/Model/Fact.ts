export interface Fact {
    _id: string;
    _v: number;
    user: string;
    text: string;
    updatedAt: string;
    sendDate: string;
    deleted: boolean;
    source: string;
    type: string;
    status: {
        verified: boolean;
        feedback: string;
        sentCount: number;
    };
}
