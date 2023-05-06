class CardTask extends HTMLElement{

	constructor(){

		super()

		
		const place = document.createElement("div")
		const fullCard = document.createElement("div")
		const backCard = document.createElement("div")
		const frontCard = document.createElement("div")


		const titulo = document.createElement("h3")
		const frontCardImg = document.createElement("div")
		const rating = document.createElement("p")
		const duracao = document.createElement("p")
		const usuario = document.createElement("p")

		const style = document.createElement("style")


		place.setAttribute('class', 'place')
		fullCard.setAttribute('class', 'fullCard')
		backCard.setAttribute('class', 'backCard')
		frontCard.setAttribute('class', 'frontCard')

		titulo.setAttribute('class', 'titulo')
		frontCardImg.setAttribute('class', 'frontCardImg')
		rating.setAttribute('class', 'rating')
		duracao.setAttribute('class', 'duracao')
		usuario.setAttribute('class', 'usuario')
		
		

		
		
		


		style.innerHTML = `

		.place{
			width:150px;
			height:250px;
			cursor:pointer;
		}



		.fullCard{
			width:100%;
			height:100%;
			transform-style: preserve-3d;
			transition: 1s;
			border:1px solid black;
			border-radius:10px;

		}

		


		.frontCard,.backCard{
			position:absolute;
			width:100%;
			height:100%;
			background: linear-gradient(to top right, #264771,#264771, #264771,#416696,white);
			backface-visibility: hidden ;
			border-radius:10px;
			overflow:hidden;



		}

		.frontCard{
			text-align:center;
			transform: rotatey(180deg);
			background: rgba(138,236,255,0.7);
		}

		.frontCardImg{
			width:120px;
			height:7%;
			padding-top:50%;
			text-align:center;
			border:1px solid black;
			margin:auto;
			margin-top:5px;
			background:white;
			border-radius:10px;
			
			

		}

		.titulo{
			margin:1px;

		}

		.usuario{
			width:90%;
			height:30px;
			overflow: hidden;
			margin:5px 5%;
			
		}

		`


		const shadow = this.attachShadow({ mode: "open" })

		frontCard.appendChild(titulo)
		frontCard.appendChild(frontCardImg)
		frontCard.appendChild(rating)
		frontCard.appendChild(duracao)
		frontCard.appendChild(usuario)

		fullCard.appendChild(frontCard)
		fullCard.appendChild(backCard)
		place.appendChild(fullCard)
		shadow.appendChild(place)
		shadow.appendChild(style)


	}

	connectedCallback() {
		this.addEventListener("click", () => this.flip())


		//console.log(this.frontCardImg.style.backgroundImage)
		//this.addEventListener('load', (event) => {
			
		//});

		const outtitulo = this.getAttribute("titulo")
		const outimg = this.getAttribute("foto")
		const outrating = this.getAttribute("rating")
		const outduration = this.getAttribute("duration")
		const outusuario = this.getAttribute("usuario")
		this.editCard(outtitulo, outimg, outrating, outduration, outusuario)

    }


	flip(){

		let root = this.shadowRoot
		let carta = root.querySelector("div.fullCard")

		if (this.classList.contains("flipado")) {
			carta.style.transform = "rotatey(0deg)"
			this.classList.remove("flipado")

		} else {
			carta.style.transform = "rotatey(180deg)"
			this.classList.add("flipado")
		}
	}


		notLoad() {
			let root = this.shadowRoot
			let carta = root.querySelector("div.fullCard")
			let frente = root.querySelector("div.frontCard")
			let foto = root.querySelector("div.frontCardImg")

		
		}



	editCard(outtitulo, outimg, outrating, outduration, outusuario) {
		let root = this.shadowRoot
		//console.log(outusuario)
		//titulo
		let titulo = root.querySelector("div.fullCard > div.frontCard > h3")
		titulo.innerHTML = outtitulo

		//img
		let foto = root.querySelector("div.fullCard > div.frontCard > div.frontCardImg")
		foto.style.background = `no-repeat center/110% 120% url(${outimg})`

		//rating
		let rating = root.querySelector("div.fullCard > div.frontCard > p.rating")
		rating.innerHTML = `Rating: ${outrating}`

		//duracao
		let duracao = root.querySelector("div.fullCard > div.frontCard > p.duracao")
		duracao.innerHTML = `duracao: ${outduration}`

		//usuario
		let usuario = root.querySelector("div.fullCard > div.frontCard > p.usuario")
		usuario.innerHTML = `usuario: ${outusuario}`

    }
	


}


customElements.define('card-task', CardTask)

class CardFight extends HTMLElement {

