function chatLoger(input) {
  let message = [];
  for (let i = 0; i < input.length; i++) {
    let tokens = input[i].split(" ");
    let command = tokens[0];
    switch (command) {
      case "Chat":
        let msg = tokens[1];
        message.push(msg);
        break;
      case "Delete":
        let element = tokens[1];
        if (message.includes(element)) {
          let index = message.indexOf(element);
          message.splice(index, 1);
        }
        continue;

      case "Edit":
        let element2 = tokens[1];
        let changeItem = tokens[2];
        if (message.includes(element2)) {
          let remove = message.indexOf(element2);
          message.splice(remove, 1, changeItem);
        }
        continue;
      case "Pin":
        let pinedItem = tokens[1];
        if (message.includes(pinedItem)) {
          let indexPin = message.indexOf(pinedItem);
          message.splice(indexPin, 1);
          message.push(pinedItem);
        }
        continue;
      case "Spam":
        for (let i = 1; i < tokens.length; i++) {
          let pushedSpam = tokens[i];
          message.push(pushedSpam);
        }
        break;
    }
  }
  console.log(message.join(" \n"));
}
chatLoger(["Chat a", "Chat space", "Pin a", "end"]);
