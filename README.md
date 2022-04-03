# zendesk-angular-app

## Table of contents
* [General info](#general-info)
* [Features](#features)
* [ZAF SDK script](#zaf-sdk-script)
* [ZAFClient service](#zafclient-service)
* [Build and serve commands](#build-and-serve-commands)
* [License](#license)

## General info
This is and Angular project intended to serve as a template for creating [Zendesk apps](https://developer.zendesk.com/documentation/apps/).

## Features
* Imported Zendesk App Framework javascript script directly into the `index.html` file.
* ZAFClient service implemented with all functionalities.
* Build and serve commands for Windows and Linux systems.

## ZAF SDK script
[Javascript library provided by Zendesk](https://developer.zendesk.com/documentation/apps/app-developer-guide/using-the-apps-framework/) is directly referenced in the `index.html` file of the project.
```html
<body>
  <app-root></app-root>
  <script type="text/javascript" src="https://static.zdassets.com/zendesk_app_framework_sdk/2.0/zaf_sdk.min.js"></script>
</body>
```

## ZAFClient service
This injectable service implements all functionalities described in the [ZAF Client API documentation](https://developer.zendesk.com/api-reference/apps/apps-core-api/client_api/). Promises are implemented as `Observables` and there is an exposed interface `RequestOptions` for the `request` method of the client.

## Zendesk base project structure
The `zendesk_base` folder in the root of the repository contains a base Zendesk app structure which you can configure as it fits your needs (generated running the [ZAT command](https://developer.zendesk.com/documentation/apps/app-developer-guide/setup/) `zat new`). The base files for the Zendesk app are used in the build and serve commands to generate the app and make it ready for development or testing.

## Build and serve commands
These commands defined in the `package.json` are intended for development purposes. Command prefixed by `w-` is for Windows.

### Build
The `zendesk-build` command first removes the `dist` folder, ng builds the project on `dist\assets` path and then copies all files and folder structure from `zendesk_base` folder.

### Serve
The `zendesk-serve` command first calls the build command and then starts the [zat server](https://developer.zendesk.com/documentation/apps/app-developer-guide/zat/#server). For Windows, the `zat_server.sh` file is used to start the zat server. Live reload on code changes is not available.

## License
MIT License
