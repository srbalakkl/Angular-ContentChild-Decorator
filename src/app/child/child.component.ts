import {AfterContentInit, Component, ContentChild, ContentChildren, ElementRef, OnInit, QueryList} from '@angular/core';
import {GrandChildComponent} from "../grand-child/grand-child.component";

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, AfterContentInit {
  @ContentChild('childTempRef', {static: true}) paraElement!: ElementRef;
  @ContentChild(GrandChildComponent, {static: true}) gcElement!: GrandChildComponent;


  @ContentChildren('childTempRef') refChildrenElements!: QueryList<ElementRef>;

  @ContentChildren(GrandChildComponent) grandChildrenElement!: QueryList<any>;

  ngOnInit() {
    console.log('The project content value ==', this.paraElement.nativeElement.innerText)
    console.log('The project content value ==', this.paraElement)
    console.log('Gc element', this.gcElement.name + ' --- From parent component (child component)');
  }

  ngAfterContentInit(): void {
    console.log(this.refChildrenElements)


    console.log(this.grandChildrenElement)
    console.log(this.grandChildrenElement.get(2).name)
  }

}
