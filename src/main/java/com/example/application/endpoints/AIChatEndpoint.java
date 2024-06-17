package com.example.application.endpoints;

import com.example.application.services.AIChatService;
import com.vaadin.flow.server.auth.AnonymousAllowed;

import dev.hilla.BrowserCallable;
import dev.hilla.Endpoint;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Sinks;

import java.time.Instant;

import org.springframework.beans.factory.annotation.Autowired;

@BrowserCallable
@AnonymousAllowed
public class AIChatEndpoint {
    @Autowired
    private AIChatService chatService;
    //private UserService userService;

    public Flux<String> chatStream(String message){
        return chatService.chatStream(message);
    }
    public String getDivination1(){
        /*String account = userEndPoint.getCurrentUser();
        String mbti = userService.getUserByAccount(account).getMbti();
        return aiService.getDivination(mbti);*/
        String mbti = "estp";
        return chatService.getDivination(mbti);
    } 
}
