document.addEventListener('DOMContentLoaded', () => {
    
    const cards = [
        {
            name: 'buffalo',
            imgSrc: 'src/images/1.png',
        },
        {
            name: 'hippo',
            imgSrc: 'src/images/3.png'
        },
        {
            name: 'unipig',
            imgSrc: 'src/images/4.png'
        },
        {
            name: 'cocktail',
            imgSrc: 'src/images/5.png'
        },
        {
            name: 'monster',
            imgSrc: 'src/images/6.png'
        },
       
        {
            name: 'tiger',
            imgSrc: 'src/images/7.png'
        },
        {
            name: 'buffalo',
            imgSrc: 'src/images/1.png',
        },
        {
            name: 'hippo',
            imgSrc: 'src/images/3.png'
        },
        {
            name: 'unipig',
            imgSrc: 'src/images/4.png'
        },
        {
            name: 'cocktail',
            imgSrc: 'src/images/5.png'
        },
        {
            name: 'monster',
            imgSrc: 'src/images/6.png'
        },
       
        {
            name: 'tiger',
            imgSrc: 'src/images/7.png'
        }
    ]


    cards.sort(() => 0.5 - Math.random())
    
    const grid = document.querySelector('.grid')
    let chosenCard =[]
    let chosenCardIds = []
    const cardsWon = []
    const resultDisplay = document.querySelector('#result')

   

    const createBoard = () => {
        for (let i = 0; i < cards.length; i++) {
            const card = document.createElement('img')
            card.setAttribute('src', 'src/images/backside.png')
            card.setAttribute('data-id', i)       
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
            
        }

    }

   
    function flipCard() {
        let cardId = this.getAttribute('data-id')
       chosenCard.push(cards[cardId])
        chosenCardIds.push(cardId)
     this.setAttribute('src', cards[cardId].imgSrc)
        console.log(chosenCard)
        
        if (chosenCard.length === 2)
        {
      setTimeout(  checkForMatch,500)    
            
        }
    }

    function checkForMatch() {
       const card_images= document.querySelectorAll('img')
        const firstChoice = chosenCardIds[0]
        const secondChoice = chosenCardIds[1]
        if (firstChoice == secondChoice)
        {
            alert('you chose the same one')
            card_images[firstChoice].setAttribute('src', 'src/images/backside.png')
            
        }
        else if (chosenCard[0].name=== chosenCard[1].name)
        {
            card_images[firstChoice].setAttribute('src', 'src/images/white.png')
            card_images[secondChoice].setAttribute('src', 'src/images/white.png')
            setTimeout(()=>{
                card_images[firstChoice].removeEventListener('click', flipCard)
                card_images[secondChoice].removeEventListener('click', flipCard)
            },300)
            cardsWon.push(chosenCard)
        }
        else {
            alert("Wrong")
         card_images[firstChoice].setAttribute('src','src/images/backside.png')
         card_images[secondChoice].setAttribute('src', 'src/images/backside.png')
           
        }
        chosenCard = []
        chosenCardIds = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length == cards.length / 2)
        {
            resultDisplay.textContent = 'You Won'
            }

    }

    createBoard()









})