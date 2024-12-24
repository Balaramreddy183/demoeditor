import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EditorModule } from 'primeng/editor';
import Quill from 'quill';

@Component({
  selector: 'app-editor',
  standalone: true,
  imports: [EditorModule, FormsModule],
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.scss'
})
export class EditorComponent implements OnInit {
  text: any;
  
  ngOnInit() {
    // Register the font with Quill
    const Font = Quill.import('formats/font') as any;
    Font.whitelist = [
      'Roboto-Regular',
      'Roboto-Bold',
      'Roboto-Medium',
      'Roboto-Light',
      'Roboto-Thin',
      'Roboto-Black',
      'proximanova-regular',
      'proximanova-medium',
      'proximanova-semiBold',
      'proximanova-Bold'
    ];
    Quill.register(Font, true);
  }

  // Configuration object for the editor
  editorConfig = {
    modules: {
      toolbar: [
        ['bold', 'italic', 'underline', 'strike'],
        ['blockquote', 'code-block'],
        ['link', 'image', 'video'],
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'list': 'check' }],
        [{ 'script': 'sub'}, { 'script': 'super' }],
        [{ 'indent': '-1'}, { 'indent': '+1' }],
        [{ 'direction': 'rtl' }],
        [{ 'size': ['small', false, 'large', 'huge'] }],
        [{ 'font': [
          'Roboto-Regular',
          'Roboto-Bold',
          'Roboto-Medium',
          'Roboto-Light',
          'Roboto-Thin',
          'Roboto-Black',
          'proximanova-regular',
          'proximanova-medium',
          'proximanova-semiBold',
          'proximanova-Bold'
        ] }],
        [{ 'color': [] }, { 'background': [] }],
        [{ 'align': [] }],
        ['clean']
      ]
    }
  };
}
