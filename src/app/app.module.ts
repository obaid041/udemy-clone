import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent, NgbdLoginModalComponent, NgbdSignupModalComponent } from './landing-page/header/header.component';
import { IntroComponent } from './landing-page/intro/intro.component';
import { AboutComponent } from './landing-page/about/about.component';
import { ProductFeaturesComponent } from './landing-page/product-features/product-features.component';
import { CallToActionComponent } from './landing-page/call-to-action/call-to-action.component';
import { ClientsComponent } from './landing-page/clients/clients.component';
import { GalleryComponent } from './landing-page/gallery/gallery.component';
import { FooterComponent } from './landing-page/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModalBackdrop } from '@ng-bootstrap/ng-bootstrap/modal/modal-backdrop';
import { HomeComponent } from './landing-page/home/home.component';
import { StudentHomeComponent } from './student-dashboard/student-home/student-home.component';
import { StudentHeaderComponent } from './student-dashboard/student-header/student-header.component';
import { StudentCallToActionComponent } from './student-dashboard/student-call-to-action/student-call-to-action.component';
import { CoursesComponent } from './student-dashboard/courses/courses.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CourseService } from './services/course.service';
import { CartService } from './services/cart.service';
import { CourseComponent } from './course/course.component';
import { DialogComponent } from './dialog/dialog.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartNotificationComponent } from './cart-notification/cart-notification.component';
import { MatIconModule } from '@angular/material/icon';
import { CourseSearchComponent } from './student-dashboard/course-search/course-search.component';




// Obaid Aman and Ibrahim's Component

  //new Components  added June 15, 2019 by Obaid

import { SideNavComponent } from './instructor-dashboard/side-nav/side-nav.component';
import { SearchBarComponent } from './instructor-dashboard/search-bar/search-bar.component';
import { DropdownComponent } from './instructor-dashboard/dropdown/dropdown.component';
import { NewcoursesComponent } from './instructor-dashboard/newcourses/newcourses.component';
import { CurrentCoursesComponent } from './instructor-dashboard/current-courses/current-courses.component';
import { FirstMainHeadingComponent } from './instructor-dashboard/first-main-heading/first-main-heading.component';
import { CreateCourseComponent } from './instructor-dashboard/create-course/create-course.component';
import { TutorialSectionComponent } from './instructor-dashboard/tutorial-section/tutorial-section.component';
import { NewcomerChallengeComponent } from './instructor-dashboard/newcomer-challenge/newcomer-challenge.component';
import { PageFooterComponent } from './instructor-dashboard/page-footer/page-footer.component';
import { ManageComponent } from './edit&manage-course/manage/manage.component';
import { CurrentCoursesRoutingModule } from './instructor-dashboard/current-courses/current-courses-routing.module';
import { NavbarLogoComponent } from './course-navbar/navbar-logo/navbar-logo.component';
import { TargetStudentsComponent } from './edit&manage-course/manage/target-students/target-students.component';
import { CourseStructureComponent } from './edit&manage-course/manage/course-structure/course-structure.component';
import { SetupTestVideoComponent } from './edit&manage-course/manage/setup-test-video/setup-test-video.component';
import { FilmEditComponent } from './edit&manage-course/manage/film-edit/film-edit.component';
import { CurriculumComponent } from './edit&manage-course/manage/curriculum/curriculum.component';


import { ManageRoutingModule } from './edit&manage-course/manage/manage-routing.module';
import { CommunicationRoutingModule } from './instructor-dashboard/communication/communication-routing.module';
import {SidebarRoutingModule } from './instructor-dashboard/communication/messages/side-bar/side-bar-routing.module';

import { CaptionsComponent } from './edit&manage-course/manage/captions/captions.component';
import { CommunicationComponent } from './instructor-dashboard/communication/communication.component';
import { AllUsersComponent } from './instructor-dashboard/communication/messages/all-users/all-users.component';
import { ChatFormComponent } from './instructor-dashboard/communication/messages/chat-form/chat-form.component';
import { ChatroomComponent } from './instructor-dashboard/communication/messages/chatroom/chatroom.component';
import { ComposeComponent } from './instructor-dashboard/communication/messages/compose/compose.component';
import { ConversationComponent } from './instructor-dashboard/communication/messages/conversation/conversation.component';
import { FeedComponent } from './instructor-dashboard/communication/messages/feed/feed.component';
import { MessageComponent } from './instructor-dashboard/communication/messages/message/message.component';
import { SearchbarComponent } from './instructor-dashboard/communication/messages/searchbar/searchbar.component';
import { UserItemComponent } from './instructor-dashboard/communication/messages/user-item/user-item.component';
import { UserListComponent } from './instructor-dashboard/communication/messages/user-list/user-list.component';
import { SideBarComponent } from './instructor-dashboard/communication/messages/side-bar/side-bar.component';
import { MessagesComponent } from './instructor-dashboard/communication/messages/messages.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfilePicComponent } from './profile/profile-pic/profile-pic.component';
import { NavbarComponent } from './profile/navbar/navbar.component';
import { InstructorhomeComponent } from './instructor-dashboard/instructorhome/instructorhome.component';





const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'student', component: StudentHomeComponent},
  {path: 'search', component: CourseSearchComponent},
  {path: 'cart', component: ShoppingCartComponent},
  {path: 'course', component: CourseComponent},
  {path: 'checkout', component: CheckoutComponent},

  //new routes added June 15, 2019 by Obaid

  {path: 'instructor', component: InstructorhomeComponent},
  {path: 'qa', component:CommunicationComponent},
  {path: 'messages', component:MessagesComponent},
  {path: 'compose', component: ComposeComponent},
  {path: 'profile', component:ProfileComponent},
  {path: 'profile-picture', component: ProfilePicComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IntroComponent,
    AboutComponent,
    ProductFeaturesComponent,
    CallToActionComponent,
    ClientsComponent,
    GalleryComponent,
    FooterComponent,
    NgbdLoginModalComponent,
    NgbdSignupModalComponent,
    HomeComponent,
    StudentHomeComponent,
    StudentHeaderComponent,
    StudentCallToActionComponent,
    CoursesComponent,
    ShoppingCartComponent,
    CourseComponent,
    DialogComponent,
    CheckoutComponent,
    CartNotificationComponent,
    CourseSearchComponent,
    SideNavComponent,
    SearchBarComponent,
    DropdownComponent,
    NewcoursesComponent,
    CurrentCoursesComponent,
    FirstMainHeadingComponent,
    CreateCourseComponent,
    TutorialSectionComponent,
    NewcomerChallengeComponent,
    PageFooterComponent,
    ManageComponent,
    NavbarLogoComponent,
    TargetStudentsComponent,
    CourseStructureComponent,
    SetupTestVideoComponent,
    FilmEditComponent,
    CurriculumComponent,
    CaptionsComponent,
    HomeComponent,
    CommunicationComponent,
    AllUsersComponent,
    ChatFormComponent,
    ChatroomComponent,
    ComposeComponent,
    ConversationComponent,
    FeedComponent,
    MessageComponent,
    SearchbarComponent,
    UserItemComponent,
    UserListComponent,
    SideBarComponent,
    MessagesComponent,
    ProfileComponent,
    ProfilePicComponent,
    NavbarComponent,
    InstructorhomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    CurrentCoursesRoutingModule,
    ManageRoutingModule,
    SidebarRoutingModule,
    CommunicationRoutingModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CartService, CourseService],
  bootstrap: [AppComponent],
  entryComponents: [NgbdLoginModalComponent, NgbdSignupModalComponent]
})
export class AppModule { }
