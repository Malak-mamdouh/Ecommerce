import { Component } from '@angular/core';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';
// import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import * as DecoupledEditor from "@ckeditor/ckeditor5-build-decoupled-document";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Ecommerce';
  public Editor = DecoupledEditor;
  htmlData: string = '<p>Hello, world!</p>';
  constructor(){}
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


