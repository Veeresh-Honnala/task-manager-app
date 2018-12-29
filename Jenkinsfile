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
}finally{
  echo "executing finally block"
}



buildDev(){

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