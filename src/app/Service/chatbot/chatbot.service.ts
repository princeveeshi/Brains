// chat.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChatbotService {
  private apiUrl = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent';
  private geminiApiKey = 'AIzaSyDSxcXuCiugOP5-Ffg-VPY3HiCF9gQTVIw'; // Move to environment variable in production

  constructor(private http: HttpClient) {}

  getResponse(userMessage: string): Observable<any> {
    const body = {
      contents: [
        {
          parts: [
            {
              text: userMessage,
            },
          ],
        },
      ],
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post<any>(`${this.apiUrl}?key=${this.geminiApiKey}`, body, { headers }).pipe(
      catchError((error) => {
        console.error('Error occurred:', error);
        return throwError(() => new Error('Error while fetching response from chatbot'));
      })
    );
  }
}
