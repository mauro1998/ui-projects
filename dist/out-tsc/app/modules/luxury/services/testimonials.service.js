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
var utils_1 = require("./utils");
var TestimonialsService = /** @class */ (function () {
    function TestimonialsService() {
    }
    TestimonialsService.prototype.fetch = function () {
        var headers = [
            'Excelente servicio',
            'Definitivamente recomendado',
            'De primera clase',
            'Excelentes tratos',
            'Fácil y sencillo',
        ];
        var names = [
            'Isabela Zapata',
            'Daniel Bedoya',
            'Santiago Quintero',
            'Jose David Quiroz',
            'Manuela Muñoz',
        ];
        var array = [];
        for (var i = 0; i < headers.length; i++) {
            var header = headers[i];
            array.push({
                header: header,
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, assumenda magnam suscipit dolore at rerum consequuntur ipsam provident. Minima dignissimos excepturi reiciendis unde, aut quia laboriosam deserunt deleniti reprehenderit ducimus.',
                name: names[i],
            });
        }
        return utils_1.shuffle(array);
    };
    TestimonialsService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], TestimonialsService);
    return TestimonialsService;
}());
exports.TestimonialsService = TestimonialsService;
//# sourceMappingURL=testimonials.service.js.map