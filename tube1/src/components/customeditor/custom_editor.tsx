'use client'; // Required only in App Router.

import React from 'react';
import { CKEditor, useCKEditorCloud } from '@ckeditor/ckeditor5-react';

interface CustomEditorProps {
  onChange: (data: string) => void;
  initialContent: string;
}

const CustomEditor: React.FC<CustomEditorProps> = ({ onChange, initialContent }) => {
  const cloud = useCKEditorCloud({
    version: '45.0.0',
    premium: true,
  });

  if (cloud.status === 'error') {
    return <div>Error loading editor!</div>;
  }

  if (cloud.status === 'loading') {
    return <div>Loading editor...</div>;
  }

  const {
    ClassicEditor,
    Essentials,
    Paragraph,
    Bold,
    Italic,
    Underline,
    Strikethrough,
    BlockQuote,
    Heading,
    Link,
    List,
    Table,
    Image,
    ImageToolbar,
    ImageCaption,
    ImageStyle,
    ImageResize,
    MediaEmbed,
    Code,
    CodeBlock,
    Highlight,
    Alignment,
  } = cloud.CKEditor;

  return (
    <CKEditor
      editor={ClassicEditor}
      data={initialContent || ''} // <-- FIX: use initialContent
      config={{
        licenseKey: 'eyJhbGciOiJFUzI1NiJ9.eyJleHAiOjE3NDcwOTQzOTksImp0aSI6Ijk5M2U4OTU2LTIwZmItNDhlMC1iNWU3LTA3Y2UzYWI2MjRiNSIsInVzYWdlRW5kcG9pbnQiOiJodHRwczovL3Byb3h5LWV2ZW50LmNrZWRpdG9yLmNvbSIsImRpc3RyaWJ1dGlvbkNoYW5uZWwiOlsiY2xvdWQiLCJkcnVwYWwiLCJzaCJdLCJ3aGl0ZUxhYmVsIjp0cnVlLCJsaWNlbnNlVHlwZSI6InRyaWFsIiwiZmVhdHVyZXMiOlsiKiJdLCJ2YyI6Ijc4NTJiYjg1In0.6q-R9yAazsaCmn5X1HAYlj4eF9VRUZ1Lm-BI7uHGCeshPUvdpoOFfh4wAN1HLuWpBic31JhyrkBfABLbhhHhaQ', // (keep your key)
        plugins: [
          Essentials,
          Paragraph,
          Bold,
          Italic,
          Underline,
          Strikethrough,
          BlockQuote,
          Heading,
          Link,
          List,
          Table,
          Image,
          ImageToolbar,
          ImageCaption,
          ImageStyle,
          ImageResize,
          MediaEmbed,
          Code,
          CodeBlock,
          Highlight,
          Alignment,
        ],
        toolbar: [
          'undo',
          'redo',
          '|',
          'heading',
          '|',
          'bold',
          'italic',
          'underline',
          'strikethrough',
          '|',
          'link',
          'blockquote',
          'highlight',
          '|',
          'bulletedList',
          'numberedList',
          '|',
          'insertTable',
          'imageUpload',
          'mediaEmbed',
          '|',
          'alignment',
          'code',
          'codeBlock',
        ],
        image: {
          toolbar: [
            'imageTextAlternative',
            'imageStyle:full',
            'imageStyle:side',
            '|',
            'resizeImage:50',
            'resizeImage:75',
            'resizeImage:original',
          ],
          resizeOptions: [
            {
              name: 'resizeImage:50',
              value: '50',
              label: '50%',
            },
            {
              name: 'resizeImage:75',
              value: '75',
              label: '75%',
            },
            {
              name: 'resizeImage:original',
              value: null,
              label: 'Original',
            },
          ],
        },
        mediaEmbed: {
          previewsInData: true,
        },
      }}
      onChange={(event, editor) => {
        const data = editor.getData();
        onChange(data); // Send content up
      }}
    />
  );
};

export default CustomEditor;
