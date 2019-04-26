import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BooksService} from '../../services/books.service';
import {Router} from '@angular/router';
import {Book} from '../../models/Book.model';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {
  bookForm: FormGroup;
  fileIsUploding = false;
  fileURL: string;
  fileUploaded = false;

  constructor(private formBuilder: FormBuilder,
              private booksService: BooksService,
              private router: Router) { }

  ngOnInit() {
    this.initForm();

  }
  initForm() {
    this.bookForm = this.formBuilder.group({
      title: ['', Validators.required],
      author: ['', Validators.required]
    });
  }
  onSaveBook() {
    const title = this.bookForm.get('title').value;
    const author = this.bookForm.get('author').value;
    const newBook = new Book (title, author);
    if (this.fileURL && this.fileURL !== '' ) {
      newBook.photo = this.fileURL;
    }
    this.booksService.createNewBook(newBook);
    this.router.navigate(['/book']);
  }
  onUploadFile(file: File) {
    this.fileIsUploding = true;
    this.booksService.uploadFile(file).then(
      (url: string) => {
        this.fileURL = url;
        this.fileIsUploding = false;
        this.fileUploaded = true;
      }

    );
  }
  detectFiles(event) {
    this.onUploadFile(event.target.files[0]);
  }

}
