interface NxStatic {
  $modal: {
    present: (inName: string, inData?: any) => Promise<void>;
    presentWhen: (inName: string, inData?: any) => Promise<void>;
    dismiss: (inName: string) => Promise<void>;
    dismissAll: (inNames: string[]) => Promise<any>;
    value: (inName: string) => { visible: boolean; data: any };
    visible: (inName: string) => boolean;
    data: (inName: string) => any;
  }
}
