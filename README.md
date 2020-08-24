# Memory Monitor

O Memory Monitor é um aplicativo simples escrito em JavaScript e usando o NodeJS para medir as estatiscas do computador, como: Memória Livre, Memória em Uso, 
Memória Total e a percentagem de cada uma (estamos falando de memória primária, ou RAM).

## Uso/Usage

Para executar essa aplicação, verifique se sua máquina possui o NodeJS instalado. Caso não possua, instale a versão LTS por meio do link abaixo:

[NodeJS](https://nodejs.org)

Após instalar o NodeJS, faça o clone do repositório e execute o seguinte comando no terminal (lembre-se de acessar a pasta do projeto antes): 

``` node stats ```

O resultado será exibido no terminal: uma tabela com os valores (em Gigabytes) de memória livre, memória em uso, total de memória e suas respectivas porcentagens.

![Tela do Memory Monitor](https://github.com/GDV1/MemoryMonitor/blob/master/image/MemoryMonitor.png)


## Log file/Arquivo de Log

O aplicativo também gera um arquivo de log, onde ficam registrados todos os dados que são exibidos na tabela. A cada atualização da tabela é gerada uma nova linha no arquivo. A tabela é atualizada a cada segundo (ou a cada 1000ms).  


## Reference

Este aplicativo foi criado a partir da aula, do instrutor [Mayk Brito](https://github.com/maykbrito), que está disponível no YouTube no link abaixo:

[Node.js: Iniciando da teoria à prática | Masterclass #11](https://www.youtube.com/watch?v=DiXbJL3iWVs&t=3064s)
