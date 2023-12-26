import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

function Editor({ onChange, editorLoaded, name, value, reviewId, setCommentAdded, commentAdded }) {
    const [data, setData] = useState({});
    const editorRef = useRef();
    const { CKEditor, ClassicEditor } = editorRef.current || {};

    const handleCommit = () => {
        setData({
            user_id: 1,
            review_id: reviewId,
            comment_text: value
        });
        onChange('');
    };

    useEffect(() => {
        editorRef.current = {
            CKEditor: require("@ckeditor/ckeditor5-react").CKEditor,
            ClassicEditor: require("@ckeditor/ckeditor5-build-classic"),
        };

        const fetchData = async () => {
            try {
                const response = await axios.post("http://localhost:8000/api/create-comment", data);
                console.log("API response:", response.data);
                if(response.data){
                    setCommentAdded(!commentAdded);
                }
            } catch (error) {
                console.error("API error:", error);
            }
        };

        if (Object.keys(data).length > 0) {
            fetchData();
        }
    }, [data]);

    return (
        <div className="w-10/12 mb-12 mt-5">
            {editorLoaded ? (
                <div className="relative flex flex-col justify-center items-center">
                    <CKEditor
                        type=""
                        name={name}
                        editor={ClassicEditor}
                        config={{
                            ckfinder: {
                                uploadUrl: "",
                            },
                            placeholder: "Viết bình luận ở đây...",
                        }}
                        data={value}
                        onChange={(event, editor) => {
                            const data = editor.getData();
                            onChange(data);
                        }}
                    />
                    <button className="text-white bg-navActive rounded-md px-6 py-1 relative -top-12" style={{ backgroundColor: "#FB24FF" }} onClick={handleCommit}>
                        Gửi
                    </button>
                </div>
            ) : (
                <div>Editor loading</div>
            )}
        </div>
    );
}

export default Editor;
