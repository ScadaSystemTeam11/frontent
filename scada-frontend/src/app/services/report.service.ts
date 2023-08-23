import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  api : string = `${environment.api}/report`

  constructor(private http: HttpClient) { }

  getDateRangeAlarmReport(start: Date, end: Date): Observable<any> {
    const params = {
      start: start.toISOString(), 
      end: end.toISOString()     
    };

    return this.http.get(this.api + '/TimePeriodAlarmReport', { params });
  }

  getPriorityReport(priority : number){
    return this.http.get(this.api + `/PriorityReport?priority=${priority}`);
  }

  getDateRangeTagReport(start: Date, end: Date): Observable<any> {
    const params = {
      start: start.toISOString(), 
      end: end.toISOString()      
    };

    return this.http.get(this.api + '/TimePeriodTagsReport', { params });
  }

  getLatestAIReport(){
    return this.http.get(this.api + "/LastAIReport");
  }

  getLatestDIReport(){
    return this.http.get(this.api + "/LastDIReport");
  }

  getTagsByIDReport(id : string){
    return this.http.get(this.api + `/TagsByIDReport?id=${id}`);
  }

}
