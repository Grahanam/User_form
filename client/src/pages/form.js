import React,{Component} from 'react'
import DatePicker from 'react-datepicker'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import emailjs from "@emailjs/browser"
// import addDays from 'date-fns/addDays'
import subHours from 'date-fns/subHours'
// import subDays from 'date-fns/subDays'
import "react-datepicker/dist/react-datepicker.css";
import { isValidPhoneNumber } from 'react-phone-number-input'

import '../App.css'
import {Navigate} from 'react-router-dom'

class Form extends Component {
    constructor (props) {
      super(props)
      this.state = {
        redirect: null,
        name:'',
        date:subHours(new Date(),157788),
        email:'',
        number:''
      };
      this.handleDate=this.handleDate.bind(this);
      this.getCookie=this.getCookie.bind(this)
      this.handleChange = this.handleChange.bind(this);
      this.onFormSubmit = this.onFormSubmit.bind(this);
    }
    getCookie(name) {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
        }
    handleDate(date) {
      this.setState({
        date: date
      })
    }
    handleRedirect(value){
        this.setState({
            redirect:value
        })
    }
    handleNumber(e){
        console.log(e.target.value)
        // this.setState({
        //     number:value
        // })
    }
    // handleChange(event,name){
    
    //     this.setState({
    //         ...this.state,
    //       [name] : event,
    //     })
    //   }
    handleChange(e){
        var { name, value } = e.target;
        this.setState({
            ...this.state,
            [name]:value,
          })
    }
    onFormSubmit(e) {
        e.preventDefault()
        var number=this.state.number
        var csrftoken=this.getCookie('csrftoken')
        var url='http://localhost:8000/api/post/'
        // var url='http://3.110.190.32/api/post/'
        if((isValidPhoneNumber(number)===false)){
            alert('mobile number invalid')
        }
        else{
        fetch(url,{
            // body,
          method:'POST',
          headers:{
            'Content-type':'application/json',
            'x-CSRFToken':csrftoken,
          },
          body:JSON.stringify(this.state)
        
        }).then((response)=>{
           
            if(response.status===400){
               alert('Mobile number already present!')
            }else{
               var templateParams = {
               notes: 'Form Submitted!',
               sender:'testawssesemail@gmail.com',
               user_email:this.state.email
               };
               //Email js Service id, Template id ,public key for sending emails  
               emailjs.send('service_id', 'template_id', templateParams,'public_key')
               .then(function(response) {
               console.log('SUCCESS!', response.status, response.text);
               }, function(error) {
               console.log('FAILED...', error);
               });  
               this.setState({ redirect: '/add' });
            }           
        }).catch(function(error){
          console.log('ERROR:',error)
        })
    }
    }

   
    render() {
        if (this.state.redirect) {
            return <Navigate to="/add" replace={true} />
          }
      return (
        <div className='outer-container'>
            <h1>FILL THE FORM</h1>
        <form onSubmit={ this.onFormSubmit } className='form-container'>
            <div className='inner-container'>
                <div>
                   <>Full Name:</>
                </div>
                <input type='text' name='name' placeholder='Enter your name' onChange={event=>this.handleChange(event, 'name')} required/>
            </div>
            <div className='inner-container'>
            <>Date Of Birth:</>
            <DatePicker
                name='date'
                selected={ this.state.date }
                onChange={ this.handleDate }
                // onChange={event=>this.handleChange(event, 'date')}
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
                isClearable
                autoComplete='False'
                placeholderText="Date of birth"
                minDate={subHours(new Date(),876600)}
                maxDate={subHours(new Date(),157788)}
                required
            />
            {/* <button className="btn btn-primary">Show Date</button> */}
            </div>
            <div className='inner-container'>
                <div>
                    <>Email Id:</>
                </div>
                <input type='email' name='email' placeholder='Enter your Email' onChange={event=>this.handleChange(event, 'name')} required/>
            </div>
            <div className='inner-container'>
                <div>
                    <>Mobile No:</>
                </div>
                {/* <input type='number' name='number' placeholder='Enter your Number' onChange={this.handleChange} required/> */}
                <PhoneInput country="US" placeholder='Enter Phone Number' name='number' value={this.state.number} onChange={number=>this.setState({number})} rules={{ required: true }} />
            </div>
            <div className='inner-container'><input type='submit'/></div>
        </form>
        </div>
      );
    }
    
  }
 

export default  Form