import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'Angular-ContentChild-Decorator';

  @ViewChild('childTempRef') parentParaElement!:ElementRef;

  ngAfterViewInit() {
    console.log('From Parent Element',this.parentParaElement.nativeElement.innerText)
  }
}
