import { LightningElement } from "lwc";

export default class App extends LightningElement {
  title = "Welcome to Lightning Web Components!";

  //Criar váriaveis e atributos
nome = " Tami Nascimento";
telefone = ' (81) 99999-9999';
cpf=' 777.888.999-00';
idade= '32';

email= "taminascimento16@gmail.com";
instagram = "https://www.google.com";
linkedin = "https://www.linkedin.com/in/tamires-nascimento-5140b4229/";


visible = true;

/* uso de variával da classe dentro dos nossos metódos */
// Trocar o valor de visible de true para false

//metódo trocar div
trocarDiv(){
  //this.visible = false; ---> O que tava inicialmente
  // Utilizamos uma variável fora e aplicamos dentro de um metódo
 
//if(this.visible == 'true'){
 //this.visible == 'false'
//}else{
//this.visible == 'true'
// outra forma:
  this.visible = !this.visible;
}

  /**
 * Exercicio em classe
 * Criar um metódo chamado de alterar valores
 * vai mudar o valor do nome, telefone, cpf, idade, e-mail, instagram e likedIN
 * 
 * No html criar um novo botão chamado 'Altera Valor' que ative a função
 *  
 */
   alterarValores(){
     this.nome = "Ana";
     this.telefone= "888888888";
     this.cpf = "777.777.777-77";
     this.idade = "25";
     this.email = "ana@aninha.com";
     this.instagram ="https://www.facebook.com" ;
     this.linkedin = "https://www.linkedin.com/feed/";
 
 
  }

 

}



//Conteudo JS inserir (;) ao final

