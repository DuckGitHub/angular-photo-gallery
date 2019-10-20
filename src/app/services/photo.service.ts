import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Photo } from '../components/interfaces/Photo';
@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  LOCAL = 'http://localhost:4000/api/photos'
  EXTERNAL = 'https://angular-photo-gallery.herokuapp.com/'
  constructor(private http: HttpClient) { }

  createPhoto(title: string, description: string, photo: File) {
    const fd = new FormData()

    fd.append('title', title)
    fd.append('description', description)
    fd.append('image', photo)

    return this.http.post(this.EXTERNAL, fd)
  }

  getPhotos() {
    return this.http.get<Photo[]>(this.EXTERNAL)
  }

  getPhoto(id: string) {
    return this.http.get<Photo>(`${this.EXTERNAL}/${id}`)
  }

  deletePhoto(id: string) {
    return this.http.delete(`${this.EXTERNAL}/${id}`)
  }

  updatePhoto(id: string, title: string, description: string) {
    return this.http.put(`${this.EXTERNAL}/${id}`, { title, description})
  }
}
