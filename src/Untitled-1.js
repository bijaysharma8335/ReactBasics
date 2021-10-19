getCategory=()=>{
    axios.get("https://www.firstenquiry.com/api/react/sale/catlist.php").then(response=>{
        this.setState({
            datalist:response.data
        })
    })
} componentDidMount(){
    this.getCategory();
}
