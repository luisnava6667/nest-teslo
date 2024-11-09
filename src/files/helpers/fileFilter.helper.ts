import { Request } from 'express';

export const fileFilter = (
  req: Request,
  file: Express.Multer.File,
  cb: Function,
) => {
  //   console.log({ file });

  if (!file) return cb(new Error('File is emtpy'), false);

  const fileExptension = file.mimetype.split('/')[1];

  const validExtensions = ['jpeg', 'jpg', 'png', 'gif'];

  if (validExtensions.includes(fileExptension)) {
    return cb(null, true);
  }

  cb(null, false);
};