	constructor() {

		super()


		const place = document.createElement("div")
		const fullCard = document.createElement("div")
		const backCard = document.createElement("div")
		const frontCard = document.createElement("div")


		const titulo = document.createElement("h3")
		const tituloCont = document.createElement("div")
		const frontCardImg = document.createElement("div")
		const tipo = document.createElement("div")
		const vida = document.createElement("div")
		const poder = document.createElement("div")

		const vidaTexto = document.createElement("span")
		//const vida = document.createElement("div")


		const style = document.createElement("style")


		place.setAttribute('class', 'place')
		fullCard.setAttribute('class', 'fullCard')
		backCard.setAttribute('class', 'backCard')
		frontCard.setAttribute('class', 'frontCard')

		titulo.setAttribute('class', 'titulo')
		tituloCont.setAttribute('class', 'tituloCont')
		frontCardImg.setAttribute('class', 'frontCardImg')
		tipo.setAttribute('class', 'tipo')
		vida.setAttribute('class', 'vida')
		vidaTexto.setAttribute('class', 'vidaTexto')
		poder.setAttribute('class', 'poder')








		style.innerHTML = `

		.place{
			width:150px;
			height:250px;
			cursor:pointer;
		}



		.fullCard{
			width:100%;
			height:100%;
			transform-style: preserve-3d;
			transition: 1s;
			border:1px solid black;
			border-radius:10px;

		}

		


		.frontCard,.backCard{
			position:absolute;
			width:100%;
			height:100%;
			background: linear-gradient(to top right, #264771,#264771, #264771,#416696,white);
			backface-visibility: hidden ;
			border-radius:10px;
			overflow:hidden;



		}

		.frontCard{
			text-align:center;
			transform: rotatey(180deg);
			background: rgba(255,10,10,0.7);
		}

		.frontCardImg{
			width:120px;
			height:7%;
			padding-top:50%;
			text-align:center;
			border:1px solid black;
			margin:auto;
			margin-top:5px;
			background:white;
			border-radius:10px;
			
			

		}
		

		.tituloCont{
			margin: 0 10px;
			margin-top:5px;
			display:grid;
			grid-template-columns:4fr 1fr;
		}



		.titulo{
			

		}

		.vida, .poder{
			margin:auto;
			width:30px;
			height:22.5px;
			border:1px solid black;
			
			padding-top:7.5px;
			font-size:15px;
		}

		.vida{
			transform:rotate(-45deg);
		}

		.poder{
			border-radius:50%;
		}
		
		.vidaTexto{
			transform:rotate(-45deg);
		}
		`


		const shadow = this.attachShadow({ mode: "open" })

		tituloCont.appendChild(titulo)
		vida.appendChild(vidaTexto)
		tituloCont.appendChild(vida)
		frontCard.appendChild(tituloCont)
		frontCard.appendChild(frontCardImg)
		frontCard.appendChild(tipo)
		frontCard.appendChild(poder)

		fullCard.appendChild(frontCard)
		fullCard.appendChild(backCard)
		place.appendChild(fullCard)
		shadow.appendChild(place)
		shadow.appendChild(style)


	}

	connectedCallback() {
		this.addEventListener("click", () => this.flip())


		//console.log(this.frontCardImg.style.backgroundImage)
		//this.addEventListener('load', (event) => {

		//});

		const outtitulo = this.getAttribute("titulo")
		const outimg = this.getAttribute("foto")
		const outtipo = this.getAttribute("tipo")
		const outvida=this.getAttribute("vida")
		const outpoder = this.getAttribute("poder")
		this.editCard(outtitulo, outimg, outtipo, outvida, outpoder)

	}


	flip() {

		let root = this.shadowRoot
		let carta = root.querySelector("div.fullCard")

		if (this.classList.contains("flipado")) {
			carta.style.transform = "rotatey(0deg)"
			this.classList.remove("flipado")

		} else {
			carta.style.transform = "rotatey(180deg)"
			this.classList.add("flipado")
		}
	}



	editCard(outtitulo, outimg, outtipo, outvida, outpoder) {
		let root = this.shadowRoot
		//titulo
		let titulo = root.querySelector("div.fullCard > div.frontCard > div.tituloCont > h3")
		titulo.innerHTML = outtitulo

		//img
		let foto = root.querySelector("div.fullCard > div.frontCard > div.frontCardImg")
		foto.style.background = `no-repeat center/110% 120% url(${outimg})`

		//Tipo
		let tipo = root.querySelector("div.fullCard > div.frontCard >  p.tipo")
		tipo.innerHTML = `Tipo: ${outtipo}`

		//vida
		let vida = root.querySelector("div.fullCard > div.frontCard > div.tituloCont > div.vida > div.vidaTexto")
		vida.innerHTML = `${outvida}`

		//poder
		let poder = root.querySelector("div.fullCard > div.frontCard > div.poder")
		poder.innerHTML = `${outpoder}`

	}



}


customElements.define('card-fight', CardFight)

