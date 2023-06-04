import { Component } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
  providers:[UserService]
})
export class UsuariosComponent {
  users : any;

  constructor(public server: UserService) {
    this.listUsers()
  }


  listUsers(){
    this.server.getUsers().subscribe(
      data => {
        this.users = data;
        for (let i = 0; i < this.users.length; i++) {
          let user = this.users[i];
          let textAddress = '';
          for (let j = 0; j < user.domicilio.length; j++) {
            textAddress += user.domicilio[j].domicilio
          }
          this.users[i].textDireccion =  textAddress
        }
        console.log(this.users)
      }
    );
  }

}
