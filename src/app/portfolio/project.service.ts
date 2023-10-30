import { Injectable } from '@angular/core'
import { IProject } from './project'
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, pipe, catchError, throwError, tap } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ProjectService {
    private projectsUrl = 'assets/data/projects.json';

    constructor (private http : HttpClient) {}

    getProjects(): Observable<IProject[]> {
        return this.http.get<IProject[]>(this.projectsUrl).pipe(
            tap(data => console.log('All', JSON.stringify(data))),
            catchError(this.handleError));
    }

    private handleError(err: HttpErrorResponse) {
        let errMsg = '';
        errMsg = (err.error instanceof ErrorEvent) ? `Error occured: ${err.error.message}` : `Sever returned code ${err.status}: ${err.message}`;
        console.log(errMsg);
        return throwError(()=>errMsg);
    }
}