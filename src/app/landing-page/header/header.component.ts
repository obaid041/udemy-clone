import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-login-modal',
  template: `
  <!-- Default form login -->
  <form class="text-center border border-light p-5">
      <p class="h4 mb-4">Log In to Your Udemy Account!</p>
      <!-- Email -->
      <input type="email" id="defaultLoginFormEmail" class="form-control mb-4" placeholder="E-mail">
      <!-- Password -->
      <input type="password" id="defaultLoginFormPassword" class="form-control mb-4" placeholder="Password">
      <div class="d-flex justify-content-around">
          <div>
              <!-- Remember me -->
              <div class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" id="defaultLoginFormRemember">
                  <label class="custom-control-label" for="defaultLoginFormRemember">Remember me</label>
              </div>
          </div>
          <div>
              <!-- Forgot password -->
              <a href="">Forgot password?</a>
          </div>
      </div>
      <!-- Sign in button -->
      <button class="btn btn-info btn-block my-4" type="submit" routerLink="/student">Sign in</button>
  
      <!-- Register -->
      <p>Not a member?
          <a routerLink="/student">Register</a>
      </p>  
  </form>
  `,
  styleUrls: ['../../../assets/lib/font-awesome/css/font-awesome.min.css',
  '../../../assets/lib/ionicons/css/ionicons.min.css',
  '../../../assets/lib/magnific-popup/magnific-popup.css',]
})
export class NgbdLoginModalComponent {
  constructor(public activeModal: NgbActiveModal) {}
}

@Component({
  selector: 'ngbd-signup-modal',
  template: `
  <!-- Default form register -->
  <form class="text-center border border-light p-5">
  
      <p class="h4 mb-4">Sign up</p>
  
      <div class="form-row mb-4">
          <div class="col">
              <!-- Full name -->
              <input type="text" id="defaultRegisterFormFullName" class="form-control" placeholder="Full Name">
          </div>
      </div>
  
      <!-- E-mail -->
      <input type="email" id="defaultRegisterFormEmail" class="form-control mb-4" placeholder="E-mail">
  
      <!-- Password -->
      <input type="password" id="defaultRegisterFormPassword" class="form-control" placeholder="Password" aria-describedby="defaultRegisterFormPasswordHelpBlock">
      <small id="defaultRegisterFormPasswordHelpBlock" class="form-text text-muted mb-4">
          At least 8 characters and 1 digit
      </small>
  
      <!-- Sign up button -->
      <button class="btn btn-info my-4 btn-block" type="submit" routerLink="/student">Sign Up</button>
      <hr>
      <!-- Terms of service -->
      <p>By clicking
          <em>Sign up</em> you agree to our
          <a href="" target="_blank">terms of service</a>
  </form>
  <!-- Default form register -->
  `,
  styleUrls: ['../../../assets/lib/font-awesome/css/font-awesome.min.css',
  '../../../assets/lib/ionicons/css/ionicons.min.css',
  '../../../assets/lib/magnific-popup/magnific-popup.css',]
})
export class NgbdSignupModalComponent {
  constructor(public activeModal: NgbActiveModal) {}
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css',
  '../../../assets/lib/bootstrap/css/bootstrap.min.css',
  '../../../assets/lib/animate/animate.min.css',
  '../../../assets/lib/font-awesome/css/font-awesome.min.css',
  '../../../assets/lib/ionicons/css/ionicons.min.css',
  '../../../assets/lib/magnific-popup/magnific-popup.css',
  '../../../assets/css/style.css']
})
export class HeaderComponent implements OnInit {
  closeResult: string;

  constructor(private modalService: NgbModal) {}

  ngOnInit() { }

  // open(content) {
  //   this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
  //     this.closeResult = `Closed with: ${result}`;
  //   }, (reason) => {
  //     this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  //   });
  // }

  openLogin() {
    const modalRef = this.modalService.open(NgbdLoginModalComponent);
    // modalRef.componentInstance.name = 'World';
  }

  openSignup() {
    const modalRef = this.modalService.open(NgbdSignupModalComponent);
    // modalRef.componentInstance.name = 'World';
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}
