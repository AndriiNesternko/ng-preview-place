import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CacheService {
  private cache: { [key: string]: any } = {};

  constructor() {}

  set(key: string, data: any): void {
    this.cache[key] = data;
  }

  get(key: string): any {
    return this.cache[key];
  }

  has(key: string): boolean {
    return key in this.cache;
  }

  clear(): void {
    this.cache = {};
  }

  remove(key: string): void {
    delete this.cache[key];
  }

}
