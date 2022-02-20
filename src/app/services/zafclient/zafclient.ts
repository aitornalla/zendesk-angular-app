import { Observable } from 'rxjs';

export interface RequestOptions {
  accepts?: any;
  autoRetry?: boolean;
  cache?: boolean;
  contentType?: boolean | string;
  cors?: boolean;
  crossDomain?: boolean;
  data?: any;
  dataType?: string;
  headers?: any;
  httpCompleteResponse?: boolean;
  ifModified?: boolean;
  jwt?: any;
  mimeType?: string;
  secure?: boolean;
  timeout?: number;
  traditional?: boolean;
  type?: string;
  url?: string;
  xhrFields?: any;
}

export class ZafClient {
  
  constructor(private zafClient: any) { }

  context(): Observable<any> {
    return new Observable<any>(observer => {
      this.zafClient
        .context()
        .then((context: any) => {
          observer.next(context);
          observer.complete();
        })
        .catch((err: any) => observer.error(err));
    });
  }

  get(path: string | string[]): Observable<any> {
    return new Observable<any>(observer => {
      this.zafClient
        .get(path)
        .then((result: any) => {
          observer.next(result);
          observer.complete();
        })
        .catch((err: any) => observer.error(err));
    });
  }

  has(name: string, handler: Function): boolean {
    return this.zafClient.has(name, handler);
  }

  instance(instanceGuid: string): ZafClient {
    return new ZafClient(this.zafClient.instance(instanceGuid));
  }

  invoke(name: string, ...args: any[]): Observable<any> {
    return new Observable<any>(observer => {
      this.zafClient
        .invoke(name, args)
        .then((result: any) => {
          observer.next(result);
          observer.complete();
        })
        .catch((err: any) => observer.error(err));
    });
  }

  invokeObj(obj: {[key: string]: any[]}): Observable<any> {
    return new Observable<any>(observer => {
      this.zafClient
        .invoke(obj)
        .then((result: any) => {
          observer.next(result);
          observer.complete();
        })
        .catch((err: any) => observer.error(err));
    });
  }

  metadata(): Observable<any> {
    return new Observable<any>(observer => {
      this.zafClient
        .metadata()
        .then((result: any) => {
          observer.next(result);
          observer.complete();
        })
        .catch((err: any) => observer.error(err));
    });
  }

  off(name: string, handler: Function): void {
    this.zafClient.off(name, handler);
  }

  on(name: string, handler: Function, context?: any): void {
    if (context != null && context != undefined) {
      this.zafClient.on(name, handler, context);
    } else {
      this.zafClient.on(name, handler);
    }
  }

  request(options: RequestOptions): Observable<any> {
    return new Observable<any>(observer => {
      this.zafClient
        .request(options)
        .then((result: any) => {
          observer.next(result);
          observer.complete();
        })
        .catch((err: any) => observer.error(err));
    });
  }

  set(key: string, value: any): Observable<any> {
    return new Observable<any>(observer => {
      this.zafClient
        .set(key, value)
        .then((result: any) => {
          observer.next(result);
          observer.complete();
        })
        .catch((err: any) => observer.error(err));
    });
  }

  setObj(obj: {[key: string]: any}): Observable<any> {
    return new Observable<any>(observer => {
      this.zafClient
        .set(obj)
        .then((result: any) => {
          observer.next(result);
          observer.complete();
        })
        .catch((err: any) => observer.error(err));
    });
  }

  trigger(name: string, data?: any): void {
    if (data != null && data != undefined) {
      this.zafClient.trigger(name, data);
    } else {
      this.zafClient.trigger(name);
    }
  }
}
