
export interface ExcelFileData{  
  file: File;
  data: any[];
  jsonString?: string;
}
  

export interface ExcelFileData {
  file: File;
  data: any[];
  jsonString?: string;
  formattedData?: {
    type: string;
    data: any[];
  };
}