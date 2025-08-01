import { FileExtension, UploadFolder } from "../constants/aws.constant";

export type UploadFolderType = (typeof UploadFolder)[keyof typeof UploadFolder];
export type FileExtensionType = (typeof FileExtension)[keyof typeof FileExtension];
