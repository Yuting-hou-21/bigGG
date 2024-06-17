import {useState} from "react";
import {MessageList, MessageListItem} from "@hilla/react-components/MessageList";
import {AIChatEndpoint} from "Frontend/generated/endpoints";
import {MessageInput} from "@hilla/react-components/MessageInput";

export default function StreamingChatView() {
    const [messages, setMessages] = useState<MessageListItem[]>([]);

    function addMessage(message: MessageListItem) {
        setMessages(messages => [...messages, message]);
    }

    function appendToLastMessage(chunk: string) {
        setMessages(messages => {
            const lastMessage = messages[messages.length - 1];
            lastMessage.text += chunk;
            return [...messages.slice(0, -1), lastMessage];
        });
    }

    async function sendMessage(message: string) {
        addMessage({
            text: message,
            userName: 'You🤌'
        });

        let first = true;
        AIChatEndpoint.chatStream(message).onNext(chunk => {
            if (first && chunk) {
                addMessage({
                    text: chunk,
                    userName: '你的聊天小夥伴🧑‍🤝‍🧑'
                });

                first = false;
            } else {
                appendToLastMessage(chunk);
            }
        });
    }

    return (
        <div className="p-m flex flex-col h-full box-border">
            <MessageList items={messages} className="flex-grow"/>
            <MessageInput onSubmit={e => sendMessage(e.detail.value)}/>
        </div>
    );
}
