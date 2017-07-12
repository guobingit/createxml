package com.duxiu.sslibrary.xml.action.create;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/create/book")
public class BookCreateXMLAction {
	@RequestMapping("page")
	public String page(){
		return "/create/book";
	}
}
