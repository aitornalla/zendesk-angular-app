declare var ZAFClient: any;

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestOptions, ZafClient } from './zafclient';

@Injectable({
  providedIn: 'root'
})
export class ZafClientService {
  private zafClient: ZafClient;

  constructor() {
    this.zafClient = new ZafClient(ZAFClient.init());
  }

  context(): Observable<any> {
    return this.zafClient.context();
  }

  get(path: string | string[]): Observable<any> {
    return this.zafClient.get(path);
  }

  has(name: string, handler: Function): boolean {
    return this.zafClient.has(name, handler);
  }

  instance(instanceGuid: string): ZafClient {
    return this.zafClient.instance(instanceGuid);
  }

  invoke(name: string, ...args: any[]): Observable<any> {
    return this.zafClient.invoke(name, args);
  }

  invokeObj(obj: { [key: string]: any[] }): Observable<any> {
    return this.zafClient.invokeObj(obj);
  }

  metadata(): Observable<any> {
    return this.zafClient.metadata();
  }

  off(name: string, handler: Function): void {
    this.zafClient.off(name, handler);
  }

  on(name: string, handler: Function, context?: any): void {
    this.zafClient.on(name, handler, context);
  }

  request(options: RequestOptions): Observable<any> {
    return this.zafClient.request(options);
  }

  set(key: string, value: any): Observable<any> {
    return this.zafClient.set(key, value);
  }

  setObj(obj: { [key: string]: any }): Observable<any> {
    return this.zafClient.setObj(obj);
  }

  trigger(name: string, data?: any): void {
    this.zafClient.trigger(name, data);
  }
}
