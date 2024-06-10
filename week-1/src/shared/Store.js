import { atom } from "recoil";

const postsState = atom({
    key: "postsState",
    default: [
        { id: 1, subject: "subject 1", content: "contents 1" },
        { id: 2, subject: "subject 2", content: "contents 2" }],
});

const tempdataState = atom({
    key: "tempdataState",
    default: [
        ],
});

const isRefreshState = atom({
    key: "isRefreshState",
    default: false,
});

export { postsState, tempdataState, isRefreshState };