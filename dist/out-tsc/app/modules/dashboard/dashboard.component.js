"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.profilePic = 'assets/images/dashboard/profile_pic.jpg';
        this.models = [
            {
                url: 'assets/images/dashboard/pic1.jpeg',
                name: 'Josie Fox',
                description: 'Russian Model'
            },
            {
                url: 'assets/images/dashboard/pic2.jpg',
                name: 'Ella Ramos',
                description: 'Spanish Model'
            },
            {
                url: 'assets/images/dashboard/pic3.jpg',
                name: 'Bernice Butler',
                description: 'Italian Model'
            },
            {
                url: 'assets/images/dashboard/pic4.jpg',
                name: 'Millie Tyler',
                description: 'Brazilian Model'
            },
            {
                url: 'assets/images/dashboard/pic5.jpeg',
                name: 'Vera Jefferson',
                description: 'Canadian Model'
            }
        ];
        this.profileViews = [
            {
                url: 'assets/images/dashboard/prof_pic1.jpg',
                name: 'Stella Martin',
                time: '34 min ago',
                date: '25 Sep 2018'
            },
            {
                url: 'assets/images/dashboard/prof_pic2.jpg',
                name: 'Mamie Klein',
                time: '29 min ago',
                date: '25 Aug 2018'
            },
            {
                url: 'assets/images/dashboard/prof_pic3.jpg',
                name: 'Nellie Carroll',
                time: '2 hours ago',
                date: '13 Oct 2018'
            },
            {
                url: 'assets/images/dashboard/prof_pic4.jpeg',
                name: 'Polly Watson',
                time: '4 hours ago',
                date: '26 Feb 2018'
            },
            {
                url: 'assets/images/dashboard/prof_pic5.jpg',
                name: 'Mamie Klein',
                time: '7 hours ago',
                date: '31 Dic 2017'
            }
        ];
        this.featuredModels = [
            {
                url: 'assets/images/dashboard/featured1.jpg',
                name: 'Josie Fox',
                description: 'Russian Models'
            },
            {
                url: 'assets/images/dashboard/featured2.jpg',
                name: 'Ella Ramos',
                description: 'Spanish Models'
            },
            {
                url: 'assets/images/dashboard/featured3.jpg',
                name: 'Bernice Butler',
                description: 'Italian Models'
            },
            {
                url: 'assets/images/dashboard/featured4.jpg',
                name: 'Millie Tyler',
                description: 'Brazilian Models'
            }
        ];
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'dashboard',
            templateUrl: './dashboard.component.html',
            styleUrls: ['./dashboard.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map