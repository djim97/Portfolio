import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DemoStats } from './models';

/**
 * Consomme l'API PHP deja en place sous /php.
 * Le chemin est relatif : en local, configurer un proxy vers bacary.gt.tc
 * (voir proxy.conf.json dans le README).
 */
@Injectable({ providedIn: 'root' })
export class ApiService {
  private http = inject(HttpClient);
  private readonly base = '/php';

  getStats(): Observable<DemoStats> {
    return this.http.get<DemoStats>(`${this.base}/dashboard/stats.php`);
  }
}
