package com.project.chatz.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.stereotype.Service;

import com.project.chatz.Payload.UpdateUserRequest;
import com.project.chatz.config.TokenProvider;
import com.project.chatz.exception.UserException;
import com.project.chatz.model.User;
import com.project.chatz.repository.UserRepository;
import com.project.chatz.service.UserService;



@Service
public class UserServiceImplementation implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private TokenProvider tokenProvider;

    @Override
    public User findUserById(Integer id) throws UserException {
        return this.userRepository.findById(id).orElseThrow(() -> new UserException("The requested user is not found"));
    }

    @Override
    public User findUserProfile(String jwt) throws UserException {
        String email = this.tokenProvider.getEmailFromToken(jwt);

        if (email == null) {
            throw new BadCredentialsException("Recieved invalid token...");
        }

        User user = this.userRepository.findByEmail(email);

        if (user == null) {
            throw new UserException("User not found with the provided email ");
        }
        return user;

    }

    @Override
    public User updateUser(Integer userId, UpdateUserRequest req) throws UserException {
        User user = this.findUserById(userId);

        if (req.getName() != null) {
            user.setName(req.getName());
        }
        if (req.getProfile() != null) {
            user.setProfile(req.getProfile());
        }
        return this.userRepository.save(user);
    }

    @Override
    public List<User> searchUser(String query) {
        List<User> users = this.userRepository.searchUser(query);
        return users;
    }

}