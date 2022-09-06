import React, { ReactNode, useEffect } from "react";
import "../../../tailwind.css";
import { useThemeContext } from "../../theme/ThemeProvider";
import resolvedStyleProps from "../../utils/resolvedStyleProps";

export interface FileUploaderBaseProps {
  fwdRef?: any;
  multiple?: boolean;
  accept?: string;
  autoUpload?: boolean;
  selectedFiles: (files: any) => void;
  beforeUpload: (files: any) => void;
  afterUpload: (files: any) => void;
  openFileUploader: (callback?: any) => void;
  upload: (files: any) => void;
}

const FileUploaderBase = React.forwardRef(
  (props: FileUploaderBaseProps, ref) => {
    const theme: any = useThemeContext();
    const [files, setFiles] = React.useState<any[]>([]);
    const fileInputRef = React.useRef<any>(null);

    React.useImperativeHandle(ref, () => ({
      triggerUpload: async () => {
        console.log("triggerUpload");
        await uploadFiles(files);
      },
    }));

    const fileListToArray = (list: any) => {
      const filesList = [];

      for (var i = 0; i < list.length; i++) {
        let fileItem = {
          file: list.item(i),
          uploaded: null,
        };
        filesList.push(fileItem);
      }
      return filesList;
    };

    useEffect(() => {
      props.selectedFiles(files);
    }, [files]);

    const uploadFiles = async (filesToUpload: any) => {
      props.beforeUpload(filesToUpload);

      try {
        let uploadedFiles = await Promise.all(
          filesToUpload.map(async (f: any) => {
            let result = await props.upload(f.file);
            return result;
          })
        );

        props.afterUpload(uploadedFiles);
      } catch (error) {
        throw error;
      }
    };

    const onFilesAdded = async (evt: React.ChangeEvent<HTMLInputElement>) => {
      const addedFiles = fileListToArray(evt.target.files);
      await setFiles((prev) => {
        return [...addedFiles];
      });
      try {
        if (props.autoUpload) {
          await uploadFiles(addedFiles);
        }
      } catch (error) {
        throw error;
      }
    };

    return (
      <>
        <input
          ref={fileInputRef}
          className="hidden"
          type="file"
          multiple={props.multiple}
          accept={props.accept}
          onChange={(e) => {
            onFilesAdded(e);
          }}
          style={{
            display: "none",
          }}
        />
        {props.openFileUploader(() => {
          if (fileInputRef && fileInputRef?.current) {
            fileInputRef?.current?.click();
          }
        })}
      </>
    );
  }
);

// const FileUploaderBase = (props: FileUploaderBaseProps) => {
//   const theme: any = useThemeContext();
//   const [files, setFiles] = React.useState<any[]>([]);

//   const fileInputRef = React.useRef<any>(null);

//   React.useImperativeHandle(props.fwdRef, () => ({
//     triggerUpload: async () => {
//       await uploadFiles(files);
//     },
//   }));

//   const fileListToArray = (list: any) => {
//     const filesList = [];

//     for (var i = 0; i < list.length; i++) {
//       let fileItem = {
//         file: list.item(i),
//         uploaded: null,
//       };
//       filesList.push(fileItem);
//     }
//     return filesList;
//   };

//   const uploadFiles = async (filesToUpload: any) => {
//     props.beforeUpload(filesToUpload);

//     try {
//       let uploadedFiles = await Promise.all(
//         filesToUpload.map(async (f: any) => {
//           let result = await props.upload(f.file);
//           return result;
//         })
//       );

//       props.afterUpload(uploadedFiles);
//     } catch (error) {
//       throw error;
//     }
//   };

//   const onFilesAdded = async (evt: React.ChangeEvent<HTMLInputElement>) => {
//     const addedFiles = fileListToArray(evt.target.files);
//     await setFiles(addedFiles);
//     props.beforeUpload(addedFiles);
//     try {
//       if (props.autoUpload) {
//         await uploadFiles(addedFiles);
//       }
//     } catch (error) {
//       throw error;
//     }
//   };

//   return (
//     <>
//       <input
//         ref={fileInputRef}
//         className="hidden"
//         type="file"
//         multiple={props.multiple}
//         accept={props.accept}
//         onChange={(e) => {
//           onFilesAdded(e);
//         }}
//         style={{
//           display: "none",
//         }}
//       />
//       {props.openFileUploader(() => {
//         if (fileInputRef && fileInputRef?.current) {
//           fileInputRef?.current?.click();
//         }
//       })}
//     </>
//   );
// };

export default FileUploaderBase;
