import { EdamamResponseInterface } from "@/types/EdamamTypes";
import { AccessTokenInterface } from "@/types/UserTypes";
function getAccessToken(): AccessTokenInterface | null {
  let token = localStorage.getItem("oauth2");
  if (!token) {
    return null;
  }
  let oauth2: AccessTokenInterface = JSON.parse(token);
  return oauth2;
}

function getFetchHeaderOptions(
  method: string = "GET",
  body?: any,
  withOauth2: boolean = false
): RequestInit {
  let options: RequestInit = {
    method,
    mode: "cors",
    body,
  };
  let oauth = getAccessToken();
  if (oauth && withOauth2) {
    options.headers = {
      Authorization: `${oauth.token_type} ${oauth.access_token}`,
    };
  }

  return options;
}

function isTokenExpired(time: number) {
  let now = Date.now();
  return now + time < now;
}

export { getAccessToken, getFetchHeaderOptions, isTokenExpired };
