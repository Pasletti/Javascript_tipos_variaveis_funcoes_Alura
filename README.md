# Anotações

- JavaScript é case-sensitive
- Tipagem dinâmica
- Multiparadigma
- Linguagem interpretada

# Palavras reservadas
abstract	arguments	await	        as
boolean     async       from            get
of          set         target   
break	    byte	    case	        catch
char	    class	    const	        continue
debugger	default	    delete	        do
double	    else	    enum	        eval
export	    extends	    false	        final
finally	    float	    for	            function
goto	    if	        implements	    import
in	        instanceof	int	            interface
let	        long	    native	        new
null	    package	    private	        protected
public	    return	    short	        static
super	    switch	    synchronized	this
throw	    throws	    transient	    true
try	        typeof	    var	            void
volatile	while	    with	        yield

# Nome de Objetos, Propriedades e Métodos integrados
Array	        Date	    eval	    function
hasOwnProperty	Infinity	isFinite	isNaN
isPrototypeOf	length	    Math	    NaN
name	        Number	    Object	    prototype
String	        toString	Undefined	valueOf

# Boas praticas de escrita
- camelCase: Inicia com letra minúscula e a primeira letra de cada palavra em seguida é escrita com letra maiúscula. Por exemplo: minhaVar ou senhaDoUsuario. Esta é a convenção utilizada pelo JavaScript para variáveis e funções.

- snake_case: Os espaços são substituídos pelo caractere _ (underline), com todas as palavras em letra minúscula. Por exemplo: minha_variavel ou senha_do_usuario.

- kebab-case: Similar ao anterior, porém com os espaços substituídos por hífens. Por exemplo: minha-var ou senha-do-usuario. Esta convenção não pode ser utilizada no JavaScript para variáveis e funções, pois causará um erro.

- PascalCase: Similar ao CamelCase, porém neste caso todas as palavras começam com letra maiúscula. Por exemplo: MinhaVar ou SenhaDoCliente.

- Importante: Nunca utilize espaço nem caracteres especiais, nem inicie os nomes das variáveis com números.

# Errors
- RangeError: Quando o código recebe um dado do tipo certo, porém não dentro do formato aceitável. Por exemplo, um processamento que só pode ser feito com números inteiros maiores ou iguais a zero, mas recebe -1.

- ReferenceError: Normalmente ocorre quando o código tenta acessar algo que não existe, como uma variável que não foi definida; muitas vezes é causado por erros de digitação ou confusão nos nomes utilizados, mas também pode indicar um erro no programa.

- SyntaxError: Na maior parte dos casos ocorre quando há erros no programa e o JavaScript não consegue executá-lo. Os erros podem ser métodos ou propriedades escritos ou utilizados de forma incorreta, por exemplo, operadores ou sinais gráficos com elementos a menos, como esquecer de fechar chaves ou colchetes.

- TypeError: Indica que o código esperava receber um dado de um determinado tipo, tal qual uma string de texto, mas recebeu outro, como um número, booleano ou null.

- https://nodejs.org/api/errors.html#errors_errors

# GitHub
- https://www.youtube.com/watch?v=nec3n02idMw
- https://www.youtube.com/watch?v=BAmvmaKQklQ&t=9s

# Certificado
- https://cursos.alura.com.br/certificate/8b409a28-6bdf-4dca-9293-475d7b1c123a