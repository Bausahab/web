
import { useState } from "react";
import FileUpload from "react-material-file-upload";

export default function UploadItem() {
    const [files, setFiles] = useState([]);
    return (
         
            <FileUpload  value={files} onChange={setFiles} />
         
    );
}
