import { all, fork } from "redux-saga/effects";

import UserSaga from "./UserSaga";
import HomeSaga from "./HomeSaga";
import PostSaga from "./PostSaga";
import PostLikesSaga from "./PostLikesSaga";
import CommentsSaga from "./CommentsSaga";
import BookmarkSaga from "./BookmarkSaga";
import StoriesSaga from "./StoriesSaga";
import ErrorSaga from "./ErrorSaga";
import OtherUserSaga from "./OtherUsersSaga";
import WalletSaga from "./WalletSaga";
import SubscriptionSaga from "./SubscriptionSaga";
import CardSaga from "./CardSaga";
import ConfigSaga from './ConfigSaga';
import FollowSaga from "./FollowSaga";
import AlertSaga from "./AlertSaga";
import ChatSaga from "./ChatSaga";
import ChannelsSaga from "./ChannelsSaga";
import ChatAssetSaga from "./ChatAssetSaga";
import UserCategorySaga from "./UserCategorySaga";
import GroupsSaga from "./GroupsSaga";

export default function* rootSaga() {
    yield all([fork(UserSaga)]);
    yield all([fork(HomeSaga)]);
    yield all([fork(PostSaga)]);
    yield all([fork(PostLikesSaga)]);
    yield all([fork(CommentsSaga)]);
    yield all([fork(BookmarkSaga)]);
    yield all([fork(StoriesSaga)]);
    yield all([fork(ErrorSaga)])
    yield all([fork(OtherUserSaga)])
    yield all([fork(WalletSaga)])
    yield all([fork(SubscriptionSaga)])
    yield all([fork(CardSaga)])
    yield all([fork(ConfigSaga)])
    yield all([fork(FollowSaga)])
    yield all([fork(AlertSaga)])
    yield all([fork(ChatSaga)])
    yield all([fork(ChatAssetSaga)])
    yield all([fork(ChannelsSaga)])
    yield all([fork(UserCategorySaga)])
    yield all([fork(GroupsSaga)])

    
}