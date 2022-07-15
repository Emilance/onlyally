import React from "react";
import Button from "../Button";
import Link from "next/link";
import { deleteGroupStart } from "../../store/slices/groupsSlice";
import { useDispatch , useSelector} from "react-redux";

const DeleteSettings = ({ group }) => {
  const dispatch = useDispatch();
  const deletedGroup = useSelector((state) => state.groups.deleteGroup)
  const deleteGroup = () => {
    dispatch(deleteGroupStart(group.slug));
  };
  return (
    <div className="text-center col-container">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 500 500"
        width={280}
        height={280}
      >
        <g id="Floor--inject-292">
          <ellipse
            id="floor--inject-292"
            cx="249.11"
            cy="332.31"
            rx="237.55"
            ry="137.15"
            style={{ fill: "#f5f5f5" }}
          />
        </g>
        <g id="Character--inject-292">
          <g id="character-on-the-couch--inject-292">
            <path
              d="M202.56,381.33h-17l2.72,16.59h0A3,3,0,0,0,190,400a9.09,9.09,0,0,0,8.22,0,3.06,3.06,0,0,0,1.65-2.05h0Z"
              style={{ fill: "#fafafa" }}
            />
            <path
              d="M188,377.4c-3.33,1.92-3.33,5.05,0,7a13.33,13.33,0,0,0,12.08,0c3.33-1.92,3.33-5.05,0-7A13.33,13.33,0,0,0,188,377.4Z"
              style={{ fill: "#fafafa" }}
            />
            <path
              d="M126.2,337h-17l2.72,16.59h0a3,3,0,0,0,1.64,2,9.11,9.11,0,0,0,8.23,0,3.08,3.08,0,0,0,1.65-2h0Z"
              style={{ fill: "#fafafa" }}
            />
            <path
              d="M111.66,333.08c-3.34,1.92-3.34,5.05,0,7a13.3,13.3,0,0,0,12.07,0c3.34-1.92,3.34-5.05,0-7A13.3,13.3,0,0,0,111.66,333.08Z"
              style={{ fill: "#fafafa" }}
            />
            <path
              d="M345.56,316.5h-17l2.71,16.58h0a3.06,3.06,0,0,0,1.65,2.05,9.09,9.09,0,0,0,8.22,0,3.06,3.06,0,0,0,1.65-2.05h0Z"
              style={{ fill: "#fafafa" }}
            />
            <path
              d="M331,312.56c-3.33,1.93-3.33,5.05,0,7a13.39,13.39,0,0,0,12.08,0c3.33-1.93,3.33-5.05,0-7A13.39,13.39,0,0,0,331,312.56Z"
              style={{ fill: "#fafafa" }}
            />
            <path
              d="M259.06,266.17h-17l2.72,16.59h0a3.06,3.06,0,0,0,1.65,2.05,9.11,9.11,0,0,0,8.23,0,3,3,0,0,0,1.64-2.05h0Z"
              style={{ fill: "#fafafa" }}
            />
            <path
              d="M244.52,262.24c-3.34,1.93-3.34,5.05,0,7a13.3,13.3,0,0,0,12.07,0c3.34-1.92,3.34-5,0-7A13.37,13.37,0,0,0,244.52,262.24Z"
              style={{ fill: "#fafafa" }}
            />
            <path
              d="M359.14,229.32v79.21c0,5.24-3.72,11.67-8.25,14.28l-6.72,3.89-.12.06a18.62,18.62,0,0,1-10.3,1.77L232.81,381.94c-.23,5.1-3.79,11.14-8.16,13.71l-.07,0-6.71,3.87a3.32,3.32,0,0,1-.62.32,2.81,2.81,0,0,1-.35.17s-.07,0-.09,0a18.85,18.85,0,0,1-12.8.59,11.06,11.06,0,0,1-1.43-.53l-.23-.1c-.34-.15-.66-.32-1-.49l-97.14-55.94c-4.55-2.62-8.24-9-8.24-14.28l-.15-100.28V190.92c0-5.24,3.71-11.66,8.24-14.28L212.73,114c4.55-2.63,11.38-2.36,15.91.26l6.72,3.87c4.54,2.63,8.82,9,9.51,14.21l6.47,42.45,6-3.46a17.93,17.93,0,0,1,17.95,0L350.89,215C355.42,217.65,359.14,224.08,359.14,229.32Z"
              style={{ fill: "#37474f" }}
            />
            <path
              d="M235.36,118.18l-6.71-3.88c-4.56-2.63-11.36-2.89-15.92-.26L104.1,176.64c-.48.28-1,.65-.85.53a18.9,18.9,0,0,0-7.31,12.36c.61-4.21,4-5.73,8.15-3.37l6.73,3.88c4.55,2.63,11.94,2.63,16.49,0L235.36,127.7C239.92,125.07,239.92,120.81,235.36,118.18Z"
              style={{ fill: "#455a64" }}
            />
            <path
              d="M359.14,229.32v79.21c0,5.24-3.72,11.67-8.25,14.28l-6.72,3.89-.12.06a17.56,17.56,0,0,1-9.65,1.82,16.28,16.28,0,0,1-6.73-1.88l-76.33-44.09c-4.53-2.61-8.24-9.05-8.24-14.29v-79.2c0-5.24,3.69-11.68,8.24-14.29l6-3.46a17.93,17.93,0,0,1,17.95,0L350.89,215C355.42,217.65,359.14,224.08,359.14,229.32Z"
              style={{ fill: "#263238" }}
            />
            <path
              d="M257.33,171.37l-6,3.46c-4.53,2.62-4.53,6.9,0,9.52l76.35,44.08c4.53,2.62,8.24,9,8.24,14.28v79.22c0,5.24,3.71,7.38,8.25,4.76l6.72-3.88c4.53-2.62,8.24-9,8.24-14.28V229.31c0-5.24-3.71-11.66-8.24-14.28l-75.63-43.66A17.9,17.9,0,0,0,257.33,171.37Z"
              style={{ fill: "#455a64" }}
            />
            <path
              d="M335.92,242.71v79.22c0,5.24,3.71,7.38,8.25,4.76l6.72-3.88c4.53-2.62,8.24-9,8.24-14.28V229.31a16.91,16.91,0,0,0-2.42-8.12l-23.21,13.4A16.8,16.8,0,0,1,335.92,242.71Z"
              style={{ fill: "#37474f" }}
            />
            <path
              d="M332.49,328.58a19.69,19.69,0,0,1-3,4.54c-1.75,2-5.48,4.11-7.76,5.43-29,16.75-49.92,28.78-78.93,45.53a9.15,9.15,0,0,1-8.25,0l-26.82-15.49-53.65-31c-4.55-2.63-8.24-8.76-8.24-13.69s3.69-11.07,8.24-13.7l30.44-17.57,23.21-13.39,25.22-14.53a18.34,18.34,0,0,1,16.5,0l76.33,44.09c4.55,2.63,8.24,8.76,8.24,13.7A14.61,14.61,0,0,1,332.49,328.58Z"
              style={{ fill: "#263238" }}
            />
            <path
              d="M242.79,366.22,329.89,316c2.28-1.31,4.12-.24,4.12,2.39v8.34a9.09,9.09,0,0,1-4.12,7.14l-87.1,50.25c-2.28,1.31-4.13.25-4.12-2.38v-8.34A9.12,9.12,0,0,1,242.79,366.22Z"
              style={{ fill: "#37474f" }}
            />
            <path
              d="M232.93,223.89l-78.86,45.49c-4.55,2.63-8.24,9-8.24,14.28v16.69c0,5.26,3.69,11.65,8.25,14.28l76.34,44.08c4.55,2.63,11.94,2.63,16.49,0l78.86-45.48c4.55-2.63,8.25-9,8.25-14.29V282.25c0-5.26-3.7-11.65-8.25-14.28l-76.34-44.08C244.87,221.27,237.49,221.27,232.93,223.89Z"
              style={{ fill: "#37474f" }}
            />
            <path
              d="M238.67,324.94v35.75a16.89,16.89,0,0,1-8.25-2l-76.35-44.07c-4.55-2.63-8.24-9-8.24-14.29V283.67c0-4.93,3.25-10.86,7.4-13.75-3.69,2.65-3.41,6.53.84,9L230.42,323A16.94,16.94,0,0,0,238.67,324.94Z"
              style={{ fill: "#263238" }}
            />
            <path
              d="M246.91,323l78.86-45.49c4.55-2.63,4.55-6.89,0-9.52l-76.34-44.08c-4.56-2.62-11.94-2.62-16.5,0l-78.86,45.49c-4.55,2.63-4.55,6.89,0,9.52L230.42,323C235,325.61,242.36,325.61,246.91,323Z"
              style={{ fill: "#455a64" }}
            />
            <g id="character--inject-292">
              <path
                d="M183.56,136c1.12-1-7-10.35-7.65-11.18a57,57,0,0,1-9.29-16.71c-1.94-5.79-2.73-12.1-1.34-18a22.79,22.79,0,0,1,5.32-10.23,19.53,19.53,0,0,1,4.48-3.6,12.41,12.41,0,0,1,3.79-1.42s2.76-9.26,14.24-11.56a38.71,38.71,0,0,1,15.61,0c3.73.78,7.26,2.19,10.9,3.29a37.24,37.24,0,0,0,14.89,1.1c1.54-.19,3.21-.44,4.54.34,1.77,1,2.16,3.43,2,5.47A15.91,15.91,0,0,1,236.47,83a4.13,4.13,0,0,1,2.43,3.88,8.4,8.4,0,0,1-1.62,4.53c-3.21,4.89-8.25,7.23-13.83,8.26Z"
                style={{ fill: "#263238" }}
              />
              <path
                d="M279.85,340.29c-1.26,1.32-2.7,2.86-2.54,4.52a16.84,16.84,0,0,0,4.49,9.43c3.49,3.78,5.78,11,6.42,15.85s1.09,17.34,7.28,22.24,21.21,7.35,21.22-1.73-17.93-44-17.93-44Z"
                style={{ fill: "#263238" }}
              />
              <path
                d="M288.17,346.13a135.82,135.82,0,0,1,6.06,19.51c1.53,7.29,3.69,12.42,7.4,14.38s9.27,1.61,7.18-3.34-10-30.08-10-30.08Z"
                style={{ fill: "#f28f8f" }}
              />
              <path
                d="M240.17,222.07s29.52,13.52,43.88,21.23,28,15.26,30.86,21.47c3,6.56,2.25,22.2.67,37.25s-4.86,42.08-4.86,42.08l-42.05-63-42.25-27.9Z"
                style={{ fill: "#FF81AE" }}
              />
              <path
                d="M294.72,288.35C290.57,278.7,281.51,272.29,273,267c-6.74-4.18-23.55-13.94-30.15-17.77a30.38,30.38,0,0,0,2.21-10.37s-2.06,4.74-4.5,9h0l-1.76,2.89,43.27,32.29,29.64,53.09S298.87,298,294.72,288.35Z"
                style={{ opacity: "0.1" }}
              />
              <path
                d="M314.31,391.28c-1.22.81-1.05,3.82-.93,6s-1.47,5.1,1.73,8.5,8.59,3.7,13,8.34,11.06,13.2,23.07,13.82,20.24-4.62,21.86-8.43-.85-6.76-8.95-9.83c-8.6-3.25-11.05-4.22-11.05-4.22Z"
                style={{ fill: "#263238" }}
              />
              <path
                d="M323,365.42s8.09,14.63,12.63,21.21,11,12.47,18,17.82c1.52,1.16,4.86,3.22,6.1,4.16a2.26,2.26,0,0,1,.48,3.46c-2,2.92-12.51,5.68-19.39,2.45S326.33,404,322,401.16c-2.15-1.43-4.17-2.8-5.66-3.81a4.93,4.93,0,0,1-2.14-4.34c0-.49.05-1.06.07-1.73.11-3.6-7.33-16.74-7.33-16.74Z"
                style={{ fill: "#ffa8a7" }}
              />
              <path
                d="M171.56,238.9c2.33,12.65,4.28,17.87,11.25,28.91,6.76,10.68,20.69,18.48,38.82,24.57,15,5,37.07,12.23,41.43,13.17s5.29,3.29,6.3,11,6.23,19.7,17.95,33.59a375.38,375.38,0,0,1,23.8,32.26s12.24,0,16.93-8.16c0,0-34.08-80.39-39.54-89.66s-49.66-33.79-49.66-33.79.74-16.64,1.33-28.76Z"
                style={{ fill: "#FF81AE" }}
              />
              <path
                d="M237.52,152.21c6.37,9.35,22.77,37,22.77,37l15.21-22.37,14.63-1.58S277,205.08,267,214.54c-4.89,4.65-10.49,1.84-13.41-.65s-5.2-5.08-10.83-11.75C233.4,191.05,231,187.22,231,187.22l-16.53-46C220.81,141.23,229.25,140.06,237.52,152.21Z"
                style={{ fill: "#ffa8a7" }}
              />
              <path
                d="M260.29,189.2a27.89,27.89,0,0,0-6.75,10A17.2,17.2,0,0,1,259,187Z"
                style={{ fill: "#f28f8f" }}
              />
              <path
                d="M291.6,137.52h0l-1.55-1.3v0a1.71,1.71,0,0,0-1.58-.16L272,140.76a6.1,6.1,0,0,0-3.7,3.52l-11.6,34.59a1.56,1.56,0,0,0,.24,1.75h0l1.6,1.34v0a1.72,1.72,0,0,0,1.59.18l16.56-4.68a6.13,6.13,0,0,0,3.69-3.53c2.28-6.79,9.33-27.79,11.6-34.58C292.2,138.48,292.05,137.85,291.6,137.52Z"
                style={{ fill: "#FF81AE" }}
              />
              <path
                d="M291.6,137.52h0l-1.55-1.3v0a1.71,1.71,0,0,0-1.58-.16L272,140.76a6.1,6.1,0,0,0-3.7,3.52l-11.6,34.59a1.56,1.56,0,0,0,.24,1.75h0l1.6,1.34v0a1.72,1.72,0,0,0,1.59.18l16.56-4.68a6.13,6.13,0,0,0,3.69-3.53c2.28-6.79,9.33-27.79,11.6-34.58C292.2,138.48,292.05,137.85,291.6,137.52Z"
                style={{ opacity: "0.30000000000000004" }}
              />
              <path
                d="M258.2,180.17l11.6-34.58a6.1,6.1,0,0,1,3.7-3.52l16.55-4.68c1.54-.44,2.37.43,1.86,2-2.27,6.79-9.32,27.79-11.6,34.58a6.13,6.13,0,0,1-3.69,3.53l-16.56,4.68C258.53,182.56,257.69,181.69,258.2,180.17Z"
                style={{ fill: "#FF81AE" }}
              />
              <path
                d="M258.2,180.17l11.6-34.58a6.1,6.1,0,0,1,3.7-3.52l16.55-4.68c1.54-.44,2.37.43,1.86,2-2.27,6.79-9.32,27.79-11.6,34.58a6.13,6.13,0,0,1-3.69,3.53l-16.56,4.68C258.53,182.56,257.69,181.69,258.2,180.17Z"
                style={{ opacity: "0.5" }}
              />
              <path
                d="M271.7,143a6,6,0,0,0-1.9,2.55l-11.61,34.58a1.62,1.62,0,0,0,.19,1.72l-1.5-1.25v0a1.57,1.57,0,0,1-.24-1.76l11.6-34.59a5.86,5.86,0,0,1,1.76-2.41Z"
                style={{ fill: "#FF81AE" }}
              />
              <path
                d="M271.7,143a6,6,0,0,0-1.9,2.55l-11.61,34.58a1.62,1.62,0,0,0,.19,1.72l-1.5-1.25v0a1.57,1.57,0,0,1-.24-1.76l11.6-34.59a5.86,5.86,0,0,1,1.76-2.41Z"
                style={{ opacity: "0.4" }}
              />
              <path
                d="M287.13,171c6.11-8.76,4.84-18.76,1.32-21.31l-1.63,4.86s-10.42,3.52-15.59,3.69-9.51-.61-10.81.53c-2.75,2.42-2.64,11.46,6.24,13.79C274.22,174.51,287.13,171,287.13,171Z"
                style={{ fill: "#ffa8a7" }}
              />
              <path
                d="M169.25,147.06A44.79,44.79,0,0,1,177,177.58c-1.42,12.83-5.7,14.85-12.21,18.47-1.11,26.3,10.23,57.22,10.23,57.22s19,5.51,46-4.92c24.61-9.51,26.52-23.44,26.52-23.44l-12.21-14.09-2.87-18.2s9-13.84,4.37-25.34a53.59,53.59,0,0,0-22.37-26.05h-7.35L183.56,144Z"
                style={{ fill: "#fafafa" }}
              />
              <path
                d="M224.2,81.85c3.53,4.08,7.18,8.16,6,29.11-1,17.76-6.06,22.24-9,23.42s-8.48.22-13.88-.85v7.75c2,1.47,8.84,6.46,7.57,10.19-1.57,4.6-12.36,5.15-19.91,1.81-8.71-3.87-11.22-9.62-11.22-9.62V119.8s-4.71,2.58-8.85-2.19c-3.89-4.48-5-10.49-1.39-13.92a7.44,7.44,0,0,1,7.22-1.62,6.22,6.22,0,0,1,2.67,2,23.33,23.33,0,0,1,2.18,3.42c.41.72,1.23,2,2.2,2s1.51-1.38,1.83-2.1a20.62,20.62,0,0,1,6-7.63c2.68-2.12,5.54-3.06,8.75-4,4.28-1.27,8.69-2.7,12.37-5.3a22.18,22.18,0,0,0,4-3.65A48.88,48.88,0,0,0,224.2,81.85Z"
                style={{ fill: "#ffa8a7" }}
              />
              <path
                d="M234.28,101.2a1.77,1.77,0,0,1,2.27,2.71c-.75.63-3.77.85-3.77.85S233.53,101.83,234.28,101.2Z"
                style={{ fill: "#FF81AE" }}
              />
              <path
                d="M236.35,106.79a1.77,1.77,0,0,1-1.32,3.29c-.91-.37-2.52-2.93-2.52-2.93S235.44,106.43,236.35,106.79Z"
                style={{ fill: "#FF81AE" }}
              />
              <path
                d="M207.36,133.53c-8.64-2.49-14.35-3.82-17.14-10a11.18,11.18,0,0,0,3.32,7.08c5.15,4.55,13.82,5.84,13.82,5.84Z"
                style={{ fill: "#f28f8f" }}
              />
              <path
                d="M211.77,107.8a.43.43,0,0,1-.15.2c-.16.11-.38.08-.56.15-.37.16-.41.68-.73.91s-1.11-.09-1.62.13c-.2.09-.36.29-.57.37-.38.16-.77-.08-1.16,0s-.62.43-.83.64a17.45,17.45,0,0,0-4.64,9.3,21.16,21.16,0,0,0-.12,7.18,12.05,12.05,0,0,0,1.47,4.11,8.39,8.39,0,0,0,.89,1.17,3,3,0,0,0,.5.5,3.53,3.53,0,0,1,.62.54,1.27,1.27,0,0,1,.32.9.78.78,0,0,1-.6.7c-.24,0-.53,0-.59-.27a1.87,1.87,0,0,1,0-.47,1.81,1.81,0,0,0-.27-1,9.3,9.3,0,0,0-.9-1.09,6.52,6.52,0,0,1-.86-1.17,11,11,0,0,1-.85-2c0-.08,0-.17-.07-.26a17.57,17.57,0,0,1-.72-5.53,21.22,21.22,0,0,1,3.71-11.45,9.22,9.22,0,0,1,2.06-2.17.65.65,0,0,1-.74-.63,1,1,0,0,1,1.2-.89c.28.06.54.2.83.24a2.19,2.19,0,0,0,1-.15c.49-.19.93-.49,1.42-.69a1.92,1.92,0,0,1,1.54,0,.82.82,0,0,1,.39.41A.58.58,0,0,1,211.77,107.8Z"
                style={{ fill: "#e6e6e6" }}
              />
              <path
                d="M223.58,106a2.09,2.09,0,0,0-.83.11,1.07,1.07,0,0,0-.62.54.62.62,0,0,0,.35.9c.17,0,.39,0,.51.18s.06.27.1.41a.63.63,0,0,0,.47.39,1.28,1.28,0,0,0,.64-.07,1.27,1.27,0,0,1,.66-.12c.27.06.46.32.72.43a.71.71,0,0,0,.77-.15,1.88,1.88,0,0,1,.24-.25c.27-.19.69,0,.95-.24s.12-.61,0-.85a2,2,0,0,0-.76-.64,4.45,4.45,0,0,0-.77-.28c-.24-.07-.47-.09-.71-.15A7.36,7.36,0,0,0,223.58,106Z"
                style={{ fill: "#e6e6e6" }}
              />
              <path
                d="M210.55,105.94c.43,1.21-.46,1.78-1.62,2.19s-2.17.49-2.6-.72a2.24,2.24,0,1,1,4.22-1.47Z"
                style={{ fill: "#263238" }}
              />
              <path
                d="M227,106.55c-.37,1.23-1.43,1.17-2.61.81s-2-.88-1.66-2.11a2.23,2.23,0,1,1,4.27,1.3Z"
                style={{ fill: "#263238" }}
              />
              <path
                d="M223.36,97.1l4.54,3.12a2.36,2.36,0,0,1-3.54.49A2.61,2.61,0,0,1,223.36,97.1Z"
                style={{ fill: "#263238" }}
              />
              <path
                d="M204.2,100.7l4.48-3.2a2.43,2.43,0,0,1-.77,3.56A2.59,2.59,0,0,1,204.2,100.7Z"
                style={{ fill: "#263238" }}
              />
              <polygon
                points="215.54 104 216.55 117.46 223.45 115.8 215.54 104"
                style={{ fill: "#f28f8f" }}
              />
              <path
                d="M213.22,120c-2.5-.4-5.29,1.29-5.12,2.75.13,1.06,1.12,1.4,2.52,1.28a5.09,5.09,0,0,1,3.62.82,1.57,1.57,0,0,0,2.47-1.41A3.72,3.72,0,0,0,213.22,120Z"
                style={{ fill: "#b16668" }}
              />
              <path
                d="M209.74,121.59a2.8,2.8,0,0,0-1.49.44,1.29,1.29,0,0,0-.15.73c.13,1.06,1.12,1.4,2.52,1.28a6.2,6.2,0,0,1,1.87.06A2.77,2.77,0,0,0,209.74,121.59Z"
                style={{ fill: "#f28f8f" }}
              />
              <path
                d="M169.25,147.06c-8.81,1.59-17.89,10.46-16.33,26.55s14.9,54.71,17.48,59.87c4.13,8.26,9.46,13.43,14.83,14.52a11.49,11.49,0,0,0,9-2.29c10.92-7.93,22.14-30.93,26.29-40.43,2.77-6.35,4.58-11.4,5.54-17.21.85-5.12,1-11.2-2.53-15.35-1.66-1.93-2.93-4.54-5.73-5-1.09-.19-1.35-.07-2.17-.92s-1.75-1.83-2.62-2.74c-.65-.67-1.49-1.4-2.39-1.17a1.81,1.81,0,0,0-1.2,1.32,5.21,5.21,0,0,0-.07,1.85,97.23,97.23,0,0,1,.43,10.66,15.84,15.84,0,0,1-1.3,6.55,1.56,1.56,0,0,1-.85.91,1.08,1.08,0,0,1-.87-.19,2.38,2.38,0,0,1-.6-.7c-.7-1.16-1.26-2.41-1.92-3.6a8.64,8.64,0,0,0-3.41-3.55,3.43,3.43,0,0,0-1.73-.47,1.68,1.68,0,0,0-1.46.94,2.94,2.94,0,0,0,.5,2.31c1.79,3.65,1.69,7.83,2.61,11.72.42,1.77,1.15,3.71,1.68,5.44.68,2.24-.58,5.72-1.84,7.9a56.75,56.75,0,0,1-10.11,12.92l-8.72-30.82s2.72-16.05-3.54-28.1C174.09,150,169.25,147.06,169.25,147.06Z"
                style={{ fill: "#ffa8a7" }}
              />
              <path
                d="M190.47,216.87c-5.24,2.54-9.64,7.54-10.47,10.39,0,0-.79-8.87,9.5-13.85Z"
                style={{ fill: "#f28f8f" }}
              />
            </g>
            <path
              d="M209.62,394.8V315.58c0-5.23-3.71-11.66-8.24-14.28l-76.44-44.12a5.43,5.43,0,0,1,0-9.41l1.86-1.07-6.48-42.46c-.69-5.19-5-11.58-9.5-14.2l-6.72-3.88c-4.53-2.62-8.25-.47-8.25,4.76v38.14L96,329.34c0,5.24,3.71,11.66,8.24,14.28l97.15,55.94C205.91,402.18,209.62,400,209.62,394.8Z"
              style={{ fill: "#263238" }}
            />
            <path
              d="M232.83,302.18v79.23a4.7,4.7,0,0,1,0,.53c-.23,5.1-3.79,11.14-8.16,13.71l-.07,0-6.71,3.87a3.32,3.32,0,0,1-.62.32,2.81,2.81,0,0,1-.35.17s-.07,0-.09,0c-.23.09-.46.19-.67.25a19.13,19.13,0,0,1-12.13.34,11.06,11.06,0,0,1-1.43-.53c4,1.63,7-.59,7-5.34V315.59c0-5.24-3.72-11.68-8.25-14.29l-15-8.64-61.48-35.49a5.43,5.43,0,0,1,0-9.4l6.82-4c4.54-2.61,12-2.61,16.5,0l61.38,35.45,15,8.62C229.13,290.52,232.83,296.94,232.83,302.18Z"
              style={{ fill: "#455a64" }}
            />
            <path
              d="M209.63,315.59v79.22c0,4.75-3.09,7-7,5.34a11.06,11.06,0,0,0,1.43.53,19.13,19.13,0,0,0,12.13-.34c.21-.06.44-.16.67-.25,0,0,.06,0,.09,0a2.81,2.81,0,0,0,.35-.17,3.32,3.32,0,0,0,.62-.32l6.71-3.87.07,0c4.37-2.57,7.93-8.61,8.16-13.71a4.7,4.7,0,0,0,0-.53V302.18a16.91,16.91,0,0,0-2.42-8.12l-23.21,13.4A16.85,16.85,0,0,1,209.63,315.59Z"
              style={{ fill: "#37474f" }}
            />
          </g>
        </g>
        <g id="Heart--inject-292">
          <g id="heart--inject-292">
            <path
              d="M370.18,47.8v0l-.09-.11A28.16,28.16,0,0,0,349,38.42c-10.74.06-20,8.94-24.7,19.22a90.67,90.67,0,0,1-6.88,12.67l-5.83,8.78L331.69,93l-15.5,12.58L324.26,120l-12.63-13.92,8.6-13.18L303,81,316,53.69c-5.18-8.4-13.48-15-22.78-14.9a28.15,28.15,0,0,0-20.94,9.54l-.09.11,0,0a28,28,0,0,0-7,18.7c.14,22.23,20.83,34.37,38.21,48.83l17.87,13.24,18.54-13.49C357,101,377.54,88.63,377.39,66.4A28,28,0,0,0,370.18,47.8Z"
              style={{ fill: "#FF81AE" }}
            />
            <path
              d="M280.91,95.75s.76,11-11.62,15.27c0,0,11.71,6,23-5.68Z"
              style={{ fill: "#FF81AE" }}
            />
          </g>
        </g>
      </svg>
      <h3 className="text-center text-3xl font-semibold">
        Are you sure you want to delete this group?
      </h3>
      <div className="row-container space-x-2 my-3">
        <Button
          text={deletedGroup.loading ? "Loading..." : "Delete Group`"}
          textClass="text-black text-sm font-medium"
          extraClasses="w-[120px] h-8"
          onClick={()=>deleteGroup()}
        />
        <Link href={`/groups/${group.slug}`} passHref>
          <Button
            text="No. I'll Think"
            textClass="font-medium text-sm"
            active={true}
            extraClasses="w-[120px] h-8"
          />
        </Link>
      </div>
    </div>
  );
};

export default DeleteSettings;
