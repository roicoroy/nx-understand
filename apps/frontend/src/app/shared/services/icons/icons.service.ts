import { Injectable } from '@angular/core';
import { addIcons } from 'ionicons';
import {
  informationCircleOutline,
  camera,
  create,
  share,
  close,
  remove,
  home,
  eyeOffOutline,
  eyeOutline,
  arrowBack,
  homeOutline,
  homeSharp,
  mailOutline,
  save,
  triangle, ellipse,
  square, mailSharp,
  search,
  eye,
  eyeOff,
  add,
  paperPlaneOutline,
  paperPlaneSharp,
  closeSharp,
  arrowForward,
  heartOutline,
  heartSharp,
  contract,
  cart,
  cog,
  cogOutline,
  cogSharp,
  cartOutline,
  contractOutline,
  archiveOutline,
  archiveSharp,
  trashOutline,
  trashSharp,
  warningOutline,
  warningSharp,
  bookmarkOutline,
  bookmarkSharp
} from 'ionicons/icons';

@Injectable({
  providedIn: 'root'
})
export class IconsService {

  constructor() {
    this.initIcons();
  }

  initIcons() {
    return addIcons({
      informationCircleOutline,
      camera,
      create,
      share,
      add,
      save,
      arrowForward,
      close,
      eye,
      eyeOff,
      closeSharp,
      arrowBack,
      remove,
      eyeOffOutline,
      eyeOutline,
      home,
      homeOutline,
      homeSharp,
      mailOutline,
      triangle,
      ellipse,
      square,
      mailSharp,
      search,
      paperPlaneOutline,
      paperPlaneSharp,
      heartOutline,
      heartSharp,
      contract,
      cart,
      cog,
      cogOutline,
      cogSharp,
      cartOutline,
      contractOutline,
      archiveOutline,
      archiveSharp,
      trashOutline,
      trashSharp,
      warningOutline,
      warningSharp,
      bookmarkOutline,
      bookmarkSharp
    });
  }
}
