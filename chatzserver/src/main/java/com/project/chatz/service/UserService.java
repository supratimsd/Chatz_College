package com.project.chatz.service;

import java.util.List;

import com.project.chatz.Payload.UpdateUserRequest;
import com.project.chatz.exception.UserException;
import com.project.chatz.model.User;



public interface UserService {

    public User findUserById(Integer id) throws UserException;

    public User findUserProfile(String jwt) throws UserException;

    public User updateUser(Integer userId, UpdateUserRequest req) throws UserException;

    public List<User> searchUser(String query);
}