import { ChangeDetectorRef, Component, inject, signal } from '@angular/core';

@Component({
  selector: 'info-window-cmp',
  standalone: true,
  imports: [],
  template: `
    <div class="info-window">
      # of loaded components: {{ loadedCount() }} <br />
      # of hydrated components: {{ hydratedCount() }}
      <div class="separator"></div>
      &commat;defer delay:
      <input type="number" (input)="setDelay($event)" value="3" max="25" min="0" /> sec
    </div>
  `,
  styles: `
    :host {
      border: 0px !important;
    }
    .separator {
      border-top: 1px solid rgb(174, 174, 174);
      margin: 10px 5px;
    }
    input {
      width: 30px;
    }
    .info-window {
      position: absolute;
      top: 10px;
      left: 10px;
      border: 1px solid black;
      background: white;
      padding: 10px;
      color: black;
      box-shadow: 5px 5px 5px gray;
    }
  `,
})
export class InfoWindowCmp {
  setDelay(event: any) {
    (window as any).__ngDemoTimeout__ = parseInt(event.target.value) * 1000;
  }

  loadedCount =
    typeof window !== 'undefined' ? (window as any).__loadedCount : signal(0);
  hydratedCount =
    typeof window !== 'undefined' ? (window as any).__hydratedCount : signal(0);
  loadedCountNum =
    typeof window !== 'undefined' ? (window as any).__loadedCountNum : 0;
  hydratedCountNum =
    typeof window !== 'undefined' ? (window as any).__hydratedCountNum : 0;

  cdr = inject(ChangeDetectorRef);

  ngOnInit() {
    // setInterval(() => {
    //   this.cdr.detectChanges();
    // }, 500);
  }
}
