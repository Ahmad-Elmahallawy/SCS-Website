// An array of objects, each one containing the relevant information for the elements we're templating
// You can modify these however you need for your specific page
// Remember that leaving a property as '' is equivalent to null and false in javascript, so if for some element you don't need that property just set it as ''
const templates = [
    
    {
        id: 'frosh',
        name: 'Frosh',
        image: '../assets/events/clothing_sale.png',
        text: ''
    },

    
    {
        id: 'algotime',
        name: 'Algotime',
        image: '../assets/events/algotime.png',
        text: "📅 Date: Tue, July 11 <br>  ⏰ Time: 5:00 PM to 6:30 PM <br> 📍 Location: B-Annex, 2160 Bishop <br> <br></br> Attention all programmers! <br> SCS invites you to swing by our first AlgoTime of the second Summer semester!<br> Algorithm Time is a weekly session hosted by SCS where we offer you some algorithmic problems to solve. There are different levels (easy, medium and hard) offered, and we discuss the various approaches that can be used to solve the problems! 🧩🛠️ <br>This event will help you sharpen your problem-solving skills and prepare you for some of the technical questions that might show up during job interviews! Come hang out and practice these essential skills with us! <br> All skill levels are welcome and no preparation is needed to attend. Feel free to bring your own laptop! 💻 </br>Hop on to the #algotime channel in our Discord Server to discuss this week's problems and ask questions about last week's solutions!"
    },

    
]

export default templates;