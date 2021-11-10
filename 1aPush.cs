Using system;
Using system.collections.generic;
using system.linq;
using system.text;
using system.IO;

namespace ListaExerc2
{
class Program
{
static void Main(string[] args)
{
//static void Main(string[] args)
//Variáveis
int menu_geral = 0;
int dec_operacao = 0;
while (menu_geral != 9)
{
//Apresentacao - Calculadora
Console.WriteLine(":: Olá, Seja Bem-Vindo à Calculadora ::
\nEscolha uma Operação Matemática.\n");
Console.WriteLine("1 - Soma\n2 - Subtracao\n3 - Multiplicacao\n4 -
Divisao\n5 - Potenciacao\n6 - Radiciacao\n7 - Percentual\n8 -
Menu\n9 - Sair");
dec_operacao = int.Parse(Console.ReadLine());
Console.Clear();
switch (dec_operacao)
{
case 1:
Soma();
break;
case 2:
Subt();
break;
}
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
::::::::::::::::::::
// SOMA -- SOMA -- SOMA -- SOMA -- SOMA -- SOMA -- SOMA -- SOMA
-- SOMA
static void Soma()
{
//variáveis locais
char dec_somar = 's';
double n1 = 0, n2 = 0, mem_soma = 0, result_soma = 0;

while (dec_somar == 's' || dec_somar == 'S')
{
Console.WriteLine("Você Escolheu SOMA;\n\nDigite dois
números separados por ENTER.");
Console.WriteLine("N1");
n1 = double.Parse(Console.ReadLine());
Console.WriteLine("N1");
n2 = double.Parse(Console.ReadLine());
result_soma = n1 + n2;
mem_soma = result_soma + mem_soma;
Console.WriteLine($"O Resultado do Cálculo é {result_soma}
\n");
Console.WriteLine($"O Resultado do Cálculo foi também
guardado na memória\nO Valor Atual é {mem_soma}");
Console.WriteLine("Deseja Repetir Outra Soma..??!? (S)(N)
");
dec_somar = char.Parse(Console.ReadLine());
Console.Clear();
} // SOMA -- SOMA -- SOMA -- SOMA -- SOMA -- SOMA -- SOMA --
SOMA -- SOMA
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
::::::::::::::::::::::
}
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
::::::::::::::::::::::::
// SUBTRACAO -- SUBTRACAO -- SUBTRACAO -- SUBTRACAO --
SUBTRACAO -- SUBTRACAO --
static void Subt()
{
//variáveis locais
char dec_subt = 's';
double s1 = 0, s2 = 0, mem_subt = 0, result_subt = 0;
while (dec_subt == 's' || dec_subt == 'S')
{
Console.WriteLine("Você Escolheu SUBTRACAO;\n\nDigite
dois números separados por ENTER.");
Console.WriteLine("N1");
s1 = double.Parse(Console.ReadLine());
Console.WriteLine("N1");
s2 = double.Parse(Console.ReadLine());
result_subt = s1 - s2;
mem_subt = result_subt - mem_subt;
Console.WriteLine($"O Resultado do Cálculo é
{result_subt} \n");
Console.WriteLine($"O Resultado do Cálculo foi também
guardado na memória\nO Valor Atual é {mem_subt}");
Console.WriteLine("Deseja Repetir Outra
Subtracao..??!? (S)(N) ");
dec_subt = char.Parse(Console.ReadLine());
Console.Clear();
} // SUBTRACAO -- SUBTRACAO -- SUBTRACAO -- SUBTRACAO --
SUBTRACAO -- SUBTRACAO --
//::::::::::::::::::::::::::::::::::::::::::::::::::::::
::::::::::::::::::::::::::
}
}
}
}
}