"use client";

import { TINY_MCE_API_KEY } from "@/common/contants";
import { Editor as MCEEditor, IAllProps } from "@tinymce/tinymce-react";

export default function Editor(props: IAllProps) {
  return (
    <MCEEditor
      tagName="textarea"
      apiKey={TINY_MCE_API_KEY}
      init={{
        height: 500,
        menubar: false,
        plugins: [
          "advlist",
          "autolink",
          "lists",
          "link",
          "image",
          "charmap",
          "preview",
          "anchor",
          "searchreplace",
          "visualblocks",
          "code",
          "fullscreen",
          "insertdatetime",
          "media",
          "table",
          "code",
          "help",
          "wordcount",
          "pageembed",
        ],
        toolbar:
          "undo redo | blocks | " +
          "bold italic forecolor | alignleft aligncenter " +
          "alignright alignjustify | bullist numlist outdent indent | pageembed |" +
          "removeformat | help",
        content_style:
          "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
      }}
      {...props}
    />
  );
}
