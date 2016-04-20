package com.dmc.controller;

import com.dmc.RandomUtils;
import com.dmc.domain.Login;
import com.dmc.domain.ResetPassword;
import com.dmc.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

/**
 * @author xiaobianchen
 * @version 1.0 2015/6/11
 * @link https://github.com/xiaobianchen/DMC
 * This class is used to handle login operations
 */

@Controller
public class LoginController {

	@Autowired
	private UserService userService;
	
	/**
	 * 进入登录页面
	 */
	@RequestMapping(value="/login",method=RequestMethod.GET)
	public String login(Model model,RedirectAttributes redirectAttributes,HttpServletRequest request){
		HttpSession session = request.getSession();
		//注销操作
		if(session != null){
			session.removeAttribute("login");
		}
		Login login = new Login();
		model.addAttribute("login", login);
		redirectAttributes.addAttribute("redirectURL", RandomUtils.generateString(RandomUtils.stoken, 2));
		redirectAttributes.addAttribute("unitname", "login");
		return "redirect:/loginPage";
	}
	
	/**
	 * 重定向到登录页面
	 */
	@RequestMapping(value="/loginPage", method=RequestMethod.GET)
	public String signIn(){
		return "login";
	}
	
	/**
	 * 校验用户名和密码
	 */
	@RequestMapping(value="/login",method=RequestMethod.POST)
	public @ResponseBody String login(@ModelAttribute("login") Login login,HttpSession session){
		boolean isExist = userService.getUserByLogin(login.getUsername(), login.getPassword());
		if(isExist){
			session.setAttribute("login",login);
			return "success";
		}else{
			return "error";
		}
	}
	
	/**
	 * 重置密码
	 */
	@RequestMapping(value="/resetPwd", method=RequestMethod.GET)
	public String resetPwd(Model model){
		ResetPassword resetpwd = new ResetPassword();
		model.addAttribute("resetpwd", resetpwd);
		return "reset";
	}
	

	@RequestMapping(value="/resetPwd", method=RequestMethod.POST)
	public @ResponseBody String getUserByPassword(@ModelAttribute("resetpwd") ResetPassword reset){
		boolean isFound = userService.getUserByLogin(reset.getUsername(), reset.getOldPassword());
		if(isFound){
			//the user is exist and username/password is correct, then can reset password
			userService.updateUser(reset);
			return "success";
		}else{
			return "error";
		}
	}
}