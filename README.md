# NetflixClone

NetflixClone is a mobile app that mimics the design and functionality of the Netflix app. It was developed using React Native and Expo, and consumes data from the watchmode API.

### Technologies

  - [Yarn](https://yarnpkg.com/) (v1 or newer)
  - [Git](https://git-scm.com/)
  - [React Native](https://reactnative.dev)
  - [React Navigation](https://reactnavigation.org/)
  - [Watchmode API](https://api.watchmode.com/)

## Android

<table style="border: 0">
  <tr>
    <td align="center"><img src="files/Android-LOGIN.png" /></td>
    <td align="center"><img src="files/Android-HOME.png" /></td>
    <td align="center"><img src="files/Android-SCROLL.png" /></td>
  </tr>
</table>

## iOS

<table style="border: 0">
  <tr>
    <td align="center"><img src="files/iOS-LOGIN.png" /></td>
    <td align="center"><img src="files/iOS-HOME.png" /></td>
    <td align="center"><img src="files/iOS-SCROLL.png" /></td>
  </tr>
</table>

## Getting Started

To get a local copy of this project up and running, follow the steps below.

### Prerequisites

- Please follow the official doc to config your enviroment setup or update some dependencies if case the are deprecated
- You will need to have the following software installed on your machine:
  - [Node](https://nodejs.org/en/) (v14 or newer)
  - [Yarn](https://yarnpkg.com/) (v1 or newer)
  - [Git](https://git-scm.com/)
  - [React Native](https://reactnative.dev)
  - [React Navigation](https://reactnavigation.org/)

### Steps

- Clone the repository:
  git clone https://github.com/iJesusApm/NetflixClone
- Navigate into the project directory:
  cd NetflixClone
- Install the dependencies:
  `yarn install`
- Run the app on Android:
  `yarn android`
- Run the app on iOS
  `yarn iOS`

### Project Structure

From src:

- assets/: all the resources has been used in the app, like images, icon or fonts.
- components/: reusable components used across different screens.
- containers/: screen components that render the UI and handle user interaction.
- navigation/: the app's navigation components and configuration.
- services/: API service and other external services.
- styles/: color, typography and other styles.
- App.tsx: the main entry point of the app.
