package net.guides.springboot2.springboot2jpacrudexample.security;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

	   @Autowired
	    private JwtAuthFilter authFilter;
	   
	    // User Creation
	    @Bean
	    public UserDetailsService userDetailsService() {
	        return new UserInfoService();
	    }
	    
	    // Configuring HttpSecurity
	    @Bean
	    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
	        return http.csrf(csrf -> csrf.disable())//.cors(cors -> cors.configurationSource(corsConfigurationSource()))
	                .authorizeHttpRequests(auth -> auth
	                .requestMatchers(HttpMethod.OPTIONS, "/**").permitAll()
	                .requestMatchers("/api/v1/addNewUser", "/api/v1/generateToken").permitAll()
	                .requestMatchers("/api/v1/**").authenticated()
	               
	                )
	                .sessionManagement(sess -> sess.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
	                .authenticationProvider(authenticationProvider())
	                .addFilterBefore(authFilter, UsernamePasswordAuthenticationFilter.class)
	                .build();
	    }
	
//	    CorsConfigurationSource corsConfigurationSource() {
//	        final var configuration = new CorsConfiguration();
//
//	        configuration.addAllowedOriginPattern("*");
//
//	        configuration.setAllowedMethods(Arrays.asList("GET"));
//	        configuration.setAllowedHeaders(Arrays.asList("*"));
//	        configuration.setExposedHeaders(Arrays.asList("*"));
//	        
//	        final var source = new UrlBasedCorsConfigurationSource();
//	        source.registerCorsConfiguration("/**", configuration);
//
//	        return source;
//	    }
	    
	    // Password Encoding
	    @Bean
	    public PasswordEncoder passwordEncoder() {
	        return new BCryptPasswordEncoder();
	    }
	  
	    @Bean
	    public AuthenticationProvider authenticationProvider() {
	        DaoAuthenticationProvider authenticationProvider = new DaoAuthenticationProvider();
	        authenticationProvider.setUserDetailsService(userDetailsService());
	        authenticationProvider.setPasswordEncoder(passwordEncoder());
	        return authenticationProvider;
	    }
	  
	    @Bean
	    public AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception {
	        return config.getAuthenticationManager();
	    }
}
