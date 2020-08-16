// var UserIp = require('./user_ip');

const ipList={}
class UserIp {
    constructor(ip) {
        this.ip = ip;
        this.perTenSec = 0;
    }
    addReq(){
        !this.perTenSec&&this.restPerTenSec();
        ++this.perTenSec;
        return this.checkIp();
    }
    checkIp() {
        return !(this.perTenSec > 10)
    }
    restPerTenSec(){
        setTimeout(() => {
            this.perTenSec=0;
        }, 10000);
    }

}

 const RateLimit =(ip)=>{
    if(!ipList[ip]){
        ipList[ip]= new UserIp(ip);
        return ipList[ip].addReq();
    }
    else{
        return ipList[ip].addReq();
    }
}
module.exports= RateLimit