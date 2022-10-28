import { 
  Component, Input, EventEmitter, Output, OnInit,
  OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
AfterViewInit, AfterViewChecked, OnDestroy {
  
  @Input('img') postImg = '';
  @Output() imgSelected = new EventEmitter<string>();

  constructor(){
    console.log('Constructor() called', this.postImg)
  }
  ngOnDestroy(){
    console.log('ngOnDestroy() called');
  }
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked() called');
  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit() called');
  }
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked() called');
  }
  ngAfterContentInit() {
    console.log('ngAfterContentInit() called');
  }
  ngOnInit(){
    console.log('ngOnInit() called', this.postImg)
  }
  ngOnChanges() {
    console.log('ngOnChanges() called', this.postImg)
  }
  ngDoCheck() {
    console.log('ngDoCheck() called', this.postImg)
  }

  
}
