import fetch from 'isomorphic-unfetch';
import { COOKIES } from "../services/login_service";
import Cookie from "js-cookie";

const dev = process.env.NODE_ENV !== 'production';

class AuthService {
  readonly tokenString: String = '';

  constructor(readonly authToken?: string) {
    try {
      if (authToken) {
        this.tokenString = authToken;
      } else {
        this.tokenString = this.getAuth();
      }
    } catch (e) { }
  }

  private baseURL(url: string) {
    const baseURL = dev ? process.env.devURL : process.env.prodURL;
    const result = (baseURL) ? `${baseURL + url}/` : `${url}/`;
    return result;
  }

  private getAuth(): string {
    const token = Cookie.get(COOKIES.authToken);
    return `Bearer ${token}`;
  }

  public async loginPost(data: any) {
    const res = await fetch(this.baseURL(`:3333/login`), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    const result = await res.json();
    return result;
  }

  public async addToCart(data: any, authToken?: string) {
    const res = await fetch(this.baseURL(`:3333/carrinho`), {
      method: 'POST',
      headers: {
        token: (authToken) ? authToken : this.getAuth(),
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    const result = await res.json();
    return result;
  }

  public async readAll(authToken?: string) {
    const res = await fetch(this.baseURL(`:3333/produtos`), {
      method: 'GET',
      headers: {
        token: (authToken) ? authToken : this.getAuth(),
        'Content-Type': 'application/json'
      }
    });

    const result = await res.json();
    return result;
  }

  public async getCart(authToken?: string) {
    const res = await fetch(this.baseURL(`:3333/carrinho`), {
      method: 'GET',
      headers: {
        token: (authToken) ? authToken : this.getAuth(),
        'Content-Type': 'application/json'
      }
    });

    const result = await res.json();
    return result;
  }

  public async update(data: any, authToken?: string) {
    const id = data.id;
    delete data.id;
    const res = await fetch(this.baseURL(`:3333/carrinho/${id}`), {
      method: 'PUT',
      headers: {
        token: (authToken) ? authToken : this.getAuth(),
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    const result = await res.json();
    return result;
  }

  public async removeFromCart(id: string, authToken?: string) {
    const res = await fetch(this.baseURL(`:3333/carrinho/${id}`), {
      method: 'DELETE',
      headers: {
        token: (authToken) ? authToken : this.getAuth(),
        'Content-Type': 'application/json'
      }
    });

    return res.ok;
  }
}

export const authService = new AuthService();