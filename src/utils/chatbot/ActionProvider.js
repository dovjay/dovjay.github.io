class ActionProvider {
  constructor(
    createChatBotMessage,
    setStateFunc,
    createClientMessage,
    stateRef,
    createCustomMessage,
    ...rest
    ) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
      this.createClientMessage = createClientMessage;
      this.stateRef = stateRef;
      this.createCustomMessage = createCustomMessage;
  }
    
  greet() {
    const greetingMessage = this.createChatBotMessage("Hi, friend.");
    this.updateChatbotState(greetingMessage);
  }

  handleSayHello() {
    const messages = [
      this.createClientMessage("Just wanted to say hello"),
      this.createChatBotMessage("Thanks for saying hello.", { delay: 1000 }),
      this.createChatBotMessage("I hope you enjoy looking at my works", { delay: 2000 }),
      this.createChatBotMessage("Can I help with anything else?", { 
        delay: 3000, widget: "chatbotOption", payload: { hiddenId: 1 }
      })
    ];

    this.updateChatbotState(messages);
  }

  handleMentorship() {
    const messages = [
      this.createClientMessage("I'm interested in mentorship"),
      this.createChatBotMessage("I see you are eager to learn some new skills", { delay: 1000 }),
      this.createChatBotMessage("Send me a message and let's chat further!", { 
        delay: 2000, widget: "contactOption"
      }),
    ];

    this.updateChatbotState(messages);
  }

  handleHiring() {
    const messages = [
      this.createClientMessage("I'd like to hire you"),
      this.createChatBotMessage("Glad to hear it!", { delay: 1000 }),
      this.createChatBotMessage("I'm happy to work with your exciting project", { delay: 2000 }),
      this.createChatBotMessage("Send me a message and let's discuss about this more", { 
        delay: 3000, widget: "contactOption"
      })
    ];

    this.updateChatbotState(messages);
  }

  handleSomethingElse() {
    const messages = [
      this.createClientMessage("Can I try something else?"),
      this.createChatBotMessage("Sure thing!", { delay: 1000 }),
      this.createChatBotMessage("What can I help you with?", { 
        delay: 2000, widget: "chatbotOption"
      })
    ]

    this.updateChatbotState(messages);
  }

  updateChatbotState(messages) {
    this.setState(prevState => ({ 
      ...prevState, messages: [...prevState.messages, ...messages]
    }));
  }
}
  
export default ActionProvider;