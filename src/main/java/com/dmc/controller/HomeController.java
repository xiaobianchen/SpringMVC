package com.dmc.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * 
 * Created by Xiaobian Chen on 2015��6��11��
 * Home Page
 *
 *
 */
@Controller
@RequestMapping("/home")
public class HomeController {
	
	@RequestMapping(method=RequestMethod.GET)
	public String home(ModelMap model){
		model.addAttribute("message", "Welcome to DMC");
		return "home";
	}

}
