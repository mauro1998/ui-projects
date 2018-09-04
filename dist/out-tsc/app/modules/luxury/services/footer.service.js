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
var FooterService = /** @class */ (function () {
    function FooterService() {
    }
    FooterService.prototype.fetch = function () {
        return [
            {
                title: 'Catálogo',
                links: [
                    { href: '/', text: 'Todas las marcas' },
                    { href: '/', text: 'Para hombre' },
                    { href: '/', text: 'Para mujer' },
                    { href: '/catalog', text: 'Explorar todo' },
                ]
            },
            {
                title: 'Nosotros',
                links: [
                    { href: '/', text: 'Quienes somos' },
                    { href: '/', text: 'Política de privacidad' },
                    { href: '/', text: 'Términos de servicio' },
                    { href: '/', text: 'Trabaje con nosotros' },
                    { href: '/', text: 'Contáctenos' },
                ]
            },
            {
                title: 'Comunidad',
                links: [
                    { href: '/', text: 'Vende tu reloj' },
                    { href: '/', text: 'Política de devolución' },
                    { href: '/', text: 'Ayuda y soporte técnico' },
                    { href: '/', text: 'Reclamos y sugerencias' },
                ]
            },
            {
                title: 'Redes Sociales',
                links: [
                    { href: '/', text: 'Instagram' },
                    { href: '/', text: 'Facebook' },
                    { href: '/', text: 'Twitter' },
                    { href: '/', text: 'Youtube' },
                ]
            },
        ];
    };
    FooterService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], FooterService);
    return FooterService;
}());
exports.FooterService = FooterService;
//# sourceMappingURL=footer.service.js.map