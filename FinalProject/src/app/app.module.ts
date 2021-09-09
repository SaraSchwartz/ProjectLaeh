import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddClientComponent } from './add-client/add-client.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NewSequenceComponent } from './new-sequence/new-sequence.component';
import { SharedSequencesComponent } from './shared-sequences/shared-sequences.component';
import { FilterByTextPipe } from './pipes/filter-by-text.pipe';
import { SequencesListComponent } from './sequences-list/sequences-list.component';
import { MySequencesComponent } from './my-sequences/my-sequences.component';
import { ShortStrPipe } from './pipes/short-str.pipe';
import { CommentsComponent } from './comments/comments.component';
import { FilterByComponent } from './filter-by/filter-by.component';
import { FilterByScreenSettingsPipe } from './pipes/filter-by-screen-settings.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { ConnectToServerService } from './services/connect-to-server.service';
import {HttpClientModule} from '@angular/common/http';

import { ValidPassDirective } from './directives/valid-pass.directive';
import { ScreenSettingsComponent } from './screen-settings/screen-settings.component';
import { ChoosePictureAndAnimationComponent } from './choose-picture-and-animation/choose-picture-and-animation.component';
import { SettingPictureComponent } from './setting-picture/setting-picture.component';
import { FilterByCheckedPipe } from './pipes/filter-by-checked.pipe';
import { ShowingPictureComponent } from './showing-picture/showing-picture.component';
import { UploadPicturesComponent } from './upload-pictures/upload-pictures.component';


const ROUTES: Routes = [
  { path: "addClient", component: AddClientComponent },
  { path: "", component: LoginComponent },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: "NewSequence", component: NewSequenceComponent },
      { path: "mySequences", component: MySequencesComponent },
      { path: "sharedSequences", component: SharedSequencesComponent },
    ]
  }
];


@NgModule({
  declarations: [
    AppComponent,
    AddClientComponent,
    LoginComponent,
    HomeComponent,
    NewSequenceComponent,
    SharedSequencesComponent,
    FilterByTextPipe,
    SequencesListComponent,
    MySequencesComponent,
    ShortStrPipe,
    CommentsComponent,
    FilterByComponent,
    FilterByScreenSettingsPipe,
    HighlightDirective,
    ValidPassDirective,
    ScreenSettingsComponent,
    ChoosePictureAndAnimationComponent,
    SettingPictureComponent,
    FilterByCheckedPipe,
    ShowingPictureComponent,
    UploadPicturesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
  ],
  providers: [ConnectToServerService],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
