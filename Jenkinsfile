#!groovy



try{

}catch(ex){

}



buildDev(){

node {
   stage 'check out and clean'
   checkout scm
   sh 'mvn clean'
   
   stage 'check out and clean'
   sh 'mvn clean package'

}
}