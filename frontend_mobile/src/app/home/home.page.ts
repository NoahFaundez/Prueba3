import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  posts: any;
  comments: any;

  constructor(private postService: PostService, private alertController: AlertController) {}
  ngOnInit(): void {
    this.postService.getPosts().subscribe(
      (data) => {
        console.log(data);
        this.posts = data;
      },
      (error) => {
        console.log(error);
      }
    );

    this.postService.getComments().subscribe(
      (data) => {
        console.log(data);
        this.comments = data;
      },
      (error) => {
        console.log(error);
      }
    );

  }

  async deletePost(id: any): Promise<void> {
    const alert = await this.alertController.create({
      header: 'Confirmar eliminación',
      message: '¿Estás seguro de que deseas eliminar este post?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            // Acción cuando se hace clic en "Cancelar"
          },
        },
        {
          text: 'Eliminar',
          handler: () => {
            // Acción cuando se hace clic en "Eliminar"
            this.postService.deletePost(id);
          },
        },
      ],
    });

    await alert.present();
  }
}
