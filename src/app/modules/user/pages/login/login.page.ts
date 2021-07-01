import { Component, OnInit } from "@angular/core";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { LoadingController, AlertController } from "@ionic/angular";
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
import * as firebase from "firebase";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"]
})
export class LoginPage implements OnInit {
  public loginForm: FormGroup;
  public loading: HTMLIonLoadingElement;
  ngOnInit() {}

  constructor(
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.loginForm = this.formBuilder.group({
      email: ["", Validators.compose([Validators.required, Validators.email])],
      password: [
        "",
        Validators.compose([Validators.required, Validators.minLength(6)])
      ]
    });
  }
  onSubmit() {}

  async loginUser(loginForm: FormGroup, setPersistence?:boolean): Promise<void> {
    if (!loginForm.valid) {
      console.log("Form is not valid yet, current value:", loginForm.value);
    } else {
      const email = loginForm.value.email;
      const password = loginForm.value.password;
      this.authService.loginUser(email, password).then(
        () => {
          firebase.default.auth().setPersistence(firebase.default.auth.Auth.Persistence.LOCAL)
          .then(() => {
            // Existing and future Auth states are now persisted in the current
            // session only. Closing the window would clear any existing state even
            // if a user forgets to sign out.
            // ...
            // New sign-in will be persisted with session persistence.
            return firebase.default.auth().signInWithEmailAndPassword(email, password);
          })
          .catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
          });
          
          this.loading.dismiss().then(() => {
            this.router.navigateByUrl("home");
          });
        },
        error => {
          this.loading.dismiss().then(async () => {
            const alert = await this.alertCtrl.create({
              message: error.message,
              buttons: [{ text: "Ok", role: "cancel" }]
            });
            await alert.present();
          });
        }
      );
      this.loading = await this.loadingCtrl.create();
      await this.loading.present();
    }
  }
}
