class Auth {
    constructor(){
        this.isAuthenticated=false
    }
    login(){
        if (localStorage.getItem('auth')){
            this.isAuthenticated=true
        };
    }
    logout(){
        this.isAuthenticated=false
    }
    authenticated(){
        if (localStorage.getItem('auth')){
            this.isAuthenticated=true
        };
        return this.isAuthenticated
    }
}
export default new Auth();