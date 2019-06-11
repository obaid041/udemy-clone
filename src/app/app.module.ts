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

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'student', component: StudentHomeComponent},
  {path: 'search', component: CourseSearchComponent},
  {path: 'cart', component: ShoppingCartComponent},
  {path: 'course', component: CourseComponent},
  {path: 'checkout', component: CheckoutComponent}
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
    CourseSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CartService, CourseService],
  bootstrap: [AppComponent],
  entryComponents: [NgbdLoginModalComponent, NgbdSignupModalComponent]
})
export class AppModule { }
