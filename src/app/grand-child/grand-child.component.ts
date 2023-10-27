import {AfterContentChecked, AfterViewInit, Component, ContentChild, OnInit, ViewChild} from '@angular/core';
import {logMessages} from "@angular-devkit/build-angular/src/builders/browser-esbuild/esbuild";

@Component({
  selector: 'app-grand-child',
  templateUrl: './grand-child.component.html',
  styleUrls: ['./grand-child.component.css']
})
export class GrandChildComponent implements OnInit {
  name = "I'm your grand Grand Child"
  ngOnInit(): void {
  }

  ngAfterViewInit() {
  }


}
