import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageFadeDirective } from './image-fade.directive';
import { HideHeaderDirective } from './hide-header.directive';
import { StickySegmentDirective } from './sticky-segment.directive';

@NgModule({
  declarations: [
    ImageFadeDirective,
    HideHeaderDirective,
    StickySegmentDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ImageFadeDirective,
    HideHeaderDirective,
    StickySegmentDirective
  ]
})
export class SharedDirectivesModule { }
