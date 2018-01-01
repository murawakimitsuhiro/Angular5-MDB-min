# Angular Bootstrap with Material Design

Angularのプロジェクトをscss対応で作り、docker(nginx)で起動できるようにした最小構成に、
AngularBootStrapWithMaterialDesign(https://mdbootstrap.com/)をインポートして使えるようにしたもの。

## Docker起動手順

`docker build -t angular5-bmd .`

`docker run  -d -p 8080:80 angular5-bmd`

これで立ち上がります。 -> http://localhost:8080/

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
