import {useState} from "react";
import {MessageList, MessageListItem} from "@hilla/react-components/MessageList";
import {AIChatEndpoint} from "Frontend/generated/endpoints";
import {MessageInput} from "@hilla/react-components/MessageInput";

export default function AIChatView() {
    const [messages, setMessages] = useState<MessageListItem[]>([]);
    const [inputValue, setInputValue] = useState<string>("我的MBTI今日運勢如何？");

    async function sendMessage(message : string) {
        setMessages(messages => [...messages, {
            text: message,
            userName: 'You🤌'
        }]);

        const response = await AIChatEndpoint.getDivination1();
        setMessages(messages => [...messages, {
            text: response,
            userName: '魔法水晶🔮'
        }]);
    }

    return (
      <div className="p-m flex flex-col h-full box-border">
          <MessageList items={messages} className="flex-grow"/>
          <MessageInput value={inputValue}
          onInput={(e) => setInputValue(e.target.value)}
          onSubmit={e => {
            sendMessage(inputValue);
            setInputValue("");
          }}
          />
      </div>
    );
}
