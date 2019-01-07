## Run Application in Local 
>Software Requirement<br/>
<ul>
	<li>Node Version : 8.12.0+</li>
	<li>Npm Version  : 6.4.1 +</li>
	<li>Maven Version: 3+</li>
	<li>Java Version : 8</li>
	<li>MySql Version : 5.7 +</li>
</ul>

>Execution in local <br/>
 <ul>
    <li>change database properties in applicaton.properties file in rest</li>
    <li>execute task-manager-rest/src/main/resources/scirpt.sql</li>
	<li>navigate to project main folder(task-manager-app)</li>
	<li>execute command "mvn clean install"</li>
	<li>execute command "java -jar -Dspring.profiles.active=dev task-manager-rest/target/task-manager-rest-0.0.1-SNAPSHOT.jar"</li> 
	<li>http://localhost:8081/ in browser</li>
 </ul>
 

 

## Run Application in Docker 
>Software Requirement<br/>
 Docker Version : 18.06.1-ce<br/>
 Need to install docker swarm <br/>
 Need to install docker-compose <br/>

>Execution in docker <br/>
 <ul>
    <li>navigate to project main folder(task-manager-app)</li>
    <li>execute command "mvn clean install"</li>
	<li>execute command "docker build . -t task / docker-compose build"</li>
	<li>execute command "docker-compose up/docker stack deploy -c docker-compose.yml tma"</li>
	<li>http://localhost:8081/ in browser</li>
 </ul>
 
## Git URL
>https://github.com/Veeresh-Honnala/task-manager-app.git
 