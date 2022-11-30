# Shell概述

shell是一个[命令行](https://so.csdn.net/so/search?q=%E5%91%BD%E4%BB%A4%E8%A1%8C&spm=1001.2101.3001.7020)解释器，它接收应用程序/用户命令，然后调用操作系统内核

# 脚本入门

## 脚本格式

脚本以#!/bin/bash开头（指定解析器）

## helloworld

```powershell
# 创建脚本
[linux@localhost datas]$ cat helloworld.sh 
#!/bin/bash
echo "hello huangxb"

# 执行脚本方式1
[linux@localhost datas]$ bash helloworld.sh 
hello huangxb

# 执行脚本方式2
[linux@localhost datas]$ ./helloworld.sh
-bash: ./helloworld.sh: 权限不够
123456789101112
```

*方式1，本质是bash解析器帮你执行脚本，所以脚本本身不需要执行权限；方式2，本质是脚本自己需要执行，所以需要执行权限*

## 多命令处理

-  在linux家目录下创建一个bangzhang.txt并在文件中写入"I IOVE YOU"字符

```shell
#!/bin/bash
cd /home/linux/
touch banzhang.txt
echo "I LOVE YOU" >> banzhang.txt
1234
```

# Shell中的变量

## 常用系统变量

$HOME $PWD $SHELL $USER

```powershell
[linux@localhost datas]$ echo $HOME
/home/linux
[linux@localhost datas]$ echo $PWD
/home/linux/datas
[linux@localhost datas]$ echo $SHELL
/bin/bash
[linux@localhost datas]$ echo $USER
linux
12345678
```

## 自定义变量

### 基本语法

1. 定义变量：变量=值 *等号两边不能留有空格*
2. 撤销变量：unset 变量
3. 输出变量：echo $变量
4. 声明静态变量： readonly 变量，注意：不能unset

```powershell
[linux@localhost datas]$ A=1
[linux@localhost datas]$ echo $A
1
[linux@localhost datas]$ unset A
1234
```

### 变量定义规则

1. 变量名称可以由字母，数字和下划线组成，不能以数字开头，环境变量名建议大写
2. 等号两侧不能有空格
3. 在bash中，变量默认类型都是字符串类型，无法直接进行数值运算
4. 变量的值如果有空格，需要使用双引号或单引号括起来

```powershell
[linux@localhost datas]$ D="A B C"
[linux@localhost datas]$ echo $D
A B C
123
```

1. 可把变量提升为全局变量，可供其他shell程序使用
   export 变量

## 特殊变量

### $n

$n （描述：n为数字，$0代表脚本名称，10以内参数用$1-9 表 示 ， 10 以 上 的 需 要 用 大 括 号 包 含 ， 9表示，10以上的需要用大括号包含，9表示，10以上的需要用大括号包含，{10}）

```shell
#!/bin/bash
echo "$0 $1 $2 $3"
12
```

### $#

$# (功能描述：获取所有输入参数个数，常用于循环)

```powershell
#!/bin/bash
echo "$0 $1 $2 $3"
echo $#
123
```

### $* 和$@

- $* （描述：代表命令行中所有的参数，把所有参数看成一个整体）
- $@ （描述：也代表命令行中所有的参数，不过把每个参数区分对待）

```powershell
[linux@localhost datas]$ bash parameter.sh test1 test2
parameter.sh test1 test2 
2
test1 test2
test1 test2
12345
```

### $?

$? （描述：最后一次执行命令的状态，0：正确执行）

# 运算符

1. $((运算式)) 或 $[运算式]
2. expr +,-,\*,/,% 加减乘除取余
   *expr运算符间要有空格*

```powershell
# 计算2+3
[linux@localhost datas]$ expr 2 + 3
5

# 计算（2+3）*4
## 方式1
[linux@localhost datas]$ expr `expr 2 + 3` \* 4
20

## 方式2
[linux@localhost datas]$ s=$[(2+3)*4]
[linux@localhost datas]$ echo $s
20
12345678910111213
```

# 条件判断

## 基本语法

[condition] (注意 condition前后要有空格)

## 常用判断条件

### 两个整数之间比较

| 符号 | 描述                     |
| ---- | ------------------------ |
| -lt  | （less than）小于        |
| -le  | (less equal) 小于等于    |
| -eq  | (equal)等于              |
| -gt  | (greater than) 大于      |
| -ge  | (greater equal) 大于等于 |
| -ne  | (not equal) 不等于       |

### 文件权限判断

- -r 有读的权限
- -w 有写的权限
- -x 有执行的权限

### 文件类型判断

- -f 文件存在并且是一个常规文件
- -e 文件存在
- -d 文件存在病是一个目录

```powershell
# 判断23是否大于2
[linux@localhost datas]$ [ 23 -gt 2 ]
[linux@localhost datas]$ echo $?
0

# 判断helloworld.sh是否有写入权限
[linux@localhost datas]$ [ -w hellowrld.sh ]
[linux@localhost datas]$ echo $?
1

# 判断目录中文件是否存在
[linux@localhost datas]$ [ -e /home/linux/datas ]
[linux@localhost datas]$ echo $?
0
1234567891011121314
```

### 多条件判断

&& ||

# 流程控制

## IF判断

```powershell
[linux@localhost datas]$ cat if.sh
#!/bin/bash
if [ $1 -eq 1 ]
then
	echo "班长真帅"
elif [ $1 -eq 2 ]
then
	echo "班长真丑"
fi
[linux@localhost datas]$ bash if.sh 2
班长真丑
1234567891011
```

## case 语句

```powershell
[linux@localhost datas]$ cat case.sh
#!/bin/bash
case $1 in
1)
	echo "班长"
;;
2)
	echo "学习委员"
;;
3)
	echo "体育委员"
;;
esac
[linux@localhost datas]$ bash case.sh 2
学习委员
123456789101112131415
```

## for循环

### 语法1

```powershell
[linux@localhost datas]$ cat for.sh
#!/bin/bash
s=0
for((i=1;i<=100;i++))
do
	s=$[$s+$i]	
done
echo $s
[linux@localhost datas]$ bash for.sh
5050
12345678910
```

### 语法2

```powershell
[linux@localhost datas]$ cat for2.sh
#!/bin/bash
for i in $*
do
	echo $i
done
[linux@localhost datas]$ bash for2.sh 1 2
1
2
123456789
```

## WHILE循环

```powershell
[linux@localhost datas]$ cat while.sh
#!/bin/bash
s=0
i=1
while [ $i -le 100 ]
do
	s=$[$s + $i]
	i=$[$i + 1]
done
echo $s

[linux@localhost datas]$ bash while.sh
5050
12345678910111213
```

# read读取控制台输入

```
read(选项)(参数)
1
```

- -p 指定读取值时的提示符
- -t 指定读取值时等待的时间（秒）

```powershell
# 提示7秒内，读取控制台输入的名称
[linux@localhost datas]$ cat read.sh
#!/bin/bash
read -t 7 -p "在7s内请输入你的名字" NAME
echo $NAME
[linux@localhost datas]$ bash read.sh
在7s
1234567
```

# 函数

## 系统函数

### basename

```
basename [string / pathname] [suffix] （描述：basename命令会删掉所有的前缀包括最后一个‘/’字符，然后将字符串显示出来）
1
# 方式1
[linux@localhost datas]$ basename /home/linux/banzhang.txt
banzhang.txt

# 方式2
[linux@localhost datas]$ basename /home/linux/banzhang.txt .txt
banzhang
1234567
```

### dirname

```
dirname 文件绝对路径 （描述：从给定的包含绝对路径的文件名中去除文件名（非目录的部分），然后返回剩下的路径（目录的部分））
1
[linux@localhost datas]$ dirname /home/linux/banzhang.txt
/home/linux
12
```

## 自定义函数

```cpp
# 格式
[ function ] funname[()]
{
	Action:
	[return int;]
}
funname
1234567
# DESC 计算输入两个参数的值
[linux@localhost datas]$ cat sum.sh
#!/bin/bash
function sum(){
	s=0;
	s=$[$1 + $2]
	echo $s
}
read -p "input your param1:" P1
read -p "input your param2:" P2
sum $P1 $P2
[linux@localhost datas]$ bash sum.sh
input your param1:1
input your param2:2
3
123456789101112131415
```

# shell工具

## cut

cut命令从文件的每一行剪切字节，字符和字段并将这些字节，字符和字段输出
cut [选项参数] filename

- -f 列号，提取第几列
- -d 分隔符，按照指定分隔符分隔列

```powershell
# DESC 切割cut.txt第一列
[linux@localhost datas]$ cat cut.txt
dong shen
guan zhen
wo wo
lai lai
le le
[linux@localhost datas]$ cut -d " " -f 1 cut.txt
dong
guan
wo
lai
le

# DESC 获取第三行第一个单词
[linux@localhost datas]$ cat cut.txt | grep guan | cut -d " " -f 1
guan

1234567891011121314151617
```

## sed

sed是一种流编辑器，它一次处理一行内容，处理时，把当前处理的行存储在临时缓冲区中，成为“模式空间”,接着sed命令处理缓冲区中的内容，处理完成后，把缓冲区的内容送往屏幕，接着处理下一行，这样不断重复，知道文件末尾，文件内容并没有改变，除非你使用重定向存储输出
sed [选项参数] ‘command’ filename

- -e 直接在指令列模式上进行sed的动作编辑

命令功能描述

- a 新增
- d 删除
- s 查找并替换

```powershell
# DESC 在第二行后增加mei nv字符
[linux@localhost datas]$ sed -e "2a mei nv" sed.txt
dong zhen
guan zhen
mei nv
wo wo
lai lai
1234567
```

## awk

awk 一个强大文件分析工具，把文件逐行的读入，以空格为默认分隔符将每行切片，切开的部分再进行分析处理

```
awk [选项参数] 'pattern1 {action1} pattern2{action2}..' filename
1
```

- -F 指定输入文件分隔符
- -v 赋值一个用户定义变量

## sort

sort 命令是在Linux里非常有用，它将文件进行排序，并将排序结果标准输出

```
sourt [选项] (参数)
1
```

| 参数 | 描述                     |
| ---- | ------------------------ |
| -n   | 依照数值大小排序         |
| -t   | 以相反的顺序排序         |
| -t   | 设置排序时使用的分隔字符 |
| -k   | 指定需要排序的列         |