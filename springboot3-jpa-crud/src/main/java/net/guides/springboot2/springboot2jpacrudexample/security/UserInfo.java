package net.guides.springboot2.springboot2jpacrudexample.security;

import jakarta.persistence.*;

@Entity
@Table(name = "userinfo")
public class UserInfo {

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private String password;
    private String roles;
  
	
	public UserInfo() {
		
	}
	public UserInfo(int id, String name, String password, String roles) {
		super();
		this.id = id;
		this.name = name;
		this.password = password;
		this.roles = roles;
	}

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	@Column(name = "password", nullable = false)
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	@Column(name = "roles", nullable = false)
	public String getRoles() {
		return roles;
	}
	public void setRoles(String roles) {
		this.roles = roles;
	}
	
	@Column(name = "name", nullable = false)
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	
	@Override
	public String toString() {
		return "UserInfo [id=" + id + ", name=" + name + ", roles=" + roles + "]";
	}
}
