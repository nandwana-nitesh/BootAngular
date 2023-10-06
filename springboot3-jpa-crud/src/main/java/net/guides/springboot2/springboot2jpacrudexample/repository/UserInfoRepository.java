package net.guides.springboot2.springboot2jpacrudexample.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import net.guides.springboot2.springboot2jpacrudexample.model.Employee;
import net.guides.springboot2.springboot2jpacrudexample.security.UserInfo;

@Repository
public interface UserInfoRepository extends JpaRepository<UserInfo, Integer>{
	  Optional<UserInfo> findByName(String username);
}
