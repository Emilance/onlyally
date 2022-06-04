import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiOutlineEmojiHappy } from "react-icons/hi";

import { EditorState, convertToRaw, Modifier } from "draft-js";
import { useSelector } from "react-redux";
import {
  saveCommentStart,
  fetchCommentsStart,
} from "../../store/slices/commentsSlice";

import { Picker, EmojiData } from "emoji-mart";
import "emoji-mart/css/emoji-mart.css";
import PostEditor from "./PostEditor";
import { useDispatch } from "react-redux";

const Comments = ({ post, currentIndex }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.loginData);

  const mentionsRef = useRef();

  const [editorContentState, setEditorContentstate] = useState("");

  const [editorHtmlContent, setEditorHtmlContent] = useState("");

  const [emojiPickerState, SetEmojiPicker] = useState(false);

  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const [commentActiveIndex, setCommentActiveIndex] = useState(null);

  const [userPicture, setUserPicture] = useState('');

    useEffect(() => {
      setUserPicture(localStorage.getItem("user_picture"))
    },[])

  const handleCommentSubmit = (event) => {
    event.preventDefault();
    dispatch(
      saveCommentStart({
        comment: editorHtmlContent,
        post_id: post.post_id,
      })
    );
    // setCommentInputData({});
    setEditorState(EditorState.createEmpty());
  };

  function triggerPicker(event) {
    event.preventDefault();
    SetEmojiPicker(!emojiPickerState);
  }

  const handleEmojiSelect = (emoji) => {
    SetEmojiPicker(false);
    setEditorState(insertCharacter(emoji.native, editorState));
  };

  const handleCommentActiveIndex = (index) => {
    setCommentActiveIndex(index);
  };

  const insertCharacter = (emoji, editorState) => {
    const currentContent = editorState.getCurrentContent();
    const currentSelection = editorState.getSelection();

    const newContent = Modifier.insertText(
      currentContent,
      currentSelection,
      emoji
    );

    const newEditorState = EditorState.push(
      editorState,
      newContent,
      "insert-characters"
    );

    return EditorState.forceSelection(
      newEditorState,
      newContent.getSelectionAfter()
    );
  };

  const focusEditor = () => {
    setCommentActiveIndex(currentIndex);
  };

  return (
    <div
      className="block w-full px-[5px]  bg-white border rounded-2xl mt-2 "
      onFocus={() => focusEditor()}
    >
      <div className="clear-both">
        <form
          className="w-full flex items-center  mt-0"
          action=""
          onSubmit={handleCommentSubmit}
        >
          <div className="inline-block float-left clear-both basis-[15%]">
            <a className="title-container-1" href="#">
              <div className="relative w-10 h-10 rounded-full max-w-full">
                <Image
                  alt=""
                  src={
                    userPicture || user.picture || 'https://cms.onlyally.com/placeholder.jpeg'
                  }
                  objectFit="cover"
                  layout="fill"
                  className="rounded-full"
                />
              </div>
            </a>
          </div>
          {commentActiveIndex == currentIndex ? (
            <div className="inline-block float-left basis-[70%]">
              <PostEditor
                className="PostEditor__input"
                placeholder={"Add comments here...."}
                refs={mentionsRef}
                getEditorRawContent={setEditorContentstate}
                getEditorHtmlContent={setEditorHtmlContent}
                dispatch={dispatch}
                editorState={editorState}
                setEditorState={setEditorState}
                // userSelect="none"
                // contentEditable={false}
              />
            </div>
          ) : (
            <div className="empty-comment basis-[70%] my-[5px] ">
              <input
                className="border-none ring-0 border-0 w-full"
                type="text"
                placeholder="Add comments here ..."
              />
            </div>
          )}
          <ul className="!relative pl-0 list-none flex my-0 basis-[15%]">
            <li className="mt-0 mr-1 flex items-start">
              <button to="#" onClick={() => handleCommentSubmit}>
                {/* <i className="fas fa-paper-plane"></i> */}
                <div className="commentBtn row-container">
                  <div className="relative w-7 h-7">
                    <Image
                      layout="fill"
                      src="/comment.png"
                      className="invert"
                      alt=""
                    />
                  </div>
                </div>
              </button>
            </li>
            <li className="m-0 !mt-0 flex items-start">
              <button
                type="button"
                className="p-0 pr-1"
                onClick={triggerPicker}
              >
                <HiOutlineEmojiHappy className="commentBtn" />
              </button>
            </li>
            {emojiPickerState && (
              <div className="emojiWrapper">
                <Picker
                  title=""
                  emoji="point_up"
                  onSelect={(emoji) => handleEmojiSelect(emoji)}
                />
              </div>
            )}
          </ul>
        </form>
      </div>
    </div>
  );
};

export default Comments;
