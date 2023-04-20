package br.com.projeto.api.controle;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.projeto.api.modelo.Pessoa;
import br.com.projeto.api.modelo.Produtos;

@RestController
public class Controle {

    @GetMapping("/")
    public String mensagem(){
        return "BACK-END COM SPRING BOOT";
    }
    
    @GetMapping("/boasVindas/{nome}")
    public String boasVindas(@PathVariable String nome){
        return "Sejam Bem-Vindos "+ nome;
    }

    @PostMapping("/pessoa")
    public Pessoa pessoa(@RequestBody Pessoa p){
        return p;
    } 

    @PostMapping("/produto")
    public Produtos produto(@RequestBody Produtos prod){
        return prod;
    } 

}
