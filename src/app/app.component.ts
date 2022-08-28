import { Component } from '@angular/core';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';
// import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import * as DecoupledEditor from "@ckeditor/ckeditor5-build-decoupled-document";
import { Location } from '@angular/common';
import { NavigationStart, Router ,  Event as NavigationEvent  } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Ecommerce';
  admin = true;
  public Editor = DecoupledEditor;
  htmlData: string = '<p>Hello, world!</p>';
  href: boolean;
  // event$ 

  constructor(private _router: Router , private _location: Location){
    // this.event$
    //   =this._router.events
    //       .subscribe(
    //         (event: NavigationEvent ) => {
    //           if(event instanceof NavigationStart) {
    //             console.log(event.url);
    //           }
    //         });
    this.href = this._location.path().includes('admin-panel');
  }


  public onReady(editor:any) {
    editor.ui.view.editable.element.parentElement.insertBefore(
      editor.ui.view.toolbar.element,
      editor.ui.view.editable.element
    );
  }

  public onChange( { editor }: ChangeEvent ) {
    const data = editor.getData();

    console.log( data );
}

}


