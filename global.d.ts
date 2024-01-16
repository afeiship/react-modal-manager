interface NxStatic {
  $modal: {
    present: (inName: string, inData?: any) => (Promise<void> | void);
    presentWhen: (inName: string, inData?: any) => (Promise<void> | void);
    dismiss: (inName: string) => (Promise<void> | void);
    dismissAll: (inNames?: string[]) => (Promise<any> | void);
    value: (inName: string) => { visible: boolean; data: any };
    visible: (inName: string) => boolean;
    data: (inName: string) => any;
  }
}
