package br.com.projeto.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.projeto.api.modelo.Produtos;

public interface ProdutoRepository extends JpaRepository<Produtos, Integer> {
    
}
