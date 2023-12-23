import React, { useEffect, useRef } from "react";

function Editor({ onChange, editorLoaded, name, value }) {
    const editorRef = useRef();
    const { CKEditor, ClassicEditor } = editorRef.current || {};

    const handleCommit = () => {
        console.log(value);
    }

    useEffect(() => {
        editorRef.current = {
            CKEditor: require("@ckeditor/ckeditor5-react").CKEditor,
            ClassicEditor: require("@ckeditor/ckeditor5-build-classic"),
        };
    }, []);

    return (
        <div className="w-full mb-12">
            {editorLoaded ? (
                <div className="relative flex flex-col justify-center items-center">
                    <CKEditor
                        type=""
                        name={name}
                        editor={ClassicEditor}
                        config={{
                            ckfinder: {
                                // Upload the images to the server using the CKFinder QuickUpload command
                                // You have to change this address to your server that has the ckfinder php connector
                                uploadUrl: "",
                            },
                            placeholder: "Viết bình luận ở đây...",
                        }}
                        data={value}
                        onChange={(event, editor) => {
                            const data = editor.getData();
                            // console.log({ event, editor, data })
                            onChange(data);
                        }}
                    />
                    <button className="text-white bg-navActive rounded-md px-4 py-1 relative -top-12" onClick={handleCommit}>Gửi</button>
                </div>
            ) : (
                <div>Editor loading</div>
            )}
        </div>
    );
}

export default Editor;
