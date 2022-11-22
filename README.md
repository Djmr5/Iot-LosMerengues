<h1 align="center">GSL-Iot-LosMerengues</h1>
<p align="left">Iot Project developed by the multicultural team involving the ITESM (Mexico) and ITA (Brazil)</p>
<h3 align="center">Defining the problem and our Motivation</h3>

In this project our group will work to build a resilient infrastructure when there is a natural hazard, motivated by the goal of sustainable development based on “Industry, Innovation and Infrastructure” and “Sustainable Cities and Communities”. The scenario that the project is inserted is related to a flood. As the climate and environment are already being altered to a greater degree for the increase in frequency and unpredictability of weather events usually in tropical countries such as Brazil and the environment fatalities and always in tropical countries such as Brazil and the environment fatalities and natural disasters. incalculable (financial and social) for the population. In this way, our motivation rescue is through rescue channels, with the purpose of providing a Command and Control (C2) structure in which it is possible to use voice and data transmission for planning and executing actions.

<!-- TABLE OF CONTENTS -->
## Table of Contents
<details>
  <summary>Display Elements</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#important-point-for-readers">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#runing-the-project">Runing the Project</a></li>
      </ul>
    </li>
    <li><a href="#roadmap--schedule-%EF%B8%8F%EF%B8%8F">Roadmap && Schedule</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
    <li><a href="#team-members">Team Members</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

We want to create a project that takes advantage of current technological advances, our project will have as a key point the provision of a 5G data network through drones. Thus, our focus is to develop a Command and Control (C2) system that helps rescue teams. To simulate this scenario, virtual machines will be used that simulate the drones and the customers (rescue team and people in need). Through the availability of 5G data signal by drones (mini-servers) customers will connect to a portal with their personal data and will be able to inform their position for rescue. In our scope we expect to develop applications with low level of data transmission, but with high efficiency reducing the cost of data transmission.

<a href="https://github.com/Djmr5/Iot-LosMerengues/blob/main/images/5gdrones.jpeg?raw=true">
<img src="images/5gdrones.jpeg">
</a>

### Important Point for Readers
* This project is still in development, please let us know if you want to add or decrease something that might cost us time.
* We are not expecting to keep updating the project after December 2022.
* Feel free to help us! :smile:

