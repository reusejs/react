### Introduction

File Uploaders are tricky from UI aspect and also file uploading aspect as such.

You might be uploading files two ways:

**Direct Upload**

- You have a post url, and you upload to it

**Presigned Url**

- You first call your backend which gives you an url
- You can the returned url to upload file

Over that, you would have complex scenarios of uploading multiple files, showing progress bars for each file, uploaded files preview as they upload or after upload. It's a never ending saga.

Our intention was to solve that problem with enough flexibility for devs to use it as they see fit.

### Implementation

FileUploaderBase

Give you complete control over how you want to handle this functionality

1. openFileUploader -> This is UI you want user to "click on" to upload the file
2. beforeUpload -> Is a hook which gives you the list of files selected
3. afterUpload -> Is a book which gives you the list of files after uploaded
4. upload -> Is the actual function where you can handle upload of the function

### How it works

### How to use
