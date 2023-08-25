import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { Game } from 'src/app/models/game';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit, AfterViewInit{
  loading = true;
  listGames: Game[] = [];
  displayedColumns: string[] = ['title', 'description', 'genre', 'platform', 'price', 'image', 'isOnSale', 'options'];
  dataSource: MatTableDataSource<Game>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor( private _gameService: GameService,
    private toastr: ToastrService) {
      this.dataSource = new MatTableDataSource(this.listGames);
  }

  ngOnInit(): void {
    this.waiting();
    this.getGames();
  }

  waiting() {
    setTimeout(() =>{
      this.loading = false;
    }, 2000);
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  getGames() {
    this._gameService.getGamesList().subscribe(data => {
      console.log (data);
      this.listGames = data;
      this.dataSource.data = this.listGames;
    }, error => {
        console.log(error);
    })
  }

  deleteGame(id: any) {
    this._gameService.deleteGame(id).subscribe(data =>{
      this.toastr.error('The game was deleted successfuly', 'Game deleted..')
      this.getGames();
    }, error =>{
      console.log(error);
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if(this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
