import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FileUploaderBase } from '@reusejs/react';
import { CheckIcon, XIcon } from '@heroicons/react/solid';
import { TextInputBase } from '@reusejs/react';

export default {
  title: 'Molecules/File Uploader/Default',
  component: FileUploaderBase,
  argTypes: {},
} as ComponentMeta<typeof FileUploaderBase>;

const Template: ComponentStory<typeof FileUploaderBase> = (args) => {
  const callerRef = React.useRef<any>(null);
  const [beforeUploadedFiles, setBeforeUploadedFiles] = React.useState<any>([]);
  const [afterUploadedFiles, setAfterUploadedFiles] = React.useState<any>([]);

  return (
    <>
      <div className='flex flex-col'>
        <FileUploaderBase
          {...args}
          ref={callerRef}
          selectedFiles={(selectedFiles: any) => {
            console.log('selectedFiles', selectedFiles);
          }}
          beforeUpload={(uploadedFiles: any) => {
            setBeforeUploadedFiles(uploadedFiles);
            console.log('beforeUpload', uploadedFiles);
          }}
          afterUpload={(uploadedFiles: any) => {
            console.log('afterUpload', uploadedFiles);
            setAfterUploadedFiles(uploadedFiles);
          }}
          openFileUploader={(triggerClickHandler: () => void) => (
            <button
              type='button'
              className='ml-3 block bg-transparent'
              onClick={() => {
                triggerClickHandler();
              }}
            >
              <span className='rounded bg-blue-600 p-2 text-white'>
                Select File
              </span>
            </button>
          )}
        />
        <button
          type='button'
          className='mt-8 block rounded bg-red-600 p-2 text-white'
          onClick={() => {
            callerRef?.current?.triggerUpload();
          }}
        >
          Upload File
        </button>
      </div>
      <div className='mt-8 flex justify-between'>
        <div className='w-1/2 overflow-hidden bg-gray-500'>
          {beforeUploadedFiles.map((file: any) => {
            return <>{file.file.name}</>;
          })}
          {/* <pre>
            <code>{JSON.stringify(beforeUploadedFiles)}</code>
          </pre> */}
        </div>
        <div className='w-1/2 overflow-hidden bg-gray-400'>
          <pre>
            <code>{JSON.stringify(afterUploadedFiles)}</code>
          </pre>
        </div>
      </div>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  accept: '*/*',
  multiple: true,
  beforeUpload: (uploadedFiles: any) => {
    console.log('beforeUpload', uploadedFiles);
  },
  upload: (file: any) => {
    return new Promise((resolve, reject) => {
      resolve({ name: file.name });
    });
  },
};
