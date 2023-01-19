import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, tap, throwError } from "rxjs";
import { IProduct } from "./product";

@Injectable({
    providedIn: 'root'
})
export class ProductService {

  private productUrl = "api/products/products.json";// we use a local file as server. path of file defined in angular.json
  constructor(private http:HttpClient) {

  }
  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.productUrl).pipe(
      tap(data => console.log('All', JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
    // in a real worl app, we may send the server to some remote logging infrstructure
    // instead of just logging it to the console
    let errorMessage = '';
    if( err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;

    }else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }

    console.error(errorMessage);
    return throwError(() => errorMessage);
  }
}
