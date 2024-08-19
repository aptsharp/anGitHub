import { Component, OnInit } from "@angular/core";
import { ServiceService } from "../_service/service.service";


@Component({
  selector: "app-pages",
  templateUrl: "./pages.component.html",
  styleUrls: ["./pages.component.scss"],
})
export class PagesComponent implements OnInit {
  constructor(private serviceService: ServiceService) {}

  git = true;

  ngOnInit() {
    this.serviceService.getUsuarios().subscribe({
      next: (Response) => {
        console.log(Response);
      },
    });
  }
}
