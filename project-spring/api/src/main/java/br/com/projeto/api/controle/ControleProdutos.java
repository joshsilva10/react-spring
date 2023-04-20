package br.com.projeto.api.controle;
import java.util.List;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import br.com.projeto.api.modelo.Produtos;
import br.com.projeto.api.repository.ProdutoRepository;
import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/produtos")
@AllArgsConstructor
@CrossOrigin("*")
public class ControleProdutos {
    private final ProdutoRepository repository;
    @GetMapping
    public ResponseEntity<List<Produtos>> ListarTodos(){return ResponseEntity.ok(repository.findAll());}
    
    @PostMapping("/cadastrar")
    public ResponseEntity<Produtos> salvar(@RequestBody Produtos produto){
        return ResponseEntity.ok(repository.save(produto));
    }

}