<p align="right">(<a href="#about-the-project">Back to Top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

### Built With

List of major frameworks/libraries used to develop the project.

1. The frameworks/libraries are required to develop and run the complete application data flow.
2. If you're using the latest version of Java Development Kit, you'll need to change the Gradle version of your project
3. If you have already installed Node on your system, make sure it is Node 14 or newer.
4. More details about the React Native setup are available [here](https://reactnative.dev/docs/environment-setup)

![React Native](https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![Mosquitto](https://img.shields.io/badge/mosquitto-%233C5280.svg?style=for-the-badge&logo=eclipsemosquitto&logoColor=white) ![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![Java](https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=java&logoColor=white) ![Grafana](https://img.shields.io/badge/grafana-%23F46800.svg?style=for-the-badge&logo=grafana&logoColor=white) ![Android Studio](https://img.shields.io/badge/Android%20Studio-3DDC84.svg?style=for-the-badge&logo=android-studio&logoColor=white) ![Mininet](https://img.shields.io/static/v1?style=for-the-badge&label=Virtual_Network&message=MININET&color=brightgreen)

### Prerequisites

To setup the environment from zero we recommend following these steps:

:exclamation: In case of issues during setup, the documentation for all frameworks and dependencies are available online and we suggest reading the documents along with these instructions.

1. Install [Node.js](https://nodejs.org/en/download/) 14 or newer.
    - In case you are on Windows and don't have chocolatey already installed, the Node installer will do for you.

2. Install the Java Development Kit 11 (JDK) (/recommended/).
    - You can look at your JAVA version with ```java -version``` at the powershell terminal.
    - In case you are on Windows and have chocolatey installed you can run at the powershell terminal.

    ```sh
    choco install -y nodejs-lts openjdk11
    ```
    - You can also download JDK 11 from [here](https://www.oracle.com/mx/java/technologies/javase/jdk11-archive-downloads.html)
    - In case you want to use another JDK you must change the Gradle version of your project. Follow the steps on the [React Native documentation](https://reactnative.dev/docs/environment-setup) for more details.

3. Install [Android Studio](https://developer.android.com/studio/index.html) and check during the installation for:
    - Android SDK
    - Android SDK Platform
    - Android Virtual Device
      * All of them can be done later on.

4. From here, we highly endorse the following steps on React Native environment setup documentation until *Creating a new application* section.
    - If you followed the previous steps, you can skip to the *Android development environment 2. Install the Android SDK* section.

5. Clone the Android App located in the folder clientMqtt inside this repo into a new project in your Android Studio.
    - Run the following command to uninstall a global ```react-native-cli``` package, please remove it as it may cause unexpected issues:
    ```sh
    npm uninstall -g react-native-cli @react-native-community/cli
    ```

6. Create the [Virtual Device](https://developer.android.com/studio/run/managing-avds.html) to run the Application.
    - If you want to use a physical device you can look at the instructions [here](https://reactnative.dev/docs/running-on-device).
    - Don't forget to create your Android virtual device as we intentionally created the client for Android.

### Runing the Project

To run the Application run at two terminals each command:

  - To start Metro:

  ```sh
  npx react-native start
  ```

  - To run the app (can also be run directly from Android Studio)

  ```sh
  npx react-native run-android
  ```


 <!-- ROADMAP -->
## Roadmap && Schedule ⏲️⏲️<a name = "schedule"></a>

<table style="border-collapse: collapse; width: 100%">
      <tr>
        <th colspan="3" style="border: 1px solid #dddddd; padding: 8px;">Project Schedule</th>
      </tr>
      <tr>
        <td colspan="2" style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Opening Class - :white_check_mark: </td>
        <td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">1st Nov 2022 19:00 (GMT-5)</td>
      </tr>
      <tr>
        <td rowspan="2" style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Icebreaker</td>
        <td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Step 1 - Icebreaker Video :white_check_mark:</td>
        <td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">3 Nov 2022 23:59 (GMT-5)</td>
      </tr>
      <tr>
        <td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Step 2 - Reply to the peers :white_check_mark: </td>
        <td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">4 Nov 2022 23:59 (GMT-5)</td>
      </tr>
      <tr>
        <td rowspan="4" style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Collaboration</td>
        <td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Step 1 – Project Setup :white_check_mark:</td>
        <td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">11 Nov 2022 23:59 (GMT-5)</td>
      </tr>
      <tr>
        <td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Step 2 – Client & Edge Stage :hourglass:</td>
        <td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">18 Nov 2022 23:59 (GMT-5)</td>
      </tr>
      <tr>
        <td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Step 3 – Cloud Stage :hourglass:</td>
        <td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">25 Nov 2022 23:59 (GMT-5)</td>
      </tr>
      <tr>
        <td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Step 4 – Final Presentation :hourglass:</td>
        <td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">2 Dec 2022 23:59 (GMT-5)</td>
      </tr>
      <tr>
        <td colspan="2" style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Reflection :hourglass:</td>
        <td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">3 Dec 2022 23:59 (GMT-5)</td>
      </tr>
    </table>

- [x] Add Complete Schudele 
- [x] Create README and define requirements
- [x] Android Client, Mosquitto Broker and installation of mininet
    - [x] Update README with installation instructions
- [ ] Add "components" document to easily copy & paste sections of the readme
- [ ] Multi-language Support
    - [x] English
    - [ ] Spanish
    - [ ] Portuguese

<p align="right">(<a href="#about-the-project">Back to Top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<!-- CONTACT -->
## Contact

Project Link: [https://github.com/Djmr5/Iot-LosMerengues](https://github.com/Djmr5/Iot-LosMerengues/)

<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Choose an Open Source License](https://choosealicense.com)
* [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
* [Instituto Tecnológico de Aeronáutica](http://www.ita.br/)
* [Global Shared Learning Classroom]( https://global.tec.mx/en/global-shared-learning)

<p align="right">(<a href="#about-the-project">Back to Top</a>)</p>

<!-- TEAM MEMBERS -->
## Team Members

<h3 align="center">Françoa Taffarel</h3>
<p align="left"> <img src="https://komarev.com/ghpvc/?username=francoataffarel&label=Profile%20views&color=0e75b6&style=flat" alt="francoataffarel" /> </p>
<p align="left"> <a href="https://github.com/ryo-ma/github-profile-trophy"><img src="https://github-profile-trophy.vercel.app/?username=francoataffarel" alt="francoataffarel" /></a> </p>
<p><img align="left" src="https://github-readme-stats.vercel.app/api/top-langs?username=francoataffarel&show_icons=true&locale=en&layout=compact" alt="francoataffarel" /></p>
<p>&nbsp;<img align="center" src="https://github-readme-stats.vercel.app/api?username=francoataffarel&show_icons=true&locale=en" alt="francoataffarel" /></p>
<p><img align="center" src="https://github-readme-streak-stats.herokuapp.com/?user=francoataffarel&" alt="francoataffarel" /></p>

<h3 align="center">Diego Jacobo Martínez</h3>
<p align="left"> <img src="https://komarev.com/ghpvc/?username=djmr5&label=Profile%20views&color=0e75b6&style=flat" alt="djmr5" /> </p>
<p align="left"> <a href="https://github.com/ryo-ma/github-profile-trophy"><img src="https://github-profile-trophy.vercel.app/?username=djmr5" alt="djmr5" /></a> </p>
<p><img align="left" src="https://github-readme-stats.vercel.app/api/top-langs?username=djmr5&show_icons=true&locale=en&layout=compact" alt="djmr5" /></p>
<p>&nbsp;<img align="center" src="https://github-readme-stats.vercel.app/api?username=djmr5&show_icons=true&locale=en" alt="djmr5" /></p>
<p><img align="center" src="https://github-readme-streak-stats.herokuapp.com/?user=djmr5&" alt="djmr5" /></p>

<h3 align="center">Carlos Damián Suárez Bernal</h3>
<p align="left"> <img src="https://komarev.com/ghpvc/?username=CDamianS&label=Profile%20views&color=0e75b6&style=flat" alt="CDamianS" /> </p>
<p align="left"> <a href="https://github.com/ryo-ma/github-profile-trophy"><img src="https://github-profile-trophy.vercel.app/?username=CDamianS" alt="CDamianS" /></a> </p>
<p><img align="left" src="https://github-readme-stats.vercel.app/api/top-langs?username=CDamianS&show_icons=true&locale=en&layout=compact" alt="CDamianS" /></p>
<p>&nbsp;<img align="center" src="https://github-readme-stats.vercel.app/api?username=CDamianS&show_icons=true&locale=en" alt="CDamianS" /></p>
<p><img align="center" src="https://github-readme-streak-stats.herokuapp.com/?user=CDamianS&" alt="CDamianS" /></p>

<h3 align="center">Carlos Mendoza Medina</h3>
<p align="left"> <img src="https://komarev.com/ghpvc/?username=AnotherBot6&label=Profile%20views&color=0e75b6&style=flat" alt="AnotherBot6" /> </p>
<p align="left"> <a href="https://github.com/ryo-ma/github-profile-trophy"><img src="https://github-profile-trophy.vercel.app/?username=AnotherBot6" alt="AnotherBot6" /></a> </p>
<p><img align="left" src="https://github-readme-stats.vercel.app/api/top-langs?username=AnotherBot6&show_icons=true&locale=en&layout=compact" alt="AnotherBot6" /></p>
<p>&nbsp;<img align="center" src="https://github-readme-stats.vercel.app/api?username=AnotherBot6&show_icons=true&locale=en" alt="AnotherBot6" /></p>
<p><img align="center" src="https://github-readme-streak-stats.herokuapp.com/?user=AnotherBot6&" alt="AnotherBot6" /></p>

<h3 align="center">Fernando Dantas</h3>
<p align="left"> <img src="https://komarev.com/ghpvc/?username=feroso&label=Profile%20views&color=0e75b6&style=flat" alt="feroso" /> </p>
<p align="left"> <a href="https://github.com/ryo-ma/github-profile-trophy"><img src="https://github-profile-trophy.vercel.app/?username=feroso" alt="feroso" /></a> </p>
<p><img align="left" src="https://github-readme-stats.vercel.app/api/top-langs?username=feroso&show_icons=true&locale=en&layout=compact" alt="feroso" /></p>
<p>&nbsp;<img align="center" src="https://github-readme-stats.vercel.app/api?username=feroso&show_icons=true&locale=en" alt="feroso" /></p>
<p><img align="center" src="https://github-readme-streak-stats.herokuapp.com/?user=feroso&" alt="feroso" /></p>

<h3 align="center">Marco Iván</h3>
<p align="left"> <img src="https://komarev.com/ghpvc/?username=Morkigloxx&label=Profile%20views&color=0e75b6&style=flat" alt="Morkigloxx" /> </p>
<p align="left"> <a href="https://github.com/ryo-ma/github-profile-trophy"><img src="https://github-profile-trophy.vercel.app/?username=Morkigloxx" alt="Morkigloxx" /></a> </p>
<p><img align="left" src="https://github-readme-stats.vercel.app/api/top-langs?username=Morkigloxx&show_icons=true&locale=en&layout=compact" alt="Morkigloxx" /></p>
<p>&nbsp;<img align="center" src="https://github-readme-stats.vercel.app/api?username=Morkigloxx&show_icons=true&locale=en" alt="Morkigloxx" /></p>
<p><img align="center" src="https://github-readme-streak-stats.herokuapp.com/?user=Morkigloxx&" alt="Morkigloxx" /></p>

<h3 align="center">Andrew Steven Williams</h3>
<p align="left"> <img src="https://komarev.com/ghpvc/?username=SirPotato28&label=Profile%20views&color=0e75b6&style=flat" alt="SirPotato28" /> </p>
<p align="left"> <a href="https://github.com/ryo-ma/github-profile-trophy"><img src="https://github-profile-trophy.vercel.app/?username=SirPotato28" alt="SirPotato28" /></a> </p>
<p><img align="left" src="https://github-readme-stats.vercel.app/api/top-langs?username=SirPotato28&show_icons=true&locale=en&layout=compact" alt="SirPotato28" /></p>
<p>&nbsp;<img align="center" src="https://github-readme-stats.vercel.app/api?username=SirPotato28&show_icons=true&locale=en" alt="SirPotato28" /></p>
<p><img align="center" src="https://github-readme-streak-stats.herokuapp.com/?user=SirPotato28&" alt="SirPotato28" /></p>

<p align="right">(<a href="#about-the-project">Back to Top</a>)</p>