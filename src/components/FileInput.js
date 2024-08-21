import { useEffect, useRef, useState } from "react";

function FileInput({ name, value, intialPreview, onChange }) {
  // 이미지 파일 미리보기
  const [preview, setPreview] = useState(intialPreview);
  const inputRef = useRef();
  const handleChange = (e) => {
    //console.log(e.target.files);
    const nextValue = e.target.files[0];
    onChange(name, nextValue);
  };

  const handleClearClick = () => {
    const inputNode = inputRef.current;
    if (!inputNode) return;

    inputNode.value = "";
    onChange(name, null);
  };

  // useEffect(() => {
  //   if (inputRef.current) {
  //     console.log(inputRef.current);
  //   }
  // }, []);

  useEffect(() => {
    if (!value) return;
    const nextPreview = URL.createObjectURL(value);
    setPreview(nextPreview);
    // Clean Up
    return () => {
      setPreview(intialPreview);
      URL.revokeObjectURL(nextPreview);
    };
  }, [value, intialPreview]);

  return (
    <div>
      <img
        className="NewsListItem-img"
        src={preview}
        alt="이미지 미리보기"
        width="250"
      />
      <input
        type="file"
        accept="image/png, img/jpeg, image/jfif, image/webp"
        onChange={handleChange}
        ref={inputRef}
      />
      {value && <button onClick={handleClearClick}>X</button>}
    </div>
  );
}

export default FileInput;
