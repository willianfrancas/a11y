import { Injectable } from '@angular/core';
import * as uuid from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class UniqueIdService {

  constructor() { }

  public generateUniqueIdWithPrefix(prefix: string): string {
    const uniqueId = this.generageUniqueId();
    return `${prefix}-${uniqueId}`;
  }

  private generageUniqueId(): string {
    return uuid.v1();
  }
}
