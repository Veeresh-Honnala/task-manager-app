#!/usr/bin/env groovy


try{
   
	node {
	   stage 'Checkout'
	       echo "check out start"
		   checkout scm
		   sh 'mvn clean'
	       echo "check out end"
	   stage 'Clean Package'
	   	  echo "clean package start"
	   	  sh 'mvn clean package'		
	   	  echo "clean package end"
	
	}

}catch(ex){
  err = caughtError
  echo "error while building"+err
   mail subject: "${env.JOB_NAME} (${env.BUILD_NUMBER}) failed",
         body: "It appears that ${env.BUILD_URL} is failing, somebody should do something about that",
           to: 'kumar.hv3@gmail.com',
      replyTo: 'kumar.hv3@gmail.com',
       from: 'kumar.hv3@gmail.com'
}finally{
  echo "executing finally block"
  mail subject: "${env.JOB_NAME} (${env.BUILD_NUMBER}) successfull",
         body: "It appears that ${env.BUILD_URL} successfull",
           to: 'honnala.c203@gmail.com',
      replyTo: 'kumar.hv3@gmail.com',
 from: 'kumar.hv3@gmail.com'
}



def buildDev(){

	node {
	   stage 'check out and clean'
	       print "check out start"
		   checkout scm
		   sh 'mvn clean'
	       print "check out end"
	   stage 'check out and clean'
	   	  print "clean package start"
	   	  sh 'mvn clean package'
	   	  print "clean package end"
	
	}
}