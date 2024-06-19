import {
  Directive,
  ElementRef,
  Renderer2,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[appToothVisibility]',
})
export class ToothVisibilityDirective implements OnChanges {
  @Input('appToothVisibility') isVisible: boolean = true;
  @Input() actionMode: string = '';

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['isVisible']) {
      this.updateVisibility();
    }
  }

  private updateVisibility() {
    if (this.isVisible) {
      this.renderer.setStyle(this.el.nativeElement, 'opacity', '1');
    } else {
      this.renderer.setStyle(this.el.nativeElement, 'opacity', '0');
    }
  }
}
