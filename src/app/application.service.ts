import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Role } from "./role";
import { RoleRequest } from "./role-request";
import { CookieService } from "ngx-cookie-service";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};
// const permissionsURL = "";
@Injectable({
  providedIn: "root"
})
export class ApplicationService {
  // this.permissionsURL = this.cookieService.get(" BACKEND_URL");
  private permissionServiceURL = this.cookieService.get(" BACKEND_URL");
  constructor(
    private httpClient: HttpClient,
    private cookieService: CookieService
  ) {}

  getRole(): Observable<Role[]> {
    return this.httpClient.get<Role[]>(this.permissionServiceURL + "role");
  }

  postRequest(roleRequest: RoleRequest): Observable<RoleRequest> {
    return this.httpClient.post<RoleRequest>(
      this.permissionServiceURL + "send",
      roleRequest,
      httpOptions
    );
  }
}
