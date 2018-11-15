import { Injectable } from '@angular/core';
import { ImageArray } from '../../types';

@Injectable()
export class LocalDatabaseService {

  private imageGalleryKey = 'imageGallery';

  constructor() { }

  save(images: ImageArray): ImageArray {
    const currentImages = this.load();
    const allImages = images.concat(currentImages);
    try {
      localStorage.setItem(this.imageGalleryKey, JSON.stringify(allImages));
    } catch {
      throw new Error('Exceeded quota!');
    }
    return allImages;
  }

  load(): ImageArray {
    const allImages = localStorage.getItem(this.imageGalleryKey);
    return allImages ? JSON.parse(allImages) : [];
  }

  clear(): ImageArray {
    localStorage.removeItem(this.imageGalleryKey);
    return [];
  }

  remove(imageId: string): ImageArray {
    const allImages = this.load();
    allImages.splice(allImages.findIndex(image => image.id === imageId), 1);
    localStorage.setItem(this.imageGalleryKey, JSON.stringify(allImages));
    return allImages;
  }
}
