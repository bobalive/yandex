import React, { useMemo, useRef, useState } from "react";
import styles from "./FileUploader.module.css";
import UploadButton from "@/components/common/UploadButton/UploadButton";
import { Button } from "../Button";

interface FileUploaderProps {
  onSubmit: (file: File) => Promise<void>;
  selectedFile?: string;
  acceptedFileTypes?: string;
  multiple?: boolean;
}

export const FileUploader: React.FC<FileUploaderProps> = ({
  onSubmit,
  acceptedFileTypes,
  multiple = false,
}) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fileState, setState] = useState<
    "default" | "loading" | "error" | "success" | "uploaded"
  >("default");
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragActive, setDragActive] = useState(false);

  const textFromFileState = useMemo(() => {
    if (fileState == "default") return "или перетащите сюда";
    if (fileState == "error") return "упс, не то...";
    if (fileState == "loading") return "идёт парсинг файла";
    if (fileState == "success") return "готово!";
    if (fileState == "uploaded") return "файл загружен!";
  }, [fileState]);

  // Counter to handle nested drag events
  const dragCounter = useRef(0);

  const handleDrag = (e: React.DragEvent<HTMLFormElement | HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDragIn = (
    e: React.DragEvent<HTMLFormElement | HTMLDivElement>
  ) => {
    e.preventDefault();
    e.stopPropagation();
    dragCounter.current++;
    if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
      setDragActive(true);
    }
  };

  const handleDragOut = (
    e: React.DragEvent<HTMLFormElement | HTMLDivElement>
  ) => {
    e.preventDefault();
    e.stopPropagation();
    dragCounter.current--;
    if (dragCounter.current === 0) {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLFormElement | HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    dragCounter.current = 0;
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const files = Array.from(e.dataTransfer.files);
      setSelectedFile(files[0]);
      setState("uploaded");
      e.dataTransfer.clearData();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files.length > 0) {
      const files = Array.from(e.target.files);
      setSelectedFile(files[0]);
      setState("uploaded");
      e.target.value = "";
    }
  };

  const onButtonClick = () => {
    inputRef.current?.click();
  };

  const handleSubmit = async () => {
    if (!selectedFile) {
      return;
    }
    setState("loading");
    try {
      await onSubmit(selectedFile);
      setState("success");
    } catch (e) {
      console.error(e);
      setState("error");
    }
  };

  return (
    <div className={styles.container}>
      <form
        className={`${styles.content} ${dragActive ? styles.dragActive : ""}`}
        onDragEnter={handleDragIn}
        onDragLeave={handleDragOut}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={inputRef}
          type="file"
          className={styles.inputField}
          accept={acceptedFileTypes}
          multiple={multiple}
          onChange={handleChange}
        />
        <label htmlFor="input-file-upload" className={styles.label}>
          <UploadButton
            state={fileState}
            text={textFromFileState}
            onClick={onButtonClick}
            onCancel={() => {
              setSelectedFile(null);
              setState("default");
            }}
          >
            {selectedFile ? selectedFile.name : "Загрузить файл"}
          </UploadButton>
        </label>
      </form>

      {(fileState == "uploaded" || fileState == "default") && (
        <Button
          disabled={!selectedFile}
          onClick={handleSubmit}
          variant={!selectedFile ? "disabled" : "default"}
        >
          Отправить
        </Button>
      )}
    </div>
  );
};
