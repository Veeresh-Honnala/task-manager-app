#!groovy



try{
   buildDev()
}catch(ex){
  err = caughtError
  print "error while building"+err
}finally{
  print "executing finally block"
}
if (err) {
     throw err
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