import React, { Component } from "react";
import Link from 'next/link';
import "isomorphic-fetch";

export default class Home extends Component {
  static getInitialProps = async () => {
    const response = await fetch(
      "https://api.github.com/users/FredericoReid/repos"
    );

    return { repositories: await response.json() };
  };

  render() {
    return (
      //O conteúdo abaixo está sendo carregados no lado do servidor, sendo possível visualizar a página mesmo com o Javascript Desativado
      <div>
        <Link href="/blog">
            <a>Blog</a>
        </Link>
        <h1>Estes são os repositórios do GitHub de Frederico Reid :)</h1>
        <br/>
        <br/>
        <br/>
        {this.props.repositories.map(repo => (
          <h3 key={repo.id}>{repo.name}</h3>   
        ))}
        <br/>
        <br/>
        <br/>
        <h6>Desative o Javascript da página para ver o efeito SSR</h6>
      </div>
    );
  }
}