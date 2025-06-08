package com.project.chatz.service;

import java.util.List;

import com.project.chatz.Payload.SendMessageRequest;
import com.project.chatz.exception.ChatException;
import com.project.chatz.exception.MessageException;
import com.project.chatz.exception.UserException;
import com.project.chatz.model.Message;
import com.project.chatz.model.User;


public interface MessageService {

    public Message sendMessage(SendMessageRequest req) throws UserException, ChatException;

    public List<Message> getChatsMessages(Integer chatId, User reqUser) throws ChatException, UserException;

    public Message findMessageById(Integer messaageId) throws MessageException;

    public void deleteMessage(Integer messageId, User reqUser) throws MessageException;

}