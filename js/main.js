const mail = document.getElementById('mail_boss');
const button_mail = document.querySelector('.header__mail');

button_mail.addEventListener('click',(event)=>{
	navigator.clipboard.writeText(mail.textContent)
	alert('Почта скопированна в буфер.')
})

const quality = document.querySelector('.ul__quality');
const elem_quality = document.querySelectorAll('.var__quality');

quality.addEventListener('mouseover', (event) => {
	const target = event.target;
	if(target.id == 'qual1'){
		target.classList.add('hide__line__quality');
	};
	if(target.id == 'qual2'){
		target.classList.add('hide__line__quality');
		elem_quality[1].previousElementSibling.classList.add('hide__line__quality');
	};
	if(target.id == 'qual3'){
		target.classList.add('hide__line__quality');
		elem_quality[2].previousElementSibling.classList.add('hide__line__quality');
	};
	if(target.id == 'qual4'){
		target.classList.add('hide__line__quality');
		elem_quality[3].previousElementSibling.classList.add('hide__line__quality');
	};
	if(target.id == 'qual5'){
		target.classList.add('hide__line__quality');
		elem_quality[4].previousElementSibling.classList.add('hide__line__quality');
	};
	if(target.id == 'qual6'){
		target.classList.add('hide__line__quality');
		elem_quality[5].previousElementSibling.classList.add('hide__line__quality');
	};
	if(target.id == 'qual7'){
		target.classList.add('hide__line__quality');
		elem_quality[6].previousElementSibling.classList.add('hide__line__quality');
	};
	if(target.id == 'qual8'){
		target.classList.add('hide__line__quality');
		elem_quality[7].previousElementSibling.classList.add('hide__line__quality');
	};
	if(target.id == 'qual9'){
		target.classList.add('hide__line__quality');
		elem_quality[8].previousElementSibling.classList.add('hide__line__quality');
	};
	if(target.id == 'qual10'){
		target.classList.add('hide__line__quality');
		elem_quality[9].previousElementSibling.classList.add('hide__line__quality');
	};
	if(target.id == 'qual11'){
		target.classList.add('hide__line__quality');
		elem_quality[10].previousElementSibling.classList.add('hide__line__quality');
	};
});

quality.addEventListener('mouseout', (event)=>{
	const target = event.target;
	if(target.id == "qual1"){
		target.classList.remove('hide__line__quality');
	};
	if(target.id == 'qual2'){
		target.classList.remove('hide__line__quality');
		elem_quality[1].previousElementSibling.classList.remove('hide__line__quality');
	};
	if(target.id == 'qual3'){
		target.classList.remove('hide__line__quality');
		elem_quality[2].previousElementSibling.classList.remove('hide__line__quality');
	};
	if(target.id == 'qual4'){
		target.classList.remove('hide__line__quality');
		elem_quality[3].previousElementSibling.classList.remove('hide__line__quality');
	};
	if(target.id == 'qual5'){
		target.classList.remove('hide__line__quality');
		elem_quality[4].previousElementSibling.classList.remove('hide__line__quality');
	};
	if(target.id == 'qual6'){
		target.classList.remove('hide__line__quality');
		elem_quality[5].previousElementSibling.classList.remove('hide__line__quality');
	};
	if(target.id == 'qual7'){
		target.classList.remove('hide__line__quality');
		elem_quality[6].previousElementSibling.classList.remove('hide__line__quality');
	};
	if(target.id == 'qual8'){
		target.classList.remove('hide__line__quality');
		elem_quality[7].previousElementSibling.classList.remove('hide__line__quality');
	};
	if(target.id == 'qual9'){
		target.classList.remove('hide__line__quality');
		elem_quality[8].previousElementSibling.classList.remove('hide__line__quality');
	};
	if(target.id == 'qual10'){
		target.classList.remove('hide__line__quality');
		elem_quality[9].previousElementSibling.classList.remove('hide__line__quality');
	};
	if(target.id == 'qual11'){
		target.classList.remove('hide__line__quality');
		elem_quality[10].previousElementSibling.classList.remove('hide__line__quality');
	};

});

let open_close = true;
const quality_more_info = document.querySelector('.button__more__info__quality'); 
const quality__open = document.querySelector('.list__of__quality');
const quality__more_info = document.querySelector('.quality__more_info');
quality_more_info.addEventListener('click', (event)=>{

	if(open_close){
		quality__open.classList.toggle('quality_open');
		quality_more_info.classList.add('rotate__image__quality');
		quality__more_info.innerHTML = 'Скрыть';
		open_close = false;
	}else{
		quality__open.classList.toggle('quality_open');
		quality_more_info.classList.remove('rotate__image__quality');
		quality__more_info.innerHTML = 'Узнать больше';
		open_close = true;
	}
});

const token = "6332326803:AAEO5k4nSuZGyGQMdFqCbr4dZH7vdu3SiNw";
const chat_id_one = "1263098337";
const chat_id_two = "236090567";
const URL_API = `https://api.telegram.org/bot${ token }/sendMessage`;
const form_message = document.querySelector('#form_info');
const button_send_message = document.querySelector('#send_info');
let message = "";


let check_box = document.getElementById('check_box');

check_box.addEventListener('change',function(){
	if(check_box.checked){
		button_send_message.disabled = false;
	}else{
		button_send_message.disabled = true;
	}
})

function ValidPhone() {
    var re = /^[\d\+][\d\(\)\ -]{4,14}\d$/;
    var myPhone = document.getElementById('phone').value;
    var valid = re.test(myPhone);
    if (!valid) alert("Номер телефона введен неправильно!");
    return valid;
}  

form_message.addEventListener('submit',function(e){
	e.preventDefault();
	message = `<b>Заявка с сайта</b>\n`;
	message += `<b>Отправитель: </b> ${this.firstname.value} ${this.lastname.value}\n`;
	message += `<b>Телефон: </b> ${this.phone.value}\n`;
	message += `<b>Дополнительно о заказе: </b>\n${this.order_details.value}`;

	if(this.firstname.value && this.lastname.value && this.phone.value && ValidPhone()){
		axios.post(URL_API, {
			chat_id: chat_id_two,
			parse_mode: 'html',
			text: message
		})
		axios.post(URL_API, {
			chat_id: chat_id_one,
			parse_mode: 'html',
			text: message
		})
		.then((res) => {
			this.firstname.value = "";
			this.lastname.value = "";
			this.phone.value = "";
			this.order_details.value = "";

		})
		.catch((err) => {
			console.warn(err);
		})
		.finally(() => {
			alert("Информация по заказу отправленна. Возможно с вами созвонятся.");
		})

	}

})


let popup = document.getElementById('mypopup'),
	popupToggle = document.getElementById('privacy_policy'),
	popupClose = document.querySelector('.close');

popupToggle.onclick = function(){
	popup.style.display = "block";
}

popupClose.onclick = function(){
	popup.style.display = "none";
}

window.onclick = function(e){
	if(e.target == popup){
		popup.style.display = "none";
	}
}

const button__go_down = document.querySelectorAll('.button__go')
button__go_down.forEach(element => {
	element.addEventListener('click',function(e){
		window.scrollTo({
			top: scrollHeight,
			left: 0,
			behavior: "smooth"
		});
	})
});


let scrollHeight = Math.max(
	document.body.scrollHeight, document.documentElement.scrollHeight,document.body.offsetHeight, document.documentElement.offsetHeight,document.body.clientHeight, document.documentElement.clientHeight
);