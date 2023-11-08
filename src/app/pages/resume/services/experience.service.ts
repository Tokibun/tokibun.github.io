import { Injectable } from '@angular/core'
import { IExperience } from '../models/experience';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, pipe, catchError, throwError } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ExperienceService {
    private experiencesUrl = 'assets/data/experiences.json';

    constructor (private http : HttpClient) {}

    getProjects(): Observable<IExperience[]> {
        return this.http.get<IExperience[]>(this.experiencesUrl).pipe(
            catchError(this.handleError));
    }

    private handleError(err: HttpErrorResponse) {
        let errMsg = '';
        errMsg = (err.error instanceof ErrorEvent) ? `Error occured: ${err.error.message}` : `Sever returned code ${err.status}: ${err.message}`;
        console.log(errMsg);
        return throwError(()=>errMsg);
    }
}